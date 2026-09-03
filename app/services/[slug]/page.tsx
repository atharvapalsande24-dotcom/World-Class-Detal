import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { services } from '@/lib/data/services'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = services.find(item => item.slug === params.slug)
  if (!service) return { title: 'Service Not Found | World Class Dental Clinic, Pune' }
  return {
    title: `${service.name} | World Class Dental Clinic, Pune`,
    description: service.shortDescription,
  }
}

export default function ServiceDetailPage({ params }: Props) {
  const service = services.find(item => item.slug === params.slug)
  if (!service) notFound()

  return (
    <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Dental Treatment</p>
      <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6">{service.name}</h1>
      <p className="text-xl text-neutral-600 leading-relaxed mb-12 max-w-3xl">{service.description}</p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-5">Benefits</h2>
          <ul className="space-y-3">{service.benefits.map(benefit => <li key={benefit} className="flex gap-3 text-neutral-700"><CheckCircle className="text-primary flex-shrink-0" size={20} />{benefit}</li>)}</ul>
          <p className="mt-8 text-neutral-700"><strong>Typical investment:</strong> {service.costRange}</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-neutral-900 mb-5">Your Treatment Journey</h2>
          <ol className="space-y-5">{service.process.map(step => <li key={step.step} className="flex gap-4"><span className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold flex-shrink-0">{step.step}</span><div><h3 className="font-semibold text-neutral-900">{step.title}</h3><p className="text-sm text-neutral-600 mt-1">{step.description}</p></div></li>)}</ol>
        </section>
      </div>
      <Link href="/contact" className="inline-flex items-center gap-2 mt-12 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark">Book a Consultation <ArrowRight size={18} /></Link>
    </main>
  )
}
