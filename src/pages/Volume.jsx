import React from 'react';
import { Droplets } from 'lucide-react';
import ConverterCard from '../components/ConverterCard';

const Volume = () => {
  const volumeUnits = [
    { key: 'l', label: 'Lita (l)' },
    { key: 'ml', label: 'Mililita (ml)' },
    { key: 'gal', label: 'Galoni (gal)' },
    { key: 'qt', label: 'Kwati (qt)' },
    { key: 'pt', label: 'Painti (pt)' },
    { key: 'cup', label: 'Kikombe (cup)' },
    { key: 'fl_oz', label: 'Aunsi za Maji (fl oz)' },
    { key: 'tbsp', label: 'Kijiko Kikubwa (tbsp)' },
    { key: 'tsp', label: 'Kijiko Kidogo (tsp)' }
  ];

  const convertVolume = (value, fromUnit, toUnit) => {
    // Convert to liters first
    const toLiters = {
      l: 1,
      ml: 0.001,
      gal: 3.78541,
      qt: 0.946353,
      pt: 0.473176,
      cup: 0.236588,
      fl_oz: 0.0295735,
      tbsp: 0.0147868,
      tsp: 0.00492892
    };

    const liters = value * toLiters[fromUnit];
    return liters / toLiters[toUnit];
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kigezo cha Kiasi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Badili vipimo vya kiasi kwa urahisi - kutoka lita hadi galoni, mililita hadi vikombe, na mengine mengi.
          </p>
        </div>

        {/* Converter */}
        <div className="slide-up">
          <ConverterCard
            title="Kigezo cha Kiasi"
            icon={Droplets}
            units={volumeUnits}
            convertFunction={convertVolume}
            color="from-cyan-500 to-cyan-600"
          />
        </div>

        {/* Common Conversions */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Mabadiliko ya Kawaida
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Lita hadi Galoni</h3>
              <p className="text-gray-600">1 lita = 0.264172 galoni</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Mililita hadi Vikombe</h3>
              <p className="text-gray-600">1 mililita = 0.00422675 vikombe</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Galoni hadi Lita</h3>
              <p className="text-gray-600">1 galoni = 3.78541 lita</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Volume;