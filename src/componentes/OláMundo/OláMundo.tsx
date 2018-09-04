import * as React from 'react';
import { Link } from 'react-router-dom';

import { Lista } from '../gênericos/Lista';
import { Acesso } from '../telas/Acesso/Acesso';
import { Perfil } from '../telas/Perfil/Perfil';

import * as s from './OláMundo.scss';

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

class OláMundo extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            lista: [
                { nome: 'RODRIGO MELLO', idade: 27 },
                { nome: 'FULANO', idade: 33 },
            ],
            nome: 'rodrigo',
            número: 123,
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
                <Lista lista={this.state.lista} />
                <Link to='/acesso'>Acesso</Link>
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

export {
    ILista,
    OláMundo,
};
