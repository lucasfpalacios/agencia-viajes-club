'use client'

import React from "react";


interface CardProp {
  icon: React.ReactNode,
  title: string,
  description: string
}

export default function CardGeneric({icon, title, description}: CardProp) {
  
  return(
    <div className="bg-viajes-fondo rounded-3xl p-8 flex flex-col items-center text-center gap-4 shadow-xl hover:shadow-md transition-shadow duration-300">
      <div className="w-16 h-16 rounded-full bg-viajes-iconos flex items-center justify-center text-viajes-acento mb-2">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-viajes-texto">
        {title}
      </h3>
      <p className="text-viajes-texto/80 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}