import React from 'react';
import { unstable_batchUpdates } from 'react-dom';

class Menubar extends React.Component {

	render() {

		function formatImg(postprop) {
			const file = document.querySelector('input[type=file]').files[0];
			const reader = new FileReader();

			reader.addEventListener("load", function () {
				// console.log(reader.result);
				postprop(reader.result);

			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		}

		return(
			<div id="menueBar">
				<div onClick={()=>{this.props.changePage(`map`)}} className="menueBar_iteam">MAP</div>
				{/*<div onClick={()=>{this.props.changePage(`post`)}} className="menueBar_iteam">POST</div>*/}

				{<div className="menueBar_iteam"><input type="file" accept="image/*" capture="camera" onChange={()=>{ formatImg(this.props.postprop) }} /></div>}
				{/*<div className="menueBar_iteam"><input type="file" accept="image/*" capture="camera" onChange={()=>{ if(this.props.crd != false){formatImg(this.props.postprop)} }} /></div>*/}

				<div onClick={()=>{this.props.changePage(`user`)}} className="menueBar_iteam">USER</div>
			</div>
		)
	}
}

export default Menubar;