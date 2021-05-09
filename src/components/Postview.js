import React from 'react';
import { state } from 'react'

class Postview extends React.Component {

	render() {

		function postImg(post){
			// console.log(`lat : ${lat}, lng : ${lng}`)
			post();
		}

		console.log(this.props.crds)

		return(
			<div id="Postview">
				<img id="img" src={this.props.src} />
				<div id="img_Text">
					<p>lat:{this.props.crd.latitude}, lng:{this.props.crd.longitude}</p>
					<p>Title: <input type="text"></input></p>
					<p>post:</p>
					<textarea id="img_Text_textarea"/>
				</div>
				<div id="img_Post_Cancel">
					<button>post</button>
					<button onClick={()=>{postImg(this.props.post)}}>cancel</button>
				</div>

			</div>
		)
	}
}

export default Postview;
