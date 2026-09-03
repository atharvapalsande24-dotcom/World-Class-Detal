export function JsonLd() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://worldclassdental.in'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Dentist',
    name: 'World Class Dental Clinic',
    alternateName: 'World Class Dental',
    description: 'Premium orthodontic and dental care in Pune led by Dr. Priyanka Saokar Navale (BDS, MDS Orthodontics).',
    url: siteUrl,
    telephone: ['+91-9503008228', '+91-7387040464'],
    email: 'drpriyankasavkar@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Shreeyash Hospital, 759/53, 1st Floor, Opposite Chitalebandhu, Garware Bridge Corner, Fergusson College Road, Deccan Gymkhana',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      postalCode: '411004',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '18.5154',
      longitude: '73.8399',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '21:00',
      },
    ],
    priceRange: '₹₹',
    image: `${siteUrl}/images/og-image.jpg`,
    sameAs: [],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
