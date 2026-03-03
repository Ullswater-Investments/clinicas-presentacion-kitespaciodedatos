"use client"

const guarantees = [
  {
    label: "Riesgo Asumido por el Proveedor",
    body: "Asumimos el 100% de los gastos de gestión burocrática y el riesgo de obtención de la ayuda. Si no se concede la subvención, la clínica no tiene ninguna obligación de pago.",
    icon: "R",
    accent: "bg-[oklch(0.55_0.18_250)]",
  },
  {
    label: "Garantía de Límite de Gasto",
    body: "La clínica nunca pagará de su bolsillo un importe superior a la subvención recibida. El modelo está diseñado para que el gasto neto de la clínica sea siempre 0 €.",
    icon: "G",
    accent: "bg-[oklch(0.45_0.17_250)]",
  },
  {
    label: "Cláusula de Ajuste (< 25.000 €)",
    body: "En el supuesto excepcional de que la administración concediera una subvención inferior a 25.000 €, el proyecto no se cancela: se redefinirá su alcance y módulos funcionales de mutuo acuerdo para ajustarlo exactamente a la cantidad concedida, sin generar deuda para la clínica.",
    icon: "A",
    accent: "bg-[oklch(0.38_0.15_250)]",
  },
]

const scenarios = [
  {
    scenario: "Subvención concedida: 30.000 €",
    outcome: "Proyecto completo, todos los módulos. Clínica paga 0 € de su bolsillo.",
    status: "Óptimo",
    statusColor: "bg-[oklch(0.55_0.18_250)] text-white",
  },
  {
    scenario: "Subvención concedida: 25.000 – 29.999 €",
    outcome: "Proyecto ligeramente reducido. Ajuste de módulos de mutuo acuerdo. Clínica paga 0 €.",
    status: "Ajuste menor",
    statusColor: "bg-[oklch(0.78_0.14_85)] text-[oklch(0.20_0.05_240)]",
  },
  {
    scenario: "Subvención concedida: < 25.000 €",
    outcome: "Redefinición de alcance proporcional a la cantidad concedida. Sin deuda ni cancelación.",
    status: "Cláusula activa",
    statusColor: "bg-[oklch(0.88_0.06_240)] text-[oklch(0.38_0.15_250)]",
  },
  {
    scenario: "Subvención denegada",
    outcome: "El proyecto no se ejecuta. La clínica solo ha desembolsado el Hito 1 de 1.500 € del conector EHDS.",
    status: "Riesgo mínimo",
    statusColor: "bg-[oklch(0.94_0.01_240)] text-[oklch(0.45_0.04_240)]",
  },
]

export default function Slide13Guarantees() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">
            Garantías y Salvaguarda
          </p>
          <h2 className="text-white text-xl font-bold">
            Cuadro de Garantías — Escudo de Riesgo Cero para la Clínica
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">13 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left: guarantee cards + scenario table */}
        <div className="flex-1 flex flex-col gap-5">
          {/* Guarantee cards */}
          <div className="flex flex-col gap-3">
            {guarantees.map((g) => (
              <div
                key={g.label}
                className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg flex overflow-hidden"
              >
                <div className={`${g.accent} w-1.5 shrink-0`} />
                <div className="flex-1 p-4 flex gap-4 items-start">
                  <div className={`${g.accent} w-9 h-9 rounded-full flex items-center justify-center shrink-0`}>
                    <span className="text-white font-bold text-base">{g.icon}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[oklch(0.15_0.02_240)] font-bold text-sm">{g.label}</p>
                    <p className="text-[oklch(0.45_0.04_240)] text-xs leading-relaxed">{g.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scenario table */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg overflow-hidden flex-1">
            <div className="bg-[oklch(0.94_0.01_240)] px-5 py-3 flex items-center gap-2">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
                Tabla de Escenarios Posibles
              </p>
            </div>
            <div className="divide-y divide-[oklch(0.92_0.01_240)]">
              {scenarios.map((s) => (
                <div key={s.scenario} className="px-5 py-3 flex items-center gap-4">
                  <div className="flex-1 flex flex-col gap-0.5">
                    <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">{s.scenario}</p>
                    <p className="text-xs text-[oklch(0.55_0.03_240)] leading-relaxed">{s.outcome}</p>
                  </div>
                  <div className={`${s.statusColor} rounded px-2 py-1 text-xs font-bold whitespace-nowrap shrink-0`}>
                    {s.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: shield summary */}
        <div className="w-60 flex flex-col gap-4">
          {/* Shield box */}
          <div className="bg-[oklch(0.38_0.15_250)] rounded-xl p-6 flex flex-col items-center gap-4 text-center">
            {/* Shield icon */}
            <div className="w-16 h-16 bg-[oklch(0.78_0.14_85)] rounded-full flex items-center justify-center shadow-lg">
              <span className="text-[oklch(0.20_0.05_240)] font-black text-2xl">0</span>
            </div>
            <div>
              <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-1">
                Gasto neto clínica
              </p>
              <p className="text-white font-bold text-3xl">0 €</p>
              <p className="text-[oklch(0.80_0.07_240)] text-xs mt-1 leading-relaxed">
                de su propio capital en el escenario principal
              </p>
            </div>
            <div className="w-full h-px bg-[oklch(0.50_0.15_250)]" />
            <div className="flex flex-col gap-2 w-full">
              {[
                "Riesgo burocrático: Proveedor",
                "Riesgo técnico: Proveedor",
                "Riesgo financiero: 0 €",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.14_85)] shrink-0" />
                  <p className="text-[oklch(0.88_0.04_240)] text-xs text-left">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Commitment box */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-xl p-5 flex-1 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Nuestro Compromiso
            </p>
            <p className="text-[oklch(0.35_0.04_240)] text-xs leading-relaxed">
              Acompañamos a la clínica en todo el proceso: desde la solicitud de la ayuda hasta la
              justificación final ante la administración, incluyendo la preparación de toda la
              documentación técnica y económica requerida.
            </p>
            <div className="mt-auto bg-[oklch(0.88_0.06_240)] rounded p-3">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-bold">
                Global Data Care — EHDS 2025
              </p>
              <p className="text-[oklch(0.55_0.03_240)] text-xs mt-0.5">
                Proyecto co-financiado Next Generation EU
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
