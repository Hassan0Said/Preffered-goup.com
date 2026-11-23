
import React from 'react';

const asset = path => `${import.meta.env.BASE_URL}assets/${path}`;

const vehicleImages = {
  // =========================
  // الفانات
  // =========================

  oldHiace: asset('cars/toyota-hiace-old.webp'),
  newHiace: asset('cars/toyota-hiace-new.webp'),
  h1: asset('cars/hyundai-h1.webp'),
  v300: asset('cars/mercedes-v300.png'),
  kiaGrand: asset('cars/kia-grand.png'),

  // =========================
  // الأتوبيسات
  // =========================

  coaster: asset('cars/toyota-coaster.webp'),
  mitsubishiBus: asset('cars/mitsubishi-bus.png'),

  // =========================
  // سيارات السيدان
  // =========================

  corolla: asset('cars/toyota-corolla.webp'),
  accent: asset('cars/hyundai-accent.png'),
  mg5: asset('cars/mg-5.png'),
  mercedesS: asset('cars/mercedes-s-class.png'),
  elantra: asset('cars/hyundai-elantra.png'),
  elantraMD: asset('cars/hyundai-elantra-md.webp'),

  // =========================
  // سيارات SUV
  // =========================

  sportage: asset('cars/kia-sportage.webp'),
  newSportage: asset('cars/kia-sportage-new.webp'),
  zs: asset('cars/mg-zs.webp'),
  jeepGrand: asset('cars/jeep-grand-cherokee.webp'),
  tiggo7: asset('cars/chery-tiggo-7.webp'),
  tucson: asset('cars/hyundai-tucson.webp'),
  eclipse: asset('cars/mitsubishi-eclipse.webp'),
  fortuner: asset('cars/toyota-fortuner.webp'),
  rangeRover: asset('cars/range-rover.webp'),
  jetour: asset('cars/jetour.webp'),
};

export function VehicleVisual({ kind }) {
  return (
    <div
      className={`vehicle-visual vehicle-${kind}`}
      aria-hidden="true"
    >
      <img
        className="vehicle-photo"
        src={vehicleImages[kind]}
        alt=""
        loading="lazy"
      />

      <div className="vehicle-photo-shade" />
    </div>
  );
}
