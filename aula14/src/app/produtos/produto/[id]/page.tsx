"use client"

import { TipoProduto } from "@/types"
import { useEffect, useState } from "react"

export default function Produto({params}:{params:{id:number}}) {

  const [produto, setProduto] = useState<TipoProduto> ({
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
  }, [])

  return (
    <div>
        <h2>Produto</h2>
        <p>ID : {params.id}</p>
        <div>
          <p>Nome: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
          <p>Quantidade: {produto.qtd}</p>
        </div>
    </div>
  )
}
