import React from 'react'
export default function table2() {
  return (
    <>
    <div className='tamanho2'>
      <table className='tabela2'>
        <tr>
          <th colSpan={8}>Pousos</th>
          <th colSpan={4}>Aproximações</th>
          <th colSpan={2}>Combustível</th>

        </tr>
        <tr>
          <td rowSpan={2}>PIL</td>
          <td colSpan={2}>Terra</td>
          <td rowSpan={2}>ARC</td>
          <td colSpan={4}>Navio/Platafroma</td>
          <th rowSpan={2}>PIL</th>
          <th rowSpan={2}>Local</th>
          <th rowSpan={2}>Procedimento</th>
          <th rowSpan={2}>QTD</th>
          <th>Inicial (1)</th>
          <th><input /></th>
        </tr>
        <tr>
          <td>D</td>
          <td>N</td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th>ABAST. HOT (2)</th>
          <th><input /></th>

        </tr>
        <tr>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th>Corte (3)</th>
          <th><input /></th>

        </tr>
        <tr>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th>Consumo (1+2-3)</th>
          <th><input /></th>

        </tr>
        <tr>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th rowSpan={3} colSpan={2}>Piloto (POSTO/NOME/Rúbrica)</th>


        </tr>
        <tr>
          <td><input /></td>
          <td><input /></td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          

        </tr>
        <tr>
          <td><input /></td>
          <td><input /></td>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
          <th><input /></th>
        </tr>
      </table>
      </div>
    </>
  )
}
