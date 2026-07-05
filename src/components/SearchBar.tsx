'use client'

import React, { useEffect, useRef, useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const [expand, setExpand] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (expand && inputRef.current) {
      inputRef.current.focus();
    }
  }, [expand]);

  const handleSearch = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!search.trim()) {
      setExpand(false);
      return;
    }
    alert(`Buscando el destino: ${search}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`relative flex items-center transition-all duration-500 ease-in-out h-10 rounded-full ${expand ? "w-64 bg-viajes-fondo/90 border border-viajes-texto/10" : "w-10 bg-transparent"}`}
    >
      <button
        type={expand ? "submit" : "button"}
        onClick={(e) => {
          setExpand(true)
          e.preventDefault();
        }}
        className="absolute left-0 w-10 h-10 flex items-center justify-center text-viajes-texto hover:text-viajes-acento transition-colors z-10 border-2 cursor-pointer rounded-full"
      >
        <Search
          className="w-5 h-5"
        />
      </button>
      <input
        ref={inputRef}
        type="text"
        placeholder="Buscar destinos, paquetes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onBlur={() => {
          if (search.trim() === "") setExpand(false);
        }}
        className={`w-full h-full bg-transparent outline-none text-viajes-texto text-sm placeholder:text-viajes-texto/60 transition-all duration-500 rounded-full ${expand ? "pl-10 pr-4 opacity-100" : "pl-0 pr-0 opacity-0 pointer-events-none"}`}
      />
    </form>
  )
}