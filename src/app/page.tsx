import React from "react";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <main className="bg-viajes-fondo min-h-screen flex flex-col">
      <Hero 
        title="Tu próximo destino comienza aquí"
        description="Descubrí el mundo con nuestro servicio de concierge premium. Experiencias diseñadas a medida para viajeros que buscan la excelencia."
        buttonBrown="Ver paquetes"
        buttonTransparent="Explorar Destinos"
      />
      <section className="py-20 px-8 bg-viajes-iconos/30"> 
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-viajes-acento text-center mb-10 tracking-wide">
            Componente donde iran los destinos destacados y se veran en forma de tarjetas con imagenes
          </h2>
        </div>
      </section>
    </main>
  );
}
