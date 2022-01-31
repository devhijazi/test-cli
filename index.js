#!/usr/bin/env node

import inquirer from 'inquirer';
import * as fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectory.js';
const CURRENT_DIR = process.cwd();
const __dirname = dirname(fileURLToPath(import.meta.url));

const CHOICES = fs.readdirSync(`${__dirname}/templates`);

const QUESTIONS = [
  {
    name: 'project-options',
    type: 'list',
    message: 'Qual linguagem você deseja criar?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Nome do projeto:',
    validate: function (input) {
      if (/^([A-Za-z\-\\_\d])+$/.test(input)) return true;
      else return 'O nome do projeto deve conter apenas letras e numeros.';
    },
  },
];

inquirer.prompt(QUESTIONS).then(answers => {
  const projectOption = answers['project-options'];
  const projectName = answers['project-name'];
  const templatePath = `${__dirname}/templates/${projectOption}`;

  fs.mkdirSync(`${CURRENT_DIR}/${projectName}`);

  createDirectoryContents(templatePath, projectName);
});
