"use client"

export default function Slide3Vision() {
  return (
    <div className="relative w-full flex flex-col bg-[oklch(0.98_0.005_240)]">
      {/* Header */}
      <div className="px-10 py-5 bg-[oklch(0.38_0.15_250)] flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-0.5">Visión</p>
          <h2 className="text-white text-xl font-bold">
            Integración en el Espacio Europeo de Datos (Global Data Care)
          </h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-[oklch(0.78_0.14_85)]" />
          <span className="text-[oklch(0.78_0.14_85)] text-xs font-mono">03 / 10</span>
        </div>
      </div>

      <div className="flex p-8 gap-6">
        {/* Left column */}
        <div className="flex-1 flex flex-col gap-5">
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5">
            <p className="text-sm leading-relaxed text-[oklch(0.25_0.05_240)]">
              Gracias al <strong className="text-[oklch(0.38_0.15_250)]">"Kit Espacio de Datos"</strong>, la clínica
              no solo digitalizará sus procesos, sino que estructurará su información bajo{" "}
              <strong>estándares europeos de interoperabilidad (HL7, FHIR)</strong>, permitiendo el intercambio seguro
              de datos de salud e inventario clínico dentro del marco de la UE.
            </p>
          </div>

          {/* EU ecosystem diagram */}
          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex-1">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest mb-4 font-bold">
              Ecosistema Global Data Care
            </p>
            <div className="relative flex flex-col items-center gap-3">
              {/* Central hub */}
              <div className="w-full bg-[oklch(0.38_0.15_250)] text-white rounded-lg p-3 text-center">
                <p className="font-bold text-sm">EHDS — Espacio Europeo de Datos de Salud</p>
                <p className="text-[oklch(0.78_0.14_85)] text-xs mt-0.5">Marco regulatorio UE · HL7 FHIR</p>
              </div>
              <div className="w-px h-4 bg-[oklch(0.38_0.15_250)]" />
              {/* Second layer */}
              <div className="w-full bg-[oklch(0.88_0.06_240)] border border-[oklch(0.75_0.08_240)] rounded-lg p-3 text-center">
                <p className="font-bold text-sm text-[oklch(0.25_0.05_240)]">Global Data Care</p>
                <p className="text-[oklch(0.5_0.03_240)] text-xs mt-0.5">Red de intercambio de datos clínicos certificada</p>
              </div>
              <div className="w-px h-4 bg-[oklch(0.38_0.15_250)]" />
              {/* Third layer */}
              <div className="w-full bg-[oklch(0.55_0.18_250)] text-white rounded-lg p-3 text-center">
                <p className="font-bold text-sm">Clínica Dental — Nodo Local</p>
                <p className="text-[oklch(0.88_0.04_240)] text-xs mt-0.5">App a medida + Odoo ERP + API Python</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              { std: "HL7 FHIR", desc: "Estándar para intercambio de datos clínicos" },
              { std: "RGPD / ENS", desc: "Protección y seguridad de datos personales" },
              { std: "TicketBAI / FacturaE", desc: "Normativa fiscal local y electrónica" },
              { std: "ISO 13485", desc: "Trazabilidad de productos sanitarios" },
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
              Financiación Solicitada
            </p>
            <p className="text-4xl font-bold text-[oklch(0.20_0.05_240)]">30.000€</p>
            <div className="h-px bg-[oklch(0.65_0.12_80)] my-1" />
            <p className="text-[oklch(0.25_0.05_240)] text-xs leading-relaxed">
              Destinada a la consultoría, adaptación de bases de datos, seguridad de la información y desarrollo del
              software puente para cumplir con los requisitos del programa europeo.
            </p>
          </div>

          <div className="bg-white border border-[oklch(0.88_0.02_240)] rounded-lg p-5 flex flex-col gap-3">
            <p className="text-[oklch(0.38_0.15_250)] text-xs font-mono uppercase tracking-widest font-bold">
              Partidas Presupuestarias
            </p>
            {[
              { label: "Consultoría EHDS", pct: 30 },
              { label: "Desarrollo de software", pct: 40 },
              { label: "Seguridad y certificación", pct: 15 },
              { label: "Formación y despliegue", pct: 15 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-[oklch(0.35_0.04_240)]">{item.label}</span>
                  <span className="text-[oklch(0.38_0.15_250)] font-bold">{item.pct}%</span>
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
                "Interoperabilidad datos sanitarios EU",
                "Preparación para EHDS obligatorio 2027",
                "Acceso a redes de datos europeas",
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
