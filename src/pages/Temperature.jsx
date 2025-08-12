import React from 'react';
import { Thermometer } from 'lucide-react';
import ConverterCard from '../components/ConverterCard';

const Temperature = () => {
  const temperatureUnits = [
    { key: 'c', label: 'Celsius (°C)' },
    { key: 'f', label: 'Fahrenheit (°F)' },
    { key: 'k', label: 'Kelvin (K)' },
    { key: 'r', label: 'Rankine (°R)' }
  ];

  const convertTemperature = (value, fromUnit, toUnit) => {
    // Convert to Celsius first
    let celsius;
    
    switch (fromUnit) {
      case 'c':
        celsius = value;
        break;
      case 'f':
        celsius = (value - 32) * 5/9;
        break;
      case 'k':
        celsius = value - 273.15;
        break;
      case 'r':
        celsius = (value - 491.67) * 5/9;
        break;
      default:
        celsius = value;
    }

    // Convert from Celsius to target unit
    switch (toUnit) {
      case 'c':
        return celsius;
      case 'f':
        return celsius * 9/5 + 32;
      case 'k':
        return celsius + 273.15;
      case 'r':
        return celsius * 9/5 + 491.67;
      default:
        return celsius;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kigezo cha Joto
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Badili vipimo vya joto kwa urahisi - kutoka Celsius hadi Fahrenheit, Kelvin na mengine mengi.
          </p>
        </div>

        {/* Converter */}
        <div className="slide-up">
          <ConverterCard
            title="Kigezo cha Joto"
            icon={Thermometer}
            units={temperatureUnits}
            convertFunction={convertTemperature}
            color="from-red-500 to-red-600"
          />
        </div>

        {/* Common Conversions */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Mabadiliko ya Kawaida
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Maji Yanapochemka</h3>
              <p className="text-gray-600">100°C = 212°F = 373.15K</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Maji Yanaganda</h3>
              <p className="text-gray-600">0°C = 32°F = 273.15K</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">Joto la Mwili</h3>
              <p className="text-gray-600">37°C = 98.6°F = 310.15K</p>
            </div>
          </div>
        </div>

        {/* Temperature Scale Info */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Kuhusu Vipimo vya Joto
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Celsius (°C)</h3>
              <p className="text-gray-600 leading-relaxed">
                Kipimo cha joto kinachotumiwa sana duniani. Kimegawanywa kwa hatua 100 kati ya uhifadhi wa maji (0°C) na kuchemka kwa maji (100°C).
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fahrenheit (°F)</h3>
              <p className="text-gray-600 leading-relaxed">
                Kipimo cha joto kinachotumiwa hasa nchini Marekani. Maji huganda kwa 32°F na kuchemka kwa 212°F.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temperature;