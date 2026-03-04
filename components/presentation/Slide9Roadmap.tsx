"use client"

const phases = [
  {
    num: "Fase 1",
    months: "Mes 1",
    title: "Diagnóstico y Selección",
    color: "bg-[oklch(0.55_0.18_250)]",
    tasks: [
      "Cuestionario de diagnóstico 10 preguntas",
      "Selección de servicios prioritarios del catálogo",
      "Elección del espacio de datos en Lista de Confianza CRED",
      "Definición de arquitectura ERP+MES+WMS+CRM",
    ],
    deliverables: "Plan técnico + Servicios seleccionados",
  },
  {
    num: "Fase 2",
    months: "Mes 2–3",
    title: "Preparación Técnica",
    color: "bg-[oklch(0.45_0.17_250)]",
    tasks: [
      "Instalación módulos ERP, MES, WMS y CRM",
      "Limpieza y estructuración de datasets industriales",
      "Configuración sensores IoT para OEE",
      "Preparación de metadatos y certificado de origen",
    ],
    deliverables: "Sistemas instalados + Datasets preparados",
  },
  {
    num: "Fase 3",
    months: "Mes 4",
    title: "Adhesión al Espacio de Datos",
    color: "bg-[oklch(0.38_0.15_250)]",
    tasks: [
      "Firma del contrato de adhesión al espacio sectorial",
      "Instalación del conector Eclipse Dataspace",
      "Configuración de identidades digitales",
      "Redacción de políticas de uso del dato",
    ],
    deliverables: "Contrato firmado + Conector activo",
  },
  {
    num: "Fase 4",
    months: "Mes 5–6",
    title: "Integración y Publicación",
    color: "bg-[oklch(0.30_0.13_250)]",
    tasks: [
      "Conexión técnica ERP/MES/WMS al espacio de datos",
      "Publicación primer producto de datos en catálogo",
      "Video-evidencias de navegación por catálogo",
      "Formación del equipo de planta y gestión",
    ],
    deliverables: "Producto de datos publicado + Evidencias",
  },
  {
    num: "Fase 5",
    months: "Mes 7",
    title: "Solicitud y Justificación",
    color: "bg-[oklch(0.22_0.10_250)]",
    tasks: [
      "Presentación del formulario electrónico en Red.es",
      "Aportación de memoria de actividades y esquemas",
      "Justificación económica y técnica ante UE",
      "Cobro del bono de 30.000 €",
    ],
    deliverables: "Justificación completa + Bono recibido",
  },
]

export default function Slide9Roadmap() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Metodología</p>
          <h2 className="text-white text-xl font-bold">Hoja de Ruta: 5 Fases para Obtener los 30.000€ del KTED</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">09 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Gantt-style timeline */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Diagrama de Gantt — 7 Meses
            </p>
            {/* Month headers */}
            <div className="flex gap-1 mb-2 pl-24">
              {["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6", "Mes 7"].map((m) => (
                <div key={m} className="flex-1 text-center text-xs font-mono text-[oklch(0.55_0.03_240)]">
                  {m}
                </div>
              ))}
            </div>
            {/* Phase rows */}
            {phases.map((phase, i) => (
              <div key={i} className="flex items-center gap-1 mb-2">
                <div className="w-24 shrink-0">
                  <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">{phase.num}</p>
                  <p className="text-xs text-[oklch(0.55_0.03_240)]">{phase.months}</p>
                </div>
                {[0, 1, 2, 3, 4, 5, 6].map((month) => {
                  const active =
                    (i === 0 && month === 0) ||
                    (i === 1 && (month === 1 || month === 2)) ||
                    (i === 2 && month === 3) ||
                    (i === 3 && (month === 4 || month === 5)) ||
                    (i === 4 && month === 6)
                  return (
                    <div
                      key={month}
                      className={`flex-1 h-8 rounded ${
                        active ? phase.color + " opacity-90" : "bg-[oklch(0.94_0.01_240)]"
                      }`}
                    />
                  )
                })}
              </div>
            ))}
          </div>

          {/* Phase cards */}
          <div className="grid grid-cols-5 gap-2 flex-1">
            {phases.map((phase, i) => (
              <div key={i} className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg overflow-hidden flex flex-col">
                <div className={`${phase.color} p-3`}>
                  <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono">{phase.num} · {phase.months}</p>
                  <p className="text-white font-bold text-xs mt-0.5">{phase.title}</p>
                </div>
                <div className="p-3 flex-1 flex flex-col gap-1.5">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-[oklch(0.38_0.15_250)] mt-1.5 shrink-0" />
                      <p className="text-xs text-[oklch(0.35_0.04_240)] leading-tight">{task}</p>
                    </div>
                  ))}
                </div>
                <div className="px-3 pb-3">
                  <div className="bg-[oklch(0.88_0.06_240)] rounded p-2">
                    <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono font-bold">Entregable:</p>
                    <p className="text-[oklch(0.35_0.04_240)] text-xs leading-tight">{phase.deliverables}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-56 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Metodología
            </p>
            {[
              { method: "Agile / Sprints", desc: "Revisiones semanales con jefe de planta" },
              { method: "Concurrencia no Competitiva", desc: "Subvención por orden de entrada" },
              { method: "Evidencias Continuas", desc: "Video-evidencias para justificación EU" },
              { method: "Cierre 31 Marzo 2026", desc: "Plazo límite de solicitud KTED" },
            ].map((item) => (
              <div key={item.method} className="flex flex-col gap-0.5 border-b border-[oklch(0.94_0.01_240)] pb-2 last:border-0">
                <p className="text-xs font-bold text-[oklch(0.38_0.15_250)]">{item.method}</p>
                <p className="text-xs text-[oklch(0.55_0.03_240)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-3 flex-1">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Stack Tecnológico</p>
            {[
              { cat: "ERP/MES/WMS", tech: "ACCURO Platform" },
              { cat: "IoT / OEE", tech: "Sensores Industriales" },
              { cat: "Conector", tech: "Eclipse Dataspace" },
              { cat: "DB", tech: "PostgreSQL (EU)" },
              { cat: "Infra", tech: "Cloud / Docker EU" },
              { cat: "Estándares", tech: "UNE 0087 / RGPD" },
            ].map((item) => (
              <div key={item.cat} className="flex items-center justify-between">
                <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">{item.cat}</span>
                <span className="text-white text-xs font-bold">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
