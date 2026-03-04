"use client"

export default function Slide3Vision() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Visión</p>
          <h2 className="text-white text-xl font-bold">
            El Kit Espacio de Datos y la Oportunidad para el Sector del Metal
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">03 / 13</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              El programa <strong className="text-[oklch(0.38_0.15_250)]">"Kit Espacio de Datos" (KTED)</strong> de Red.es,
              financiado con fondos Next Generation EU, permite a empresas metalúrgicas cofinanciar hasta{" "}
              <strong>30.000 € como Proveedor</strong> para integrarse en espacios de datos sectoriales
              bajo estándares de soberanía, seguridad e interoperabilidad de la UE.
            </p>
          </div>

          {/* Ecosystem diagram */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Ecosistema de Espacios de Datos Industriales
            </p>
            <div className="relative flex flex-col items-center gap-3">
              <div className="w-full bg-[oklch(0.38_0.15_250)] text-white rounded-lg p-3 text-center">
                <p className="font-bold text-sm">Red.es / PRTR — Agenda España Digital 2026</p>
                <p className="text-[oklch(0.78_0.14_85)] text-xs mt-0.5">Marco regulatorio UE · UNE 0087:2025</p>
              </div>
              <div className="w-px h-4 bg-[oklch(0.38_0.15_250)]" />
              <div className="w-full bg-[oklch(0.88_0.06_240)] border border-[oklch(0.75_0.08_240)] rounded-lg p-3 text-center">
                <p className="font-bold text-sm text-[oklch(0.25_0.05_240)]">CRED — Centro de Referencia de Espacios de Datos</p>
                <p className="text-[oklch(0.5_0.03_240)] text-xs mt-0.5">Lista de Confianza · Ecosistemas certificados UNE 0087:2025</p>
              </div>
              <div className="w-px h-4 bg-[oklch(0.38_0.15_250)]" />
              <div className="w-full bg-[oklch(0.55_0.18_250)] text-white rounded-lg p-3 text-center">
                <p className="font-bold text-sm">Empresa Metalúrgica — Nodo Proveedor</p>
                <p className="text-[oklch(0.88_0.04_240)] text-xs mt-0.5">ERP + MES + WMS + CRM · Publicación de Productos de Datos</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { std: "UNE 0087:2025", desc: "Estándar de interoperabilidad y soberanía del dato en España" },
              { std: "RGPD / ENS", desc: "Protección de datos y seguridad de la información" },
              { std: "Eclipse Dataspace", desc: "Conector técnico para participar en el espacio de datos" },
              { std: "ISO 9001 / 14001", desc: "Trazabilidad de calidad y huella medioambiental" },
            ].map((item) => (
              <div key={item.std} className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-3">
                <p className="text-[oklch(0.38_0.15_250)] font-bold text-xs font-mono">{item.std}</p>
                <p className="text-[oklch(0.45_0.03_240)] text-xs mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div className="w-72 flex flex-col gap-4">
          {/* Funding box */}
          <div className="bg-[oklch(0.78_0.14_85)] rounded-lg p-5 flex flex-col gap-2">
            <p className="text-[oklch(0.25_0.05_240)] text-xs font-mono uppercase tracking-widest font-bold">
              Financiación Máxima (Proveedor)
            </p>
            <p className="text-4xl font-bold text-[oklch(0.20_0.05_240)]">30.000€</p>
            <div className="h-px bg-[oklch(0.65_0.12_80)] my-1" />
            <p className="text-[oklch(0.25_0.05_240)] text-xs leading-relaxed">
              Para la modalidad de Incorporación Avanzada como Proveedor: publicación activa de productos
              de datos en el catálogo del espacio de datos sectorial.
            </p>
          </div>

          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Tabla de Ayudas KTED
            </p>
            {[
              { label: "Participante privado", pct: 50, amount: "15.000 €" },
              { label: "Proveedor privado", pct: 100, amount: "30.000 €" },
              { label: "AAPP Participante", pct: 83, amount: "25.000 €" },
              { label: "AAPP Proveedor", pct: 100, amount: "50.000 €" },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[oklch(0.35_0.04_240)]">{item.label}</span>
                  <span className="text-[oklch(0.38_0.15_250)] font-bold">{item.amount}</span>
                </div>
                <div className="w-full bg-[oklch(0.94_0.01_240)] rounded-full h-1.5">
                  <div
                    className="bg-[oklch(0.38_0.15_250)] h-1.5 rounded-full"
                    style={{ width: `${item.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[oklch(0.38_0.15_250)] rounded-lg p-4 flex flex-col gap-2">
            <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest">Beneficios Clave</p>
            <div className="flex flex-col gap-1.5 mt-1">
              {[
                "Compartir capacidad de producción en tiempo real",
                "Trazabilidad de lotes en la cadena de suministro",
                "Acceso a financiación basada en rendimiento real",
                "Soberanía digital sobre datos de fabricación",
              ].map((b) => (
                <div key={b} className="flex items-start gap-2">
                  <span className="text-[oklch(0.78_0.14_85)] mt-0.5">✓</span>
                  <span className="text-[oklch(0.85_0.04_240)] text-xs">{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
