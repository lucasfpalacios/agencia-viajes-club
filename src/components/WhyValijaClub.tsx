import React from "react";
import CardGeneric from "./CardGeneric";
import { Headphones, BadgeCheck, PlaneTakeoff } from "lucide-react";


const CardInformation = [
  {
    icon: <Headphones className="w-8 h-8 opacity-80" />,
    title: "Servicio Personalizado",
    description: "Tu viaje es único. Diseñamos itinerarios a medida que se adaptan a tus gustos, ritmo y expectativas, con asistencia 24/7."
  },
  {
    icon: <BadgeCheck className="w-8 h-8 opacity-80" />,
    title: "Experiencia Comprobada",
    description: "Años de trayectoria y alianzas con los mejores proveedores globales garantizan que cada detalle de tu viaje sea de calidad premium."
  },
  {
    icon: <PlaneTakeoff className="w-8 h-8 opacity-80" />,
    title: "Cero Estrés",
    description: "Nos encargamos de toda la logística compleja, desde vuelos y traslados hasta reservas exclusivas, para que solo te preocupes por disfrutar."
  }
]

export default function WhyValijaClub() {
  return (
    <section className="py-24 px-8 bg-viajes-iconos/30">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-bold text-viajes-texto text-center mb-16 tracking-wide">
          Por qué viajar con Valija Club
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CardInformation.map((card, index) => (
            <CardGeneric 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}