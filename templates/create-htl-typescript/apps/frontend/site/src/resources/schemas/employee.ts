import { object, string, number, YupObjectSchemaType } from 'yup';

type CreateSchemaType = YupObjectSchemaType<EmployeeCreateData>;

export const employeeCreateSchema = object<CreateSchemaType>({
  email: string().email('Informe um email válido').required('Informe um email'),
  full_name: string().required('Insira o nome completo'),
  password: string().required('Insira uma senha'),
  phone: string().required('Insira o telefone'),
  permission: number().equals([0, 1, 2]) as any,
});
