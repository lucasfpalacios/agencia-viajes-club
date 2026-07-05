import React from "react";

interface NavButtonProps {
  texto: string
}



export default function NavButton({texto}: NavButtonProps) {
  return(
    <button className="bg-transparent text-viajes-texto px-4 py-2 rounded-full hover:bg-viajes-acento hover:text-viajes-fondo transition-all duration-300 font-bold cursor-pointer">
      {texto}
    </button>
  )
}