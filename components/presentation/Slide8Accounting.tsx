"use client"

const services = [
  {
    area: "Área I — ERP",
    color: "bg-[oklch(0.55_0.18_250)]",
    items: [
      { n: "01", label: "Gestión Financiera por OF" },
      { n: "02", label: "Inventario Tiempo Real" },
      { n: "03", label: "Huella de Carbono por Proceso" },
      { n: "04", label: "Certificaciones ISO Digitales" },
      { n: "05", label: "Compliance Normativo Auto." },
      { n: "06", label: "Pedidos Integrados con Clientes" },
      { n: "07", label: "Portal de Proveedores" },
      { n: "08", label: "RRHH y Certificaciones" },
      { n: "09", label: "Nóminas en Centros de Coste" },
    ],
  },
  {
    area: "Área II — MES",
    color: "bg-[oklch(0.45_0.17_250)]",
    items: [
      { n: "10", label: "Monitorización OEE con IoT" },
      { n: "11", label: "Dashboards de Planta" },
      { n: "12", label: "OFs Digitales sin Papel" },
      { n: "13", label: "Control Calidad Tiempo Real" },
      { n: "14", label: "Asignación Cargas Máquina" },
      { n: "15", label: "Seguimiento Estado OF" },
      { n: "16", label: "Protocolos Seguridad" },
      { n: "17", label: "Cierre OF con Trazabilidad" },
    ],
  },
  {
    area: "Área III — WMS",
    color: "bg-[oklch(0.38_0.15_250)]",
    items: [
      { n: "18", label: "Trazabilidad Colada y Lote" },
      { n: "19", label: "Gestión Compras y Reposición" },
      { n: "20", label: "Reserva Material a OF" },
      { n: "21", label: "Control Mermas y Chatarra" },
      { n: "22", label: "Gestión Utillaje y Herramental" },
      { n: "23", label: "Recepción y Validación Albarán" },
      { n: "24", label: "Expediciones Automatizadas" },
    ],
  },
  {
    area: "Área IV — CRM",
    color: "bg-[oklch(0.25_0.12_250)]",
    items: [
      { n: "25", label: "CRM Clientes Industriales" },
      { n: "26", label: "Pronóstico de Demanda IA" },
      { n: "27", label: "Búsqueda Proveedores por Espacio" },
      { n: "28", label: "Homologación Digital Proveed." },
      { n: "29", label: "Identidad Digital y Firma" },
      { n: "30", label: "Publicación Productos de Datos" },
    ],
  },
]

export default function Slide8Accounting() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Catálogo</p>
          <h2 className="text-white text-xl font-bold">30 Servicios Especializados ACCURO — Financiables con los 30.000€</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">08 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        <div className="flex-1 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              Este es el <strong className="text-[oklch(0.38_0.15_250)]">catálogo completo de servicios que ACCURO Technology pone a disposición</strong> de las empresas del metal. <strong>Cada empresa es libre de seleccionar los servicios que necesita</strong> en función de su situación actual, realizando previamente un análisis de sus necesidades. El importe total de los servicios elegidos no puede superar los <strong className="text-[oklch(0.38_0.15_250)]">30.000€ del bono KTED</strong> que obtiene la empresa.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-3 flex-1">
            {services.map((area) => (
              <div key={area.area} className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg overflow-hidden flex flex-col">
                <div className={`${area.color} p-3`}>
                  <p className="text-white font-bold text-xs">{area.area}</p>
                </div>
                <div className="p-3 flex flex-col gap-1.5 flex-1">
                  {area.items.map((svc) => (
                    <div key={svc.n} className="flex items-center gap-2">
                      <span className={`${area.color} text-white text-xs w-6 h-6 rounded flex items-center justify-center font-mono font-bold shrink-0`}>
                        {svc.n}
                      </span>
                      <span className="text-[oklch(0.35_0.04_240)] text-xs leading-tight">{svc.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-60 flex flex-col gap-4">
          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest font-bold">
              Proceso de Seleccion
            </p>
            {[
              { act: "1. Diagnóstico", desc: "Análisis de la situación actual y necesidades reales de tu empresa" },
              { act: "2. Selección", desc: "Eliges los servicios de este catálogo que más valor aportan a tu empresa" },
              { act: "3. Presupuesto", desc: "Los servicios elegidos se ajustan al bono de 30.000€ del KTED" },
              { act: "4. Implementación", desc: "ACCURO implementa solo los servicios que has seleccionado" },
            ].map((item) => (
              <div key={item.act} className="flex flex-col gap-0.5 border-b border-[oklch(0.50_0.15_250)] pb-2 last:border-0">
                <p className="text-[oklch(0.78_0.14_85)] text-xs font-bold">{item.act}</p>
                <p className="text-[oklch(0.80_0.07_240)] text-xs">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-5 flex flex-col gap-3 flex-1">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Cuestionario de Diagnostico
            </p>
            <p className="text-[oklch(0.20_0.05_240)] text-xs leading-relaxed">
              ACCURO propone un diagnóstico previo de 10 preguntas para <strong>identificar y priorizar los servicios del catálogo</strong> que mejor se adaptan a la realidad de cada empresa metalúrgica.
            </p>
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                "Bloque A: Eficiencia ERP",
                "Bloque B: Control MES",
                "Bloque C: Logística WMS",
                "Bloque D: Conectividad datos",
              ].map((b) => (
                <div key={b} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[oklch(0.25_0.05_240)] shrink-0" />
                  <span className="text-[oklch(0.25_0.05_240)] text-xs">{b}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto bg-[oklch(0.65_0.12_80)] rounded p-2 text-center">
              <p className="text-[oklch(0.20_0.05_240)] font-bold text-xs">Tu empresa elige · 30.000€ KTED</p>
              <p className="text-[oklch(0.30_0.05_240)] text-xs">Solo los servicios que necesitas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
