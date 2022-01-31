import 'dotenv-defaults/config';

import type { GluegunCommand } from 'gluegun';

import { connect } from '../../src/core/database/connect';
import { EmployeeRepository } from '../../src/core/database/models/Employee';

const command: GluegunCommand = {
  name: 'create-employee',
  alias: ['ce'],
  run: async toolbox => {
    const {
      prompt,
      print: { info, error, checkmark },
    } = toolbox;

    const { name, email, password } = await prompt.ask([
      {
        type: 'input',
        name: 'email',
        message: 'Insira o email',
      },
      {
        type: 'input',
        name: 'password',
        message: 'Insira a senha',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Insira o nome da conta',
        initial: 'ADMIN',
      },
    ]);

    const connection = await connect();

    try {
      await EmployeeRepository.save(
        EmployeeRepository.create({
          email,
          password,
          permission: 2,
          full_name: name,
        }),
      );

      info(`${checkmark} Funcionário criado com sucesso!`);
      info(`E-mail: ${email}`);
      info(`Senha: ${password}`);
    } catch (exception) {
      error('Ocorreu um erro na criação do funcionário.');
      console.log(exception);
    } finally {
      await connection.close();
    }
  },
};

module.exports = command;
