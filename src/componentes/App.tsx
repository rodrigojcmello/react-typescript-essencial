import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { OláMundo } from './OláMundo/OláMundo';
import { Acesso } from './telas/Acesso/Acesso';

import './App.scss';

class App extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }
    public render() {
        return (
            <Router>
                <>
                    <Route exact={true} path='/' component={OláMundo} />
                    <Route path='/acesso' component={Acesso} />
                </>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app'),
);
