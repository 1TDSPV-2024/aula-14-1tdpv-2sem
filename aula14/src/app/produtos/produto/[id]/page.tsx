"use client"
import { useEffect, useState } from "react"
import { TipoProduto } from "@/types"

export default function Produto({params}:{params:{id:number}}) {

  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    qtd: 0
  });

  useEffect(() => {
    const consumoApi = async () => {
      const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`);
      const dados = await response.json();
      setProduto(dados);
    }

    consumoApi();
  }, [params.id])
  
    

  return (
    <div>
        <h2>Produto</h2>
        <div>
          <p>ID : {produto.id}</p>
          <p>Nome : {produto.nome}</p>
          <p>Preço : {produto.preco}</p>
          <p>Quantidade : {produto.qtd}</p>
        </div>
    </div>
  )
}
