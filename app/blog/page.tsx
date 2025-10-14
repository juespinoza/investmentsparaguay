"use client";

import { useMemo, useState } from "react";
import { articles } from "@/lib/data";
import clsx from "clsx";

const categories = [
  {key: "all", label: "Todas las categorías"},
  {key: "market", label: "Mercado Inmobiliario"},
  {key: "investment", label: "Inversiones"},
  {key: "legal", label: "Aspectos Legales"},
  {key: "tips", label: "Consejos"},
  {key: "neighborhoods", label: "Barrios"}
] as const;

export default function BlogPage() {
  const [active, setActive] = useState<typeof categories[number]["key"]>("all");
  const list = useMemo(() => active === "all" ? articles : articles.filter(a => a.category === active), [active]);

  return (
    <main>
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Inmobiliario</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">Consejos, noticias y análisis sobre el mercado inmobiliario en Paraguay</p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            {categories.map(c => (
              <button key={c.key} onClick={() => setActive(c.key)} className={clsx("category-btn px-4 py-2 rounded-full bg-gray-100 text-gray-800 text-sm font-medium hover:bg-primary hover:text-white", {"bg-primary text-white": active===c.key})}>
                {c.label}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12 md:flex">
            <div className="md:w-1/2">
              <img src={articles[0].image} alt={articles[0].title} className="w-full h-full object-cover" />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="uppercase tracking-wide text-sm text-secondary font-semibold mb-1">Mercado Inmobiliario</div>
              <h2 className="text-3xl font-bold text-primary mb-4">{articles[0].title}</h2>
              <p className="text-gray-600 mb-6">{articles[0].excerpt}</p>
              <div className="flex items-center">
                <img src="https://picsum.photos/seed/author/120" alt="Autor" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{articles[0].author}</p>
                  <p className="text-xs text-gray-500">Publicado el {articles[0].date} · {articles[0].readTime} lectura</p>
                </div>
              </div>
              <a href="#" className="mt-6 inline-block bg-primary hover:bg-secondary text-white font-bold py-3 px-6 rounded-lg transition">Leer artículo completo</a>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.slice(1).map(a => (
              <div key={a.id} className="article-card bg-white rounded-lg overflow-hidden shadow-lg transition duration-300">
                <img src={a.image} alt={a.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-semibold text-secondary">{categories.find(c=>c.key===a.category)?.label?.split(" ")[0]}</span>
                    <span className="text-xs text-gray-500">{a.readTime} lectura</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{a.title}</h3>
                  <p className="text-gray-600 mb-4">{a.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{a.date}</span>
                    <a href="#" className="text-secondary font-medium hover:underline">Leer más</a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <nav className="inline-flex rounded-md shadow">
              <a href="#" className="px-4 py-2 rounded-l-md border border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">‹</a>
              <a href="#" className="px-4 py-2 border-t border-b border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">1</a>
              <a href="#" className="px-4 py-2 rounded-r-md border border-gray-300 bg-white text-primary font-medium hover:bg-gray-50">›</a>
            </nav>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Recibe las últimas noticias inmobiliarias</h2>
          <p className="mb-8">Suscríbete a nuestro newsletter y mantente informado sobre el mercado paraguayo.</p>
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
