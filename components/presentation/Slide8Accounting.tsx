"use client"

export default function Slide8Accounting() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Contabilidad</p>
          <h2 className="text-white text-xl font-bold">Contabilidad Ordenada y Conciliación Bancaria Automática</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">08 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Main concept */}
          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-1 font-bold">
              El Objetivo: El "Dato Único"
            </p>
            <p className="text-[oklch(0.90_0.04_240)] text-sm leading-relaxed">
              El contable no tendrá que perseguir papeles. Tendrá acceso directo al entorno de Odoo, donde{" "}
              <strong className="text-white">todas las operaciones de la clínica ya están estructuradas en asientos
              contables</strong>, listos para su revisión y presentación fiscal.
            </p>
          </div>

          {/* Reconciliation diagram */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Ciclo de Conciliación Bancaria Automática
            </p>
            <div className="flex items-center justify-between gap-2">
              {[
                { label: "Banco / SWIFT", icon: "🏦", desc: "Extracto bancario diario descargado via Open Banking" },
                { label: "Odoo IA", icon: "🤖", desc: "Motor de emparejamiento automático por IA" },
                { label: "Facturas Venta", icon: "📤", desc: "Cobros de pacientes identificados al instante" },
                { label: "Facturas Compra", icon: "📥", desc: "Pagos a proveedores conciliados automáticamente" },
                { label: "Contable", icon: "👤", desc: "Solo revisa excepciones y anomalías" },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center text-center gap-1">
                  <div className="w-12 h-12 bg-[oklch(0.88_0.06_240)] rounded-full flex items-center justify-center text-xl">
                    {item.icon}
                  </div>
                  <p className="text-xs font-bold text-[oklch(0.25_0.05_240)] mt-1">{item.label}</p>
                  <p className="text-xs text-[oklch(0.55_0.03_240)] leading-tight">{item.desc}</p>
                  {i < 4 && (
                    <div className="absolute" />
                  )}
                </div>
              ))}
            </div>
            {/* Arrow between them */}
            <div className="flex items-center mt-2 px-6">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="flex-1 h-0.5 bg-[oklch(0.38_0.15_250)]" />
              ))}
            </div>
          </div>

          {/* Key features */}
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Sincronización Bancaria
              </p>
              <p className="text-[oklch(0.45_0.03_240)] text-xs leading-relaxed">
                Odoo se conecta a los bancos de la clínica para descargar los extractos diarios automáticamente vía
                Open Banking / SWIFT.
              </p>
            </div>
            <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Conciliación IA
              </p>
              <p className="text-[oklch(0.45_0.03_240)] text-xs leading-relaxed">
                El sistema empareja automáticamente los pagos de pacientes con sus facturas y los pagos a proveedores
                con sus facturas de compra.
              </p>
            </div>
            <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4">
              <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
                Exportación Fiscal
              </p>
              <p className="text-[oklch(0.45_0.03_240)] text-xs leading-relaxed">
                Datos listos para la presentación de impuestos de forma ordenada y sin errores. Compatible con
                software de gestoría externo.
              </p>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Acceso del Contable en Odoo
            </p>
            {[
              { module: "Diario de Ventas", status: "Automático", ok: true },
              { module: "Diario de Compras", status: "Automático", ok: true },
              { module: "Conciliación Bancaria", status: "1 clic", ok: true },
              { module: "Modelo 303 IVA", status: "Exportación directa", ok: true },
              { module: "Modelo 111 IRPF", status: "Exportación directa", ok: true },
              { module: "Balance y P&L", status: "Tiempo real", ok: true },
            ].map((item) => (
              <div key={item.module} className="flex items-center justify-between">
                <p className="text-xs text-[oklch(0.35_0.04_240)]">{item.module}</p>
                <span className="text-xs text-green-600 font-mono bg-green-50 px-1.5 py-0.5 rounded">
                  {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Ahorro Contable Estimado
            </p>
            <p className="text-[oklch(0.20_0.05_240)] text-3xl font-bold">-40%</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">horas dedicadas a tareas manuales de contabilidad</p>
            <div className="h-px bg-[oklch(0.65_0.12_80)] my-1" />
            <p className="text-[oklch(0.20_0.05_240)] text-xl font-bold">0 errores</p>
            <p className="text-[oklch(0.30_0.05_240)] text-xs">en conciliación por procesamiento automático</p>
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2">
              Bancos Compatibles
            </p>
            {["BBVA", "Santander", "CaixaBank", "Sabadell", "Kutxabank"].map((b) => (
              <div key={b} className="flex items-center gap-2 mb-1">
                <div className="w-1.5 h-1.5 bg-[oklch(0.78_0.14_85)] rounded-full" />
                <span className="text-[oklch(0.88_0.04_240)] text-xs">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
