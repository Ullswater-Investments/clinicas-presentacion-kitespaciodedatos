"use client"

const problems = [
  {
    icon: "📄",
    title: "Desconexión de Albaranes",
    desc: "Dificultad para conciliar los múltiples paquetes recibidos con las facturas de proveedores. El personal debe revisar manualmente cada entrega.",
  },
  {
    icon: "🔍",
    title: "Falta de Trazabilidad de Costes",
    desc: "Imposibilidad de imputar el coste exacto de los materiales (ej. un implante específico) a la factura final del paciente.",
  },
  {
    icon: "📊",
    title: "Carga Contable Elevada",
    desc: "El contable recibe información desestructurada, dificultando la conciliación bancaria y la liquidación de impuestos.",
  },
]

export default function Slide2Challenge() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Diagnóstico</p>
          <h2 className="text-white text-xl font-bold">Desafíos Actuales en la Gestión Clínica y Administrativa</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">02 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              Las clínicas dentales manejan un <strong>alto volumen de material crítico</strong> (implantes,
              biomateriales) y de uso general. Actualmente, la{" "}
              <strong className="text-[oklch(0.38_0.15_250)]">
                desconexión entre el flujo clínico y el flujo administrativo
              </strong>{" "}
              genera ineficiencias, pérdida de trazabilidad de costes y una alta carga manual para la contabilidad.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-[oklch(0.38_0.15_250)] rounded-lg p-4 flex gap-4 items-start shadow-sm"
              >
                <div className="w-10 h-10 bg-[oklch(0.88_0.06_240)] rounded-lg flex items-center justify-center text-xl shrink-0">
                  {p.icon}
                </div>
                <div>
                  <p className="font-bold text-[oklch(0.25_0.05_240)] text-sm">{p.title}</p>
                  <p className="text-[oklch(0.45_0.03_240)] text-xs mt-1 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column – infographic */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Flujo Actual — Colapsado
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Proveedor entrega", color: "bg-[oklch(0.55_0.18_250)]" },
                { label: "Albarán en papel", color: "bg-[oklch(0.6_0.15_250)]" },
                { label: "Clasificación manual", color: "bg-[oklch(0.65_0.12_250)]", warning: true },
                { label: "Conciliación manual", color: "bg-[oklch(0.7_0.10_250)]", warning: true },
                { label: "Contable procesa", color: "bg-[oklch(0.75_0.08_250)]", warning: true },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`h-8 rounded flex items-center justify-between px-3 text-white text-xs font-medium flex-1 ${step.color}`}
                  >
                    <span>{step.label}</span>
                    {step.warning && <span className="text-[oklch(0.78_0.14_85)]">⚠</span>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[oklch(0.55_0.03_240)] text-xs mt-1">
              Cada paso manual introduce errores y demoras en el ciclo administrativo.
            </p>
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Impacto Estimado</p>
            <div className="flex flex-col gap-2 mt-1">
              {[
                { metric: "~3h/día", label: "en gestión de albaranes" },
                { metric: "0%", label: "trazabilidad de costes" },
                { metric: ">15%", label: "discrepancias en facturas" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-[oklch(0.78_0.14_85)] font-bold text-lg w-16">{item.metric}</span>
                  <span className="text-[oklch(0.80_0.05_240)] text-xs">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
