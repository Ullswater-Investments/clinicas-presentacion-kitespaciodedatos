"use client"

const flowSteps = [
  {
    num: "01",
    title: "Recepción",
    desc: "Lectura de albarán y validación automática contra la orden de compra original.",
  },
  {
    num: "02",
    title: "Trazabilidad Colada",
    desc: "Vinculación de cada bobina, barra o chapa a su certificado de origen y número de colada.",
    highlight: true,
  },
  {
    num: "03",
    title: "Reserva para OF",
    desc: "El material queda reservado físicamente para la orden de fabricación asignada.",
  },
  {
    num: "04",
    title: "Control de Mermas",
    desc: "El material sobrante del corte se registra como chatarra y se valoriza para economía circular.",
  },
]

export default function Slide5Purchases() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">
            Módulo WMS
          </p>
          <h2 className="text-white text-xl font-bold">Gestión de Almacén y Trazabilidad de Material Metálico</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">05 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              El WMS de ACCURO está diseñado para la{" "}
              <strong className="text-[oklch(0.38_0.15_250)]">complejidad de los formatos metálicos</strong>{" "}
              (bobinas, barras, chapas) y su trazabilidad de colada. Estos son <strong>servicios del catálogo ACCURO</strong> que tu empresa puede seleccionar en función de sus necesidades reales dentro del presupuesto de 30.000€ del KTED.
            </p>
          </div>

          {/* Horizontal flow */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-5 font-bold">
              Flujo Operativo — Ciclo de Material Metálico
            </p>
            <div className="flex items-start gap-2">
              {flowSteps.map((step, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className={`w-full rounded-lg p-3 flex flex-col items-center text-center gap-2 ${
                      step.highlight
                        ? "bg-[oklch(0.38_0.15_250)] text-white"
                        : "bg-[oklch(0.88_0.06_240)] text-[oklch(0.25_0.05_240)]"
                    }`}
                  >
                    <p className={`font-bold text-xs ${step.highlight ? "text-[oklch(0.78_0.14_85)]" : "text-[oklch(0.38_0.15_250)]"}`}>
                      {step.num}
                    </p>
                    <p className={`font-bold text-xs ${step.highlight ? "text-white" : "text-[oklch(0.25_0.05_240)]"}`}>
                      {step.title}
                    </p>
                    <p className={`text-xs leading-relaxed ${step.highlight ? "text-[oklch(0.85_0.04_240)]" : "text-[oklch(0.45_0.03_240)]"}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center mt-3 px-2">
              {flowSteps.map((_, i) => (
                <div key={i} className="flex items-center flex-1 last:flex-none">
                  <div className="w-full h-0.5 bg-[oklch(0.38_0.15_250)]" />
                  {i < flowSteps.length - 1 && (
                    <div className="text-[oklch(0.38_0.15_250)] font-bold">▶</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Material types */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
              <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Materiales con Trazabilidad Completa
              </p>
              {["Bobinas de acero (colada + certificado)", "Barras y perfiles (lote + origen)", "Chapas y planchas (norma + proveedor)"].map((m) => (
                <div key={m} className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.14_85)]" />
                  <span className="text-white text-xs">{m}</span>
                </div>
              ))}
              <p className="text-[oklch(0.65_0.08_250)] text-xs mt-2">Vinculado a certificado digital de origen</p>
            </div>
            <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Stock de Utillaje y Herramental
              </p>
              {["Fresas y brocas (vida útil)", "Troqueles y matrices (ciclos)", "Insertos y plaquitas (contador)"].map((m) => (
                <div key={m} className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.38_0.15_250)]" />
                  <span className="text-[oklch(0.35_0.04_240)] text-xs">{m}</span>
                </div>
              ))}
              <p className="text-[oklch(0.55_0.03_240)] text-xs mt-2">Control de vida útil y alertas de sustitución</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Servicios WMS del Catálogo ACCURO
            </p>
            <p className="text-[oklch(0.55_0.03_240)] text-xs mb-1">
              Tu empresa puede seleccionar los que necesita dentro del bono KTED de 30.000€
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Trazabilidad Colada y Lote", status: "Servicio 18" },
                { label: "Gestión de Compras y Reposición", status: "Servicio 19" },
                { label: "Reserva Material a OF", status: "Servicio 20" },
                { label: "Control de Mermas y Chatarra", status: "Servicio 21" },
                { label: "Gestión Utillaje y Herramental", status: "Servicio 22" },
                { label: "Recepción con Validación Albarán", status: "Servicio 23" },
                { label: "Expediciones Automatizadas", status: "Servicio 24" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5 border-b border-[oklch(0.94_0.01_240)] pb-2 last:border-0">
                  <p className="text-xs font-medium text-[oklch(0.25_0.05_240)]">{item.label}</p>
                  <p className="text-xs text-[oklch(0.55_0.03_240)] font-mono">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-4">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
              Resultado Esperado
            </p>
            <p className="text-[oklch(0.20_0.05_240)] text-sm font-bold">{"<"} 1 min</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">para localizar cualquier lote y su colada de origen</p>
            <div className="h-px bg-[oklch(0.65_0.12_80)] my-2" />
            <p className="text-[oklch(0.20_0.05_240)] text-sm font-bold">-60%</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">reducción de mermas no controladas en planta</p>
          </div>
        </div>
      </div>
    </div>
  )
}
