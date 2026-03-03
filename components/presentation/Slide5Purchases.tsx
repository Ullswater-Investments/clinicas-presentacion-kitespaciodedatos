"use client"

const flowSteps = [
  {
    num: "01",
    title: "Recepción",
    desc: "Escaneo del albarán de entrada vinculado a la orden de compra en Odoo.",
    icon: "📦",
  },
  {
    num: "02",
    title: "Clasificación Automática",
    desc: "El sistema separa Material Específico (implantes con lote/caducidad) de Material de Uso General.",
    icon: "⚙️",
    highlight: true,
  },
  {
    num: "03",
    title: "Validación",
    desc: "Conformidad del albarán para que Odoo autorice la futura factura del proveedor.",
    icon: "✅",
  },
  {
    num: "04",
    title: "Stock Actualizado",
    desc: "Odoo registra el ingreso al inventario con número de lote, caducidad y proveedor.",
    icon: "🗄️",
  },
]

export default function Slide5Purchases() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">
            Módulo Compras
          </p>
          <h2 className="text-white text-xl font-bold">Gestión Inteligente de Compras y Albaranes</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">05 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              El sistema <strong className="text-[oklch(0.38_0.15_250)]">digitaliza la entrada de materiales</strong>{" "}
              desde que el proveedor entrega el paquete hasta su almacenamiento, garantizando la trazabilidad completa
              de cada unidad con su número de lote, fecha de caducidad y origen.
            </p>
          </div>

          {/* Horizontal flow */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-5 font-bold">
              Flujo Operativo — Entrada de Materiales
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
                    <span className="text-2xl">{step.icon}</span>
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
                  {i < flowSteps.length - 1 && (
                    <div className="hidden" />
                  )}
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
                Material Específico
              </p>
              {["Implantes dentales", "Coronas y prótesis", "Biomateriales de regeneración"].map((m) => (
                <div key={m} className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.14_85)]" />
                  <span className="text-white text-xs">{m}</span>
                </div>
              ))}
              <p className="text-[oklch(0.65_0.08_250)] text-xs mt-2">Con nº de lote + caducidad + proveedor</p>
            </div>
            <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Material de Uso General
              </p>
              {["Guantes y EPIs", "Anestesia y fármacos", "Composites y cementos"].map((m) => (
                <div key={m} className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.38_0.15_250)]" />
                  <span className="text-[oklch(0.35_0.04_240)] text-xs">{m}</span>
                </div>
              ))}
              <p className="text-[oklch(0.55_0.03_240)] text-xs mt-2">Gestionado como stock general prorrateado</p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Integración Odoo — Compras
            </p>
            <div className="flex flex-col gap-2">
              {[
                { label: "Orden de Compra", status: "Automática al validar albarán" },
                { label: "Recepción de Mercancía", status: "Vinculada al albarán escaneado" },
                { label: "Ficha de Lote", status: "Creada con nº serie + caducidad" },
                { label: "Alerta de Caducidad", status: "30 días antes del vencimiento" },
                { label: "Stock Valorado", status: "Precio real por unidad" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5 border-b border-[oklch(0.94_0.01_240)] pb-2 last:border-0">
                  <p className="text-xs font-medium text-[oklch(0.25_0.05_240)]">{item.label}</p>
                  <p className="text-xs text-[oklch(0.55_0.03_240)]">{item.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-4">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
              Resultado Esperado
            </p>
            <p className="text-[oklch(0.20_0.05_240)] text-sm font-bold">100%</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">de albaranes registrados digitalmente</p>
            <div className="h-px bg-[oklch(0.65_0.12_80)] my-2" />
            <p className="text-[oklch(0.20_0.05_240)] text-sm font-bold">-90%</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">de papel en la recepción de mercancías</p>
          </div>
        </div>
      </div>
    </div>
  )
}
