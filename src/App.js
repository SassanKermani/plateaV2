import './App.css';
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Menubar = require(`./components/Menubar`).default;
const Mapview = require(`./components/Mapview`).default;
const Postview = require(`./components/Postview`).default;

function App() {
	const [pageselection, setpageselection] = useState(`map`)
	const [imagetopost, setimagetopost] = useState(undefined)

	function chnagePage(str){
		setpageselection(str);
	}

	function takePicture(str){
		setimagetopost(str);
	}

	function postPicture(){
		setimagetopost(undefined);
		setpageselection(`map`);
	}

	console.log(`pageReload`);

	switch(true){
		case(imagetopost != undefined && pageselection != `post`):
			console.log(`hit imagetopost != undefined`);
			setpageselection(`post`);

		case(pageselection == `map`):
			return(
				<div>
					<Mapview/>
					<Menubar postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;

		case(pageselection == `post`):
			return(
				<div>
					<Postview post={postPicture} src={imagetopost} />
					<Menubar postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;

		case(pageselection == `user`):
			return(
				<div>
					<Menubar postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;

		default:
			return(
				<div>
					<p>you broke it, what did you do you monster</p>
					<Menubar postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;
	}
}

export default App;
