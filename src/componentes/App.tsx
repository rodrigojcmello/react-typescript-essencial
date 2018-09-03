import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { OláMundo } from './OláMundo/OláMundo';

import './App.scss';

ReactDOM.render(
    <OláMundo compiler='TypeScript' framework='React' idade={20} />,
    document.getElementById('app'),
);
