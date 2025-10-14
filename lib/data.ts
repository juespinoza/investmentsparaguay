export type PropertyType = "apartment" | "house" | "land" | "commercial";

export interface Property {
  id: string;
  title: string;
  price: string;
  area: string;
  beds?: number;
  baths?: number;
  type: PropertyType;
  location: string;
  tag?: "NUEVO" | "DESTACADO" | "OFERTA" | "VENTA" | "ALQUILER" | "INVERSIÓN";
  image: string;
  description: string;
}

export const properties: Property[] = [
  { id: "1", title: "Penthouse en Carmelitas", price: "$450,000", area: "180m²", beds: 3, baths: 2, type: "apartment", location: "Carmelitas, Asunción", tag: "NUEVO", image: "https://picsum.photos/seed/p1/800/500", description: "Exclusivo penthouse con vista panorámica a la ciudad de Asunción." },
  { id: "2", title: "Casa en San Bernardino", price: "$320,000", area: "220m²", beds: 4, baths: 3, type: "house", location: "San Bernardino", tag: "DESTACADO", image: "https://picsum.photos/seed/p2/800/500", description: "Hermosa casa a metros del lago Ypacaraí con amplio jardín y piscina." },
  { id: "3", title: "Departamento en Villa Morra", price: "$275,000", area: "120m²", beds: 2, baths: 2, type: "apartment", location: "Villa Morra, Asunción", tag: "OFERTA", image: "https://picsum.photos/seed/p3/800/500", description: "Moderno departamento en el corazón de Villa Morra con amenities premium." },
  { id: "4", title: "Terreno en Ciudad del Este", price: "$180,000", area: "1,200m²", type: "land", location: "Ciudad del Este", tag: "INVERSIÓN", image: "https://picsum.photos/seed/p4/800/500", description: "Terreno comercial en zona de alto crecimiento con excelente acceso." },
  { id: "5", title: "Local Comercial en Centro", price: "$2,500/mes", area: "85m²", type: "commercial", location: "Centro, Asunción", tag: "ALQUILER", image: "https://picsum.photos/seed/p5/800/500", description: "Local en planta baja con excelente visibilidad y tránsito peatonal." },
  { id: "6", title: "Casa Familiar en Lambaré", price: "$290,000", area: "190m²", beds: 3, baths: 2, type: "house", location: "Lambaré", tag: "VENTA", image: "https://picsum.photos/seed/p6/800/500", description: "Amplia casa familiar con parque arbolado y amplios espacios sociales." }
];

export interface Article {
  id: string;
  title: string;
  category: "market" | "investment" | "legal" | "tips" | "neighborhoods";
  author: string;
  date: string;
  readTime: string;
  image: string;
  excerpt: string;
}

export const articles: Article[] = [
  { id: "a1", title: "Tendencias del mercado inmobiliario en Paraguay 2023", category: "market", author: "Carlos Benítez", date: "15 Julio, 2023", readTime: "8 min", image: "https://picsum.photos/seed/a1/1200/630", excerpt: "Un análisis detallado de las tendencias que están marcando el mercado de bienes raíces en Paraguay este año." },
  { id: "a2", title: "Guía completa para inversores extranjeros en Paraguay", category: "investment", author: "Equipo IPY", date: "12 Junio, 2023", readTime: "5 min", image: "https://picsum.photos/seed/a2/640/360", excerpt: "Todo lo que necesitas saber para invertir en bienes raíces en Paraguay como extranjero." },
  { id: "a3", title: "Los 5 barrios con mayor proyección en Asunción", category: "neighborhoods", author: "Equipo IPY", date: "28 Mayo, 2023", readTime: "6 min", image: "https://picsum.photos/seed/a3/640/360", excerpt: "Zonas que están atrayendo más inversiones y por qué deberías considerarlas." },
  { id: "a4", title: "Qué verificar antes de comprar una propiedad en Paraguay", category: "legal", author: "Equipo Legal", date: "14 Mayo, 2023", readTime: "7 min", image: "https://picsum.photos/seed/a4/640/360", excerpt: "Lista de documentos y verificaciones legales esenciales para una compra segura." },
  { id: "a5", title: "10 consejos para vender tu propiedad más rápido", category: "tips", author: "Equipo Ventas", date: "5 Mayo, 2023", readTime: "4 min", image: "https://picsum.photos/seed/a5/640/360", excerpt: "Estrategias comprobadas para presentar tu propiedad de manera atractiva." },
  { id: "a6", title: "El impacto de los nuevos desarrollos urbanos", category: "market", author: "Equipo IPY", date: "22 Abril, 2023", readTime: "5 min", image: "https://picsum.photos/seed/a6/640/360", excerpt: "Cómo la infraestructura está cambiando el panorama inmobiliario de Asunción." }
];
