"use client"

const phases = [
  {
    num: "Fase 1",
    months: "Mes 1",
    title: "Análisis y Diseño",
    color: "bg-[oklch(0.55_0.18_250)]",
    tasks: [
      "Análisis de requerimientos clínicos",
      "Estructuración del Espacio de Datos (EHDS)",
      "Diseño de arquitectura sistema",
      "Definición de flujos de trabajo",
    ],
    deliverables: "Documento de arquitectura + Plan técnico",
  },
  {
    num: "Fase 2",
    months: "Mes 2–3",
    title: "Backend Odoo + API",
    color: "bg-[oklch(0.45_0.17_250)]",
    tasks: [
      "Configuración Odoo (Inventario + Contabilidad)",
      "Desarrollo Controladores JSON-RPC Python",
      "Módulo de trazabilidad de implantes",
      "Integración bancaria Open Banking",
    ],
    deliverables: "Backend funcional + API documentada",
  },
  {
    num: "Fase 3",
    months: "Mes 4–5",
    title: "Frontend App Clínica",
    color: "bg-[oklch(0.38_0.15_250)]",
    tasks: [
      "Desarrollo de interfaz clínica a medida",
      "Módulo de escaneo de albaranes",
      "Dashboard de costes por paciente",
      "Testing e integración con backend",
    ],
    deliverables: "App clínica lista + Tests integración",
  },
  {
    num: "Fase 4",
    months: "Mes 6",
    title: "Despliegue y Formación",
    color: "bg-[oklch(0.30_0.13_250)]",
    tasks: [
      "Despliegue en producción (servidor EU)",
      "Formación del equipo clínico",
      "Formación del contable",
      "Documentación y justificación de subvención",
    ],
    deliverables: "Sistema en producción + Justificación EHDS",
  },
]

export default function Slide9Roadmap() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Metodología</p>
          <h2 className="text-white text-xl font-bold">Roadmap de Implementación e Integración Odoo-App</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">09 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Gantt-style timeline */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Diagrama de Gantt Simplificado
            </p>
            {/* Month headers */}
            <div className="flex gap-1 mb-2 pl-24">
              {["Mes 1", "Mes 2", "Mes 3", "Mes 4", "Mes 5", "Mes 6"].map((m) => (
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
                {[0, 1, 2, 3, 4, 5].map((month) => {
                  const active =
                    (i === 0 && month === 0) ||
                    (i === 1 && (month === 1 || month === 2)) ||
                    (i === 2 && (month === 3 || month === 4)) ||
                    (i === 3 && month === 5)
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
          <div className="grid grid-cols-4 gap-3 flex-1">
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
        <div className="w-64 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Metodología
            </p>
            {[
              { method: "Agile / Scrum", desc: "Sprints semanales con revisión clínica" },
              { method: "Code Review", desc: "Revisión de código antes de cada deploy" },
              { method: "Staging Environment", desc: "Entorno de pruebas previo a producción" },
              { method: "Data Backup", desc: "Backup diario automático en servidores EU" },
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
              { cat: "Frontend", tech: "React / Next.js" },
              { cat: "Backend", tech: "Odoo 17 Community" },
              { cat: "API", tech: "Python / JSON-RPC" },
              { cat: "DB", tech: "PostgreSQL (EU)" },
              { cat: "Infra", tech: "Docker / Cloud EU" },
              { cat: "Estándares", tech: "HL7 FHIR / RGPD" },
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
