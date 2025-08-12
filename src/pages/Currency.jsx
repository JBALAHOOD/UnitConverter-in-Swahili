import React from 'react';
import { DollarSign } from 'lucide-react';
import ConverterCard from '../components/ConverterCard';

const Currency = () => {
  const currencyUnits = [
    { key: 'kes', label: 'Shilingi ya Kenya (KES)' },
    { key: 'tzs', label: 'Shilingi ya Tanzania (TZS)' },
    { key: 'usd', label: 'Dola za Marekani (USD)' },
    { key: 'eur', label: 'Euro (EUR)' },
    { key: 'gbp', label: 'Pauni za Uingereza (GBP)' },
    { key: 'ugx', label: 'Shilingi ya Uganda (UGX)' },
    { key: 'rwf', label: 'Faranga za Rwanda (RWF)' },
    { key: 'zar', label: 'Randi za Afrika Kusini (ZAR)' }
  ];

  // Static exchange rates (in a real app, these would come from an API)
  const exchangeRates = {
    usd: 1, // Base currency
    kes: 150,
    tzs: 2500,
    eur: 0.85,
    gbp: 0.75,
    ugx: 3700,
    rwf: 1300,
    zar: 18
  };

  const convertCurrency = (value, fromUnit, toUnit) => {
    // Convert to USD first, then to target currency
    const usdValue = value / exchangeRates[fromUnit];
    return usdValue * exchangeRates[toUnit];
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kigezo cha Fedha
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Badili sarafu za dunia kwa urahisi. Viwango vya kubadilishana ni vya mfano na havijasasishwa kwa wakati halisi.
          </p>
        </div>

        {/* Converter */}
        <div className="slide-up">
          <ConverterCard
            title="Kigezo cha Fedha"
            icon={DollarSign}
            units={currencyUnits}
            convertFunction={convertCurrency}
            color="from-yellow-500 to-yellow-600"
          />
        </div>

        {/* Exchange Rate Notice */}
        <div className="mt-8 slide-up">
          <div className="card bg-yellow-50 border-yellow-200">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">!</span>
              </div>
              <h3 className="text-lg font-semibold text-yellow-800">Onyo</h3>
            </div>
            <p className="text-yellow-700 leading-relaxed">
              Viwango vya kubadilishana vilivyoonyeshwa hapa ni vya mfano tu na havijasasishwa kwa wakati halisi. 
              Kwa mabadiliko ya fedha ya kweli, tafadhali tumia huduma za benki au makampuni ya kubadilisha fedha.
            </p>
          </div>
        </div>

        {/* Common Exchange Rates */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Viwango vya Mfano (USD = 1)
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">KES</h3>
              <p className="text-gray-600">1 USD = 150 KES</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">TZS</h3>
              <p className="text-gray-600">1 USD = 2,500 TZS</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">EUR</h3>
              <p className="text-gray-600">1 USD = 0.85 EUR</p>
            </div>
            <div className="card text-center">
              <h3 className="font-semibold text-gray-900 mb-2">GBP</h3>
              <p className="text-gray-600">1 USD = 0.75 GBP</p>
            </div>
          </div>
        </div>

        {/* Regional Currencies Info */}
        <div className="mt-16 slide-up">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Sarafu za Afrika Mashariki
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shilingi ya Kenya (KES)</h3>
              <p className="text-gray-600 leading-relaxed">
                Sarafu rasmi ya Kenya. Imegawanywa katika senti 100. Ni mojawapo ya sarafu madhubuti zaidi Afrika Mashariki.
              </p>
            </div>
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Shilingi ya Tanzania (TZS)</h3>
              <p className="text-gray-600 leading-relaxed">
                Sarafu rasmi ya Tanzania. Imegawanywa katika senti 100. Inatumika pia katika baadhi ya maeneo ya jirani.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Currency;