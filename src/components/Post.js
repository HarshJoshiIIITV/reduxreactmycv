import React,{Component} from 'react';
import 'tachyons';
import {connect} from 'react-redux';
import {deletePost} from '../actions/postActions'

class Post extends Component {
	handleClick = () =>{
		this.props.deletePost(this.props.post.id);
		this.props.history.push('/');
	}
	render(){
		const post=this.props.post?(
			<div className="post f4">
				<h4 className="f2 b white">{this.props.post.title}</h4>
				<p className="yellow">{this.props.post.body}</p>
				<button className="br3 ba pa2" onClick={this.handleClick}>
					Delete Post
				</button>
			</div>
		):(
			<div className="tc f3 white">Loading post ....</div>
			)
		return(
			<div className="container">
				<h4>{post}</h4>
			</div>
			)
	}
}
const mapStateToProps=(state,ownProps)=>{
	let id=ownProps.match.params.post_id;
	return{
		post:state.posts.find((post)=>{
			return post.id==id
	})
 	}
}
const mapDispatchToProps=(dispatch)=>{
	return{
		deletePost:(id)=>{dispatch(deletePost(id))}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);