import * as React from 'react';

import * as s from './Acesso.scss';

class Acesso extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }
    public render() {
        return (
            <>
                <div className={s.acesso}>
                    acesso
                </div>
            </>
        );
    }
}

export { Acesso };
