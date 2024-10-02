"use client";
import Link from "next/link"
import { useEffect, useState } from "react"

export default function Produtos() {

    const [contador, setContador] = useState(1);

    useEffect(() => {
        const consumoApi = async ()=>{
            s
        }
        consumoApi();
    }, [])
    
    
    // useEffect(() => {

    //     console.log("first");
    //     return () => {
    //         console.log(contador);

    //     }
    // }, [contador]);


    return (
        <div>
            <h2>Produtos</h2>
            <button onClick={() => setContador(prevContador => prevContador + contador)}>contador - {contador}</button>
            {/* <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Quantidade</th>
                        <th>Editar</th>
                    </tr>
                </thead>

                <tbody>
                    {produtos.map((p) => (
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.nome}</td>
                            <td>{p.preco}</td>
                            <td>{p.qtd}</td>
                            <td><Link href={`/produtos/produto/${p.id}`}>Editar</Link></td>
                        </tr>
                    ))}
                </tbody>

                <tfoot>
                    <tr>
                        <th>

                        </th>
                    </tr>
                </tfoot>
            </table> */}
        </div>
    )
}