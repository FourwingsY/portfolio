"use client"

import Script from "next/script"
import { useEffect, useRef, useState } from "react"

import { useModal } from "@/lib/hooks/useModal"

import { REST_AREA_GROUPS, RestAreaGroup } from "./data"
import { RestAreaVisitedRecord } from "./model"
import record from "./visit-record.json"

export default function RestArea() {
  const { openModal } = useModal()
  const [isMapLoaded, setIsMapLoaded] = useState(false)
  const map = useRef<naver.maps.Map>(null)

  // init map
  useEffect(() => {
    if (!isMapLoaded) return
    const mapOptions: naver.maps.MapOptions = {
      bounds: new naver.maps.LatLngBounds(new naver.maps.LatLng(34.4, 126), new naver.maps.LatLng(38.4, 129.5)),
    }
    const visitedRecords = record as Record<string, RestAreaVisitedRecord>

    map.current = new naver.maps.Map("map", mapOptions)

    REST_AREA_GROUPS.forEach((d) => {
      const spriteOrigin = getSprite(d, visitedRecords[d.name])
      const marker = new naver.maps.Marker({
        icon: {
          url: "/images/arrows.png",
          size: { width: 20, height: 24 },
          scaledSize: { width: 60, height: 24 },
          origin: spriteOrigin,
          anchor: { x: 10, y: 24 },
        },
        position: new naver.maps.LatLng(d.center.lat, d.center.lng),
        map: map.current,
        title: `${d.name}`,
        zIndex: visitedRecords[d.name] ? 1 : 0,
      })
      naver.maps.Event.addListener(marker, "click", toggleModal(d.name, visitedRecords[d.name]))
    })
  }, [isMapLoaded])

  function toggleModal(name: string, groupRecord: RestAreaVisitedRecord | undefined) {
    return function () {
      if (groupRecord) {
        openModal({ type: "@maps/rest-area/visited", props: { name, groupRecord } })
      } else {
        openModal({ type: "@maps/rest-area/unvisited", props: { name } })
      }
    }
  }

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

function getSprite(restAreaGroup: RestAreaGroup, groupRecord: RestAreaVisitedRecord | undefined) {
  if (restAreaGroup.notes === "건설중" || restAreaGroup.notes?.includes("공사중")) return { x: 40, y: 0 }
  if (groupRecord) return { x: 0, y: 0 }
  return { x: 20, y: 0 }
}
