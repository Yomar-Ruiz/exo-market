"use client";
import state, { useState } from 'react'

const BotonFavorito = () => {
    const [esFavorito, setEsfavorito] = useState(false)

    return (
    <button
        onClick={() => setEsfavorito(!esFavorito)}
        className={`mt-2 px-3 py-1 rounded text-sm font-medium transition ${
                esFavorito
                    ? "bg-red-500 text-white"
                    : "bg-gray-200 text-gray-700"
            }`}
    >
        {esFavorito ? "En favoritos" : "Marcar como favorito"}
    </button>
  )
}

export default BotonFavorito
