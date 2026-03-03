"use client"

export default function Slide6Costs() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Rentabilidad</p>
          <h2 className="text-white text-xl font-bold">Rentabilidad Real: Trazabilidad del Coste por Paciente</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">06 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Main process box */}
          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 text-white">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
              El Proceso — Imputación Automática de Costes
            </p>
            <p className="text-sm leading-relaxed text-[oklch(0.90_0.04_240)]">
              Cuando un doctor utiliza un material de alto valor en una cirugía, lo registra en la App de la clínica
              (o escanea el lote). Automáticamente, nuestro controlador de Python informa a Odoo.{" "}
              <strong className="text-[oklch(0.78_0.14_85)]">
                Odoo descuenta el stock y asigna el coste exacto de ese material al centro de coste del paciente.
              </strong>{" "}
              Esto permite calcular el margen de beneficio real por tratamiento y paciente, separándolo de los gastos
              generales (prorrateados).
            </p>
          </div>

          {/* Diagram */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Diagrama de Imputación de Costes
            </p>
            <div className="grid grid-cols-3 gap-3 h-full">
              {/* Input */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-[oklch(0.38_0.15_250)] uppercase tracking-wide text-center">
                  Origen del Coste
                </p>
                {[
                  { label: "Implante Nobel Ø4", cost: "€142,00", lot: "Lote: 2024-A1" },
                  { label: "Corona Zirconio", cost: "€95,00", lot: "Ref: CZ-ML" },
                  { label: "Material regeneración", cost: "€38,50", lot: "Lote: B2024" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.88_0.06_240)] rounded p-2">
                    <p className="text-xs font-medium text-[oklch(0.25_0.05_240)]">{item.label}</p>
                    <p className="text-[oklch(0.38_0.15_250)] font-bold text-sm">{item.cost}</p>
                    <p className="text-[oklch(0.55_0.03_240)] text-xs">{item.lot}</p>
                  </div>
                ))}
              </div>

              {/* Arrow + processor */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-[oklch(0.38_0.15_250)] text-xl">→</div>
                <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-3 text-center w-full">
                  <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono">Python API</p>
                  <p className="text-white text-xs mt-1 font-bold">Imputa</p>
                  <p className="text-[oklch(0.80_0.05_240)] text-xs">automáticamente</p>
                </div>
                <div className="text-[oklch(0.38_0.15_250)] text-xl">→</div>
              </div>

              {/* Output */}
              <div className="flex flex-col gap-2">
                <p className="text-xs font-bold text-[oklch(0.38_0.15_250)] uppercase tracking-wide text-center">
                  Centro de Coste
                </p>
                <div className="bg-[oklch(0.38_0.15_250)] text-white rounded-lg p-3 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono">PACIENTE #00124</p>
                    <p className="text-white font-bold text-sm mt-1">Implante + Corona</p>
                    <p className="text-[oklch(0.80_0.05_240)] text-xs">Dr. García · 14/03/2025</p>
                  </div>
                  <div className="mt-3 border-t border-[oklch(0.50_0.15_250)] pt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-[oklch(0.78_0.14_85)]">Coste materiales:</span>
                      <span className="text-white font-bold">€275,50</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-[oklch(0.78_0.14_85)]">PVP Tratamiento:</span>
                      <span className="text-white font-bold">€950,00</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-[oklch(0.78_0.14_85)]">Margen Real:</span>
                      <span className="text-[oklch(0.78_0.14_85)] font-bold text-base">71%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Tipos de Coste Imputados
            </p>
            {[
              { type: "Coste Directo", desc: "Materiales específicos por lote asignados al tratamiento" },
              { type: "Coste Indirecto", desc: "Material de uso general prorrateado por tratamiento" },
              { type: "Coste Laboral", desc: "Tiempo del doctor por tipo de acto clínico" },
              { type: "Overhead Clínica", desc: "Amortizaciones y gastos fijos distribuidos" },
            ].map((item) => (
              <div key={item.type} className="flex flex-col gap-0.5 border-b border-[oklch(0.94_0.01_240)] pb-2 last:border-0">
                <p className="text-xs font-bold text-[oklch(0.25_0.05_240)]">{item.type}</p>
                <p className="text-xs text-[oklch(0.55_0.03_240)]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Mayor Valor del Sistema
            </p>
            <p className="text-[oklch(0.20_0.05_240)] text-sm leading-relaxed">
              Capacidad de <strong>cruzar datos logísticos con datos clínicos</strong> para obtener el margen de
              beneficio real por tratamiento y por paciente.
            </p>
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">KPIs Disponibles</p>
            {[
              "Margen bruto por tratamiento",
              "Coste real por implante colocado",
              "Rentabilidad por doctor",
              "Tratamientos menos rentables",
            ].map((kpi) => (
              <div key={kpi} className="flex items-start gap-2">
                <span className="text-[oklch(0.78_0.14_85)] text-xs">▸</span>
                <span className="text-[oklch(0.88_0.04_240)] text-xs">{kpi}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
