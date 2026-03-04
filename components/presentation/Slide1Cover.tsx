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
            Unión Europea · Next Generation EU
          </span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-[oklch(0.7_0.06_240)] text-xs font-mono">KTED · 2025–2026</span>
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
            <span className="text-[oklch(0.78_0.14_85)]">Espacio de Datos Industrial</span>{" "}
            y Digitalización Integral para la Fabricación de Piezas de Metal
          </h1>

          <p className="text-[oklch(0.75_0.05_240)] text-base leading-relaxed max-w-xl">
            El programa <strong className="text-white">"Kit Espacio de Datos" (KTED)</strong> otorga a tu empresa una <strong className="text-[oklch(0.78_0.14_85)]">subvención de 30.000€</strong> para digitalizarte. ACCURO Technology pone a tu disposición un catálogo de servicios especializados en la industria del metal; <strong className="text-white">tu empresa decide qué servicios necesita</strong> hasta ese importe.
          </p>

          {/* Executive Summary Box */}
          <div className="border border-[oklch(0.78_0.14_85)]/40 bg-[oklch(0.30_0.15_250)]/70 rounded-lg p-5 max-w-xl">
            <p className="text-xs font-mono text-[oklch(0.78_0.14_85)] uppercase tracking-widest mb-2">
              Cómo funciona
            </p>
            <p className="text-[oklch(0.88_0.04_240)] text-sm leading-relaxed">
              <strong className="text-white">1. Obtienes la subvención de 30.000€</strong> a través del KTED de Red.es. <strong className="text-white">2. Realizas un análisis con ACCURO</strong> para seleccionar los servicios de nuestro catálogo (ERP, MES, WMS, CRM) que mejor resuelven los retos de tu empresa. <strong className="text-[oklch(0.78_0.14_85)]">3. Solo consumes los servicios que necesitas</strong>, siempre dentro del bono aprobado.
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
              {["UNE 0087:2025", "RGPD / ENS", "ISO 9001", "ISO 14001"].map((t) => (
                <span key={t} className="bg-[oklch(0.38_0.15_250)] text-[oklch(0.85_0.05_240)] px-2 py-0.5 rounded text-xs">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Duración</p>
            <p className="text-2xl font-bold text-white">7 Meses</p>
            <p className="text-[oklch(0.7_0.06_240)] text-xs">Diagnóstico + Implementación + Justificación</p>
          </div>
          <div className="bg-[oklch(0.30_0.15_250)] border border-[oklch(0.45_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Sistemas</p>
            <div className="flex flex-col gap-1 mt-1">
              {["ERP — Gestión Empresarial", "MES — Ejecución de Planta", "WMS — Almacén y Logística", "CRM — Clientes Industriales"].map((t) => (
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
        <span className="text-[oklch(0.65_0.06_240)] text-xs font-mono">ACCURO Technology · Industria del Metal</span>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.65_0.06_240)] text-xs font-mono">Diapositiva 01 / 13</span>
        </div>
      </div>
    </div>
  )
}
