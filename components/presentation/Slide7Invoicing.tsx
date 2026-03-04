"use client"

export default function Slide7Invoicing() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">MES de Planta</p>
          <h2 className="text-white text-xl font-bold">Control Total de Planta: OEE, OFs Digitales y Calidad</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">07 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* OEE + Monitorización */}
            <div className="flex flex-col gap-3">
              <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[oklch(0.55_0.18_250)] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xs">OEE</span>
                  </div>
                  <div>
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Bloque 1</p>
                    <p className="text-white font-bold text-sm">Monitorización de Equipos</p>
                  </div>
                </div>
                <p className="text-[oklch(0.85_0.04_240)] text-xs leading-relaxed">
                  Sensores IoT instalados en máquinas herramienta, prensas y líneas de corte capturan
                  disponibilidad, rendimiento y calidad en tiempo real.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex-1">
                <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
                  Indicadores OEE en Tiempo Real
                </p>
                {[
                  { label: "Disponibilidad", value: "94,2%", bar: 94, desc: "Tiempo de marcha vs. tiempo planificado" },
                  { label: "Rendimiento", value: "88,7%", bar: 89, desc: "Velocidad real vs. velocidad nominal" },
                  { label: "Calidad", value: "97,1%", bar: 97, desc: "Piezas buenas vs. total producidas" },
                  { label: "OEE Global", value: "81,2%", bar: 81, desc: "Eficiencia global del equipo" },
                ].map((item) => (
                  <div key={item.label} className="mb-2 last:mb-0">
                    <div className="flex justify-between text-xs mb-0.5">
                      <span className="font-medium text-[oklch(0.25_0.05_240)]">{item.label}</span>
                      <span className="text-[oklch(0.38_0.15_250)] font-bold">{item.value}</span>
                    </div>
                    <div className="w-full bg-[oklch(0.94_0.01_240)] rounded-full h-1.5 mb-0.5">
                      <div className="bg-[oklch(0.38_0.15_250)] h-1.5 rounded-full" style={{ width: `${item.bar}%` }} />
                    </div>
                    <p className="text-[oklch(0.55_0.03_240)] text-xs">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* OFs digitales y calidad */}
            <div className="flex flex-col gap-3">
              <div className="bg-[oklch(0.25_0.12_250)] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[oklch(0.38_0.15_250)] rounded-lg flex items-center justify-center shrink-0">
                    <span className="text-white font-bold text-xs">OF</span>
                  </div>
                  <div>
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Bloque 2</p>
                    <p className="text-white font-bold text-sm">OFs Digitales y Calidad</p>
                  </div>
                </div>
                <p className="text-[oklch(0.80_0.05_240)] text-xs leading-relaxed">
                  Eliminación del papel en planta mediante instrucciones de trabajo digitales y
                  validación automática de tolerancias antes del cierre de cada OF.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex-1">
                <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
                  Ciclo de OF Digital
                </p>
                {[
                  { step: "OF lanzada desde ERP", detail: "Con materiales reservados en WMS" },
                  { step: "Instrucciones al operario", detail: "Siempre con la última versión del diseño" },
                  { step: "Registro de tiempos y consumos", detail: "Captura en tiempo real por sensor o panel" },
                  { step: "Control de calidad integrado", detail: "Validación de tolerancias antes de cierre" },
                  { step: "Cierre y trazabilidad total", detail: "OF cerrada con hitos de calidad 100% completados" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2 mb-2 last:mb-0">
                    <div className="w-5 h-5 bg-[oklch(0.38_0.15_250)] text-white rounded-full flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[oklch(0.25_0.05_240)]">{item.step}</p>
                      <p className="text-xs text-[oklch(0.55_0.03_240)]">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[oklch(0.88_0.06_240)] rounded-lg p-3 flex flex-wrap gap-2">
                {["Servicio 10: OEE", "Servicio 11: Dashboards", "Servicio 12: OFs", "Servicio 13: Calidad"].map((std) => (
                  <span key={std} className="bg-[oklch(0.38_0.15_250)] text-white text-xs px-2 py-1 rounded font-mono">
                    {std}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-64 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Servicios MES Incluidos
            </p>
            {[
              { svc: "Servicio 10", desc: "Monitorización OEE con IoT" },
              { svc: "Servicio 11", desc: "Cuadro de indicadores planta" },
              { svc: "Servicio 12", desc: "OFs digitales sin papel" },
              { svc: "Servicio 13", desc: "Control calidad en tiempo real" },
              { svc: "Servicio 14", desc: "Asignación cargas máquina" },
              { svc: "Servicio 15", desc: "Seguimiento de cumplimiento" },
              { svc: "Servicio 16", desc: "Protocolos seguridad digital" },
              { svc: "Servicio 17", desc: "Cierre de OF con trazabilidad" },
            ].map((item) => (
              <div key={item.svc} className="flex items-center gap-2">
                <span className="bg-[oklch(0.38_0.15_250)] text-white text-xs px-1.5 py-0.5 rounded font-mono whitespace-nowrap shrink-0">
                  {item.svc}
                </span>
                <span className="text-[oklch(0.45_0.03_240)] text-xs">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-2 flex-1">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Impacto Esperado</p>
            {[
              "+12% OEE tras primer trimestre",
              "0 reclamaciones por errores de diseño",
              "-80% papel en planta",
              "Estado de OF visible para el cliente",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 mt-1">
                <span className="text-[oklch(0.78_0.14_85)] text-xs mt-0.5">✓</span>
                <span className="text-[oklch(0.88_0.04_240)] text-xs leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
