import { BedDouble, Building2, Waves, Warehouse, Car } from "lucide-react"
import { Reveal } from "@/components/reveal"

const espacios = [
  {
    icon: BedDouble,
    title: "3 Recámaras + 4 Baños",
    description:
      "La recámara principal está en el segundo nivel, con baño completo y vestidor propio.",
  },
  {
    icon: Building2,
    title: "Concepto abierto de doble altura",
    description:
      "Sala con techo de doble altura, cocina con isla y comedor integrado en el primer nivel, con balcón en el segundo.",
  },
  {
    icon: Waves,
    title: "Roof deck con vista al mar",
    description:
      "Terraza propia en la azotea con vista hacia el Pacífico a la distancia, con orientación poniente para el atardecer.",
  },
  {
    icon: Warehouse,
    title: "Fraccionamiento tipo resort",
    description:
      "Alberca, jacuzzi, sauna, gimnasio, canchas de tenis, salón de eventos, restaurantes, áreas infantiles y seguridad 24/7.",
  },
  {
    icon: Car,
    title: "Cochera techada para 2 autos",
    description:
      "Casa nueva (0 años de antigüedad), con 2 estacionamientos techados y cuarto de lavado en la planta baja.",
  },
]

export function Espacios() {
  return (
    <section id="espacios" className="scroll-mt-20 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-balance text-center text-3xl font-extrabold text-slate-800 sm:text-4xl">
            Diseño contemporáneo en 3 niveles
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">
            157 m² de construcción sobre 120 m² de terreno, casa nueva con
            roof deck propio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {espacios.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08}>
              <div className="flex h-full gap-5 rounded-2xl border border-emerald-100 bg-white p-7 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 text-emerald-600">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
