import './App.css';
import { useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Menubar = require(`./components/Menubar`).default;
const Mapview = require(`./components/Mapview`).default;
const Postview = require(`./components/Postview`).default;

let crd = false;
navigator.geolocation.watchPosition((pos)=>{
	console.log(pos);
	crd = pos.coords;
	if(crd == false){
		this.forceUpdate()
	}
})


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
				<div id="mainScreenContainer">
					<Mapview/>
					<Menubar crd={crd} postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;

		case(pageselection == `post`):
			return(
				<div id="postScreenContainer">
					<Postview crd={crd} post={postPicture} src={imagetopost} />
					{/*<Menubar crd={crd} postprop={takePicture} changePage={chnagePage}/>*/}
				</div>
			)
			break;

		case(pageselection == `user`):
			return(
				<div id="mainScreenContainer">
					<div>test</div>
					<Menubar crd={crd} postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;

		default:
			return(
				<div id="mainScreenContainer">
					<p>you broke it, what did you do you monster</p>
					<Menubar crd={crd} postprop={takePicture} changePage={chnagePage}/>
				</div>
			)
			break;
	}
}

export default App;
