'use client'

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface DestinationProp {
  id: number;
  imageSrc: string;
  label: string;
  titleDestination: string;
  description: string;
  style?: string;
}


export default function DestinationCard({id, imageSrc, label, titleDestination, description, style = ""}: DestinationProp) {
  const rutaDestino = `/destinos/${id}`;

  return(
    <Link 
      href={rutaDestino}
      className={`relative w-full h-80 group rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300 block ${style}`}
    >
      <Image
        src={imageSrc}
        alt={titleDestination}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-6 left-6 right-6 flex flex-col items-start">
        <span className="text-[8px] font-bold bg-viajes-acento text-viajes-fondo rounded-full px-2 py-0.5 uppercase tracking-widest mb-1 drop-shadow-sm">
          {label}
        </span>
        <h3 className="text-2xl font-bold text-white drop-shadow-md mb-1 leading-tight">
          {titleDestination}
        </h3>
        {description && (
          <p className="text-white/80 text-xs font-medium drop-shadow-sm mt-0.5">
            {description}
          </p>
        )}
      </div>
    </Link>
  )
}