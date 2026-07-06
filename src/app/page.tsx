import React from "react";
import Hero from "../components/Hero";
import DestinationCard from "../components/CardDestination";
import Link from "next/link";

const Destinations = [
  {
    id: 1,
    imageSrc: "/assets/images/patagonia-argentina.png",
    label: "Aventura",
    titleDestination: "Patagonia, Argentina",
    description: "Desde $1,200 USD",
    style: "md:col-span-2"
  },
  {
    id: 2,
    imageSrc: "/assets/images/santorini.png",
    label: "Relajo",
    titleDestination: "Santorini, Grecia",
    description: "Desde $2,500 USD",
    style: ""
  },
  {
    id: 3,
    imageSrc: "/assets/images/kyoto.png",
    label: "Cultura",
    titleDestination: "Kyoto, Japón",
    description: "",
    style: ""
  },
  {
    id: 4,
    imageSrc: "/assets/images/safari-kenia.png",
    label: "Exótico",
    titleDestination: "Masai Mara, Kenia",
    description: "",
    style: "md:col-span-2"
  },

]

export default function Home() {
  const rutaDestino = ``;

  return (
    <main className="bg-viajes-fondo min-h-screen flex flex-col">
      <Hero 
        title="Tu próximo destino comienza aquí"
        description="Descubrí el mundo con nuestro servicio de concierge premium. Experiencias diseñadas a medida para viajeros que buscan la excelencia."
        buttonBrown="Ver paquetes"
        buttonTransparent="Explorar Destinos"
      />
      <section className="py-20 px-8 bg-viajes-iconos/30"> 
        <div className="max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="flex flex-col max-w-sm">
              <h2 className="text-l md:text-xl font-bold text-viajes-texto tracking-wide uppercase mb-3 text-left">
                Destinos Destacados
              </h2>
              <p className="text-viajes-texto/70 text-s md:text-sm text-left leading-relaxed">
                Nuestra selección exclusiva de lugares extraordinarios, preparados para brindarte una experiencia inolvidable.
              </p>
            </div>
            <Link
              href={rutaDestino}
              className="flex-none">
              <button className="group flex items-center gap-2 text-viajes-acento font-bold text-xs uppercase tracking-wider hover:opacity-80 transition-all duration-300 cursor-pointer whitespace-nowrap">
                Ver todos
                <span className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                  &rarr;
                </span>
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Destinations.map((destination)=> (
              <DestinationCard 
                key={destination.id}
                id={destination.id}
                imageSrc={destination.imageSrc}
                label={destination.label}
                titleDestination={destination.titleDestination}
                description={destination.description}
                style={destination.style}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
