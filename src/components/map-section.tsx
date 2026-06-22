"use client";

import {
  Map,
  MapMarker,
  MarkerContent,
  MapControls,
} from "@/components/ui/map";
import { MapPin, Locate } from "lucide-react";

const LONGITUDE = 107.0307589;
const LATITUDE = -6.3023472;

export default function MapSection() {
  return (
    <section className="py-16 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <Locate className="h-3.5 w-3.5" />
            Lokasi
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
            Lokasi{" "}
            <span className="gradient-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Kami
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            Cakrawala EduCentre, Jl. Bayan II No.7, RT.002/RW.008, Mustikajaya,
            Kec. Mustika Jaya, Kota Bekasi, Jawa Barat 17158
          </p>
        </div>

        <div className="relative mt-8 overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 sm:mt-10 dark:ring-slate-700">
          <Map
            initialViewState={{
              longitude: LONGITUDE,
              latitude: LATITUDE,
              zoom: 16,
            }}
            className="h-[300px] w-full sm:h-[450px]"
          >
            <MapControls
              showZoom
              showCompass
              showFullscreen
              position="top-right"
            />
            <MapMarker longitude={LONGITUDE} latitude={LATITUDE}>
              <MarkerContent>
                <div className="relative flex h-12 w-12 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-blue-500/30" />
                  <span className="absolute h-10 w-10 animate-pulse rounded-full bg-blue-500/20" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg ring-2 ring-white dark:ring-slate-900">
                    <MapPin className="h-6 w-6" />
                  </div>
                </div>
              </MarkerContent>
            </MapMarker>
          </Map>
        </div>
      </div>
    </section>
  );
}
