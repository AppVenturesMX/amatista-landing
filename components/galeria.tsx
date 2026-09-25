"use client"

import { useCallback, useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

const fotos = [
  { src: "/images/fachada-modelo.jpg", alt: "Fachada de una casa terminada del desarrollo Punta Azul, con cochera y roof deck" },
  { src: "/images/render-sala-doble-altura.jpg", alt: "Render de sala y comedor de concepto abierto con techo de doble altura" },
  { src: "/images/render-cocina-comedor.jpg", alt: "Render de cocina con isla y comedor integrado" },
  { src: "/images/render-recamara.jpg", alt: "Render de recámara con clóset y balcón" },
  { src: "/images/obra-fachada-avance.jpg", alt: "Fachada de la casa en etapa de avance de obra, con ventanas protegidas" },
  { src: "/images/obra-doble-altura.jpg", alt: "Interior en obra: sala de doble altura con tragaluz y ventanas altas" },
  { src: "/images/obra-pasillo.jpg", alt: "Pasillo del segundo nivel en etapa de obra, con material de acabados" },
  { src: "/images/obra-pasillo-noche.jpg", alt: "Pasillo del segundo nivel en obra, vista hacia el hueco de escalera" },
  { src: "/images/obra-escalera.jpg", alt: "Escalera interior en etapa de obra gris" },
  { src: "/images/obra-cochera.jpg", alt: "Cochera techada en etapa de obra, con vista a la calle del fraccionamiento" },
  { src: "/images/roof-deck-dia.jpg", alt: "Roof deck de día, con vista panorámica hacia el mar a la distancia" },
  { src: "/images/roof-deck-noche.jpg", alt: "Roof deck al atardecer, con acabados terminados" },
]

export function Galeria() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const go = useCallback((dir: number) => {
    setDirection(dir)
    setIndex((prev) => (prev + dir + fotos.length) % fotos.length)
  }, [])

  useEffect(() => {
    const id = setInterval(() => go(1), 5000)
    return () => clearInterval(id)
  }, [go])

  const current = fotos[index]

  return (
    <section id="galeria" className="scroll-mt-20 bg-emerald-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Conoce cada rincón
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            Un recorrido por los tres niveles, el roof deck y las vistas al mar que te esperan.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative mt-12 overflow-hidden rounded-3xl bg-slate-200 shadow-xl shadow-slate-900/10 ring-1 ring-slate-900/5">
            <div className="relative aspect-[4/3] sm:aspect-[16/9]">
              <AnimatePresence initial={false} custom={direction} mode="popLayout">
                <motion.img
                  key={index}
                  src={current.src}
                  alt={current.alt}
                  custom={direction}
                  initial={{ opacity: 0, x: direction >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </AnimatePresence>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/70 to-transparent p-5 sm:p-6">
                <p className="text-sm font-medium text-emerald-50 sm:text-base">
                  {current.alt}
                </p>
              </div>

              <button
                onClick={() => go(-1)}
                aria-label="Foto anterior"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white sm:left-4"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => go(1)}
                aria-label="Foto siguiente"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-slate-800 shadow-md backdrop-blur transition-colors hover:bg-white sm:right-4"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </Reveal>

        {/* Thumbnails */}
        <div className="mt-5 grid grid-cols-4 gap-2 sm:grid-cols-6 sm:gap-3">
          {fotos.map((foto, i) => (
            <button
              key={foto.src}
              onClick={() => {
                setDirection(i > index ? 1 : -1)
                setIndex(i)
              }}
              aria-label={`Ver ${foto.alt}`}
              className={`relative aspect-square overflow-hidden rounded-lg ring-2 transition-all ${
                i === index
                  ? "ring-emerald-500"
                  : "ring-transparent opacity-70 hover:opacity-100"
              }`}
            >
              <img src={foto.src} alt={foto.alt} className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
