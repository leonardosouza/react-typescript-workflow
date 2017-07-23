import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Home } from './components/Home';

ReactDOM.render(<Home name='Leonardo' age={34} />, document.querySelector('#app'));
