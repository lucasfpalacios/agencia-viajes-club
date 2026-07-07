import "./globals.css"; 
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-viajes-fondo text-viajes-texto">
        <NavBar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

