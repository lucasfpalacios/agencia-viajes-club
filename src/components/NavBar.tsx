'use client'

import NavButton from "./Buttons"
import SearchBar from "./SearchBar"
import React, { useState } from "react"
import { Menu, X  } from "lucide-react" 
const textList = [
  {
    id: 0,
    title: "Inicio",
  },
  {
    id: 1,
    title: "Destinos",
  },
  {
    id: 2,
    title: "Paquetes",
  },
  {
    id: 3,
    title: "Sobre Nosotros",
  },
  {
    id: 4,
    title: "Contacto",
  },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return(
      <nav className="absolute top-0 left-0 w-full h-20 bg-viajes-iconos z-50">
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-center px-6 md:px-8">
          <div className="flex-1 flex justify-start items-center">
            <h1 className="text-viajes-acento text-3xl font-semibold tracking-wide drop-shadow-md cursor-pointer">
              Valija Club
            </h1>
          </div>  
        <div className="hidden md:flex flex-none items-center justify-center space-x-1 lg:space-x-4">
        {textList.map((item) => (
          <NavButton
            key={item.id}
            texto={item.title}
          />
        ))}
        </div>
        <div className="flex-1 flex justify-end items-center space-x-3 md:space-x-4">
          <SearchBar />
          <button className="hidden md:block px-6 py-2.5 bg-viajes-acento text-viajes-fondo font-semibold rounded-full hover:bg-white hover:text-viajes-acento transition-all duration-300 shadow-md whitespace-nowrap text-sm cursor-pointer">
            Reserva Ahora
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-viajes-fondo hover:text-viajes-acento p-2 transition-colors cursor-pointer z-50"          
            >
            {menuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
          </button>
        </div>
      </div>
      <div 
        className={`md:hidden absolute top-20 left-0 w-full bg-viajes-iconos backdrop-blur-md transition-all duration-500 ease-in-out shadow-lg overflow-hidden flex flex-col items-center py-6 space-y-4 z-40 ${ menuOpen ? "max-h-96 opacity-100 border-b border-viajes-texto/10" : "max-h-0 opacity-0 pointer-events-none"}`}
      >
        {textList.map((item) => (
          <div key={item.id} onClick={() => setMenuOpen(false)}>
            <NavButton texto={item.title} />
          </div>
        ))}
        <button 
          onClick={() => setMenuOpen(false)}
          className="w-4/5 py-3 bg-viajes-acento text-viajes-fondo font-semibold rounded-full shadow-md text-center text-sm cursor-pointer"
          >
          Reserva Ahora
        </button>
      </div>
    </nav>
  )
}
