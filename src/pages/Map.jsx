import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function Map() {
    return (
        <MapContainer
            center={[43.835079, -79.250404]}
            zoom={15}
            style={{ width: '100%', height: '500px' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[43.835079, -79.250404]}>
                <Popup>
                    45 Miles Road, Scarborough, M1G2L3
                </Popup>
            </Marker>
        </MapContainer>
    );
}

export default Map;