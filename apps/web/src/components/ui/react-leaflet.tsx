// import type { LatLngExpression } from 'leaflet';
import { MDPointMap } from '@packages/contracts';
import Leaflet from 'leaflet';
import marderIcon from 'leaflet/dist/images/marker-icon.png';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

const icon = Leaflet.icon({
  iconUrl: marderIcon.src,
});

export default function ReactLeaflet({
  position,
  name,
}: {
  position: MDPointMap;
  name?: string;
}) {
  const pos = [...position.coordinates].reverse() as [number, number];
  return (
    <MapContainer
      center={pos}
      zoom={15}
      scrollWheelZoom={false}
      className='h-full'
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={pos} icon={icon}>
        {name && <Popup>{name}</Popup>}
      </Marker>
    </MapContainer>
  );
}

// function Draw({ positions }: { positions: MDWithPointCoordinated }) {
//   const limeOptions = { color: 'lime' };
//   const purpleOptions = { color: 'purple' };
//   return (
//     <>
//       {positions.type === 'Point' && (
//         <Marker position={positions.coordinates}></Marker>
//       )}

//       {positions.type === 'LineString' && (
//         <Polyline pathOptions={limeOptions} positions={positions.coordinates} />
//       )}

//       {positions.type === 'Polygon' && (
//         <Polygon
//           pathOptions={purpleOptions}
//           positions={positions.coordinates}
//         />
//       )}
//     </>
//   );
// }
