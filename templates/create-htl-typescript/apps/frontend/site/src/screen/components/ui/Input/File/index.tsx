import { useForceUpdate, useManageableRef } from '@hitechline/reactools';
import { useField } from '@unform/core';
import {
  useEffect,
  useCallback,
  ChangeEvent,
  InputHTMLAttributes,
} from 'react';

import { Container } from './styles';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  name: string;
}

export function FileInput({ name, onChange, ...rest }: Props): JSX.Element {
  const forceUpdate = useForceUpdate();
  const currentFiles = useManageableRef<File[]>([]);
  const { fieldName, defaultValue, registerField } = useField(name);

  const getFiles = useCallback((files: any): File[] => {
    const parsedFiles: File[] = [];

    if (files instanceof File) {
      parsedFiles.push(files);
    } else if (Array.isArray(files)) {
      parsedFiles.push(...files.filter(file => file instanceof File));
    } else if (files instanceof FileList) {
      parsedFiles.push(...Array.from(files));
    }

    return parsedFiles;
  }, []);

  const setFiles = useCallback(
    (files: any) => {
      currentFiles.current = getFiles(files);

      forceUpdate();
    },
    [currentFiles, getFiles, forceUpdate],
  );

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;

      if (files) {
        setFiles(files);
      }

      if (typeof onChange === 'function') {
        onChange(event);
      }
    },
    [onChange, setFiles],
  );

  useEffect(() => {
    setFiles(defaultValue);
  }, [currentFiles, defaultValue, setFiles]);

  useEffect(() => {
    registerField({
      path: 'current',
      name: fieldName,
      ref: currentFiles,
    });
  }, [fieldName, currentFiles, registerField]);

  return (
    <Container>
      <input {...rest} type="file" onChange={handleChange} />

      <section>
        {currentFiles.current.map(file => (
          <img
            key={file.name}
            alt={file.name}
            src={URL.createObjectURL(file)}
          />
        ))}
      </section>
    </Container>
  );
}
