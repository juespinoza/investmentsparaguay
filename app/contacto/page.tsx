export default function ContactoPage() {
  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Nuestros expertos están listos para ayudarte a encontrar la propiedad perfecta
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {title:"Teléfono", lines:["+595 21 123 456","+595 981 123 456"]},
              {title:"Correo Electrónico", lines:["info@investmentsparaguay.com","ventas@investmentsparaguay.com"]},
              {title:"Oficina Central", lines:["Av. España 1234, Asunción","Horario: Lunes a Viernes 8:00 - 18:00"]}
            ].map((c, idx) => (
              <div key={idx} className="contact-info-card bg-gray-50 p-8 rounded-lg shadow-md transition duration-300">
                <h3 className="text-xl font-bold text-primary mb-3">{c.title}</h3>
                {c.lines.map((l, i) => <p key={i} className="text-gray-600">{l}</p>)}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Envíanos un mensaje</h2>
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
                <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Nombre completo</label>
                    <input name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Correo electrónico</label>
                    <input type="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Teléfono</label>
                  <input name="phone" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Asunto</label>
                  <select name="subject" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary">
                    <option>Consulta sobre propiedad</option>
                    <option>Quiero vender mi propiedad</option>
                    <option>Asesoría de inversión</option>
                    <option>Otra consulta</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Mensaje</label>
                  <textarea name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary" required></textarea>
                </div>
                <button className="w-full bg-secondary hover:bg-accent text-white font-bold py-4 px-6 rounded-lg transition transform hover:scale-105">Enviar Mensaje</button>
              </form>
            </div>

            {/* Map placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visítanos</h2>
              <div className="rounded-lg shadow-md h-[400px] bg-gray-100 flex items-center justify-center">
                <span className="text-gray-500">[Mapa aquí: integra tu API key de Google Maps]</span>
              </div>
              <div className="mt-6 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">Oficinas en Paraguay</h3>
                <ul className="space-y-3">
                  <li>
                    <h4 className="font-bold">Asunción</h4>
                    <p className="text-gray-600">Av. España 1234, Edificio Sky, Piso 5</p>
                    <p className="text-gray-500 text-sm">Lunes a Viernes: 8:00 - 18:00</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Ciudad del Este</h4>
                    <p className="text-gray-600">Av. San Blas 567, Centro Comercial del Este</p>
                    <p className="text-gray-500 text-sm">Lunes a Viernes: 9:00 - 17:00</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Encarnación</h4>
                    <p className="text-gray-600">Av. Rodríguez de Francia 891, Local 3</p>
                    <p className="text-gray-500 text-sm">Lunes a Viernes: 9:00 - 17:00</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-primary mb-12">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {q:"¿Cómo puedo agendar una visita a una propiedad?", a:"Puedes contactarnos por teléfono o completar el formulario indicando la propiedad de tu interés. Un agente te contactará para coordinar la visita."},
              {q:"¿Qué documentos necesito para comprar una propiedad en Paraguay?", a:"Cédula de identidad (o pasaporte), antecedentes y constancia de ingresos. Para extranjeros varía según el país. Nuestro equipo legal te asesora."},
              {q:"¿Qué zonas de Paraguay ofrecen mejor rentabilidad para inversión?", a:"Carmelitas, Villa Morra, Ñu Guazú y áreas cercanas a proyectos de infraestructura suelen destacar. Agendemos una consulta para tu caso."},
              {q:"¿Ofrecen financiamiento para la compra de propiedades?", a:"Trabajamos con los principales bancos y también con opciones directas de algunos proyectos. Consultanos para evaluar tu perfil."},
              {q:"¿Cómo es el proceso de compra de una propiedad en Paraguay?", a:"Selección, reserva, verificación legal, firma de escritura y registro. Te acompañamos en todo el proceso."}
            ].map((item, idx) => (
              <details key={idx} className="border border-gray-200 rounded-lg">
                <summary className="cursor-pointer p-6 text-lg font-bold text-primary">{item.q}</summary>
                <div className="px-6 pb-6 text-gray-600">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
