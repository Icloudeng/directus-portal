import { MDWithPoint, MDWithPointCoordinated } from '@apps/contracts';
import type { LatLngExpression } from 'leaflet';
import {
  MapContainer,
  Marker,
  Polygon,
  Polyline,
  TileLayer,
} from 'react-leaflet';

export default function ReactLeaflet({
  positions,
}: {
  positions: MDWithPoint;
}) {
  let position = [] as unknown as LatLngExpression;
  const type = positions.type;

  switch (type) {
    case 'Point':
      position = positions.coordinates;
      break;
    case 'GeometryCollection':
      position =
        positions.geometries[0].type === 'Point'
          ? positions.geometries[0].coordinates
          : positions.geometries[0].coordinates[0];
      break;
    default:
      position = positions.coordinates[0];
      break;
  }

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {(type === 'LineString' || type === 'Point' || type === 'Polygon') && (
        <Draw positions={positions} />
      )}

      {type === 'GeometryCollection' && (
        <>
          {positions.geometries.map((geometry, i) => {
            return <Draw key={i} positions={geometry} />;
          })}
        </>
      )}
    </MapContainer>
  );
}

function Draw({ positions }: { positions: MDWithPointCoordinated }) {
  const limeOptions = { color: 'lime' };
  const purpleOptions = { color: 'purple' };
  return (
    <>
      {positions.type === 'Point' && (
        <Marker position={positions.coordinates}></Marker>
      )}

      {positions.type === 'LineString' && (
        <Polyline pathOptions={limeOptions} positions={positions.coordinates} />
      )}

      {positions.type === 'Polygon' && (
        <Polygon
          pathOptions={purpleOptions}
          positions={positions.coordinates}
        />
      )}
    </>
  );
}
