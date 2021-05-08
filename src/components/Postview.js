import React from 'react';
import { state } from 'react'

class Postview extends React.Component {
	constructor(props) {
		super(props);
		this.state = { latlng: [null, null] };
	}

	render() {

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				console.log(position);
				this.setState({latlng: [position.coords.latitude, position.coords.longitude]})
			});
		}

		function postImg(post){
			// console.log(`lat : ${lat}, lng : ${lng}`)
			post();
		}

		return(
			<div id="Postview">

				<img id="photoToPost" src={this.props.src} />
				<p>lat:{this.state.latlng[0]}, lng:{this.state.latlng[1]}</p>
				<button onClick={()=>{postImg(this.props.post)}}>post</button>

			</div>
		)
	}
}

export default Postview;
