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
  { id: 1, title: "Portada", component: Slide1Cover },
  { id: 2, title: "Desafíos", component: Slide2Challenge },
  { id: 3, title: "Visión EHDS", component: Slide3Vision },
  { id: 4, title: "Arquitectura", component: Slide4Architecture },
  { id: 5, title: "Compras", component: Slide5Purchases },
  { id: 6, title: "Rentabilidad", component: Slide6Costs },
  { id: 7, title: "Facturación", component: Slide7Invoicing },
  { id: 8, title: "Contabilidad", component: Slide8Accounting },
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
            Kit Espacio de Datos · Convocatoria 2025
          </p>
          <h1 className="text-white text-xl font-bold">Proyecto EHDS — Clínica Dental</h1>
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
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <SlideComponent />
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto mt-10 flex items-center justify-between text-[oklch(0.40_0.04_240)] text-xs font-mono">
        <span>Global Data Care · Clínica Dental · EHDS 2025</span>
        <span>30.000 € · 6 meses · {slides.length} módulos</span>
      </div>
    </div>
  )
}
