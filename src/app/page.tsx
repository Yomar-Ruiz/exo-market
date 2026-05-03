import TarjetaProducto from "@/components/TarjetaProducto"; // Importamos el componente

interface Producto {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default async function Home() {
try {
    const respuesta = await fetch("https://fakestoreapi.com/products?limit=9", {
      // Esto le dice a Next.js que si falla, intente de nuevo o maneje el error
      cache: 'no-store' 
    });

    if (!respuesta.ok) {
      throw new Error("Error al conectar con la tienda");
    }

  return (
    <main className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800">
        Eco-Market <span className="text-green-600">Digital</span> 🌿
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {productos.map((item) => (
          // Usamos el componente y le pasamos el producto como "prop"
          <TarjetaProducto key={item.id} producto={item} />
        ))}
      </div>
    </main>
  );
}
