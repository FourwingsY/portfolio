"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"

import { RestAreaGroup } from "./model"
import data from "./restArea.json"

export default function RestArea() {
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const map = useRef<naver.maps.Map>(null)
  const restAreaGroups = data as RestAreaGroup[]

  // init map
  useEffect(() => {
    if (!isMapLoaded) return
    const mapOptions: naver.maps.MapOptions = {
      bounds: new naver.maps.LatLngBounds(new naver.maps.LatLng(34.4, 126), new naver.maps.LatLng(38.4, 129.5)),
    }

    map.current = new naver.maps.Map("map", mapOptions)

    restAreaGroups.forEach((d) => {
      const spriteOrigin = ((d) => {
        switch (d.groupDirection) {
          case "상하행":
            return { x: 48, y: 36 }
          case "양방향":
            return { x: 24, y: 72 }
          case "단방향":
            if (d.children[0].direction === "상행") return { x: 24, y: 0 }
            return { x: 72, y: 0 }
        }
      })(d)
      new naver.maps.Marker({
        icon: {
          url: "/images/arrows.png",
          size: { width: 24, height: 36 },
          scaledSize: { width: 96, height: 108 },
          origin: spriteOrigin,
          anchor: { x: 12, y: 36 },
        },
        position: new naver.maps.LatLng(d.center.lat, d.center.lng),
        map: map.current,
        title: `${d.name}`,
      })
    })
  }, [isMapLoaded])

  return (
    <div style={{ display: "flex", flex: 1 }}>
      <Script
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}`}
        onLoad={() => setIsMapLoaded(true)}
      />
      <div id="map" style={{ width: "100%", flex: "100%" }}></div>
    </div>
  )
}
