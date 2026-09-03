export interface AwardItem {
  id: number
  title: string
  year?: string
  organization?: string
  description?: string
}

export const awards: AwardItem[] = [
  {
    id: 1,
    title: 'Excellence in Orthodontics Award',
    description:
      'Recognised for outstanding expertise and patient outcomes in orthodontic treatment.',
  },
  {
    id: 2,
    title: 'Excellence in Dentistry Award',
    description:
      'Awarded in recognition of exceptional standards of dental care and clinical excellence.',
  },
  {
    id: 3,
    title: 'Dr. APJ Abdul Kalam Lifetime Achievement Award',
    description:
      'Prestigious lifetime achievement honour recognising long-standing contributions to the dental profession.',
  },
  {
    id: 4,
    title: 'Heroic Dentistry Award',
    description:
      'Celebrated for going above and beyond to deliver compassionate and impactful dental services.',
  },
  {
    id: 5,
    title: 'Outstanding Dentist Award',
    description:
      'Honoured for consistently delivering outstanding patient experiences and clinical results.',
  },
  {
    id: 6,
    title: 'Best Dental Clinic Award',
    description:
      'Recognised as one of the best dental clinics in Pune for quality, hygiene, and patient satisfaction.',
  },
  {
    id: 7,
    title: 'Health Mantra Award',
    description:
      'Awarded for promoting health awareness and best practices in community dental care.',
  },
  {
    id: 8,
    title: 'Icons of Health Recognition',
    description:
      'Celebrated as an icon of health in the region for exceptional contributions to dental health.',
  },
]
