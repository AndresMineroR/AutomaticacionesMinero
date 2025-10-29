import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0A2540] z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-white">Automatizaciones Minero</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#servicios" className="text-gray-200 hover:text-white transition">Servicios</a>
              <a href="#ventajas" className="text-gray-200 hover:text-white transition">Ventajas</a>
              <a href="#videos" className="text-gray-200 hover:text-white transition">Demos</a>
              <a href="#contacto" className="bg-[#2A7C8F] text-white px-6 py-2 rounded-lg hover:bg-[#1d5661] transition">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#0A2540] via-[#1E3A5F] to-[#2A7C8F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Automatiza tu negocio con <span className="text-[#2A7C8F] bg-white px-4 py-2 rounded">RPA</span>
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Especialistas en automatización con UiPath. Liberamos tiempo valioso automatizando procesos repetitivos para que tu equipo se enfoque en lo importante.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-[#2A7C8F] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1d5661] transition shadow-xl">
                Solicitar Consulta Gratis
              </a>
              <a href="#servicios" className="bg-white text-[#0A2540] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-xl">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-[#0A2540] mb-4">Nuestros Servicios</h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Soluciones tecnológicas que impulsan la eficiencia de tu empresa
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* RPA - Destacado */}
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] p-8 rounded-xl shadow-xl transform hover:scale-105 transition">
              <div className="text-[#2A7C8F] text-5xl mb-4">🤖</div>
              <h4 className="text-2xl font-bold text-white mb-3">Automatización RPA</h4>
              <p className="text-gray-300 mb-4">
                Especialistas certificados en UiPath. Automatizamos procesos empresariales para maximizar productividad.
              </p>
              <span className="inline-block bg-[#2A7C8F] text-white px-4 py-2 rounded-full text-sm font-semibold">
                Especialidad
              </span>
            </div>

            {/* Chatbots */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-[#2A7C8F] text-5xl mb-4">💬</div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-3">Chatbots Inteligentes</h4>
              <p className="text-gray-600 mb-4">
                Desarrollamos asistentes virtuales que atienden a tus clientes 24/7 con inteligencia artificial.
              </p>
            </div>

            {/* Apps Móviles */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-[#2A7C8F] text-5xl mb-4">📱</div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-3">Apps Móviles</h4>
              <p className="text-gray-600 mb-4">
                Creamos aplicaciones móviles nativas y multiplataforma para iOS y Android.
              </p>
            </div>

            {/* Sitios Web */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition">
              <div className="text-[#2A7C8F] text-5xl mb-4">🌐</div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-3">Sitios Web</h4>
              <p className="text-gray-600 mb-4">
                Desarrollo de sitios web modernos, rápidos y optimizados para tu negocio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="ventajas" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-[#0A2540] mb-16">¿Por qué Automatizaciones Minero?</h3>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="bg-[#2A7C8F] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">⚡</span>
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">ROI Comprobado</h4>
              <p className="text-gray-600">
                Nuestros clientes recuperan su inversión en menos de 6 meses con ahorros de hasta 70% en tiempo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#1E3A5F] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">🎯</span>
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Expertos en UiPath</h4>
              <p className="text-gray-600">
                Certificados y con años de experiencia implementando soluciones RPA robustas y escalables.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-[#0A2540] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-3xl font-bold">🤝</span>
              </div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Soporte Continuo</h4>
              <p className="text-gray-600">
                Acompañamiento post-implementación para garantizar el éxito de tus automatizaciones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos demostrativos */}
      <section id="videos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-[#0A2540] mb-4">Demos en Acción</h3>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Mira cómo transformamos procesos manuales en automatizaciones eficientes
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 - UiPath Demo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                  title="Demo RPA UiPath"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">Automatización con UiPath</h4>
                <p className="text-gray-600">Ejemplo de automatización RPA procesando datos en tiempo real.</p>
              </div>
            </div>

            {/* Video 2 - Chatbot Demo */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/watch?v=CXJJDxg7Mos" 
                  title="Demo Chatbot"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">Chatbot Inteligente</h4>
                <p className="text-gray-600">Asistente virtual con IA atendiendo consultas en tiempo real.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1E3A5F]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold text-center text-white mb-4">¿Listo para Automatizar?</h3>
          <p className="text-center text-gray-300 mb-12 text-lg">
            Agenda una consulta gratuita y descubre cómo podemos optimizar tus procesos
          </p>
          
          <form className="bg-white rounded-xl shadow-2xl p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#0A2540] font-semibold mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F]"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-[#0A2540] font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F]"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-[#0A2540] font-semibold mb-2">Empresa</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F]"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#0A2540] font-semibold mb-2">¿Qué necesitas automatizar?</label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] h-32"
                placeholder="Cuéntanos sobre tu proceso..."
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2A7C8F] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#1d5661] transition shadow-lg"
            >
              Enviar Consulta
            </button>
          </form>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/5215631116812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20automatización" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50 flex items-center justify-center"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Automatizaciones Minero</h2>
          <p className="text-gray-400 mb-6">Transformando procesos, impulsando resultados</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Email</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 Automatizaciones Minero. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
