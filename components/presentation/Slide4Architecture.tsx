"use client"

const layers = [
  {
    num: "01",
    title: "Frontend Clínica — App a Medida",
    subtitle: "Interfaz ultra-sencilla · React / Next.js",
    desc: "Gestión rápida de pacientes, escaneo de albaranes y materiales en gabinete. Diseñada para el personal clínico sin formación técnica.",
    items: ["Registro de materiales en gabinete", "Escaneo de lotes e implantes", "Vista de tratamientos y costes"],
    color: "bg-[oklch(0.55_0.18_250)]",
    border: "border-[oklch(0.55_0.18_250)]",
  },
  {
    num: "02",
    title: "Middleware — Python Controllers",
    subtitle: "API JSON-RPC · Capa de traducción",
    desc: "Traduce las acciones de la clínica en transacciones seguras hacia Odoo. Valida, enruta y transforma los datos garantizando integridad.",
    items: ["Controladores JSON-RPC", "Validación y transformación de datos", "Autenticación y seguridad (RGPD)"],
    color: "bg-[oklch(0.38_0.15_250)]",
    border: "border-[oklch(0.38_0.15_250)]",
  },
  {
    num: "03",
    title: "Backend — ERP Odoo",
    subtitle: "Motor contable · Base de datos maestra",
    desc: "Base de datos robusta, motor contable completo, conciliación bancaria y gestión de inventario maestro con trazabilidad total.",
    items: ["Módulo Inventario y Almacén", "Módulo Contabilidad y Facturación", "Conciliación bancaria automática"],
    color: "bg-[oklch(0.25_0.12_250)]",
    border: "border-[oklch(0.25_0.12_250)]",
  },
]

export default function Slide4Architecture() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Solución</p>
          <h2 className="text-white text-xl font-bold">
            Arquitectura Tecnológica: Usabilidad a Medida + Motor Odoo
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">04 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Architecture description */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              Proponemos una <strong className="text-[oklch(0.38_0.15_250)]">arquitectura desacoplada (Headless)</strong>.
              No forzaremos al personal clínico a aprender un ERP complejo. Construiremos una{" "}
              <strong>interfaz a medida, ultra-sencilla</strong>, que se comunicará en tiempo real con Odoo mediante
              una <strong>API desarrollada en Python</strong>.
            </p>
          </div>

          {/* Layers */}
          <div className="flex flex-col gap-3 flex-1">
            {layers.map((layer, i) => (
              <div key={i} className={`rounded-lg border-l-4 ${layer.border} bg-white p-4 shadow-sm flex gap-4`}>
                <div className={`${layer.color} text-white rounded w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0`}>
                  {layer.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <p className="font-bold text-[oklch(0.20_0.05_240)] text-sm">{layer.title}</p>
                    <span className="text-[oklch(0.5_0.10_250)] text-xs font-mono bg-[oklch(0.88_0.06_240)] px-2 py-0.5 rounded">
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="text-[oklch(0.45_0.03_240)] text-xs mt-1 leading-relaxed">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-[oklch(0.94_0.01_240)] text-[oklch(0.38_0.15_250)] px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – data flow */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Flujo de Datos en Tiempo Real
            </p>

            {[
              { from: "Personal Clínico", action: "Escanea / Registra", to: "App a Medida" },
              { from: "App a Medida", action: "HTTP / JSON-RPC", to: "Python API" },
              { from: "Python API", action: "Valida + Transforma", to: "Odoo Backend" },
              { from: "Odoo Backend", action: "Registra + Calcula", to: "Contabilidad" },
            ].map((flow, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[oklch(0.25_0.05_240)]">{flow.from}</span>
                  <span className="text-[oklch(0.55_0.18_250)] font-mono">→</span>
                  <span className="font-medium text-[oklch(0.25_0.05_240)]">{flow.to}</span>
                </div>
                <div className="w-full bg-[oklch(0.88_0.06_240)] rounded-full px-2 py-0.5 text-center">
                  <span className="text-[oklch(0.38_0.15_250)] text-xs font-mono">{flow.action}</span>
                </div>
                {i < 3 && <div className="w-px h-3 bg-[oklch(0.75_0.08_250)] mx-auto" />}
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2">Ventajas Headless</p>
            {[
              "Interfaz optimizada para clínica",
              "Backend robusto sin comprometer UX",
              "Escalable y modular",
              "Actualizaciones independientes",
            ].map((v) => (
              <div key={v} className="flex items-start gap-2 mb-1.5">
                <span className="text-[oklch(0.78_0.14_85)] mt-0.5 text-xs">✓</span>
                <span className="text-[oklch(0.88_0.04_240)] text-xs">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
