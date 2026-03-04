"use client"

export default function Slide10Closing() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.38_0.15_250)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-4 bg-[oklch(0.30_0.15_250)] border-b border-[oklch(0.45_0.15_250)]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="text-[oklch(0.78_0.14_85)] text-xs">★</span>
            ))}
          </div>
          <span className="text-[oklch(0.85_0.06_240)] text-xs font-mono tracking-widest uppercase">
            Kit Espacio de Datos · Resumen Final
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">10 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5">
          <h2 className="text-3xl font-bold text-white text-pretty leading-tight">
            Resumen del Proyecto{" "}
            <span className="text-[oklch(0.78_0.14_85)]">"Kit Espacio de Datos"</span>{" "}
            para la Industria del Metal
          </h2>

          <p className="text-[oklch(0.85_0.04_240)] text-sm leading-relaxed max-w-xl">
            El KTED concede a tu empresa{" "}
            <strong className="text-white">30.000€ de subvención</strong> para digitalizarte. ACCURO Technology pone a tu disposición un catálogo de 30 servicios especializados en la industria del metal —{" "}
            <strong className="text-[oklch(0.78_0.14_85)]">tu empresa decide qué servicios necesita</strong>{" "}
            realizando previamente un análisis conjunto. Solo pagas lo que consumes, siempre dentro del bono europeo.
          </p>

          {/* Investment box */}
          <div className="bg-[oklch(0.25_0.12_250)] border border-[oklch(0.45_0.15_250)] rounded-xl p-6">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Cuadro de Inversión y Retorno
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono mb-1">Presupuesto Total</p>
                <p className="text-white text-3xl font-bold">30.000€</p>
              </div>
              <div className="text-center border-x border-[oklch(0.45_0.15_250)]">
                <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono mb-1">Subvención KTED</p>
                <p className="text-[oklch(0.78_0.14_85)] text-3xl font-bold">30.000€</p>
                <p className="text-[oklch(0.70_0.08_250)] text-xs">100% cubierto</p>
              </div>
              <div className="text-center">
                <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono mb-1">ROI Proyectado</p>
                <p className="text-white text-3xl font-bold">{">"} 4x</p>
                <p className="text-[oklch(0.70_0.08_250)] text-xs">en 24 meses</p>
              </div>
            </div>
          </div>

          {/* ROI cards */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-[oklch(0.30_0.13_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 text-center">
              <p className="text-[oklch(0.78_0.14_85)] text-2xl font-bold">+12%</p>
              <p className="text-[oklch(0.80_0.05_240)] text-xs mt-1">OEE de planta en primer trimestre</p>
            </div>
            <div className="bg-[oklch(0.30_0.13_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 text-center">
              <p className="text-[oklch(0.78_0.14_85)] text-2xl font-bold">-60%</p>
              <p className="text-[oklch(0.80_0.05_240)] text-xs mt-1">mermas no controladas en corte</p>
            </div>
            <div className="bg-[oklch(0.30_0.13_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 text-center">
              <p className="text-[oklch(0.78_0.14_85)] text-2xl font-bold">100%</p>
              <p className="text-[oklch(0.80_0.05_240)] text-xs mt-1">trazabilidad colada-pieza-cliente</p>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-72 flex flex-col gap-4">
          {/* Summary checklist */}
          <div className="bg-[oklch(0.25_0.12_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-5 flex-1 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-1 font-bold">
              Logros del Proyecto
            </p>
            {[
              "Empresa obtiene subvención KTED de 30.000€",
              "Análisis conjunto para seleccionar servicios necesarios",
              "Implementación solo de los servicios seleccionados",
              "ERP con coste real por orden de fabricación",
              "MES con OEE en tiempo real e IoT",
              "WMS con trazabilidad completa de colada",
              "Control de mermas y valorización de chatarra",
              "CRM con pronóstico de demanda por IA",
              "Documentación de justificación Next Generation EU",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <div className="w-4 h-4 bg-[oklch(0.78_0.14_85)] rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-[oklch(0.20_0.05_240)] text-xs font-bold">✓</span>
                </div>
                <p className="text-[oklch(0.85_0.04_240)] text-xs leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Next steps */}
          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Próximos Pasos
            </p>
            {[
              { num: "01", label: "Aprobación del proyecto" },
              { num: "02", label: "Firma de acuerdo de servicio" },
              { num: "03", label: "Inicio Fase 1 — Diagnóstico" },
            ].map((step) => (
              <div key={step.num} className="flex items-center gap-3">
                <div className="w-7 h-7 bg-[oklch(0.30_0.13_250)] text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                  {step.num}
                </div>
                <p className="text-[oklch(0.20_0.05_240)] text-sm font-medium">{step.label}</p>
              </div>
            ))}
            <div className="mt-1 bg-[oklch(0.65_0.12_80)] rounded-lg p-3 text-center">
              <p className="text-[oklch(0.20_0.05_240)] font-bold text-sm">ACCURO Technology</p>
              <p className="text-[oklch(0.30_0.05_240)] text-xs">Industria del Metal · KTED 2025–2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
