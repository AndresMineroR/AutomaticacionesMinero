import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-gray-200 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#0A2540]">Technology<span className="text-[#2A7C8F]">SMN</span></h1>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#servicios" className="text-gray-700 hover:text-[#0A2540] transition font-medium">Servicios</a>
              <a href="#casos" className="text-gray-700 hover:text-[#0A2540] transition font-medium">Casos de Uso</a>
              <a href="#demos" className="text-gray-700 hover:text-[#0A2540] transition font-medium">Demos</a>
              <a href="#contacto" className="bg-[#0A2540] text-white px-6 py-3 rounded-lg hover:bg-[#1E3A5F] transition">Contacto</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Profesional y limpio */}
      <section className="pt-32 pb-24 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-block bg-[#2A7C8F]/10 px-4 py-2 rounded-full mb-6">
              <p className="text-[#0A2540] text-sm font-semibold">Automatización Empresarial</p>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold text-[#0A2540] mb-6 leading-tight">
              Soluciones tecnológicas para optimizar tus procesos
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Desarrollamos automatizaciones RPA, agentes de inteligencia artificial y aplicaciones personalizadas para empresas que buscan eficiencia y escalabilidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contacto" className="inline-block bg-[#0A2540] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#1E3A5F] transition text-center">
                Solicitar Consultoría
              </a>
              <a href="#servicios" className="inline-block border-2 border-[#0A2540] text-[#0A2540] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition text-center">
                Ver Servicios
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Diseño profesional tipo corporativo */}
      <section id="servicios" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#0A2540] mb-4">Nuestros Servicios</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnología aplicada a procesos empresariales
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* RPA */}
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] p-10 rounded-2xl text-white hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-[#2A7C8F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Automatización RPA</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Implementación de robots de software con UiPath para automatizar tareas repetitivas, procesamiento de datos y flujos de trabajo empresariales.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Análisis y diseño de procesos automatizables</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Desarrollo e implementación de bots</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Mantenimiento y optimización continua</span>
                </li>
              </ul>
            </div>

            {/* Agentes IA */}
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A7C8F] p-10 rounded-2xl text-white hover:shadow-2xl transition">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-4">Agentes de Inteligencia Artificial</h4>
              <p className="text-gray-200 mb-6 leading-relaxed">
                Desarrollo de agentes autónomos que procesan información, toman decisiones y ejecutan acciones basadas en modelos de IA avanzados.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Procesamiento de lenguaje natural</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Análisis predictivo y toma de decisiones</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-3">•</span>
                  <span>Integración con sistemas existentes</span>
                </li>
              </ul>
            </div>

            {/* Chatbots */}
            <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-[#2A7C8F] hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#0A2540] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-4">Chatbots Conversacionales</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Asistentes virtuales inteligentes para atención al cliente, calificación de leads y soporte automatizado multicanal.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Disponibilidad 24/7</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Integración con WhatsApp, web y redes sociales</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Personalización según tu negocio</span>
                </li>
              </ul>
            </div>

            {/* Desarrollo de Software */}
            <div className="bg-white p-10 rounded-2xl border-2 border-gray-200 hover:border-[#2A7C8F] hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#2A7C8F] rounded-xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-4">Aplicaciones Móviles y Web</h4>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Desarrollo de aplicaciones personalizadas, responsive y escalables para iOS, Android y plataformas web.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Aplicaciones nativas y multiplataforma</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Sitios web corporativos y e-commerce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#2A7C8F] mr-3">•</span>
                  <span>Sistemas internos a medida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de uso */}
      <section id="casos" className="py-24 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#0A2540] mb-4">Casos de Uso</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Aplicaciones prácticas de nuestras soluciones
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Procesamiento de Facturas</h4>
              <p className="text-gray-600">
                Extracción automática de datos de facturas, validación y registro en sistemas contables.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">📧</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Gestión de Correos</h4>
              <p className="text-gray-600">
                Clasificación automática, respuestas predefinidas y extracción de información clave.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">📈</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Reportes Automatizados</h4>
              <p className="text-gray-600">
                Generación de reportes periódicos consolidando información de múltiples fuentes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">🤝</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Atención al Cliente</h4>
              <p className="text-gray-600">
                Chatbots que resuelven consultas frecuentes y escalan casos complejos al equipo humano.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔄</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Migración de Datos</h4>
              <p className="text-gray-600">
                Transferencia automatizada entre sistemas legacy y plataformas modernas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
              <div className="text-4xl mb-4">✅</div>
              <h4 className="text-xl font-bold text-[#0A2540] mb-3">Control de Calidad</h4>
              <p className="text-gray-600">
                Verificación automática de procesos y alertas ante inconsistencias detectadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Videos demostrativos */}
      <section id="demos" className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-[#0A2540] mb-4">Demostraciones</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ejemplos de automatizaciones en funcionamiento
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/9bZkp7q19f0" 
                  title="Demo RPA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">Automatización RPA con UiPath</h4>
                <p className="text-gray-600">Procesamiento automatizado de documentos y datos estructurados.</p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/jNQXAC9IVRw" 
                  title="Demo Agente IA"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">Agente IA en Acción</h4>
                <p className="text-gray-600">Interacción inteligente y procesamiento de lenguaje natural.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto - Profesional y directo */}
      <section id="contacto" className="py-24 px-4 bg-[#0A2540]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-4">Solicitar Consultoría</h3>
            <p className="text-xl text-gray-300">
              Cuéntanos sobre tu proyecto y te contactaremos en menos de 24 horas
            </p>
          </div>
          
          <form className="bg-white rounded-2xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nombre</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                  placeholder="tu@email.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Empresa</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                placeholder="Nombre de tu empresa"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">¿En qué podemos ayudarte?</label>
              <textarea 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition h-32"
                placeholder="Describe brevemente tu necesidad o proyecto..."
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#0A2540] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#1E3A5F] transition"
            >
              Enviar Solicitud
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-gray-300 mb-4">O contáctanos directamente</p>
            <a 
              href="https://wa.me/5215631116812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
              className="inline-flex items-center bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/5215631116812?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-[#0A2540] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Technology<span className="text-[#2A7C8F]">SMN</span></h3>
              <p className="text-gray-400">
                Soluciones tecnológicas empresariales con enfoque en automatización y desarrollo de software.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#servicios" className="hover:text-white transition">Automatización RPA</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Agentes IA</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Chatbots</a></li>
                <li><a href="#servicios" className="hover:text-white transition">Desarrollo de Software</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Email: contacto@technologysmn.com</li>
                <li>WhatsApp: +52 1 563 111 6812</li>
                <li className="pt-4 flex space-x-4">
                  <a href="#" className="hover:text-white transition">LinkedIn</a>
                  <a href="#" className="hover:text-white transition">GitHub</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 TechnologySMN. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
