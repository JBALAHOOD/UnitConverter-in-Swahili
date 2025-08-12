import React, { useState, useEffect } from 'react';
import { ArrowUpDown } from 'lucide-react';

const ConverterCard = ({ title, icon: Icon, units, convertFunction, color = 'from-orange-500 to-orange-600' }) => {
  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');
  const [fromUnit, setFromUnit] = useState(units[0]?.key || '');
  const [toUnit, setToUnit] = useState(units[1]?.key || units[0]?.key || '');
  const [isConverting, setIsConverting] = useState(false);

  useEffect(() => {
    if (fromValue && !isNaN(fromValue) && fromValue !== '') {
      const result = convertFunction(parseFloat(fromValue), fromUnit, toUnit);
      setToValue(result.toFixed(6).replace(/\.?0+$/, ''));
    } else {
      setToValue('');
    }
  }, [fromValue, fromUnit, toUnit, convertFunction]);

  const handleSwapUnits = () => {
    setIsConverting(true);
    const tempUnit = fromUnit;
    const tempValue = fromValue;
    
    setFromUnit(toUnit);
    setToUnit(tempUnit);
    setFromValue(toValue);
    setToValue(tempValue);
    
    setTimeout(() => setIsConverting(false), 300);
  };

  const handleFromValueChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setFromValue(value);
    }
  };

  const handleToValueChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setToValue(value);
      if (value && !isNaN(value) && value !== '') {
        const result = convertFunction(parseFloat(value), toUnit, fromUnit);
        setFromValue(result.toFixed(6).replace(/\.?0+$/, ''));
      } else {
        setFromValue('');
      }
    }
  };

  return (
    <div className="card max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center shadow-lg`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* From Section */}
        <div className="space-y-4">
          <div className="input-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kutoka
            </label>
            <input
              type="text"
              value={fromValue}
              onChange={handleFromValueChange}
              placeholder="Ingiza thamani"
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
          <div className="input-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kipimo
            </label>
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors bg-white"
            >
              {units.map((unit) => (
                <option key={unit.key} value={unit.key}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwapUnits}
            className={`p-4 bg-gradient-to-br ${color} text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${isConverting ? 'animate-spin' : ''}`}
            title="Badili vipimo"
          >
            <ArrowUpDown className="w-6 h-6" />
          </button>
        </div>

        {/* To Section */}
        <div className="space-y-4">
          <div className="input-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kwenda
            </label>
            <input
              type="text"
              value={toValue}
              onChange={handleToValueChange}
              placeholder="Matokeo"
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors"
            />
          </div>
          <div className="input-group">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Kipimo
            </label>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full px-4 py-3 text-lg border-2 border-gray-200 rounded-xl focus:border-orange-500 focus:outline-none transition-colors bg-white"
            >
              {units.map((unit) => (
                <option key={unit.key} value={unit.key}>
                  {unit.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Quick Conversion Examples */}
      {fromValue && toValue && (
        <div className="mt-8 p-4 bg-gray-50 rounded-xl">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Matokeo:</h3>
          <p className="text-lg">
            <span className="font-bold text-orange-600">{fromValue}</span>
            <span className="text-gray-600 mx-2">
              {units.find(u => u.key === fromUnit)?.label}
            </span>
            <span className="text-gray-400 mx-2">=</span>
            <span className="font-bold text-green-600">{toValue}</span>
            <span className="text-gray-600 mx-2">
              {units.find(u => u.key === toUnit)?.label}
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ConverterCard;