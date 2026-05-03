import Link from "next/link";
import BotonFavorito from "@/components/BotonFavorito";


interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

interface RouteProps {
  params: Promise<{ id: string }>;
}

export default async function DetalleProducto({ params }: RouteProps) {

  const { id } = await params;

  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  const producto: Producto = await res.json();


  if (!producto) {
    return <p className="p-10 text-center text-red-500 font-bold">Producto no encontrado</p>;
  }

  return (
    <main className="min-h-screen bg-white p-6 md:p-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="text-sm font-medium text-green-600 hover:underline mb-8 inline-block">
          ← Volver a la galería
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-4">
          {/* Columna de Imagen */}
          <div className="bg-gray-50 rounded-3xl p-10 flex justify-center items-center shadow-inner">
            <img 
              src={producto.image} 
              alt={producto.title} 
              className="max-h-[400px] object-contain hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Columna de Información */}
          <div>
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full uppercase tracking-wider mb-4">
              {producto.category}
            </span>
            <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
              {producto.title}
            </h1>
            <p className="text-3xl font-light text-gray-800 mt-4">$ {producto.price} USD</p>
            
            <div className="my-8 border-t border-gray-100 pt-8">
              <h3 className="text-sm font-bold text-gray-400 uppercase mb-2">Descripción</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {producto.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gray-900 text-white py-4 rounded-2xl font-bold hover:bg-green-600 transition-all shadow-xl active:scale-95">
                Añadir al carrito
              </button>
              <div className="flex items-center justify-center border rounded-2xl px-4">
                <BotonFavorito />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}