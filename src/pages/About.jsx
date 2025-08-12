import React from 'react';
import { Calculator, Heart, Globe, Users, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Globe,
      title: 'Kwa Kiswahili',
      description: 'Huduma ya kwanza ya kubadili vipimo kwa lugha ya Kiswahili, ikilenga watumiaji wa Afrika Mashariki.'
    },
    {
      icon: Zap,
      title: 'Haraka na Rahisi',
      description: 'Mfumo ulioundwa kwa urahisi wa matumizi na kasi ya juu ya kubadili vipimo mbalimbali.'
    },
    {
      icon: Shield,
      title: 'Sahihi na Salama',
      description: 'Tunatumia fomula za kisayansi zilizothibitishwa kuhakikisha usahihi wa matokeo yote.'
    },
    {
      icon: Users,
      title: 'Kwa Kila Mtu',
      description: 'Imeundwa kwa wanafunzi, wafanyabiashara, wahandisi na kila mtu anayehitaji kubadili vipimo.'
    }
  ];

  const converterTypes = [
    { name: 'Urefu', description: 'Mita, sentimita, futi, inchi, na mengine' },
    { name: 'Uzito', description: 'Kilogramu, gramu, pauni, aunsi, na mengine' },
    { name: 'Kiasi', description: 'Lita, mililita, galoni, vikombe, na mengine' },
    { name: 'Joto', description: 'Celsius, Fahrenheit, Kelvin, na mengine' },
    { name: 'Fedha', description: 'Sarafu za Afrika Mashariki na za kimataifa' }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl flex items-center justify-center shadow-lg">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kuhusu Kigezo
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Kigezo ni huduma ya kwanza ya kubadili vipimo kwa lugha ya Kiswahili, 
            ikiwa na lengo la kurahisisha mchakato wa kubadili vipimo kwa watumiaji wa Afrika Mashariki.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-20 slide-up">
          <div className="card bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
            <div className="text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-orange-600" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dhamira Yetu</h2>
              <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
                Tunajitolea kutoa huduma bora ya kubadili vipimo kwa lugha ya Kiswahili, 
                kuhakikisha kuwa kila mtu anaweza kupata huduma hii muhimu kwa lugha yake ya mama. 
                Tunaamini kuwa teknolojia inapaswa kuwa rahisi na inayoeleweka kwa kila mtu.
              </p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20 slide-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Vipengele Vyetu
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="card hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Available Converters */}
        <div className="mb-20 slide-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Aina za Vipimo Vinavyopatikana
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {converterTypes.map((type, index) => (
              <div key={index} className="card text-center hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack */}
        <div className="mb-20 slide-up">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Teknolojia Tuliyotumia
          </h2>
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
            <div className="text-center">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Kigezo kimeundwa kwa kutumia teknolojia za kisasa za wavuti ili kuhakikisha 
                utendaji bora na uzoefu mzuri wa mtumiaji.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">React</h4>
                  <p className="text-gray-600 text-sm">Maktaba ya JavaScript kwa kuunda mazingira ya mtumiaji</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Vite</h4>
                  <p className="text-gray-600 text-sm">Chombo cha ujenzi wa haraka wa programu za wavuti</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">CSS3</h4>
                  <p className="text-gray-600 text-sm">Mitindo ya kisasa na mazingira yanayojibu</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact/Feedback */}
        <div className="slide-up">
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Maoni na Mapendekezo
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Tunapenda kusikia maoni yako! Kama una mapendekezo ya kuboresha huduma hii 
              au unahitaji msaada, tafadhali usisite kutusiliana nasi.
            </p>
            <p className="text-gray-600">
              Kigezo ni mradi wa huria unaolenga kuboresha mazingira ya teknolojia kwa watumiaji wa Kiswahili.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;