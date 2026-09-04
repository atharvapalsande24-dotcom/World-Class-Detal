import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Award, CalendarDays, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: 'News & Awards | World Class Dental Clinic, Pune',
  description: 'News, professional achievements, awards and nominations of Dr. Priyanka Saokar Navale and World Class Dental Clinic, Pune.',
}

const professionalAwards = [
  { image: 'g.png', title: 'Excellence in Orthodontics', text: 'Certificate of Appreciation under the Excellence in Orthodontics category by Indian Health.' },
  { image: 'g1.png', title: 'Professional Awards 2018', text: 'Recognition for professional excellence and contribution to dental care.' },
  { image: 'g2.png', title: 'Dr. APJ Abdul Kalam Lifetime Achievement Award', text: 'Awarded on 26 January 2019 in Bengaluru for distinguished contributions to the development of the nation and outstanding excellence in dental services.' },
  { image: 'g3.png', title: 'Dental Specialist of the Year Nomination', text: 'Nominated in the Orthodontics category at the Indian Dental Diva Awards 2019.' },
  { image: 'g4.png', title: 'E3 Certificate of Honour', text: 'Certificate of Honour for successfully completing the E3 course and becoming an E3ian.' },
  { image: 'A5.jpg', title: 'Outstanding Dentist of the Year Nomination', text: 'Nominated in the Outstanding Dentist of the Year category on 9 December 2018.' },
]

const achievements2019 = ['A1.jpg', 'A2.jpg', 'A3.jpg', 'A4.jpg']
const awardsSummary = Array.from({ length: 10 }, (_, index) => `${index + 1}.png`)
const nominationsSummary = Array.from({ length: 7 }, (_, index) => `n${index + 1}.png`)
const homepageRecognition = [
  { image: 'Award1.jpg', title: 'Dentistry Awards 2019 winner' },
  { image: 'Orthodontist.png', title: 'Best Orthodontist of the Year' },
  { image: 'dentist.png', title: 'Outstanding Dentist recognition' },
  { image: 'dentistry.png', title: 'Excellence in Dentistry' },
  { image: 'pic.jpg', title: 'Award-winning dental care' },
  { image: 'pic2.jpg', title: 'Professional achievement' },
  { image: 'pic5.jpg', title: 'World Class Dental recognition' },
]

function CertificateGrid({ images, label }: { images: string[]; label: string }) {
  return (
    <div className="news-certificate-grid">
      {images.map((image, index) => (
        <figure className="news-certificate" key={image}>
          <Image src={`/images/awards/${image}`} alt={`${label} certificate ${index + 1}`} fill sizes="(max-width: 640px) 92vw, (max-width: 1000px) 45vw, 23vw" />
        </figure>
      ))}
    </div>
  )
}

export default function NewsUpdatePage() {
  return (
    <main className="news-page">
      <section className="news-hero">
        <div className="news-hero-inner">
          <p className="section-kicker">News &amp; updates</p>
          <h1>World Class Dental in the spotlight</h1>
          <p className="news-hero-intro">Stories, interviews and professional milestones from Dr. Priyanka Saokar Navale and the World Class Dental Clinic team.</p>
          <div className="news-meta"><span><MapPin size={15} aria-hidden="true" /> Pune, India</span><span><CalendarDays size={15} aria-hidden="true" /> Since 2018</span></div>
        </div>
        <div className="news-hero-image"><Image src="/images/awards/smile.jpeg" alt="Dr. Priyanka Saokar Navale featured in a dental news article" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
      </section>

      <section className="news-recognition-strip" aria-labelledby="recognition-strip-heading">
        <div className="news-recognition-heading"><p className="section-kicker">Featured recognition</p><h2 id="recognition-strip-heading">A record of excellence</h2></div>
        <div className="news-recognition-track">
          {homepageRecognition.map(item => <figure className="news-recognition-card" key={item.image}><Image src={`/images/awards/home-strip/${item.image}`} alt={item.title} fill sizes="210px" /><figcaption>{item.title}</figcaption></figure>)}
        </div>
      </section>

      <section className="news-story" aria-labelledby="story-heading">
        <div className="news-story-copy">
          <p className="section-kicker">The story behind the smiles</p>
          <h2 id="story-heading">Smile for all is more than a motto.</h2>
          <p>Dr. Priyanka Saokar Navale is the owner of World Class Dental Clinic, one of Pune&apos;s most rated and reviewed dental clinics. She has delivered more than 1,000 smiles, has been practising for seven years and is associated with more than 35 dental clinics in Pune for orthodontic treatments.</p>
          <p>She secured first rank in the 2018 PhD entrance test and is pursuing her PhD at DY Patil Dental College. With seven years of teaching experience, publications and awards for best paper and poster presentations, her work has been featured by Times of India, Indian Express and Femina. She has also appeared live on IBN Lokmat.</p>
          <p>Located at FC Road in the heart of Pune, World Class Dental Clinic provides advanced dental and orthodontic care in a welcoming environment.</p>
          <Link className="news-story-link" href="/contact">Book a consultation <ArrowUpRight size={17} aria-hidden="true" /></Link>
        </div>
        <div className="news-story-image"><Image src="/images/awards/g.png" alt="World Class Dental feature and certificate" fill sizes="(max-width: 800px) 100vw, 38vw" /></div>
      </section>

      <section className="news-section" aria-labelledby="awards-heading">
        <div className="news-section-heading"><p className="section-kicker">Recognition</p><h2 id="awards-heading">Professional awards</h2><p>A record of the honours, certificates and nominations received for clinical work and service to the dental profession.</p></div>
        <div className="news-award-list">
          {professionalAwards.map(award => <article className="news-award-item" key={award.image}><div className="news-award-image"><Image src={`/images/awards/${award.image}`} alt={award.title} fill sizes="(max-width: 700px) 86vw, 180px" /></div><div><Award size={18} aria-hidden="true" /><h3>{award.title}</h3><p>{award.text}</p></div></article>)}
        </div>
      </section>

      <section className="news-section news-tinted" aria-labelledby="achievements-heading">
        <div className="news-section-heading"><p className="section-kicker">A year in review</p><h2 id="achievements-heading">Achievements in 2019</h2></div>
        <CertificateGrid images={achievements2019} label="2019 achievement" />
      </section>

      <section className="news-section" aria-labelledby="summary-heading">
        <div className="news-section-heading"><p className="section-kicker">The complete archive</p><h2 id="summary-heading">Awards summary</h2></div>
        <CertificateGrid images={awardsSummary} label="Award summary" />
      </section>

      <section className="news-section news-tinted" aria-labelledby="nominations-heading">
        <div className="news-section-heading"><p className="section-kicker">Professional recognition</p><h2 id="nominations-heading">Nominations summary</h2></div>
        <CertificateGrid images={nominationsSummary} label="Nomination summary" />
      </section>
    </main>
  )
}