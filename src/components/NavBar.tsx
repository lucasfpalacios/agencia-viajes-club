import React from "react"
import NavButton from "./Buttons"
import SearchBar from "./SearchBar"


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
  return(
      <div className="flex bg-viajes-fondo p-4 items-center z-50">
        <div className="flex absolute left-6">
          <h1 className="flex items-center text-viajes-acento text-3xl font-semibold">
            Valija Club
          </h1>
        </div>
        <div className="w-full flex justify-center items-center space-x-2 ">
        {textList.map((item) => (
          <NavButton
            key={item.id}
            texto={item.title}
          />
        ))}
        </div>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <div className="w-48">
            <button className="flex justify-center p-3 w-full bg-viajes-acento text-viajes-fondo font-semibold rounded-full">
              Reserva Ahora
            </button>
          </div>
        </div>
      </div>
  )
}
