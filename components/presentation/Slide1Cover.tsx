"use client"

export default function Slide1Cover() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.38_0.15_250)]">
      {/* Top bar */}
      <div className="flex items-center justify-between px-10 py-4 bg-[oklch(0.30_0.15_250)] border-b border-[oklch(0.45_0.15_250)]">
        <div className="flex items-center gap-3">
          {/* EU Stars */}
          <div className="flex items-center gap-1">
            {Array.from({ length: 12 }).map((_, i) => (
              <span
                key={i}
                className="text-[oklch(0.78_0.14_85)] text-xs"
                style={{ transform: `rotate(${i * 30}deg)` }}
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-[oklch(0.85_0.06_240)] text-xs font-mono tracking-widest uppercase">
            Unión Europea · Horizonte Europa
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[oklch(0.7_0.06_240)] text-xs font-mono">EHDS · 2025–2026</span>
          <div className="h-4 w-px bg-[oklch(0.55_0.12_250)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono font-bold">30.000 €</span>
        </div>
      </div>

      {/* Main content */}
        <div className="flex min-h-80">
        {/* Left column */}
        <div className="flex-1 flex flex-col justify-center px-12 py-8 gap-6">
          <div className="inline-flex items-center gap-2 bg-[oklch(0.78_0.14_85)] text-[oklch(0.20_0.05_240)] px-3 py-1 rounded text-xs font-mono font-bold uppercase tracking-wider w-fit">
            Kit Espacio de Datos · Final Convocatoria 31 de Marzo del 2026
          </div>

          <h1 className="text-4xl font-bold text-white leading-tight text-pretty">
            Proyecto de Integración en el{" "}
            <span className="text-[oklch(0.78_0.14_85)]">Espacio Europeo de Datos de Salud</span>{" "}
            y Digitalización Integral Clínica
          </h1>

          <p className="text-[oklch(0.75_0.05_240)] text-base leading-relaxed max-w-xl">
            Solicitud de Ayuda <strong className="text-white">"Kit Espacio de Datos" (30.000€)</strong> para la
            modernización de infraestructuras de datos y gestión clínica integral.
          </p>

          {/* Executive Summary Box */}
          <div className="border border-[oklch(0.78_0.14_85)]/40 bg-[oklch(0.30_0.15_250)]/70 rounded-lg p-5 max-w-xl">
            <p className="text-xs font-mono text-[oklch(0.78_0.14_85)] uppercase tracking-widest mb-2">
              Resumen Ejecutivo
            </p>
            <p className="text-[oklch(0.88_0.04_240)] text-sm leading-relaxed">
              Este proyecto tiene un doble objetivo: <strong className="text-white">integrar a la clínica en el ecosistema
              Global Data Care europeo</strong> garantizando la interoperabilidad de datos de salud, y dotar a la clínica
              de un <strong className="text-white">sistema integral de gestión</strong> (compras, trazabilidad de
              implantes, facturación y contabilidad) combinando una experiencia de usuario a medida con la potencia del
              ERP Odoo.
            </p>
          </div>
        </div>

        {/* Right column – visual elements */}
        <div className="w-80 flex flex-col gap-4 justify-center px-8 py-8 border-l border-[oklch(0.45_0.15_250)]">
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Financiación</p>
            <p className="text-3xl font-bold text-white">30.000€</p>
            <p className="text-[oklch(0.7_0.06_240)] text-xs">Fondo Kit Espacio de Datos · UE</p>
          </div>
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Marco Normativo</p>
            <div className="flex flex-wrap gap-2 mt-1">
              {["HL7 FHIR", "EHDS 2025", "RGPD", "TicketBAI"].map((t) => (
                <span key={t} className="bg-[oklch(0.38_0.15_250)] text-[oklch(0.85_0.05_240)] px-2 py-0.5 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Duración</p>
            <p className="text-2xl font-bold text-white">6 Meses</p>
            <p className="text-[oklch(0.7_0.06_240)] text-xs">Implementación + Formación + Justificación</p>
          </div>
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Tecnología</p>
            <div className="flex flex-col gap-1 mt-1">
              {["App Clínica a Medida", "ERP Odoo Backend", "API Python JSON-RPC"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.78_0.14_85)]" />
                  <span className="text-[oklch(0.85_0.05_240)] text-xs">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="px-10 py-3 bg-[oklch(0.25_0.12_250)] flex items-center justify-between">
        <span className="text-[oklch(0.65_0.06_240)] text-xs font-mono">Global Data Care · Clínica Dental</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.65_0.06_240)] text-xs font-mono">Diapositiva 01 / 10</span>
        </div>
      </div>
    </div>
  )
}
