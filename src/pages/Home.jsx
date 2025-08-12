import React from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Weight, Droplets, Thermometer, DollarSign, ArrowRight, Calculator, Globe, Zap } from 'lucide-react';

const Home = () => {
  const converterTypes = [
    {
      name: 'Urefu',
      description: 'Badili mita, sentimita, futi, inchi',
      icon: Ruler,
      url: '/length',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      examples: 'm, cm, ft, in'
    },
    {
      name: 'Uzito',
      description: 'Badili kilo, gramu, pauni, aunsi',
      icon: Weight,
      url: '/weight',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      examples: 'kg, g, lb, oz'
    },
    {
      name: 'Kiasi',
      description: 'Badili lita, mililita, galoni, vikombe',
      icon: Droplets,
      url: '/volume',
      color: 'from-cyan-500 to-cyan-600',
      bgColor: 'bg-cyan-50',
      examples: 'l, ml, gal, cup'
    },
    {
      name: 'Joto',
      description: 'Badili nyuzi joto, Celsius, Fahrenheit',
      icon: Thermometer,
      url: '/temperature',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      examples: '°C, °F, K'
    },
    {
      name: 'Fedha',
      description: 'Badili sarafu za dunia kwa bei za sasa',
      icon: DollarSign,
      url: '/currency',
      color: 'from-yellow-500 to-yellow-600',
      bgColor: 'bg-yellow-50',
      examples: 'KES, TZS, USD, EUR'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Haraka na Rahisi',
      description: 'Pata matokeo ya haraka bila kuchelewa'
    },
    {
      icon: Globe,
      title: 'Kwa Kiswahili',
      description: 'Huduma kamili kwa lugha ya Kiswahili'
    },
    {
      icon: Calculator,
      title: 'Sahihi',
      description: 'Matokeo sahihi na ya kuaminika'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Kigezo cha{' '}
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-200 bg-clip-text text-transparent">
                Vipimo Vyote
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 leading-relaxed">
              Badili vipimo vyote kwa urahisi - urefu, uzito, kiasi, joto na fedha.
              Huduma ya kwanza ya aina yake kwa Kiswahili!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/length"
                className="btn btn-secondary bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                Anza Kubadili <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kwa Nini Kigezo?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Huduma ya pekee ya kubadili vipimo kwa lugha ya Kiswahili
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Converters Grid */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Chagua Aina ya Kigezo
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tuna aina mbalimbali za vipimo vinavyotumiwa kila siku
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {converterTypes.map((converter, index) => {
              const Icon = converter.icon;
              return (
                <Link
                  key={converter.name}
                  to={converter.url}
                  className="group card hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`h-2 bg-gradient-to-r ${converter.color} rounded-t-lg`}></div>
                  <div className="p-6">
                    <div className={`w-12 h-12 ${converter.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-6 h-6 bg-gradient-to-r ${converter.color} bg-clip-text text-transparent`} style={{ color: 'transparent', backgroundImage: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{converter.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{converter.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">{converter.examples}</span>
                      <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-500 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;