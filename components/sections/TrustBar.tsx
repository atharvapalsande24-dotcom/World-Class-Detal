import { CounterStat } from '@/components/ui/CounterStat'
import { Star, Users, Award, ThumbsUp } from 'lucide-react'

const stats = [
  {
    value: 650,
    suffix: '+',
    label: 'Verified Reviews',
    icon: Star,
    description: '5/5 Google Rating',
  },
  {
    value: 10000,
    suffix: '+',
    label: 'Happy Patients',
    icon: Users,
    description: 'Smiles transformed',
  },
  {
    value: 65,
    suffix: '+',
    label: 'Awards Won',
    icon: Award,
    description: 'National recognition',
  },
  {
    value: 25,
    suffix: '+',
    label: 'Dental Experts',
    icon: ThumbsUp,
    description: 'Specialist team',
  },
]

export function TrustBar() {
  return (
    <section
      className="py-16 bg-white border-b border-neutral-100"
      aria-label="Key statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Icon size={22} className="text-primary" aria-hidden="true" />
                </div>
                <CounterStat
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                />
                <p className="mt-1 text-xs text-neutral-400">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
