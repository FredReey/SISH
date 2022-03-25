import React, { useState } from 'react'
import Lista from './Lista';
import Table from './Table';

export default function Botao() {
  const [contador, setContador] = useState([])
  let linhas = [];
  let tempLinha = <Lista/>
  let pika = console.log('pika das galaxias')

  //Função adiciona




  /* for (let cont = 0; cont < numLinha; cont++) {
    linhas = <Lista />
  } */


  return (
    <>
    {tempLinha}
      <button onClick={() => setContador(contador + tempLinha)}>
        Adiciona uma nova linha
      </button>
      <button onClick={() => setContador(contador + 1)}>
        Remove uma linha
      </button>
      
      {console.log(contador)}
      {contador.map((item) => item)}

    </>
  )
}
