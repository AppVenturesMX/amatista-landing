export function SiteFooter() {
  return (
    <footer className="border-t border-emerald-100 bg-slate-50 py-10">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <span className="text-lg font-bold text-slate-800">
          Amatista, Punta Azul
        </span>
        <p className="mt-4 text-sm leading-relaxed text-slate-500">
          Precio expresado en dólares americanos (USD). Propiedad en
          construcción: las fotos incluyen renders de diseño y avance de
          obra real; los acabados finales pueden variar respecto a los
          renders. Cuota de mantenimiento del fraccionamiento: $150 USD/mes,
          incluye acceso a las amenidades. Precio, disponibilidad y
          condiciones de financiamiento están sujetos a cambio sin previo
          aviso.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          <a
            href="/docs/AVISO-DE-PRIVACIDAD-MYPO-GLOBAL.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-emerald-700"
          >
            Aviso de privacidad
          </a>
        </p>
        <p className="mt-4 text-sm text-slate-500">
          Este sitio y su contenido son propiedad y responsabilidad de Mypo
          Global Business, S.A.P.I. de C.V.
        </p>
        <p className="mt-4 text-sm text-slate-500">
          © 2026 Mypo Global Business, S.A.P.I. de C.V. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}
