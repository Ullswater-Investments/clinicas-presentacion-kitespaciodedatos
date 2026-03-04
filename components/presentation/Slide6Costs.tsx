"use client"

export default function Slide6Costs() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Rentabilidad</p>
          <h2 className="text-white text-xl font-bold">Rentabilidad Real: Coste Exacto por Orden de Fabricación</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">06 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-5">
          {/* Main process box */}
          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 text-white">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2 font-bold">
              El Proceso — Imputación Automática de Costes por OF
            </p>
            <p className="text-sm leading-relaxed text-[oklch(0.90_0.04_240)]">
              Cuando el operario consume material en una orden de fabricación, lo registra en el MES
              (o el sensor IoT lo captura automáticamente). El ERP descuenta el stock valorado y asigna
              el coste exacto de materiales, energía y mano de obra a esa OF.{" "}
              <strong className="text-[oklch(0.78_0.14_85)]">
                Esto permite calcular el margen real por pieza fabricada, por cliente y por referencia.
              </strong>
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
                  Costes de la OF
                </p>
                {[
                  { label: "Chapa AISI 304 (2mm)", cost: "€48,00", ref: "Colada: H24-001" },
                  { label: "Tiempo máquina CNC", cost: "€32,50", ref: "3h · €10,83/h" },
                  { label: "Operario certificado", cost: "€18,00", ref: "1,5h · €12,00/h" },
                ].map((item) => (
                  <div key={item.label} className="bg-[oklch(0.88_0.06_240)] rounded p-2">
                    <p className="text-xs font-medium text-[oklch(0.25_0.05_240)]">{item.label}</p>
                    <p className="text-[oklch(0.38_0.15_250)] font-bold text-sm">{item.cost}</p>
                    <p className="text-[oklch(0.55_0.03_240)] text-xs">{item.ref}</p>
                  </div>
                ))}
              </div>

              {/* Arrow + processor */}
              <div className="flex flex-col items-center justify-center gap-2">
                <div className="text-[oklch(0.38_0.15_250)] text-xl">→</div>
                <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-3 text-center w-full">
                  <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono">ERP + MES</p>
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
                    <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono">OF #20250314-07</p>
                    <p className="text-white font-bold text-sm mt-1">Pieza ref. FL-304-A</p>
                    <p className="text-[oklch(0.80_0.05_240)] text-xs">Cliente: Automotive SL</p>
                  </div>
                  <div className="mt-3 border-t border-[oklch(0.50_0.15_250)] pt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-[oklch(0.78_0.14_85)]">Coste total OF:</span>
                      <span className="text-white font-bold">€98,50</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-[oklch(0.78_0.14_85)]">PVP por pieza:</span>
                      <span className="text-white font-bold">€165,00</span>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span className="text-[oklch(0.78_0.14_85)]">Margen Real:</span>
                      <span className="text-[oklch(0.78_0.14_85)] font-bold text-base">40%</span>
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
              { type: "Coste de Material", desc: "Precio real de la materia prima consumida con trazabilidad de colada" },
              { type: "Coste Energético", desc: "Consumo de horno, CNC y lineas de corte cruzado con tarifa eléctrica" },
              { type: "Coste Laboral", desc: "Tiempo del operario por certificación y tipo de tarea" },
              { type: "Merma y Chatarra", desc: "Material sobrante valorizado y descontado del margen" },
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
              Cruzar datos energéticos con precios del mercado eléctrico compartidos en el espacio de
              datos para desplazar procesos intensivos a horas de menor coste.
            </p>
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">KPIs Disponibles</p>
            {[
              "Margen bruto por referencia de pieza",
              "Coste real por hora de máquina",
              "Rentabilidad por cliente industrial",
              "OFs menos rentables del mes",
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
