import * as React from 'react';
import { ILista } from '../OláMundo';

interface IProps {
    lista: ILista[];
}

const MiniLista = ({ lista }: IProps) => (
    <>
        {lista.map((item: ILista, índice: number) => (
            <div key={índice}>
                {item.nome} {item.idade}
            </div>
        ))}
    </>
);

export { MiniLista };
