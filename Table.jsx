import React from 'react'
import Lista from './Lista'
export default function Table(lista) {
 

  const numeroListas = [1, 1, 1, 1, 1, 1]
  
  return (
    <>
      <div className='tamanho'>
        <table className='tabela'>
          <tr>
            <th colSpan={5}>Informações de Operações</th>
            <th colSpan={5}>Data <input id='data' type="date"></input></th>
            <th colSpan={5}>FRV <input></input></th>

          </tr>
          <tr>
            <td colSpan={2}>Tipo de Vôo</td>
            <td><input /></td>
            <td colSpan={3}>Tempo de Vôo Total</td>
            <td colSpan={4}><input/></td>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th colSpan={2}>4</th>
          </tr>
          <tr>
            <td>NIP</td>
            <td>TRG</td>
            <td>P/G</td>
            <th>OM</th>
            <th>Total</th>
            <th>AL/IP/IV</th>
            <th>IN/2P/IV</th>
            <th>PT</th>
            <th>XY</th>
            <th>PS</th>
            <th>VD</th>
            <th>VN</th>
            <th>IFR VMC</th>
            <th>IFR IMC</th>
            <th>IFR NOT</th>
          </tr>
          {numeroListas.map((lista) => <Lista/>)}
          
        </table>
        
      </div>
      
    </>
    
  );
}

