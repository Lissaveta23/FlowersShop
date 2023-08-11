import { useYMaps } from "@pbe/react-yandex-maps";
import { useRef, useEffect, FC } from "react";
import { mapState } from "../../constants";

type Props = {
  changeAdress: (adress: string) => void;
};

export const Map: FC<Props> = ({ changeAdress }) => {
  const mapRef = useRef<any>();

  const ymaps = useYMaps([
    "Map",
    "Placemark",
    "geocode",
    "geoObject.addon.balloon",
  ]);

  const getAddress = (coords: any) => {
    ymaps?.geocode(coords).then((res: any) => {
      const firstGeoObject = res.geoObjects.get(0);
      if (
        firstGeoObject.getThoroughfare() &&
        firstGeoObject.getPremiseNumber()
      ) {
        const newAddress = `${firstGeoObject.getThoroughfare()}, ${firstGeoObject.getPremiseNumber()} `;
        changeAdress(newAddress);
      }
    });
  };

  const onMapClick = (e: any) => {
    const coords = e._sourceEvent.originalEvent.coords;
    getAddress(coords);
  };

  useEffect(() => {
    if (!ymaps || !mapRef.current) {
      return;
    }

    const myMap = new ymaps.Map(mapRef.current, {
      center: mapState.center,
      zoom: 10,
    });

    myMap.events.add("click", onMapClick);
  }, [ymaps]);

  return <div ref={mapRef} style={{ width: "320px", height: "240px" }} />;
};

export default Map;
