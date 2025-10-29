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
            {/* Placeholder para videos - Reemplaza con tus videos reales */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl font-semibold">Video Demo: RPA en Acción</p>
                  <p className="text-sm text-gray-300 mt-2">Próximamente</p>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">Automatización de Facturas</h4>
                <p className="text-gray-600">Proceso completo de extracción y validación automatizada de facturas.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A7C8F] h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">▶️</div>
                  <p className="text-xl font-semibold">Video Demo: Chatbot</p>
                  <p className="text-sm text-gray-300 mt-2">Próximamente</p>
                </div>
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
