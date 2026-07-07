import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    // Usamos un fondo oscuro (puedes ajustar el hex #2c2a28 si tu marca usa otro tono oscuro específico)
    <footer className="bg-[#2c2a28] py-12 px-8 w-full mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* SECCIÓN IZQUIERDA: Título y Copyright */}
        <div className="flex flex-col gap-2">
          <h2 className="text-white text-2xl font-bold tracking-wide">
            Valija Club
          </h2>
          {/* Usamos text-white/60 para darle ese tono grisáceo apagado de la imagen */}
          <p className="text-white/60 text-sm font-medium">
            © {new Date().getFullYear()} Valija Club. All rights reserved.
          </p>
        </div>

        {/* SECCIÓN DERECHA: Enlaces Legales y FAQ */}
        <div className="flex flex-wrap items-center gap-6 md:gap-8 text-white/70 text-sm font-medium">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors duration-300">
            Terms of Service
          </Link>
          <Link href="/travel-insurance" className="hover:text-white transition-colors duration-300">
            Travel Insurance
          </Link>
          <Link href="/faq" className="hover:text-white transition-colors duration-300">
            FAQ
          </Link>
        </div>

      </div>
    </footer>
  );
}