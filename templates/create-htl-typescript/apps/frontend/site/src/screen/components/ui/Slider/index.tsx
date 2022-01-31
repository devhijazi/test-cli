import { useState, useEffect, useCallback } from 'react';

import { Container, Image } from './styles';

interface Props {
  images: string[];
}

export function Slider({ images }: Props): JSX.Element {
  const [selected, setSelected] = useState(0);

  const handleChange = useCallback(() => {
    setSelected(oldSelected => {
      return oldSelected === images.length - 1 ? 0 : oldSelected + 1;
    });
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      handleChange();
    }, 7000);

    return () => {
      clearInterval(interval);
    };
  }, [handleChange]);

  return (
    <Container>
      {images.map((image, i) => (
        <Image
          key={image}
          src={image}
          selected={selected === i}
          alt={`Slider ${i}`}
        />
      ))}
    </Container>
  );
}
