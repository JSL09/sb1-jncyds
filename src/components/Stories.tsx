import React from 'react';

const Stories: React.FC = () => {
  const works = [
    { title: 'Susurros del Viento', type: 'Poema', excerpt: 'En el silencio de la noche, el viento susurra secretos antiguos...' },
    { title: 'El Espejo del Alma', type: 'Relato', excerpt: 'Mirándose en el espejo, vio más allá de su reflejo, adentrándose en los recovecos de su alma...' },
    { title: 'Danza de Luciérnagas', type: 'Poema', excerpt: 'En el bosque oscuro, las luciérnagas danzan, pintando el aire con su luz efímera...' },
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-purple-400">Relatos y Poemas</h2>
      <p className="mb-6">
        Adéntrate en el mundo literario de Jimmy Shibaru, donde las palabras cobran vida y te transportan a realidades alternativas y emociones profundas.
      </p>
      <div className="space-y-6">
        {works.map((work) => (
          <div key={work.title} className="bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-300">{work.title}</h3>
            <p className="text-gray-400 mb-2">{work.type}</p>
            <p className="italic">&quot;{work.excerpt}&quot;</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stories;