import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './App.scss';
import { OláMundo } from './OláMundo/OláMundo';

ReactDOM.render(
    <OláMundo compiler='TypeScript' framework='React' idade={20} />,
    document.getElementById('app'),
);
