
import React from 'react';

const asset = path => `${import.meta.env.BASE_URL}assets/${path}`;

const tripImages = {
  // 01 - أهرامات الجيزة
  pyramids: asset('trips/giza-pyramids.webp'),

  // 02 - الصحراء البيضاء
  whiteDesert: asset('trips/white-desert.webp'),

  // 03 - القرية الفرعونية
  pharaonicVillage: asset('trips/pharaonic-village.webp'),

  // 04 - معبد الكرنك
  karnak: asset('trips/karnak-temple.webp'),

  // 05 - هرم زوسر المدرج بسقارة
  stepPyramid: asset('trips/step-pyramid.webp'),

  // 06 - برج القاهرة
  cairoTower: asset('trips/cairo-tower.webp'),

  // 07 - تمثال أبو الهول
  sphinx: asset('trips/great-sphinx.webp'),

  // 08 - جامع الأزهر
  alAzhar: asset('trips/al-azhar-mosque.webp'),

  // 09 - مسجد محمد علي بالقلعة
  mohamedAliMosque: asset('trips/mohamed-ali-mosque.webp'),

  // 10 - حصن بابليون
  babylonFortress: asset('trips/babylon-fortress.webp'),

  // 11 - دار الأوبرا المصرية
  operaHouse: asset('trips/egyptian-opera-house.webp'),

  // 12 - دير سانت كاترين
  saintCatherine: asset('trips/saint-catherine.webp'),

  // 13 - شارع المعز
  alMuizz: asset('trips/al-muizz-street.webp'),

  // 14 - قصر المنتزه بالإسكندرية
  montaza: asset('trips/montaza-palace.webp'),

  // 15 - قصر عابدين
  abdeen: asset('trips/abdeen-palace.webp'),

  // 16 - قصر محمد علي
  mohamedAliPalace: asset('trips/mohamed-ali-palace.webp'),

  // 17 - متحف الفن الإسلامي
  islamicArt: asset('trips/islamic-art-museum.webp'),

  // 18 - محمية رأس محمد
  rasMohamed: asset('trips/ras-mohamed.webp'),

  // 19 - معبد أبو سمبل
  abuSimbel: asset('trips/abu-simbel.webp'),

  // 20 - معبد حتشبسوت
  hatshepsut: asset('trips/hatshepsut-temple.webp'),

  // 21 - مكتبة الإسكندرية
  alexLibrary: asset('trips/alexandria-library.jpg'),

  // 22 - ممشى أهل مصر
  ahlMisr: asset('trips/ahl-misr-walkway.jpg'),

  // 23 - ميدان سوهو
  soho: asset('trips/soho-square.webp'),

  // 24 - مدينة الأقصر
  luxor: asset('trips/luxor.jpg'),

  // 25 - مدينة أسوان
  aswan: asset('trips/aswan.jpg'),

  // 26 - المتحف المصري الكبير
  museum: asset('trips/grand-egyptian-museum.jpg'),

  // 27 - النوبة وأسوان
  nubia: asset('trips/nubia-nile.webp'),
};

export function TripVisual({ kind }) {
  const image = tripImages[kind];

  if (!image) {
    console.warn(`Trip image not found for key: "${kind}"`);
  }

  return (
    <div className={`trip-visual trip-${kind || 'unknown'}`}>
      {image ? (
        <img
          className="trip-photo"
          src={image}
          alt=""
          aria-hidden="true"
          loading="lazy"
        />
      ) : (
        <div className="trip-photo trip-photo-missing" />
      )}

      <div className="trip-photo-shade" />
    </div>
  );
}
