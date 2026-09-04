'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Play } from 'lucide-react'

const videos = [
  { id: '9gzKAfxCI-g', image: '/images/clinic/press-tie.jpg', title: 'Dental expert insights from Pune' },
  { id: '8kmfs5UdaM0', image: '/images/clinic/press-lok.jpg', title: 'Smile designing and dental care' },
]

export function PressUpdates() {
  return (
    <section className="press-updates" aria-labelledby="press-updates-heading">
      <div className="press-updates-inner">
        <div className="press-heading-row">
          <div>
            <p className="section-kicker">News &amp; updates</p>
            <h2 id="press-updates-heading">World Class Dental in the spotlight</h2>
          </div>
          <Link className="press-link" href="/news-update">
            View all updates <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="press-grid">
          <Link className="press-feature" href="/news-update">
            <div className="press-feature-image">
              <Image src="/images/clinic/press-times-feature.jpg" alt="World Class Dental feature from Times of India" fill sizes="(max-width: 900px) 100vw, 45vw" />
            </div>
            <div className="press-feature-copy">
              <span>Times of India</span>
              <h3>Get an ageless smile with orthodontics</h3>
              <p>Read the clinic&apos;s public features, interviews and dental care updates.</p>
              <ArrowUpRight size={18} aria-hidden="true" />
            </div>
          </Link>

          <div className="press-video-grid">
            {videos.map(video => (
              <a key={video.id} className="press-video" href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer">
                <div className="press-video-image">
                  <Image src={video.image} alt={video.title} fill sizes="(max-width: 900px) 50vw, 25vw" />
                  <span className="press-play"><Play size={18} fill="currentColor" aria-hidden="true" /></span>
                </div>
                <span>{video.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
