import React, { Fragment } from 'react';
import Card from '../card/card'
import './thumbnails.css';

const thumbnails =()=>(
    <div>
<table>
  <tr>
    <td rowspan = '2' colspan ='2'><Card/></td>
    <td><Card/></td>
    <td><Card/></td>
  </tr>
  <tr>
    <td><Card/></td>
    <td><Card/></td>
  </tr>
</table>

    </div>


)
export default thumbnails;