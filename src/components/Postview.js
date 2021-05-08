import React from 'react';

class Postview extends React.Component {

	render() {

		let lat = null;
		let lng = null;

		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position)=>{
				lat = position.coords.latitude;
				lng = position.coords.longitude;
			});
		}

		function postImg(){
			console.log(`lat : ${lat}, lng : ${lng}`)
		}

		return(
			<div id="Postview">

				<img id="photoToPost" src={this.props.src} />
				<button onClick={postImg}>post</button>			

			</div>
		)
	}
}

export default Postview;
