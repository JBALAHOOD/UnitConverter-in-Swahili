import React from 'react';
import { Ruler } from 'lucide-react';
import ConverterCard from '../components/ConverterCard';

const Length = () => {
  const lengthUnits = [
    { key: 'm', label: 'Mita (m)' },
    { key: 'cm', label: 'Sentimita (cm)' },
    { key: 'mm', label: 'Milimita (mm)' },
    { key: 'km', label: 'Kilomita (km)' },
    { key: 'ft', label: 'Futi (ft)' },
    { key: 'in', label: 'Inchi (in)' },
    { key: 'yd', label: 'Yadi (yd)' },
    { key: 'mi', label: 'Maili (mi)' }
  ];

  const convertLength = (value, fromUnit, toUnit) => {
    // Convert to meters first
    const toMeters = {
      m: 1,
      cm: 0.01,
      mm: 0.001,
      km: 1000,
      ft: 0.3048,
      in: 0.0254,
      yd: 0.9144,
      mi: 1609.34
    };

    const meters = value * toMeters[fromUnit];
    return meters / toMeters[toUnit];
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kigezo cha Urefu
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Badili vipimo vya urefu kwa urahisi - kutoka mita hadi futi, sentimita hadi inchi, na mengine mengi.
          </p>
        </div>

        {/* Converter */}
        <div className="slide-up">
          <ConverterCard
            title="Kigezo cha Urefu"
            icon={Ruler}
            units={lengthUnits}
            convertFunction={convertLength}
            color="from-blue-500 to-blue-600"
          />
        </div>

        {/* Common Conversions */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Mabadiliko ya Kawaida
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Mita hadi Futi</h3>
              <p className="text-gray-600">1 mita = 3.28084 futi</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Sentimita hadi Inchi</h3>
              <p className="text-gray-600">1 sentimita = 0.393701 inchi</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Kilomita hadi Maili</h3>
              <p className="text-gray-600">1 kilomita = 0.621371 maili</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Length;