import React from 'react'



export default function Lista() {

  return (
    <>
      <tr>
        <td><input/></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
          <form>
            AL<input className='caixa' name='drone' type="radio" value="al" />
            IP<input className='caixa' name='drone' type="radio" value="ip" />
            IV<input className='caixa' name='drone' type="radio" value="iv" />
          </form>
        </td>
        <td>
          <form>
            IN<input className='caixa' name='drone' type="radio" value="in" />
            2P<input className='caixa' name='drone' type="radio" value="2p" />
            IV<input className='caixa' name='drone' type="radio" value="iv" />
          </form>
        </td>
        <td> <input type="checkbox" /></td>
        <td> <input type="checkbox" /></td>
        <td> <input type="checkbox" /></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </>
  )
};