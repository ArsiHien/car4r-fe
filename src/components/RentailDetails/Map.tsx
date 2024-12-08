import { GoogleMap, Polyline, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";

// Define the container style for the map
const containerStyle = {
  width: "100%",
  height: "100%",
};

interface routeCoordinatesProp {
  routeCoordinates: {
    lat: number;
    lng: number;
  }[];
}

const Map = ({ routeCoordinates }: routeCoordinatesProp) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCx_7EuHPVjmTEDn_nclWxvn_55gIhBiEs", // Replace with your API key
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);

  // Callback for when the map is loaded
  const onLoad = useCallback((mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  }, []);

  // Callback for when the map is unmounted
  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) {
    return <div>Loading map...</div>;
  }
  console.log(routeCoordinates.length)

  return (
    <div className="w-full h-full">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: routeCoordinates[0].lat, lng: routeCoordinates[0].lng }}
        zoom={12}
        mapTypeId="terrain"
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Draw the polyline */}
        <Polyline
          path={routeCoordinates}
          options={{
            strokeColor: "blue",
            strokeOpacity: 1.0,
            strokeWeight: 2,
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Map;
