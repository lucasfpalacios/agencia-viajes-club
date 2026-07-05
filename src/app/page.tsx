import React from "react";
import Hero from "../components/Hero";


export default function Home() {
  return (
    <div className="bg-viajes-fondo min-h-screen">
      <Hero 
        title="Tu próximo destino comienza aquí"
        description="Descubrí el mundo con nuestro servicio de concierge premium. Experiencias diseñadas a medida para viajeros que buscan la excelencia."
      />
      <div className="bg-viajes-iconos">
        Destinos destacados
      </div>
      <div className="bg-viajes-fondo ">
        Porque viajar con Valija Club
      </div>
    </div>
  );
}
