import React from 'react';

const asset = path => `${import.meta.env.BASE_URL}assets/${path}`;

const vehicleImages = {
  // =========================
  // Vans
  // =========================

  oldHiace: asset('cars/toyota-hiace-old.webp'),
  newHiace: asset('cars/toyota-hiace-new.webp'),
  h1: asset('cars/hyundai-h1.webp'),
  hyundaiStaria: asset('cars/hyundai-staria.jpg'),
  v300: asset('cars/mercedes-v300.png'),

  // =========================
  // Buses
  // =========================

  coaster: asset('cars/toyota-coaster.webp'),
  mitsubishiBus: asset('cars/mitsubishi-bus.png'),
  superJet: asset('cars/superjet-bus.jpg'),

  // =========================
  // SUVs
  // =========================

  // Mercedes
  mercedesGLC300: asset('cars/mercedes-glc300.webp'),
  gClass: asset('cars/mercedes-g-class.jpg'),

  // Luxury SUVs
  rangeRover: asset('cars/range-rover.webp'),
  landCruiser: asset('cars/toyota-land-cruiser.webp'),
  nissanPatrol: asset('cars/nissan-patrol.jpg'),
  jeepGrand: asset('cars/jeep-grand-cherokee.webp'),
  mgG50: asset('cars/mg-g50.webp'),
  jetour: asset('cars/jetour.webp'),
  fortuner: asset('cars/toyota-fortuner.webp'),

  // Other SUVs
  tucson: asset('cars/hyundai-tucson.webp'),
  newSportage: asset('cars/kia-sportage-new.webp'),
  sportage: asset('cars/kia-sportage.webp'),
  kiaGrand: asset('cars/kia-grand.png'),
  tiggo7: asset('cars/chery-tiggo-7.webp'),
  eclipse: asset('cars/mitsubishi-eclipse.webp'),
  zs: asset('cars/mg-zs.webp'),

  // =========================
  // Sedans
  // =========================

  // Mercedes first
  mercedesE200: asset('cars/mercedes-e200.png'),
  mercedesS500: asset('cars/mercedes-s500.png'),

  // Other sedans
  corolla: asset('cars/toyota-corolla.webp'),
  accent: asset('cars/hyundai-accent.png'),
  mg5: asset('cars/mg-5.png'),
  elantra: asset('cars/hyundai-elantra.png'),
  elantraMD: asset('cars/hyundai-elantra-md.webp'),
};

export function VehicleVisual({ kind }) {
  const image = vehicleImages[kind];

  return (
    <div
      className={`vehicle-visual vehicle-${kind}`}
      aria-hidden="true"
    >
      {image && (
        <img
          className="vehicle-photo"
          src={image}
          alt=""
          loading="lazy"
        />
      )}

      <div className="vehicle-photo-shade" />
    </div>
  );
}