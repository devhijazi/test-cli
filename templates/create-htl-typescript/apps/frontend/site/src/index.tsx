import 'moment/locale/pt-br';
import 'moment-duration-format';

import { locale } from 'moment';
import { render } from 'react-dom';

import { App } from './App';

locale('pt-BR');

render(<App />, document.getElementById('root'));
