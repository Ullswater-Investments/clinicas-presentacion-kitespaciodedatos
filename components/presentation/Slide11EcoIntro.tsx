"use client"

export default function Slide11EcoIntro() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.38_0.15_250)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.28_0.13_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">
            Condiciones Económicas
          </p>
          <h2 className="text-white text-xl font-bold">
            Estructura Económica y Garantía de "Coste Cero" Real
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">11 / 13</span>
        </div>
      </div>

      {/* Body */}
      <div className="flex p-10 gap-8 items-stretch">
        {/* Left: intro text + model summary */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Intro statement */}
          <div className="bg-[oklch(0.28_0.13_250)] rounded-xl p-6">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
              Principio Central del Modelo
            </p>
            <p className="text-white text-base leading-relaxed">
              Nuestro modelo de trabajo garantiza que la clínica financia la modernización tecnológica{" "}
              <strong className="text-[oklch(0.78_0.14_85)]">
                exclusivamente a través de los fondos europeos
              </strong>
              , asumiendo nosotros el riesgo de la gestión.
            </p>
          </div>

          {/* Three pillars */}
          <div className="grid grid-cols-3 gap-4 flex-1">
            {[
              {
                icon: "€",
                title: "Financiado 100% por la Subvención",
                body: "La clínica no adelanta capital propio. El proyecto arranca y concluye con fondos europeos.",
              },
              {
                icon: "⚖",
                title: "Riesgo Gestionado por el Proveedor",
                body: "Asumimos la carga burocrática, técnica y el riesgo de no obtención de la ayuda.",
              },
              {
                icon: "✓",
                title: "Sin Deuda ni Obligación Extra",
                body: "Si la subvención es inferior a 25.000 €, el alcance se reduce. Nunca se genera deuda.",
              },
            ].map((p) => (
              <div
                key={p.title}
                className="bg-[oklch(0.45_0.17_250)] rounded-xl p-5 flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[oklch(0.78_0.14_85)] flex items-center justify-center">
                  <span className="text-[oklch(0.25_0.05_240)] font-bold text-lg">{p.icon}</span>
                </div>
                <p className="text-white font-bold text-sm leading-tight">{p.title}</p>
                <p className="text-[oklch(0.80_0.07_240)] text-xs leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: summary box */}
        <div className="w-64 flex flex-col gap-4">
          <div className="bg-[oklch(0.78_0.14_85)] rounded-xl p-5 flex flex-col gap-4">
            <p className="text-[oklch(0.20_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Resumen del Modelo
            </p>
            {[
              { label: "Subvención solicitada", value: "30.000 €" },
              { label: "Pago inicial (Hito 1)", value: "1.500 €" },
              { label: "Pago en mes 3 (Hito 2)", value: "10.000 €" },
              { label: "Pago final (Hito 3)", value: "Importe restante" },
              { label: "Gasto clínica de su bolsillo", value: "0 €" },
            ].map((row) => (
              <div
                key={row.label}
                className="flex items-start justify-between gap-2 border-b border-[oklch(0.65_0.12_85)] pb-2 last:border-0"
              >
                <p className="text-[oklch(0.25_0.05_240)] text-xs leading-tight">{row.label}</p>
                <p className="text-[oklch(0.20_0.05_240)] font-bold text-xs whitespace-nowrap">{row.value}</p>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.28_0.13_250)] rounded-xl p-5 flex-1 flex flex-col justify-center gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">
              Referencia normativa
            </p>
            <p className="text-[oklch(0.88_0.04_240)] text-xs leading-relaxed">
              Kit Espacio de Datos de Salud — Convocatoria 2025. Fondo co-financiado por la Unión Europea
              a través del Programa PRTR / Next Generation EU.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
