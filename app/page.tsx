import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-gradient text-white">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Inversiones Inmobiliarias en Paraguay</h1>
            <p className="text-xl md:text-2xl mb-8">
              Descubra propiedades exclusivas en los mejores barrios de Asunción y todo Paraguay.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/propiedades" className="bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">Ver Propiedades</Link>
              <Link href="/contacto" className="bg-transparent hover:bg-white hover:text-primary border-2 border-white text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105">Contactar Asesor</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured props (uses simple static cards mirroring design) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Propiedades Destacadas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="property-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                <div className="relative">
                  <img src={`https://picsum.photos/seed/home${i}/800/500`} alt="" className="w-full h-64 object-cover" />
                  <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">NUEVO</div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-primary">Propiedad #{i}</h3>
                    <span className="text-secondary font-bold">$000,000</span>
                  </div>
                  <p className="text-gray-600 mb-4">Descripción breve de la propiedad.</p>
                  <Link href="/propiedades" className="block text-center bg-primary hover:bg-secondary text-white py-2 px-4 rounded-lg transition">Ver Detalles</Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/propiedades" className="inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition">
              Ver Todas las Propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">¿Por Qué Elegirnos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {title: "10+ Años de Experiencia", desc:"Líderes en el mercado inmobiliario paraguayo con una trayectoria comprobada."},
              {title: "Ubicaciones Premium", desc:"Propiedades en las zonas más exclusivas y con mayor potencial de valorización."},
              {title: "Asesoría Legal Completa", desc:"Te acompañamos en todo el proceso con nuestro equipo jurídico especializado."}
            ].map((b, idx) => (
              <div className="bg-white p-8 rounded-lg shadow-md text-center" key={idx}>
                <div className="bg-primary/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                  <span className="text-primary text-2xl">★</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{b.title}</h3>
                <p className="text-gray-600">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-xl p-8 md:p-12 shadow-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-bold text-white mb-4">¿Listo para invertir en Paraguay?</h2>
                <p className="text-white/80 mb-6">Nuestros expertos están listos para ayudarte a encontrar la propiedad perfecta según tus necesidades y presupuesto.</p>
                <div className="text-white font-medium space-y-1">
                  <div>Tel: +595 21 123 456</div>
                  <div>Mail: info@investmentsparaguay.com</div>
                </div>
              </div>
              <div className="md:w-1/2 bg-white rounded-lg p-6 shadow-md w-full">
                <h3 className="text-xl font-bold text-primary mb-4">Contáctanos</h3>
                <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                  <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                  <input name="name" placeholder="Nombre completo" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
                  <input type="email" name="email" placeholder="Correo electrónico" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
                  <input name="phone" placeholder="Teléfono" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <textarea name="message" placeholder="Mensaje" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required></textarea>
                  <button className="w-full bg-secondary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition">Enviar Mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
