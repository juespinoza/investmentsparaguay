import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-white pt-12 pb-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Investments Paraguay</h3>
            <p className="mb-4 text-white/80">
              Líderes en inversiones inmobiliarias premium en Paraguay con más de 10 años de experiencia.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition">Facebook</a>
              <a href="#" className="text-white hover:text-accent transition">Instagram</a>
              <a href="#" className="text-white hover:text-accent transition">LinkedIn</a>
              <a href="#" className="text-white hover:text-accent transition">YouTube</a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/80 hover:text-accent transition">Inicio</Link></li>
              <li><Link href="/propiedades" className="text-white/80 hover:text-accent transition">Propiedades</Link></li>
              <li><Link href="/blog" className="text-white/80 hover:text-accent transition">Blog</Link></li>
              <li><Link href="/contacto" className="text-white/80 hover:text-accent transition">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Zonas</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-accent transition">Asunción</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition">Central</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition">Alto Paraná</a></li>
              <li><a href="#" className="text-white/80 hover:text-accent transition">San Bernardino</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contacto</h3>
            <address className="not-italic text-white/80">
              <p className="flex items-center mb-2">Av. España 1234, Asunción</p>
              <p className="flex items-center mb-2">+595 21 123 456</p>
              <p className="flex items-center">info@investmentsparaguay.com</p>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 mb-4 md:mb-0">© {new Date().getFullYear()} Investments Paraguay. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 hover:text-accent transition text-sm">Política de Privacidad</a>
            <a href="#" className="text-white/70 hover:text-accent transition text-sm">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
