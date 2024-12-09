import { useMemo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCarRoute } from "../../store/CarMap/carMapSlice";
import Map from "./Map";
import { Slider } from "antd";

const CarMap = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCar = useSelector((state: RootState) => state.selectedCar);
  const { carRoutes, isLoading, isError } = useSelector(
    (state: RootState) => state.carMap
  );

  const [timeRatio, setTimeRatio] = useState(1);

  const routePoints = useMemo(() => {
    return carRoutes.map((route) => ({
      lat: route.latitude,
      lng: route.longitude,
    }));
  }, [carRoutes]);

  const routeSubset = useMemo(() => {
    const endIndex = Math.floor(routePoints.length * timeRatio);
    return routePoints.slice(0, endIndex);
  }, [routePoints, timeRatio]);

  useEffect(() => {
    if (selectedCar.selectedCarID) {
      dispatch(fetchCarRoute(selectedCar.selectedCarID));
    }
  }, [dispatch, selectedCar]);

  if (isLoading) {
    return <div>Loading routes...</div>;
  }

  if (isError || !routePoints.length) {
    return <div>No routes found or an error occurred.</div>;
  }

  const marks = {
    0.01: "24h Ago",
    0.25: "18h Ago",
    0.5: "12h Ago",
    0.75: "6h Ago",
    1: "Now",
  };

  return (
    <div className="w-full h-full">
      <Map key={timeRatio} routeCoordinates={routeSubset}></Map>
      <Slider
        min={0}
        max={1}
        step={0.01}
        value={timeRatio}
        onChange={(value) => setTimeRatio(value)}
        marks={marks}
        style={{ marginBottom: "20px" }}
      />
    </div>
  );
};

export default CarMap;
