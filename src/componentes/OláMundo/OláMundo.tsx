import * as React from "react";
import * as s from "./OláMundo.css";

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

export class OláMundo extends React.PureComponent<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            lista: [
                { nome: "RODRIGO MELLO", idade: 27 },
                { nome: "TESTE", idade: 33 },
            ],
            nome: "Rodrigo",
            número: 10,
            // teste: "ok",
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
        console.log(s);
        return (
            <>
                <h1 className={s.azul}>
                    Olá {this.state.nome} from {this.props.compiler} and {this.props.framework}!
                </h1>
                contador: {this.state.número}
                {lista}
                <button
                    onClick={this.adicionar}
                    data-valor="10"
                >
                    adicionar
                </button>
            </>
        );
    }
}
