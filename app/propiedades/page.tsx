"use client";

import { useMemo, useState } from "react";
import { properties, type Property, type PropertyType } from "@/lib/data";
import clsx from "clsx";

const filters: { label: string; value: "all" | PropertyType }[] = [
  { label: "Todos", value: "all" },
  { label: "Apartamentos", value: "apartment" },
  { label: "Casas", value: "house" },
  { label: "Terrenos", value: "land" },
  { label: "Comercial", value: "commercial" }
];

function Card({ p }: { p: Property }) {
  return (
    <div className="property-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
      <div className="relative">
        <img src={p.image} alt={p.title} className="w-full h-64 object-cover" />
        {p.tag && <div className="absolute top-4 left-4 bg-secondary text-white px-3 py-1 rounded-full text-sm font-bold">{p.tag}</div>}
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-primary">{p.title}</h3>
          <span className="text-secondary font-bold">{p.price}</span>
        </div>
        <p className="text-gray-600 mb-4">{p.description}</p>
        <div className="flex flex-wrap items-center text-gray-500 gap-4 mb-4">
          <span>{p.area}</span>
          {typeof p.beds === "number" && <span>{p.beds} Dorm.</span>}
          {typeof p.baths === "number" && <span>{p.baths} Baños</span>}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{p.location}</span>
          <a href="#" className="text-secondary font-medium hover:underline">Ver Detalles</a>
        </div>
      </div>
    </div>
  );
}

export default function PropiedadesPage() {
  const [active, setActive] = useState<"all" | PropertyType>("all");
  const list = useMemo(() => {
    if (active === "all") return properties;
    return properties.filter(p => p.type === active);
  }, [active]);

  return (
    <main>
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Propiedades en Paraguay</h1>
              <p className="text-white/80">Encuentra tu propiedad ideal en las mejores zonas del país</p>
            </div>
            <div className="mt-4 md:mt-0">
              <div className="relative">
                <input type="text" placeholder="Buscar por zona, tipo..." className="pl-4 pr-4 py-2 rounded-lg bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-white shadow-sm">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-lg font-bold text-primary mb-2">Filtrar por:</h3>
            <div className="flex flex-wrap gap-2">
              {filters.map(f => (
                <button key={f.value} onClick={() => setActive(f.value)} className={clsx("filter-card px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-primary hover:text-white", {"active-filter": active===f.value})}>
                  {f.label}
                </button>
              ))}
            </div>
          </div>
          <div>
            <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-secondary">
              <option>Ordenar por: Destacados</option>
              <option>Precio: Menor a Mayor</option>
              <option>Precio: Mayor a Menor</option>
              <option>Área: Menor a Mayor</option>
              <option>Área: Mayor a Menor</option>
              <option>Recientes</option>
            </select>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map(p => <Card key={p.id} p={p} />)}
          </div>

          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">‹</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">1</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">2</a>
              <a href="#" className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">›</a>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Recibe las mejores oportunidades</h2>
          <p className="mb-8">Suscríbete a nuestro newsletter y recibe en tu correo las propiedades exclusivas antes que nadie.</p>
          <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_KEY" />
            <input type="email" name="email" placeholder="Tu correo electrónico" className="flex-grow px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-gray-800" required />
            <button className="bg-primary hover:bg-accent text-white font-bold py-3 px-6 rounded-lg transition" type="submit">Suscribirme</button>
          </form>
        </div>
      </section>
    </main>
  );
}
