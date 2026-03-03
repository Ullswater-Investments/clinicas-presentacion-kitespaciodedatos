"use client"

const hitos = [
  {
    num: "01",
    when: "A la firma del acuerdo",
    amount: "1.500 €",
    title: "Arranque y Conector EHDS",
    concept:
      "Despliegue técnico del conector al Espacio Europeo de Datos de Salud.",
    justification:
      "Este pago inicial es un requisito técnico y administrativo indispensable para demostrar ante la administración que la implementación del conector ha comenzado.",
    color: "bg-[oklch(0.55_0.18_250)]",
    barWidth: "w-1/12",
  },
  {
    num: "02",
    when: "Mes 3 · Tras recibir la subvención",
    amount: "10.000 €",
    title: "Inicio de Integración Odoo",
    concept:
      "Comienzo del desarrollo del sistema de gestión a medida, inventario, facturación y conciliación bancaria.",
    justification:
      "Se activa una vez la clínica haya recibido el ingreso de la subvención estimada en 30.000 €, sin riesgo de tesorería.",
    color: "bg-[oklch(0.45_0.17_250)]",
    barWidth: "w-5/12",
  },
  {
    num: "03",
    when: "Fin de proyecto · Validación clínica",
    amount: "Subvención − 11.500 €",
    title: "Entrega y Aceptación Final",
    concept:
      "Liquidación del proyecto. Cálculo: (Subvención Total Recibida) − 1.500 € (Hito 1) − 10.000 € (Hito 2).",
    justification:
      "El pago solo se realiza tras la finalización, despliegue y validación del sistema por parte del equipo clínico.",
    color: "bg-[oklch(0.38_0.15_250)]",
    barWidth: "w-full",
  },
]

export default function Slide12Payments() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">
            Cronograma de Pagos
          </p>
          <h2 className="text-white text-xl font-bold">
            Timeline de Hitos y Estructura de Pagos
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">12 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left: timeline */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Visual timeline bar */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-5 font-bold">
              Línea de Tiempo del Proyecto (6 meses)
            </p>
            <div className="relative">
              {/* Track */}
              <div className="h-2 bg-[oklch(0.88_0.06_240)] rounded-full w-full mb-6" />
              {/* Markers */}
              <div className="absolute top-0 left-0 flex w-full justify-between -translate-y-1/2">
                {[
                  { pos: "0%", label: "Firma", sublabel: "Hito 1", amount: "1.500 €" },
                  { pos: "41.6%", label: "Mes 3", sublabel: "Hito 2", amount: "10.000 €" },
                  { pos: "100%", label: "Mes 6", sublabel: "Hito 3", amount: "Resto" },
                ].map((m, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-1"
                    style={{ position: "absolute", left: m.pos, transform: "translateX(-50%)" }}
                  >
                    <div className="w-4 h-4 rounded-full bg-[oklch(0.38_0.15_250)] border-2 border-white shadow" />
                  </div>
                ))}
              </div>
              {/* Labels below bar */}
              <div className="flex justify-between mt-2">
                {[
                  { label: "Firma del acuerdo", sublabel: "Hito 1 · 1.500 €" },
                  { label: "Mes 3 · Tras subvención", sublabel: "Hito 2 · 10.000 €" },
                  { label: "Mes 6 · Validación final", sublabel: "Hito 3 · Resto" },
                ].map((item, i) => (
                  <div key={i} className={`flex flex-col ${i === 1 ? "items-center" : i === 2 ? "items-end" : "items-start"} max-w-28`}>
                    <p className="text-xs font-bold text-[oklch(0.25_0.05_240)] leading-tight">{item.label}</p>
                    <p className="text-xs text-[oklch(0.55_0.18_250)] font-mono">{item.sublabel}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Hito cards */}
          <div className="flex flex-col gap-4 flex-1">
            {hitos.map((hito) => (
              <div
                key={hito.num}
                className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg overflow-hidden flex"
              >
                {/* Left accent */}
                <div className={`${hito.color} w-1.5 shrink-0`} />
                <div className="flex-1 p-5 flex gap-5">
                  {/* Number + amount */}
                  <div className="flex flex-col items-center justify-center gap-1 w-24 shrink-0">
                    <div className={`${hito.color} w-10 h-10 rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{hito.num}</span>
                    </div>
                    <p className="text-[oklch(0.38_0.15_250)] font-bold text-sm text-center leading-tight">
                      {hito.amount}
                    </p>
                  </div>
                  {/* Content */}
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[oklch(0.55_0.03_240)] text-xs font-mono">{hito.when}</p>
                        <p className="text-[oklch(0.15_0.02_240)] font-bold text-sm mt-0.5">{hito.title}</p>
                      </div>
                    </div>
                    <p className="text-[oklch(0.35_0.04_240)] text-xs leading-relaxed">
                      <span className="font-bold text-[oklch(0.38_0.15_250)]">Concepto: </span>
                      {hito.concept}
                    </p>
                    <div className="bg-[oklch(0.94_0.01_240)] rounded p-2">
                      <p className="text-[oklch(0.45_0.04_240)] text-xs leading-relaxed">
                        <span className="font-bold">Justificación: </span>
                        {hito.justification}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: summary */}
        <div className="w-60 flex flex-col gap-4">
          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest font-bold">
              Cálculo del Hito 3
            </p>
            <div className="bg-[oklch(0.28_0.13_250)] rounded p-3 flex flex-col gap-2">
              {[
                { label: "Subvención recibida", value: "30.000 €" },
                { label: "Menos Hito 1", value: "− 1.500 €" },
                { label: "Menos Hito 2", value: "− 10.000 €" },
              ].map((row) => (
                <div key={row.label} className="flex justify-between text-xs">
                  <span className="text-[oklch(0.78_0.14_85)]">{row.label}</span>
                  <span className="text-white font-mono">{row.value}</span>
                </div>
              ))}
              <div className="border-t border-[oklch(0.50_0.15_250)] pt-2 flex justify-between">
                <span className="text-[oklch(0.78_0.14_85)] text-xs font-bold">Hito 3 (estimado)</span>
                <span className="text-[oklch(0.78_0.14_85)] font-bold text-sm font-mono">18.500 €</span>
              </div>
            </div>
            <p className="text-[oklch(0.80_0.07_240)] text-xs leading-relaxed">
              El importe exacto se ajusta a la cantidad final concedida por la administración.
            </p>
          </div>

          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Principio Clave
            </p>
            <p className="text-[oklch(0.35_0.04_240)] text-sm leading-relaxed">
              Los pagos de los Hitos 2 y 3 se activan{" "}
              <strong className="text-[oklch(0.38_0.15_250)]">solo después</strong> de que la clínica
              haya recibido los fondos europeos en su cuenta. Nunca antes.
            </p>
            <div className="mt-auto bg-[oklch(0.88_0.06_240)] rounded p-3">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono font-bold uppercase tracking-widest mb-1">
                Flujo de caja clínica
              </p>
              <p className="text-[oklch(0.35_0.04_240)] text-xs">
                Entrada subvención &rarr; Pago proveedor &rarr; Sistema entregado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
