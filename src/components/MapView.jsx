import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import 'bootstrap/dist/css/bootstrap.min.css'

mapboxgl.accessToken = 'YOUR_MAPBOX_ACCESS_TOKEN';

const MapView = ({ profile }) => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (!profile) return;

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-122.4194, 37.7749], // Initial map center (e.g., San Francisco)
      zoom: 10,
    });
    const geocodeAddress = async (address) => {
      try {
        const response = await fetch(
          `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
            address
          )}.json?access_token=${mapboxgl.accessToken}`
        );
        const data = await response.json();
        if (data.features && data.features.length > 0) {
          const { center } = data.features[0];
          new mapboxgl.Marker().setLngLat(center).addTo(map);
          map.flyTo({ center, zoom: 15 });
        }
      } catch (error) {
        console.error('Error geocoding address:', error);
      }
    };

    geocodeAddress(profile.address);

    return () => map.remove();
  }, [profile]);

  if (!profile) return null;

  return (
    <div className="map-container mt-4" style={{ height: '400px' }} ref={mapContainer}>
      <div>Loading map...</div>
    </div>
  );
};

export default MapView;