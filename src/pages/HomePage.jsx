import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [selectedDevice, setSelectedDevice] = useState('iphone');

  const deviceContent = {
    iphone: {
      title: "Especialistas en iPhones",
      description: "Restauramos y reparamos tu iPhone con precisión y cuidado. Nuestro equipo de expertos certificados utiliza tecnología de vanguardia y componentes originales para garantizar la mejor calidad en cada reparación.",
      features: [
        "Diagnóstico Profesional",
        "Reparación Express",
        "Garantía Certificada"
      ],
      image: "https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg"
    },
    watch: {
      title: "Expertos en Apple Watch",
      description: "Servicio especializado para tu Apple Watch. Desde problemas de pantalla hasta issues de batería, nuestro equipo está capacitado para resolver cualquier inconveniente.",
      features: [
        "Calibración Precisa",
        "Servicio Premium",
        "Soporte Técnico"
      ],
      image: "https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg"
    },
    ipad: {
      title: "Servicio Especializado para iPads",
      description: "Mantenemos tu iPad funcionando al máximo rendimiento. Nuestros técnicos están capacitados para resolver cualquier problema, desde pantallas rotas hasta problemas de software.",
      features: [
        "Reparación Integral",
        "Optimización Completa",
        "Mantenimiento Preventivo"
      ],
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg"
    },
    macbook: {
      title: "Reparación Profesional de MacBooks",
      description: "Servicio técnico especializado para tu MacBook. Utilizamos herramientas de última generación y componentes originales para garantizar reparaciones de alta calidad.",
      features: [
        "Diagnóstico Avanzado",
        "Reparación Especializada",
        "Actualización de Hardware"
      ],
      image: "https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg"
    }
  };

  const stats = [
    {
      number: "98%",
      title: "Satisfacción",
      description: "Clientes satisfechos con nuestro servicio"
    },
    {
      number: "24h",
      title: "Rapidez",
      description: "Tiempo promedio de reparación"
    },
    {
      number: "10+",
      title: "Experiencia",
      description: "Años de experiencia en el sector"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-custom-green-dark via-custom-green to-custom-green-dark">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            Tecnología de Vanguardia en
            <span className="block text-white/90">Reparación de Dispositivos Apple</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-3xl mx-auto animate-fade-in delay-100">
            Expertos certificados en reparación y mantenimiento de dispositivos Apple.
            Calidad garantizada y servicio premium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Link to="/contacto" className="bg-white text-custom-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
              Solicitar Diagnóstico
            </Link>
            <Link to="/servicios" className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Explorar Servicios
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white"></div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-custom-green-light rounded-2xl p-8 text-center transform transition-all duration-500 hover:scale-105 hover:shadow-xl">
                <div className="text-4xl font-bold text-custom-green mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-custom-green mb-2">{stat.title}</div>
                <div className="text-custom-green/80">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-custom-green-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-green mb-4">
              Nuestros Servicios Especializados
            </h2>
            <p className="text-lg text-custom-green/80 max-w-3xl mx-auto">
              Ofrecemos soluciones profesionales para todos tus dispositivos Apple
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(deviceContent).map((device) => (
              <button
                key={device}
                onClick={() => setSelectedDevice(device)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedDevice === device
                    ? 'bg-custom-green text-white shadow-lg'
                    : 'bg-white text-custom-green hover:bg-custom-green-light'
                }`}
              >
                {device.charAt(0).toUpperCase() + device.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-custom-green mb-4">
                {deviceContent[selectedDevice].title}
              </h3>
              <p className="text-custom-green/80 mb-6">
                {deviceContent[selectedDevice].description}
              </p>
              <ul className="space-y-4">
                {deviceContent[selectedDevice].features.map((feature, index) => (
                  <li key={index} className="flex items-center text-custom-green/80">
                    <span className="w-2 h-2 bg-custom-green rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to="/servicios"
                className="inline-block mt-8 bg-custom-green text-white px-8 py-4 rounded-lg font-semibold hover:bg-custom-green-dark transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Ver Detalles
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-105">
                <img
                  src={deviceContent[selectedDevice].image}
                  alt={deviceContent[selectedDevice].title}
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-custom-green/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-custom-green text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Necesitas ayuda con tu dispositivo?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Nuestro equipo de expertos está listo para ayudarte. Contacta con nosotros para un diagnóstico gratuito.
          </p>
          <Link
            to="/contacto"
            className="inline-block bg-white text-custom-green px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
          >
            Contactar Ahora
          </Link>
        </div>
      </section>
    </div>
  );
}