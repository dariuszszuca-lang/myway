import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MessageCircle, User, Users, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";
import therapyImage from "@/assets/therapy-session.jpg";
import manPhoneImage from "@/assets/man-phone.jpg";
import familyImage from "@/assets/happy-family.jpg";

const PricingSection = () => {
  const packages = [
    {
      id: 1,
      name: "PAKIET 1",
      price: "9.900",
      color: "gray",
      image: therapyImage,
      features: [
        "4 tygodnie terapia stacjonarna"
      ]
    },
    {
      id: 2,
      name: "PAKIET 2",
      price: "11.900",
      color: "blue",
      image: manPhoneImage,
      features: [
        "4 tygodnie terapia stacjonarna",
        "20 konsultacji indywidualnych po Terapii Stacjonarnej",
        "Grupa na WhatsApp"
      ]
    },
    {
      id: 3,
      name: "PAKIET 3",
      price: "11.900",
      color: "green",
      image: familyImage,
      bonus: "1 tydzień stacjonarny GRATIS",
      features: [
        "4 + 1 tygodnie stacjonarne",
        "20 konsultacji indywidualnych po Terapii Stacjonarnej",
        "Grupa na WhatsApp"
      ],
      popular: true
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-background via-background/95 to-primary/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Cennik
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Wybierz swój pakiet terapeutyczny
          </h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Wybierz pakiet dopasowany do Twoich potrzeb i rozpocznij swoją transformację już dziś
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div 
              key={pkg.id}
              className="relative bg-white rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-300 hover:scale-105 border-8 border-white flex flex-col h-full"
            >
              {/* Header section with gradient */}
              <div className="relative">
                <div className={`h-32 flex flex-col items-center justify-center text-white ${
                  pkg.color === 'gray' ? 'bg-gradient-to-b from-gray-500 to-gray-600' :
                  pkg.color === 'blue' ? 'bg-gradient-to-b from-blue-500 to-blue-600' :
                  'bg-gradient-to-b from-green-500 to-green-600'
                }`}>
                  <div className="px-4 py-2 border-2 border-white rounded-lg mb-2">
                    <h3 className="text-xl font-bold text-white text-center">{pkg.name}</h3>
                  </div>
                  <div className="text-2xl font-bold text-white">{pkg.price} zł</div>
                </div>
                
                {/* Triangle pointer */}
                <div className="flex justify-center">
                  <div className={`w-0 h-0 ${
                    pkg.color === 'gray' ? 'border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-gray-600' :
                    pkg.color === 'blue' ? 'border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-blue-600' :
                    'border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-green-600'
                  }`}></div>
                </div>
              </div>

              {/* Features section with white background - flex-grow to take available space */}
              <div className="px-8 py-6 bg-white flex-grow flex flex-col">
                {/* Red bonus banner for package 3 - positioned above first feature */}
                {pkg.bonus && (
                  <div className="mb-4 flex justify-center">
                    <div className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm font-bold shadow-lg">
                      {pkg.bonus}
                    </div>
                  </div>
                )}
                
                <ul className="space-y-4 flex-grow">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-4">
                      {feature.includes('WhatsApp') ? (
                        <MessageCircle className={`h-6 w-6 flex-shrink-0 ${
                          pkg.color === 'gray' ? 'text-gray-600' :
                          pkg.color === 'blue' ? 'text-blue-600' :
                          'text-green-600'
                        }`} />
                      ) : (
                        <CheckCircle className={`h-6 w-6 flex-shrink-0 ${
                          pkg.color === 'gray' ? 'text-gray-600' :
                          pkg.color === 'blue' ? 'text-blue-600' :
                          'text-green-600'
                        }`} />
                      )}
                      <span className="text-gray-700 leading-relaxed font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image at bottom with rounded corners - always at the bottom */}
              <div className="relative h-56 mx-6 mb-6 overflow-hidden rounded-2xl shadow-lg">
                <img 
                  src={pkg.image} 
                  alt={`${pkg.name} illustration`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Button to contact page - under the image */}
              <div className="px-6 pb-6">
                <Link 
                  to="/kontakt" 
                  target="_blank"
                  className={`block w-full py-3 px-6 rounded-xl font-semibold text-center transition-all duration-300 shadow-lg hover:shadow-xl text-white ${
                    pkg.color === 'gray' ? 'bg-gradient-to-r from-gray-500 to-gray-600 hover:from-gray-600 hover:to-gray-700' :
                    pkg.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700' :
                    'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                  }`}
                >
                  Wybierz pakiet
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Usługi dodatkowe
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {/* Psychotherapist Consultation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center flex flex-col h-full">
              <User className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 flex-shrink-0">Konsultacja z psychoterapeutą</h3>
              <p className="text-2xl font-bold text-blue-400 mb-6 flex-grow flex items-center justify-center">250 zł</p>
              <Link 
                to="/kontakt" 
                target="_blank"
                className="inline-block w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Umów konsultację
              </Link>
            </div>

            {/* Psychiatrist Consultation */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center flex flex-col h-full">
              <Stethoscope className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 flex-shrink-0">Konsultacja z<br />psychiatrą</h3>
              <p className="text-2xl font-bold text-green-400 mb-6 flex-grow flex items-center justify-center">270 zł</p>
              <Link 
                to="/kontakt" 
                target="_blank"
                className="inline-block w-full py-3 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Umów konsultację
              </Link>
            </div>

            {/* Couples Therapy */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 text-center flex flex-col h-full">
              <Users className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2 flex-shrink-0">Terapia<br />dla par</h3>
              <p className="text-2xl font-bold text-purple-400 mb-6 flex-grow flex items-center justify-center">350 zł</p>
              <Link 
                to="/kontakt" 
                target="_blank"
                className="inline-block w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Umów terapię
              </Link>
            </div>
          </div>

          {/* Detox Subsection */}
          <div className="bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl p-8 border border-primary/30">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Detoks dla osób kontynuujących terapię w ośrodku
              </h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {/* 1-day Detox */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Detoks 1-dniowy</h4>
                <p className="text-3xl font-bold text-blue-300 mb-4">1.000 zł</p>
                <Link 
                  to="/kontakt" 
                  target="_blank"
                  className="inline-block w-full py-2 px-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Umów detoks
                </Link>
              </div>
              
              {/* 3-day Detox */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <h4 className="text-xl font-semibold text-white mb-2">Detoks 3-dniowy</h4>
                <p className="text-3xl font-bold text-green-300 mb-4">2.700 zł</p>
                <Link 
                  to="/kontakt" 
                  target="_blank"
                  className="inline-block w-full py-2 px-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Umów detoks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;