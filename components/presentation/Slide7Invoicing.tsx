"use client"

export default function Slide7Invoicing() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Facturación</p>
          <h2 className="text-white text-xl font-bold">Módulo de Facturación Integral (Impulsado por Odoo)</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">07 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Two blocks */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {/* Sales invoicing */}
            <div className="flex flex-col gap-3">
              <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[oklch(0.55_0.18_250)] rounded-lg flex items-center justify-center text-white text-lg">
                    💰
                  </div>
                  <div>
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Bloque 1</p>
                    <p className="text-white font-bold text-sm">Facturación a Pacientes</p>
                  </div>
                </div>
                <p className="text-[oklch(0.85_0.04_240)] text-xs leading-relaxed">
                  Generación de facturas de venta automáticas desde la App de la clínica tras finalizar el
                  tratamiento, cumpliendo con la normativa fiscal local.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex-1">
                <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
                  Proceso de Venta
                </p>
                {[
                  { step: "Tratamiento finalizado", detail: "Doctor marca acto clínico como completado" },
                  { step: "App genera borrador", detail: "Con costes de materiales y honorarios" },
                  { step: "Revisión y ajuste", detail: "Recepción ajusta si hay descuentos/seguros" },
                  { step: "Emisión de factura", detail: "TicketBAI / FacturaE automático" },
                  { step: "Registro en Odoo", detail: "Asiento contable generado al instante" },
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
                {["TicketBAI", "FacturaE", "PDF/A", "SEPA"].map((std) => (
                  <span key={std} className="bg-[oklch(0.38_0.15_250)] text-white text-xs px-2 py-1 rounded font-mono">
                    {std}
                  </span>
                ))}
              </div>
            </div>

            {/* Purchase invoicing */}
            <div className="flex flex-col gap-3">
              <div className="bg-[oklch(0.25_0.12_250)] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 bg-[oklch(0.38_0.15_250)] rounded-lg flex items-center justify-center text-white text-lg">
                    🏭
                  </div>
                  <div>
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Bloque 2</p>
                    <p className="text-white font-bold text-sm">Facturas de Compra</p>
                  </div>
                </div>
                <p className="text-[oklch(0.80_0.05_240)] text-xs leading-relaxed">
                  Al recibir la factura del proveedor, el sistema la cruza automáticamente con los albaranes
                  previamente validados para aprobar o bloquear el pago.
                </p>
              </div>

              <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex-1">
                <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-3 font-bold">
                  Proceso de Compra (3-Way Match)
                </p>
                <div className="flex flex-col gap-2">
                  <div className="bg-[oklch(0.88_0.06_240)] rounded p-2 text-center">
                    <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">Orden de Compra</p>
                    <p className="text-xs text-[oklch(0.55_0.03_240)]">Cantidades y precios acordados</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px flex-1 bg-[oklch(0.38_0.15_250)]" />
                    <div className="bg-[oklch(0.38_0.15_250)] text-white rounded p-1.5">
                      <p className="text-xs font-mono">Match</p>
                    </div>
                    <div className="h-px flex-1 bg-[oklch(0.38_0.15_250)]" />
                  </div>
                  <div className="bg-[oklch(0.88_0.06_240)] rounded p-2 text-center">
                    <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">Albarán Validado</p>
                    <p className="text-xs text-[oklch(0.55_0.03_240)]">Lo que realmente se recibió</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="h-px flex-1 bg-[oklch(0.38_0.15_250)]" />
                    <div className="bg-[oklch(0.38_0.15_250)] text-white rounded p-1.5">
                      <p className="text-xs font-mono">Match</p>
                    </div>
                    <div className="h-px flex-1 bg-[oklch(0.38_0.15_250)]" />
                  </div>
                  <div className="bg-[oklch(0.88_0.06_240)] rounded p-2 text-center">
                    <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">Factura Proveedor</p>
                    <p className="text-xs text-[oklch(0.55_0.03_240)]">Lo que cobra el proveedor</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-3">
                  <div className="bg-green-50 border border-green-200 rounded p-2 text-center">
                    <p className="text-green-700 font-bold text-xs">✓ Coincide</p>
                    <p className="text-green-600 text-xs">Aprobada para pago</p>
                  </div>
                  <div className="bg-red-50 border border-red-200 rounded p-2 text-center">
                    <p className="text-red-700 font-bold text-xs">⚠ Discrepancia</p>
                    <p className="text-red-600 text-xs">Bloqueada + alerta</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-64 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-4 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Normativas Soportadas
            </p>
            {[
              { norm: "TicketBAI", desc: "País Vasco / Navarra" },
              { norm: "FacturaE", desc: "Facturación electrónica UE" },
              { norm: "SII", desc: "Suministro Inmediato de Info" },
              { norm: "SEPA XML", desc: "Pagos y cobros bancarios" },
              { norm: "IVA / IRPF", desc: "Modelos 303, 115, 111..." },
            ].map((item) => (
              <div key={item.norm} className="flex items-center gap-2">
                <span className="bg-[oklch(0.38_0.15_250)] text-white text-xs px-1.5 py-0.5 rounded font-mono w-20 text-center shrink-0">
                  {item.norm}
                </span>
                <span className="text-[oklch(0.45_0.03_240)] text-xs">{item.desc}</span>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-2 flex-1">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Automatización</p>
            {[
              "Facturas de venta sin intervención manual",
              "Conciliación de compras en 1 clic",
              "Alertas automáticas de discrepancias",
              "Exportación a formatos fiscales listos",
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
