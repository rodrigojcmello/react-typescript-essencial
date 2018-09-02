import * as React from 'react';
import * as s from './Perfil.scss';

export default class Perfil extends React.PureComponent<{}, {}> {
    constructor(props: {}) {
        super(props);
        this.state = {
        };
    }
    public render() {
        return (
            <>
                <div className={s.perfil}>
                    PERFIL
                </div>
            </>
        );
    }
}
