"use client";

import { useEffect, useRef } from "react";
import { Loader } from "@googlemaps/js-api-loader";

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY as string,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary("maps");

      // init marker position
      const { Marker } = (await loader.importLibrary(
        "marker"
      )) as google.maps.MarkerLibrary;

      const position = { lat: 50.62527715714659, lng: 26.252246271124616 };

      const mapOptions: google.maps.MapOptions = {
        center: position,
        zoom: 17,
        mapId: "f3b7b1b3b1b3b1b3",
      };

      const map = new Map(mapRef.current as HTMLDivElement, mapOptions);

      const marker = new Marker({
        position,
        map,
      });
    };

    initMap();
  }, []);

  return <div className="w-full h-full" ref={mapRef}></div>;
};

export default Map;
