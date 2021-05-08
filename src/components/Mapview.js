import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

class Mapview extends React.Component {

	render() {

		return(
			<div id="Mapveiw">
				<MapContainer id="Mapveiw_Map" center={[39.972155, -105.164223]} zoom={13} scrollWheelZoom={true}>
					<TileLayer
						attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</MapContainer>
			</div>
		)
	}
}

export default Mapview;