import * as React from 'react';
import * as s from './OláMundo.scss';

import Acesso from '../telas/Acesso/Acesso';
import Perfil from '../telas/Perfil/Perfil';

interface IProps {
    compiler: string;
    framework: string;
    idade: number;
}

interface ILista {
    nome: string;
    idade: number;
}

interface IState {
    número: number;
    nome: string;
    lista: ILista[];
}

export default class OláMundo extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            lista: [
                { nome: 'RODRIGO MELLO', idade: 27 },
                { nome: 'TESTE', idade: 33 },
            ],
            nome: 'rodrigo',
            número: 10,
        };
    }
    public adicionar = (evento: React.SyntheticEvent<HTMLButtonElement>) => {
        const valor: number = Number(evento.currentTarget.dataset.valor);
        this.setState((prevState) => ({
            número: prevState.número + valor,
        }));
    }
    public render() {
        const lista: object = this.state.lista.map((item: ILista, índice: number) => {
            return (
                <div key={índice}>
                    {item.nome} {item.idade}
                </div>
            );
        });
        return (
            <>
                <h1 className={s.azul}>
                    Olá {this.state.nome} from {this.props.compiler} and {this.props.framework}!
                </h1>
                contador: {this.state.número}
                {lista}
                <Acesso />
                <Perfil />
                <button
                    onClick={this.adicionar}
                    data-valor='10'
                >
                    adicionar2
                </button>
            </>
        );
    }
}
