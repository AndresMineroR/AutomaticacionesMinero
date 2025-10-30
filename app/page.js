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
              <a href="#resultados" className="text-gray-200 hover:text-white transition">Resultados</a>
              <a href="#demos" className="text-gray-200 hover:text-white transition">Demos</a>
              <a href="#contacto" className="bg-[#2A7C8F] text-white px-6 py-2 rounded-lg hover:bg-[#1d5661] transition">Consulta Gratis</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Neuromarketing aplicado */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-[#0A2540] via-[#1E3A5F] to-[#2A7C8F]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Prueba social inmediata */}
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
              <p className="text-white text-sm">✨ Más de 50 empresas ya automatizaron con nosotros</p>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              ¿Cansado de perder <span className="text-red-400">tiempo y dinero</span><br/>
              en tareas repetitivas?
            </h2>
            <p className="text-2xl text-gray-200 mb-4 max-w-4xl mx-auto font-light">
              Recupera hasta <span className="font-bold text-[#2A7C8F] bg-white px-3 py-1 rounded">40 horas semanales</span> con nuestras automatizaciones RPA y agentes IA
            </p>
            <p className="text-lg text-gray-300 mb-10 max-w-3xl mx-auto">
              Mientras tu competencia sigue haciendo todo manual, tú estarás escalando sin contratar más personal
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contacto" className="bg-[#2A7C8F] text-white px-10 py-5 rounded-lg text-xl font-bold hover:bg-[#1d5661] transition shadow-2xl transform hover:scale-105">
                Quiero Mi Auditoría Gratuita →
              </a>
              <a href="#demos" className="bg-white text-[#0A2540] px-10 py-5 rounded-lg text-xl font-bold hover:bg-gray-100 transition shadow-2xl">
                Ver Casos Reales
              </a>
            </div>
            
            {/* Urgencia y escasez */}
            <p className="text-yellow-300 text-sm mt-6 font-semibold">⏰ Solo 3 cupos disponibles este mes para auditorías sin costo</p>
          </div>
        </div>
      </section>

      {/* Problema/Agitación - Conectar emocionalmente */}
      <section className="py-16 px-4 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Te suena familiar?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-700">
              <p className="text-xl font-semibold mb-2">😓 Tu equipo hace lo mismo todos los días</p>
              <p className="text-gray-300">Copiar datos, enviar emails, generar reportes... 5 horas diarias perdidas</p>
            </div>
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-700">
              <p className="text-xl font-semibold mb-2">💸 Los errores humanos te cuestan caro</p>
              <p className="text-gray-300">Un dato mal ingresado = cliente perdido, multa o retraso costoso</p>
            </div>
            <div className="bg-red-900/20 p-6 rounded-lg border border-red-700">
              <p className="text-xl font-semibold mb-2">📈 No puedes escalar sin contratar</p>
              <p className="text-gray-300">Cada nuevo cliente significa más personal, más costos, más dolores de cabeza</p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios - Enfoque en beneficios, no características */}
      <section id="servicios" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-4">
            La Solución: Automatización Inteligente
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-xl">
            No más tareas manuales. No más errores. Solo <span className="font-bold text-[#2A7C8F]">resultados medibles</span> desde la semana 1
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* RPA - Destacado con beneficio emocional */}
            <div className="bg-gradient-to-br from-[#0A2540] to-[#1E3A5F] p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-black px-4 py-1 text-sm font-bold rounded-bl-lg">
                MÁS VENDIDO
              </div>
              <div className="text-[#2A7C8F] text-6xl mb-4">🤖</div>
              <h4 className="text-3xl font-bold text-white mb-4">Automatización RPA con UiPath</h4>
              <p className="text-gray-300 mb-6 text-lg">
                <span className="font-bold text-white">Imagina esto:</span> Tus facturas se procesan solas. Tus reportes se generan automáticamente. Tu CRM se actualiza sin que nadie toque nada.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>Ahorra 30-40 horas semanales por empleado</span>
                </li>
                <li className="flex items-start text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>Elimina el 99.9% de errores humanos</span>
                </li>
                <li className="flex items-start text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>ROI visible en menos de 6 meses</span>
                </li>
                <li className="flex items-start text-gray-200">
                  <span className="text-green-400 mr-3 text-xl">✓</span>
                  <span>Tu equipo se enfoca en tareas estratégicas</span>
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-yellow-300 font-semibold">💡 Caso real: Cliente redujo 85% el tiempo de procesamiento de órdenes</p>
              </div>
            </div>

            {/* Agentes IA - NUEVO */}
            <div className="bg-gradient-to-br from-[#1E3A5F] to-[#2A7C8F] p-10 rounded-2xl shadow-2xl transform hover:scale-105 transition relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-purple-500 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                NUEVO 🔥
              </div>
              <div className="text-white text-6xl mb-4">🧠</div>
              <h4 className="text-3xl font-bold text-white mb-4">Agentes IA Autónomos</h4>
              <p className="text-gray-200 mb-6 text-lg">
                <span className="font-bold text-white">La próxima generación:</span> Agentes que no solo automatizan, sino que <span className="font-bold">piensan, deciden y aprenden</span> de tus procesos.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start text-gray-100">
                  <span className="text-yellow-300 mr-3 text-xl">⚡</span>
                  <span>Atiende clientes 24/7 sin descanso</span>
                </li>
                <li className="flex items-start text-gray-100">
                  <span className="text-yellow-300 mr-3 text-xl">⚡</span>
                  <span>Analiza datos y toma decisiones en tiempo real</span>
                </li>
                <li className="flex items-start text-gray-100">
                  <span className="text-yellow-300 mr-3 text-xl">⚡</span>
                  <span>Se adapta y mejora con cada interacción</span>
                </li>
                <li className="flex items-start text-gray-100">
                  <span className="text-yellow-300 mr-3 text-xl">⚡</span>
                  <span>Integración con tus sistemas existentes</span>
                </li>
              </ul>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-yellow-300 font-semibold">🚀 El 73% de empresas que implementan IA aumentan ingresos en el primer año</p>
              </div>
            </div>
          </div>

          {/* Servicios complementarios */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-2 border-gray-100">
              <div className="text-[#2A7C8F] text-5xl mb-4">💬</div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-3">Chatbots Inteligentes</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Tu asistente virtual que nunca duerme. Responde consultas, califica leads y agenda reuniones mientras duermes.
              </p>
              <p className="text-[#2A7C8F] font-semibold">→ Convierte más visitantes en clientes reales</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition border-2 border-gray-100">
              <div className="text-[#2A7C8F] text-5xl mb-4">📱</div>
              <h4 className="text-2xl font-bold text-[#0A2540] mb-3">Apps Móviles & Web</h4>
              <p className="text-gray-600 mb-4 text-lg">
                Herramientas personalizadas que tu equipo realmente usará. Intuitivas, rápidas y conectadas a tus automatizaciones.
              </p>
              <p className="text-[#2A7C8F] font-semibold">→ Controla todo desde tu smartphone</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resultados - Prueba social con números */}
      <section id="resultados" className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1E3A5F]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Números Que Hablan Por Sí Solos
          </h3>
          <p className="text-center text-gray-300 mb-16 text-xl">
            Resultados reales de empresas que dijeron "sí" a la automatización
          </p>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#2A7C8F] mb-2">85%</div>
              <p className="text-white text-lg">Reducción en tiempo de procesamiento</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#2A7C8F] mb-2">$45K</div>
              <p className="text-white text-lg">Ahorro promedio anual por empleado</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#2A7C8F] mb-2">99.9%</div>
              <p className="text-white text-lg">Precisión en tareas automatizadas</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <div className="text-5xl font-bold text-[#2A7C8F] mb-2">24/7</div>
              <p className="text-white text-lg">Operación continua sin descansos</p>
            </div>
          </div>

          <div className="mt-16 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <p className="text-white text-xl text-center italic">
              "En 3 meses recuperamos la inversión. Ahora procesamos 10x más órdenes con el mismo equipo. Fue la mejor decisión que tomamos este año."
            </p>
            <p className="text-[#2A7C8F] text-center mt-4 font-semibold">
              — Director de Operaciones, Empresa de Logística
            </p>
          </div>
        </div>
      </section>

      {/* Videos demostrativos */}
      <section id="demos" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-[#0A2540] mb-4">
            Míralo Con Tus Propios Ojos
          </h3>
          <p className="text-center text-gray-600 mb-16 max-w-3xl mx-auto text-xl">
            No es magia, es tecnología. Ve cómo transformamos procesos reales en automatizaciones que funcionan
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Video 1 - Corregido */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative pb-[56.25%] h-0">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/9bZkp7q19f0" 
                  title="Demo RPA UiPath"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">🤖 RPA Procesando 1000 Facturas en Minutos</h4>
                <p className="text-gray-600">Lo que antes tomaba 3 días, ahora toma 15 minutos. Sin errores. Sin estrés.</p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                <h4 className="text-xl font-bold text-[#0A2540] mb-2">🧠 Agente IA Atendiendo Clientes en Tiempo Real</h4>
                <p className="text-gray-600">Respuestas instantáneas, calificación automática de leads y seguimiento sin intervención humana.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final con urgencia */}
      <section className="py-16 px-4 bg-yellow-400">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl md:text-5xl font-bold text-[#0A2540] mb-4">
            ⏰ Tu Competencia Ya Está Automatizando
          </h3>
          <p className="text-xl text-gray-800 mb-8">
            Cada día que esperas es dinero que dejas sobre la mesa. ¿Cuánto más puedes permitirte perder?
          </p>
          <a href="#contacto" className="inline-block bg-[#0A2540] text-white px-12 py-6 rounded-lg text-2xl font-bold hover:bg-[#1E3A5F] transition shadow-2xl transform hover:scale-105">
            Agendar Mi Auditoría Gratuita Ahora →
          </a>
          <p className="text-sm text-gray-700 mt-4">✅ Sin compromiso | ✅ Análisis personalizado | ✅ Resultados garantizados</p>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-20 px-4 bg-gradient-to-br from-[#0A2540] to-[#1E3A5F]">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Descubre Cuánto Dinero Estás Perdiendo
          </h3>
          <p className="text-center text-gray-300 mb-12 text-xl">
            Agenda tu <span className="text-[#2A7C8F] font-bold">auditoría gratuita</span> y te mostramos exactamente qué procesos automatizar primero
          </p>
          
          <form className="bg-white rounded-2xl shadow-2xl p-10">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[#0A2540] font-semibold mb-2">Nombre Completo *</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                  placeholder="Juan Pérez"
                  required
                />
              </div>
              <div>
                <label className="block text-[#0A2540] font-semibold mb-2">Email Corporativo *</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                  placeholder="juan@empresa.com"
                  required
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className="block text-[#0A2540] font-semibold mb-2">Empresa *</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition"
                placeholder="Nombre de tu empresa"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-[#0A2540] font-semibold mb-2">¿Qué proceso te está quitando más tiempo? *</label>
              <textarea 
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition h-32"
                placeholder="Ejemplo: Procesamos 500 facturas al mes manualmente y nos toma 2 días completos..."
                required
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block text-[#0A2540] font-semibold mb-2">¿Cuántas personas trabajan en ese proceso?</label>
              <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#2A7C8F] transition">
                <option>1-2 personas</option>
                <option>3-5 personas</option>
                <option>6-10 personas</option>
                <option>Más de 10 personas</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2A7C8F] text-white py-5 rounded-lg font-bold text-xl hover:bg-[#1d5661] transition shadow-xl transform hover:scale-105"
            >
              🚀 Solicitar Mi Auditoría Gratuita
            </button>
            
            <p className="text-center text-gray-500 text-sm mt-4">
              📞 Respuesta en menos de 24 horas | 🔒 Tus datos están protegidos
            </p>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white text-lg mb-4">¿Prefieres hablar directamente?</p>
            <a 
              href="https://wa.me/5215631116812?text=Hola,%20quiero%20una%20auditoría%20gratuita%20para%20automatizar%20mis%20procesos" 
              className="inline-flex items-center bg-green-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-600 transition shadow-xl"
            >
              <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Botón flotante de WhatsApp */}
      <a 
        href="https://wa.me/5215631116812?text=Hola,%20quiero%20automatizar%20procesos%20en%20mi%20empresa" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition transform hover:scale-110 z-50 flex items-center justify-center group"
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
          <p className="text-gray-400 mb-6">Transformando procesos con RPA y Agentes IA</p>
          <div className="flex justify-center space-x-6 text-gray-400">
            <a href="#" className="hover:text-white transition">LinkedIn</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="mailto:contacto@automatizacionesminero.com" className="hover:text-white transition">Email</a>
          </div>
          <p className="text-gray-500 text-sm mt-8">© 2024 Automatizaciones Minero. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
