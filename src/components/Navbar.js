import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import 'tachyons';

const Navbar=()=>{
	return(
		<nav className="dt w-100 border-box pa0 bg-black ph5-ns">
		  <p className="dtc v-mid baskerville link w-25 light-green tl " >
		    <h1>Harsh Joshi </h1>
		  </p>
		  <div className="dtc b v-mid tracked w-75 tr">
		    <Link to="/" className="link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns" >ABOUT</Link>
		    <Link to="/academics" className="link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns" >ACADEMICS</Link>
		    <NavLink to="/projects" className="link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns" >PROJECTS</NavLink>
		    <Link to="/cv" className="link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib mr3 mr4-ns" >CV</Link>
		    <Link to="/contact" className="link ba white pa2 ph3 br3 b--light-green bw1  dim  grow f6 f5-ns dib" >CONTACT</Link>
		  </div>
		</nav>
		)
}

export default Navbar;