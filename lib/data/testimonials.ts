export interface TestimonialItem {
  id: number
  name: string
  location: string
  rating: number
  text: string
  treatment: string
  initials: string
}

export const testimonials: TestimonialItem[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Pune, Maharashtra",
    rating: 5,
    text: "I was self-conscious about my crowded teeth for years before visiting World Class Dental. The team was patient, explained every step of the Invisalign process clearly, and the results after 14 months are beyond what I imagined. My smile has genuinely changed how confident I feel every day.",
    treatment: "Invisalign",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rohan Desai",
    location: "Kothrud, Pune",
    rating: 5,
    text: "Had metal braces fitted here for my son and the experience was excellent from start to finish. The clinic is spotless, modern, and the staff made my son feel completely at ease. After 18 months his bite is perfect and he can't stop smiling.",
    treatment: "Metal Braces",
    initials: "RD",
  },
  {
    id: 3,
    name: "Ananya Kulkarni",
    location: "Baner, Pune",
    rating: 5,
    text: "I chose ceramic braces because I needed something less visible for work, and this clinic gave me the best of both worlds — effective treatment and a subtle look. The team monitored my progress closely and every adjustment appointment was quick and painless. Couldn't be happier with the outcome.",
    treatment: "Ceramic Braces",
    initials: "AK",
  },
  {
    id: 4,
    name: "Sneha Patil",
    location: "Aundh, Pune",
    rating: 5,
    text: "I came in for a smile makeover ahead of my wedding and the transformation was incredible. Veneers and whitening done with so much care and attention to detail — the shade matching alone took two sittings to get exactly right. On my wedding day everyone asked which clinic I went to.",
    treatment: "Smile Makeover",
    initials: "SP",
  },
  {
    id: 5,
    name: "Amit Joshi",
    location: "Wakad, Pune",
    rating: 5,
    text: "I put off my root canal for months out of fear, but the procedure here was genuinely comfortable — I didn't feel a thing beyond mild pressure. The post-treatment care instructions were thorough and healing was smooth. Wish I hadn't waited so long.",
    treatment: "Root Canal Treatment",
    initials: "AJ",
  },
  {
    id: 6,
    name: "Pooja Mehta",
    location: "Shivajinagar, Pune",
    rating: 5,
    text: "Got lingual braces placed here and it was the right decision for my professional life — completely invisible from the outside. The initial adjustment period was handled with follow-up calls and tips from the team, which made a huge difference. Results came in right on schedule.",
    treatment: "Lingual Braces",
    initials: "PM",
  },
  {
    id: 7,
    name: "Rahul Nair",
    location: "Viman Nagar, Pune",
    rating: 5,
    text: "My daughter had her paediatric orthodontic assessment here and the doctor was fantastic with her — calm, funny, and very clear with explanations a child could understand. The treatment plan was detailed and the costs were transparent from day one. We feel very reassured in the hands of this team.",
    treatment: "Paediatric Orthodontics",
    initials: "RN",
  },
  {
    id: 8,
    name: "Siddhi Chavan",
    location: "Hadapsar, Pune",
    rating: 5,
    text: "Had two dental implants placed after losing teeth in an accident. The consultation was thorough and the surgery itself was far less daunting than I expected. Six months on, the implants feel completely natural and I can eat everything again without a second thought.",
    treatment: "Dental Implants",
    initials: "SC",
  },
]
