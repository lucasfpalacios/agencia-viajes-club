import "./globals.css"; 
import NavBar from "../components/NavBar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-viajes-fondo text-viajes-texto">
        <NavBar />
        {children}
      </body>
    </html>
  );
}

