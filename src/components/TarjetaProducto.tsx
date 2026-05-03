import Link from "next/link";
import BotonFavorito from "./BotonFavorito";
import Image from "next/image";

interface Props {
  producto: {
    id: number;
    title: string;
    price: number;
    image: string;
  };
}

export default function TarjetaProducto({ producto }: Props) {
  return (
    <div className="group bg-white border border-gray-100 p-6 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col">
      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-2xl bg-gray-100">
        
        <Image 
          src={producto.image} 
          alt={producto.title}
          fill 
          className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      
      <div className="flex-grow">
        <h2 className="text-lg font-bold text-gray-800 line-clamp-1 group-hover:text-green-600 transition-colors">
          {producto.title}
        </h2>
        <p className="text-2xl font-black text-gray-900 mt-2">$ {producto.price}</p>
      </div>
    
      <div className="mt-6 flex flex-col gap-3">
        <BotonFavorito />
        <Link 
          href={`/productos/${producto.id}`}
          className="block text-center bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors shadow-lg"
        >
          Ver detalles
        </Link>
      </div>
    </div>
  );
}