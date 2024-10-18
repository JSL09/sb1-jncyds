import React from 'react';

const Music: React.FC = () => {
  const albums = [
    { title: 'Ecos del Alma', year: 2022, tracks: 12 },
    { title: 'Sueños en Technicolor', year: 2020, tracks: 10 },
    { title: 'Raíces y Alas', year: 2018, tracks: 14 },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-purple-400">Música</h2>
      <p className="mb-6">
        Explora la discografía de Jimmy Shibaru, una colección de álbumes que reflejan su evolución artística y su exploración constante de nuevos sonidos y emociones.
      </p>
      <div className="space-y-6">
        {albums.map((album) => (
          <div key={album.title} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-300">{album.title}</h3>
            <p className="text-gray-400">Año: {album.year}</p>
            <p className="text-gray-400">Pistas: {album.tracks}</p>
          </div>
        ))}
      </div>
      <p className="mt-6">
        Escucha los álbumes completos de Jimmy Shibaru en Spotify y descubre su mundo musical único.
      </p>
    </div>
  );
};

export default Music;