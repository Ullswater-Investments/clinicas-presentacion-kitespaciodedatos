"use client"

const problems = [
  {
    icon: "⚙",
    title: "Silos de Información entre Planta y Oficina",
    desc: "El MES de producción y el ERP financiero no están conectados. Los datos de fabricación llegan tarde y de forma manual a la dirección, impidiendo decisiones ágiles.",
  },
  {
    icon: "◈",
    title: "Falta de Trazabilidad de Colada y Lote",
    desc: "Imposibilidad de localizar de qué colada proviene un lote de material en menos de un minuto, con los riesgos de calidad y reclamaciones que ello supone.",
  },
  {
    icon: "▲",
    title: "Mermas y Chatarra sin Controlar",
    desc: "Los procesos de corte y mecanizado generan mermas no monitorizadas, erosionando silenciosamente los márgenes por orden de fabricación sin que la dirección lo perciba.",
  },
]

export default function Slide2Challenge() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Diagnóstico</p>
          <h2 className="text-white text-xl font-bold">Desafíos Críticos en la Industria Metalúrgica Actual</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">02 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              Las empresas del sector del metal enfrentan{" "}
              <strong className="text-[oklch(0.38_0.15_250)]">
                márgenes ajustados y competencia global intensa
              </strong>
              . La desconexión entre la planta y la gestión genera ineficiencias invisibles: mermas sin
              medir, trazabilidad deficiente de lotes y una alta carga manual que impide la toma de
              decisiones basada en datos reales.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {problems.map((p, i) => (
              <div
                key={i}
                className="bg-white border-l-4 border-[oklch(0.38_0.15_250)] rounded-lg p-4 flex gap-4 items-start shadow-sm"
              >
                <div className="w-10 h-10 bg-[oklch(0.88_0.06_240)] rounded-lg flex items-center justify-center text-xl shrink-0 text-[oklch(0.38_0.15_250)] font-bold">
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
              Flujo Actual — Datos Fragmentados
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Máquina produce pieza", color: "bg-[oklch(0.55_0.18_250)]" },
                { label: "Registro manual en papel", color: "bg-[oklch(0.6_0.15_250)]" },
                { label: "Datos a hoja de cálculo", color: "bg-[oklch(0.65_0.12_250)]", warning: true },
                { label: "Retraso de 24–72h a ERP", color: "bg-[oklch(0.7_0.10_250)]", warning: true },
                { label: "Dirección decide sin datos", color: "bg-[oklch(0.75_0.08_250)]", warning: true },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`h-8 rounded flex items-center justify-between px-3 text-white text-xs font-medium flex-1 ${step.color}`}
                  >
                    <span>{step.label}</span>
                    {step.warning && <span className="text-[oklch(0.78_0.14_85)]">!</span>}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-[oklch(0.55_0.03_240)] text-xs mt-1">
              Cada paso manual introduce errores y demoras que erosionan el margen por OF.
            </p>
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Impacto Estimado</p>
            <div className="flex flex-col gap-2 mt-1">
              {[
                { metric: "~8%", label: "de merma no controlada en corte" },
                { metric: "0%", label: "trazabilidad en tiempo real" },
                { metric: ">20%", label: "desvíos sobre plan de producción" },
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
