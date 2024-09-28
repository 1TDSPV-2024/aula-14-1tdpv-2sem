"use client";
import { TipoProduto } from "@/types";
import { useEffect, useState } from "react";

export default function Produto({ params }: { params: { id: number } }) {
  const [produtos, setProdutos] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    qtd: 0,
  });

  useEffect(() => {
    const consumoApi = async () => {
      const response = await fetch(
        `http://localhost:3000/api/base-produtos/${params.id}`
      );
      const dados = await response.json();
      setProdutos(dados);
    };

    consumoApi();
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <h3>{produtos?.id}</h3>
      <p>{produtos?.nome}</p>
      <p>{produtos?.preco}</p>
      <p>{produtos?.qtd}</p>
    </div>
  );
}
