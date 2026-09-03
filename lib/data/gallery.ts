export interface GalleryItem {
  id: number
  treatment: string
  beforeSrc: string
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    treatment: 'Metal Braces',
    beforeSrc: '/images/clinic/hero-braces.jpg',
    afterSrc: '/images/clinic/hero-adult.jpg',
    beforeAlt: 'Metal braces treatment reference image',
    afterAlt: 'Adult orthodontics treatment reference image',
  },
  {
    id: 2,
    treatment: 'Invisalign',
    beforeSrc: '/images/clinic/hero-aligners.jpg',
    afterSrc: '/images/clinic/hero-smile-design.jpg',
    beforeAlt: 'Clear aligner treatment reference image',
    afterAlt: 'Smile designing treatment reference image',
  },
  {
    id: 3,
    treatment: 'Ceramic Braces',
    beforeSrc: '/images/clinic/hero-braces.jpg',
    afterSrc: '/images/clinic/hero-aligners.jpg',
    beforeAlt: 'Orthodontic braces treatment reference image',
    afterAlt: 'Clear aligner treatment reference image',
  },
  {
    id: 4,
    treatment: 'Teeth Whitening',
    beforeSrc: '/images/clinic/hero-whitening.jpg',
    afterSrc: '/images/clinic/hero-smile-design.jpg',
    beforeAlt: 'Teeth whitening treatment reference image',
    afterAlt: 'Smile designing treatment reference image',
  },
  {
    id: 5,
    treatment: 'Smile Makeover',
    beforeSrc: '/images/clinic/hero-smile-design.jpg',
    afterSrc: '/images/clinic/patient-one.png',
    beforeAlt: 'Smile designing treatment reference image',
    afterAlt: 'Patient experience reference image',
  },
  {
    id: 6,
    treatment: 'Lingual Braces',
    beforeSrc: '/images/clinic/hero-adult.jpg',
    afterSrc: '/images/clinic/hero-braces.jpg',
    beforeAlt: 'Adult orthodontics treatment reference image',
    afterAlt: 'Braces treatment reference image',
  },
  {
    id: 7,
    treatment: 'Dental Implants',
    beforeSrc: '/images/clinic/hero-implants.jpg',
    afterSrc: '/images/clinic/patient-two.png',
    beforeAlt: 'Dental implants treatment reference image',
    afterAlt: 'Patient experience reference image',
  },
  {
    id: 8,
    treatment: 'Root Canal',
    beforeSrc: '/images/clinic/hero-root-canal.png',
    afterSrc: '/images/clinic/hero-pediatric.jpg',
    beforeAlt: 'Root canal treatment reference image',
    afterAlt: 'Pediatric dentistry treatment reference image',
  },
]
