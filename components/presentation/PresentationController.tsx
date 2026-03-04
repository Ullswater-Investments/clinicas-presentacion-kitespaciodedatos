"use client"

import Slide1Cover from "./Slide1Cover"
import Slide2Challenge from "./Slide2Challenge"
import Slide3Vision from "./Slide3Vision"
import Slide4Architecture from "./Slide4Architecture"
import Slide5Purchases from "./Slide5Purchases"
import Slide6Costs from "./Slide6Costs"
import Slide7Invoicing from "./Slide7Invoicing"
import Slide8Accounting from "./Slide8Accounting"
import Slide9Roadmap from "./Slide9Roadmap"
import Slide10Closing from "./Slide10Closing"
import Slide11EcoIntro from "./Slide11EcoIntro"
import Slide12Payments from "./Slide12Payments"
import Slide13Guarantees from "./Slide13Guarantees"

const slides = [
  { id: 1, title: "Portada Metal", component: Slide1Cover },
  { id: 2, title: "Desafíos Metal", component: Slide2Challenge },
  { id: 3, title: "Visión KTED", component: Slide3Vision },
  { id: 4, title: "ERP+MES+WMS+CRM", component: Slide4Architecture },
  { id: 5, title: "WMS Trazabilidad", component: Slide5Purchases },
  { id: 6, title: "Rentabilidad OF", component: Slide6Costs },
  { id: 7, title: "MES de Planta", component: Slide7Invoicing },
  { id: 8, title: "30 Servicios", component: Slide8Accounting },
  { id: 9, title: "Roadmap", component: Slide9Roadmap },
  { id: 10, title: "Cierre", component: Slide10Closing },
  { id: 11, title: "Modelo Económico", component: Slide11EcoIntro },
  { id: 12, title: "Hitos de Pago", component: Slide12Payments },
  { id: 13, title: "Garantías", component: Slide13Guarantees },
]

export default function PresentationController() {
  return (
    <div className="bg-[oklch(0.12_0.05_240)] min-h-screen py-10 px-4">
      {/* Page header */}
      <div className="max-w-5xl mx-auto mb-8 flex items-center justify-between">
        <div>
          <p className="text-[oklch(0.78_0.14_85)] text-xs font-mono uppercase tracking-widest mb-1">
            Kit Espacio de Datos · Convocatoria 2025–2026
          </p>
          <h1 className="text-white text-xl font-bold">Proyecto KTED — Fabricación de Piezas de Metal · ACCURO Technology</h1>
        </div>
        <div className="text-[oklch(0.55_0.06_240)] text-xs font-mono">{slides.length} secciones</div>
      </div>

      {/* All slides stacked */}
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {slides.map((slide) => {
          const SlideComponent = slide.component
          return (
            <div
              key={slide.id}
              id={`slide-${slide.id}`}
              className="rounded-xl overflow-hidden shadow-2xl flex flex-col"
            >
              <SlideComponent />
              {/* Contact bar */}
              <div className="bg-[oklch(0.18_0.06_250)] border-t border-[oklch(0.28_0.08_250)] px-6 py-2 flex items-center justify-between gap-4 flex-wrap">
                <a
                  href="mailto:ivan.becerro@accuro.es"
                  className="flex items-center gap-1.5 text-[oklch(0.75_0.06_240)] hover:text-[oklch(0.78_0.14_85)] transition-colors text-xs font-mono"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  ivan.becerro@accuro.es
                </a>
                <a
                  href="https://wa.me/34619482648"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[oklch(0.75_0.06_240)] hover:text-[oklch(0.78_0.14_85)] transition-colors text-xs font-mono"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.58 4.92 2 2 0 0 1 3.54 2.7h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                  WhatsApp 619 482 648
                </a>
                <a
                  href="https://www.metal.kitespaciodedatos.eu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[oklch(0.75_0.06_240)] hover:text-[oklch(0.78_0.14_85)] transition-colors text-xs font-mono"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
                  www.metal.kitespaciodedatos.eu
                </a>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-10 flex items-center justify-between text-[oklch(0.40_0.04_240)] text-xs font-mono">
        <span>ACCURO Technology · Fabricación de Piezas de Metal · KTED 2025–2026</span>
        <span>30.000 € · 7 meses · {slides.length} módulos</span>
      </div>
    </div>
  )
}
