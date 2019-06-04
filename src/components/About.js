import React,{Component} from 'react';
import 'tachyons'
import { Link } from 'react-router-dom';
import logo from '../logo.jpg';
import {connect} from 'react-redux';


class About extends Component{
	render(){
	const {posts}=this.props;
	const postList=posts.length ?(
	posts.map(post=>{
		return(
			<article  className="center mw5 mw6-ns hidden ba b--green bw2 mv4" key={post.id}>
				  <img src={logo} alt="A logo" />
				  <Link to={'/'+post.id}>
				  <h1 className="f4 bg-gray white mv0 pv2 ph3">{post.title}</h1>
				  </Link>
				  <div className="pa3 bt">
				    <p className="f6 f5-ns lh-copy yellow measure mv0">
				    	{post.body}
				    </p>
				  </div>
			</article>
			)
	})
)	:
	(
		<div className="tc f3 white">Check internet connection </div>
		)
	return(
		<div className="container">
			<h4 className="tc white f2">About</h4>
			{postList}
		</div>
		)	
	}
}
const mapStateToProps=(state)=>{
	return{
		posts:state.posts
	}
}
export default connect(mapStateToProps)(About);