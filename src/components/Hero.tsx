import React from "react"
import Image from "next/image"

interface PropHero {
  title: string,
  description: string,
}

export default function Hero({title, description}: PropHero) {
  return(
    <section className="relative w-full h-screen">
      <Image
        src="/assets/images/hero-viajes.png"
        alt="Destino de viaje"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 tracking-wide shadow-black drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white text-lg md:text-xl max-w-2xl drop-shadow-md">
          {description}
        </p>
        {/* Un botón de Llamada a la Acción (Call to Action) opcional */}
        <div>
          <button className="mt-8 bg-viajes-acento text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-viajes-acento transition-all duration-300 cursor-pointer">
            Ver paquetes 
          </button>
          <button className="mt-8 ml-5 border-2 text-white px-8 py-3 rounded-full font-bold hover:bg-viajes-iconos hover:text-viajes-acento transition-all duration-300 cursor-pointer">
            Explorar Destinos
          </button>
        </div>
      </div>
    </section>
  )
}