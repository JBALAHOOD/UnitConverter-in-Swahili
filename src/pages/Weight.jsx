import React from 'react';
import { Weight as WeightIcon } from 'lucide-react';
import ConverterCard from '../components/ConverterCard';

const Weight = () => {
  const weightUnits = [
    { key: 'kg', label: 'Kilogramu (kg)' },
    { key: 'g', label: 'Gramu (g)' },
    { key: 'mg', label: 'Miligramu (mg)' },
    { key: 't', label: 'Tani (t)' },
    { key: 'lb', label: 'Pauni (lb)' },
    { key: 'oz', label: 'Aunsi (oz)' },
    { key: 'st', label: 'Jiwe (st)' }
  ];

  const convertWeight = (value, fromUnit, toUnit) => {
    // Convert to grams first
    const toGrams = {
      kg: 1000,
      g: 1,
      mg: 0.001,
      t: 1000000,
      lb: 453.592,
      oz: 28.3495,
      st: 6350.29
    };

    const grams = value * toGrams[fromUnit];
    return grams / toGrams[toUnit];
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kigezo cha Uzito
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Badili vipimo vya uzito kwa urahisi - kutoka kilogramu hadi pauni, gramu hadi aunsi, na mengine mengi.
          </p>
        </div>

        {/* Converter */}
        <div className="slide-up">
          <ConverterCard
            title="Kigezo cha Uzito"
            icon={WeightIcon}
            units={weightUnits}
            convertFunction={convertWeight}
            color="from-green-500 to-green-600"
          />
        </div>

        {/* Common Conversions */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Mabadiliko ya Kawaida
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Kilogramu hadi Pauni</h3>
              <p className="text-gray-600">1 kilogramu = 2.20462 pauni</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Gramu hadi Aunsi</h3>
              <p className="text-gray-600">1 gramu = 0.035274 aunsi</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Tani hadi Kilogramu</h3>
              <p className="text-gray-600">1 tani = 1000 kilogramu</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weight;