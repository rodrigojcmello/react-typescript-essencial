import * as React from 'react';
import { ILista } from '../OláMundo/OláMundo';

interface IProps {
    lista: ILista[];
}

class Lista extends React.PureComponent<IProps, {}> {
    constructor(props: IProps) {
        super(props);
        this.state = {
        };
    }
    public render() {
        const lista: object = this.props.lista.map((item: ILista, índice: number) => {
            return (
                <div key={índice}>
                    {item.nome} {item.idade}
                </div>
            );
        });
        return (
            <>
                {lista}
            </>
        );
    }
}

export { Lista };
