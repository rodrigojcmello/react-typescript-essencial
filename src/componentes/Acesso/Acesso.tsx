import * as React from 'react';
import * as s from './Acesso.scss';

export default class Acesso extends React.PureComponent<{}, {}> {
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
