import React, { Fragment } from 'react';
import banner from '../../assets/DSCN0291.jpg'
import Card from '../card/card';
import Thumbnails from '../thumbnails/thumbnails'
import './home.css';
import Post from '../post/post';
const home =()=>(
<Fragment>
<header className ="Home">
<img src={banner} class="img-fluid" alt="flowers"/>

    <h1 className="display-1">Super Tree Botanical <br/> Garden</h1>
</header>
<br/>

<div>
<Thumbnails/>
</div>
<br/>
<div>
<Card/>
<Card/>
<Card/>
</div>
<div>
  <Post/>
</div>
</Fragment>
)

export default home;