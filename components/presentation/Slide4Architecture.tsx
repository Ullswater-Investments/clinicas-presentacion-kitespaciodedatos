"use client"

const layers = [
  {
    num: "01",
    title: "ERP — Gestión Empresarial Avanzada",
    subtitle: "Finanzas · Compras · RRHH · Compliance",
    desc: "Cerebro financiero y administrativo. Gestiona órdenes de compra, costes laborales por OF, certificaciones de calidad, facturación automática e informes de sostenibilidad.",
    items: ["Gestión financiera por OF", "Módulo certificaciones ISO", "Portal de proveedores digital"],
    color: "bg-[oklch(0.55_0.18_250)]",
    border: "border-[oklch(0.55_0.18_250)]",
  },
  {
    num: "02",
    title: "MES — Ejecución de Fabricación en Planta",
    subtitle: "OEE · OFs digitales · Control calidad",
    desc: "Conecta la gestión con las máquinas. Monitoriza OEE en tiempo real, entrega instrucciones digitales a operarios, controla calidad de piezas y registra tiempos por tarea.",
    items: ["Monitorización OEE con IoT", "Órdenes de fabricación sin papel", "Control calidad en tiempo real"],
    color: "bg-[oklch(0.45_0.17_250)]",
    border: "border-[oklch(0.45_0.17_250)]",
  },
  {
    num: "03",
    title: "WMS — Almacén y Logística Industrial",
    subtitle: "Colada · Bobinas · Chatarra · Expediciones",
    desc: "Diseñado para la complejidad de formatos metálicos: bobinas, barras, chapas. Gestiona trazabilidad de colada, mermas de corte, stock de utillaje y expediciones automatizadas.",
    items: ["Trazabilidad colada y lote", "Control de mermas y chatarra", "Expediciones con transportistas"],
    color: "bg-[oklch(0.38_0.15_250)]",
    border: "border-[oklch(0.38_0.15_250)]",
  },
  {
    num: "04",
    title: "CRM — Gestión Comercial Industrial",
    subtitle: "Clientes · Demanda · Homologación",
    desc: "Plataforma para el seguimiento de ofertas, pronóstico de demanda con IA, búsqueda de proveedores en espacios de datos sectoriales y homologación digital de certificaciones.",
    items: ["Pronóstico de demanda con IA", "Portal de estado de pedidos", "Homologación automática proveedores"],
    color: "bg-[oklch(0.25_0.12_250)]",
    border: "border-[oklch(0.25_0.12_250)]",
  },
]

export default function Slide4Architecture() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Solución</p>
          <h2 className="text-white text-xl font-bold">
            Arquitectura Integral: ERP + MES + WMS + CRM para la Industria 4.0
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">04 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Architecture stacks */}
        <div className="flex flex-col gap-5 flex-1">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              La metodología de ACCURO se centra en{" "}
              <strong className="text-[oklch(0.38_0.15_250)]">romper los silos de información</strong>{" "}
              entre planta y oficina. Un dato capturado en una línea de corte de metal alimenta
              automáticamente el inventario del WMS y se refleja en el balance financiero del ERP,
              generando los <strong>productos de datos publicables</strong> exigidos por el KTED.
            </p>
          </div>

          <div className="flex flex-col gap-3 flex-1">
            {layers.map((layer, i) => (
              <div key={i} className={`rounded-lg border-l-4 ${layer.border} bg-white p-4 shadow-sm flex gap-4`}>
                <div className={`${layer.color} text-white rounded w-10 h-10 flex items-center justify-center text-sm font-bold shrink-0`}>
                  {layer.num}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 flex-wrap">
                    <p className="font-bold text-[oklch(0.20_0.05_240)] text-sm">{layer.title}</p>
                    <span className="text-[oklch(0.5_0.10_250)] text-xs font-mono bg-[oklch(0.88_0.06_240)] px-2 py-0.5 rounded">
                      {layer.subtitle}
                    </span>
                  </div>
                  <p className="text-[oklch(0.45_0.03_240)] text-xs mt-1 leading-relaxed">{layer.desc}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {layer.items.map((item) => (
                      <span
                        key={item}
                        className="text-xs bg-[oklch(0.94_0.01_240)] text-[oklch(0.38_0.15_250)] px-2 py-0.5 rounded"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right – data flow */}
        <div className="w-72 flex flex-col gap-4">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Flujo del Dato Industrial
            </p>
            {[
              { from: "Línea de Corte", action: "Sensor IoT captura dato", to: "MES" },
              { from: "MES", action: "Actualiza OF + stock", to: "WMS + ERP" },
              { from: "ERP + WMS", action: "Genera producto de datos", to: "Espacio de Datos" },
              { from: "Espacio de Datos", action: "Publicación catálogo", to: "Cadena Suministro" },
            ].map((flow, i) => (
              <div key={i} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[oklch(0.25_0.05_240)]">{flow.from}</span>
                  <span className="text-[oklch(0.55_0.18_250)] font-mono">→</span>
                  <span className="font-medium text-[oklch(0.25_0.05_240)]">{flow.to}</span>
                </div>
                <div className="w-full bg-[oklch(0.88_0.06_240)] rounded-full px-2 py-0.5 text-center">
                  <span className="text-[oklch(0.38_0.15_250)] text-xs font-mono">{flow.action}</span>
                </div>
                {i < 3 && <div className="w-px h-3 bg-[oklch(0.75_0.08_250)] mx-auto" />}
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-2">30 Servicios ACCURO</p>
            {[
              "9 servicios ERP avanzado",
              "8 servicios MES de planta",
              "7 servicios WMS logístico",
              "6 servicios CRM + innovación",
            ].map((v) => (
              <div key={v} className="flex items-start gap-2 mb-1.5">
                <span className="text-[oklch(0.78_0.14_85)] mt-0.5 text-xs">▸</span>
                <span className="text-[oklch(0.88_0.04_240)] text-xs">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
