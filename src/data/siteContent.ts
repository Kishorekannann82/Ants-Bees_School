export interface NavLinkItem {
  label: string
  path: string
}

export const navLinks: NavLinkItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  // { label: 'Mandatory Disclosure', path: '/mandatory-disclosure' },
  { label: 'Admission', path: '/admission' },
  { label: 'Academics', path: '/academics' },
  { label: 'Events', path: '/events' },
  { label: 'Contact', path: '/contact' },
]

export const heroContent = {
  eyebrow: 'Premium CBSE School in Thiruvarur',
  title: 'Ants N Bees School',
  tagline: 'Where curiosity is nurtured, character is shaped, and confidence takes flight.',
  description:
    'Ants N Bees School blends global best practices with Indian values to create an inspiring, secure, and future-ready environment for every child.',
  primaryCta: { label: 'Enroll Now', to: '/admission' },
  secondaryCta: { label: 'Explore Campus', to: '/about' },
  stats: [
    { label: 'Learners nurtured', value: '850+' },
    { label: 'Student–Teacher Ratio', value: '1 : 18' },
    { label: 'Co-curricular Clubs', value: '25' },
    { label: 'Parent Satisfaction', value: '97%' },
  ],
}

export const whyChooseUs = [
  {
    title: 'Holistic Curriculum',
    description:
      'Integrated pedagogies that balance academics, arts, and socio-emotional learning for every grade level.',
  },
  {
    title: 'Nurturing Faculty',
    description:
      'Certified educators with ongoing professional development and a passion for child-centric mentoring.',
  },
  {
    title: 'Experiential Learning',
    description:
      'Project-based classrooms, innovation labs, and real-world exposure spark curiosity and creativity.',
  },
  {
    title: 'Safe & Warm Campus',
    description:
      '24x7 surveillance, dedicated wellness team, and child-friendly spaces designed for joyful discovery.',
  },
]

export const classesOffered = [
  { name: 'Pre-KG', summary: 'Sensorial play, rhythm, and storytelling that build early literacy and numeracy.' },
  { name: 'LKG', summary: 'Play-integrated academics with a focus on phonics, logic, and social skills.' },
  { name: 'UKG', summary: 'Reader readiness, beginner STEM, and values-based explorations.' },
  { name: 'Grades I – VIII', summary: 'Inquiry-led CBSE curriculum with STEAM labs, languages, and leadership programs.' },
]

export const facilities = [
  {
    title: 'Innovation & Maker Lab',
    detail: 'Robotics, coding, 3D printing, and design thinking studios that turn ideas into prototypes.',
  },
  {
    title: 'Eco-Learning Zones',
    detail: 'Organic gardens, sensory trails, and sustainability projects that connect students with nature.',
  },
  {
    title: 'Performing Arts Pavilion',
    detail: 'Spacious studios for music, dance, theatre, and public speaking with expert mentors.',
  },
  {
    title: 'Indoor Sports Arena',
    detail: 'Climatized indoor courts, swimming instruction, and professional-grade athletics equipment.',
  },
]

export const testimonials = [
  {
    quote:
      'Our daughter is confident, expressive, and excited about school every day. The personal attention from teachers is unmatched.',
    name: 'Meera Krishnan',
    relation: 'Parent of Grade III student',
  },
  {
    quote:
      'The school celebrates every child’s uniqueness. Life skills workshops and community service made our son more responsible.',
    name: 'Abdul Rahman',
    relation: 'Parent of Grade VI student',
  },
  {
    quote:
      'State-of-the-art facilities, a warm leadership team, and a curriculum that balances tradition with innovation.',
    name: 'Latha Srinivasan',
    relation: 'Parent of UKG student',
  },
]

export const leaders = [
  {
    name: 'Mrs. Lalitha Harish',
    role: 'Correspondent',
    image:
      'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop',
    bio: 'Visionary educator with 25 years of experience in nurturing inclusive, future-ready learning ecosystems.',
  },
  {
    name: 'Mr. Arvind Swaminathan',
    role: 'Managing Director',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
    bio: 'Entrepreneur and community leader steering strategic growth with uncompromised educational standards.',
  },
  {
    name: 'Dr. Kavitha Iyer',
    role: 'Principal',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
    bio: 'Academic strategist and child psychologist championing personalized pedagogy and student advocacy.',
  },
]

export const schoolValues = [
  {
    title: 'Integrity',
    description: 'We model honesty, accountability, and ethical decision making in every classroom and corridor.',
  },
  {
    title: 'Empathy',
    description: 'Our programmes cultivate compassion, active listening, and collaborative problem-solving.',
  },
  {
    title: 'Excellence',
    description: 'We set ambitious goals, celebrate progress, and elevate expectations for every learner.',
  },
  {
    title: 'Resilience',
    description: 'We encourage bravery to try, fail, reflect, and try again—building confident lifelong learners.',
  },
]

export const schoolProfile = {
  intro:
    'Ants N Bees School is an independent co-educational institution affiliated with CBSE. We combine research-backed pedagogy with joyful experiences to cultivate grounded, globally aware citizens.',
  mission:
    'To ignite purposeful learning by aligning intellectual, emotional, and physical development for every child.',
  vision:
    'To be a benchmark school recognized for innovation, sustainability, and compassionate leadership.',
  differentiators: [
    'Dedicated early years block with Montessori-inspired studios',
    'STEM Innovation Lab with MIT Scratch, Lego Education, and Arduino programs',
    'Cambridge English and Trinity College certifications integrated into the curriculum',
    'Wellness lounge with counsellors, nutritionists, and yoga experts on campus',
  ],
}

export const disclosureSections = [
  {
    title: 'General Information',
    details: [
      'School Name: Ants N Bees School',
      'Affiliation Board: Central Board of Secondary Education (CBSE)',
      'Affiliation Number: 123456',
      'School Code: 56789',
      'Complete Address: 144 Serene Meadows, Avinashi Road, Coimbatore – 641004',
    ],
  },
  {
    title: 'Building License',
    details: ['Issued by Coimbatore City Municipal Corporation, valid till March 2028. Certificate No. BL/2023/1187.'],
  },
  {
    title: 'Stability',
    details: ['Structural stability certificate renewed annually by Civil Engineers & Associates Private Limited.'],
  },
  {
    title: 'Sanitary Certificate',
    details: ['Certified by Public Health Department, Government of Tamil Nadu. Certificate No. SC/2025/2041.'],
  },
  {
    title: 'Fire and Safety',
    details: ['Fire NOC issued by Tamil Nadu Fire & Rescue Services. Valid until June 2027.'],
  },
  {
    title: 'Trust Deed',
    details: ['Managed by Ants N Bees Educational Trust registered under Trust Act 1882, Reg. No. 144/2012.'],
  },
  {
    title: 'School Management Committee',
    details: [
      'Chairperson – Mrs. Lalitha Harish',
      'Secretary – Mr. Arvind Swaminathan',
      'Parent Representatives – Mrs. Meena Rajkumar & Mr. Nelson Paul',
      'Teacher Representatives – Ms. Renu Thomas & Mr. Balachandar',
    ],
  },
  {
    title: 'Fees Structure',
    details: [
      'Pre-KG & KG: Tuition ₹68,000 | Activity ₹18,000 | Transport (optional) ₹22,000',
      'Grades I – V: Tuition ₹84,000 | Lab & Activities ₹26,000 | Transport (optional) ₹22,000',
      'Grades VI – VIII: Tuition ₹96,000 | Lab & Activities ₹32,000 | Transport (optional) ₹24,000',
    ],
  },
  {
    title: 'Annual Academic Calendar',
    details: ['Academic year: June – April with quarterly assessments and term highlights accessible via parent portal.'],
  },
  {
    title: 'PTA',
    details: ['PTA meetings conducted every term with theme-based workshops and student showcase sessions.'],
  },
  {
    title: 'School Infrastructure',
    details: [
      'Campus Area: 3.2 acres with 72 classrooms',
      'Library: 10,000+ curated titles and digital subscriptions',
      'Labs: Science, Math, Language, Innovation, Media Studio',
      'Sports: Swimming pool, basketball, futsal turf, skating rink',
    ],
  },
  {
    title: 'SARAS',
    details: ['Self Assessment for Accreditation (SARAS) submitted for the academic year 2025–26 under reference SARAS/25/118.'],
  },
]

export const admissionProcess = [
  {
    title: 'Step 1 – Inquiry & Campus Tour',
    description: 'Schedule a guided visit to experience classrooms, meet faculty, and understand programmes.',
  },
  {
    title: 'Step 2 – Application Submission',
    description: 'Submit the filled application form with required documents and the registration fee.',
  },
  {
    title: 'Step 3 – Interaction & Assessment',
    description: 'Age-appropriate readiness interaction for Pre-KG – Grade II and competency assessment for higher grades.',
  },
  {
    title: 'Step 4 – Enrollment Confirmation',
    description: 'Receive admission offer, confirm seats within 7 working days, and complete onboarding formalities.',
  },
]

export const admissionRules = [
  'Age eligibility is calculated as on 31st May of the academic year.',
  'Transfer Certificate and original birth certificate are mandatory at the time of admission.',
  'Immunisation records must be submitted prior to school reopening.',
  'Sibling preference and alumni wards receive priority until specified deadlines.',
  'Fee payments can be made term-wise via online portal, cheque, or UPI.',
]

export const classTimings = [
  { className: 'Pre-KG', timing: '08:30 AM – 12:15 PM' },
  { className: 'LKG', timing: '08:30 AM – 12:45 PM' },
  { className: 'UKG', timing: '08:30 AM – 01:00 PM' },
  { className: 'Grades I – VIII', timing: '08:15 AM – 03:30 PM' },
]

export const teachers = [
  {
    name: 'Ms. Renu Thomas',
    subject: 'Middle School Science',
    image:
      'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. Balachandar Ravi',
    subject: 'Mathematics & Robotics',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ms. Neha Kapoor',
    subject: 'English & Dramatic Arts',
    image:
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. Aditya Rao',
    subject: 'Physical Education',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Ms. Hema Krish',
    subject: 'Early Years Facilitator',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Mr. Siddarth Jain',
    subject: 'Computational Thinking',
    image:
      'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=800&auto=format&fit=crop',
  },
]

export const literaryActivities = [
  'Writers’ Studio, TED-Ed Club, and multilingual storytelling festivals.',
  'Model United Nations, debate leagues, and journalism labs.',
]

export const coCurricularActivities = [
  'Visual arts ateliers, pottery wheel studio, and design workshops.',
  'Classical & contemporary dance, choir, percussion ensemble.',
  'Entrepreneurship club, coding sprints, and green champions initiative.',
]

export const academicHighlights = [
  'Consistent 100% pass rate with distinction in CBSE Board Examinations.',
  'International School Award by British Council for global collaborative projects.',
  'Winners of the State STEM Challenge 2025 and National Robotics League 2024.',
]

export const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=1200&auto=format&fit=crop',
    caption: 'Innovation Lab – Grade VII Robotics Sprint',
  },
  {
    src: 'https://images.unsplash.com/photo-1448932223592-d1fc686e76ea?q=80&w=1200&auto=format&fit=crop',
    caption: 'Annual Cultural Fest – Expressions 2025',
  },
  {
    src: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200&auto=format&fit=crop',
    caption: 'Library Reading Marathon – DEAR Week',
  },
  {
    src: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?q=80&w=1200&auto=format&fit=crop',
    caption: 'Junior Sports Day – Track & Field Highlights',
  },
  {
    src: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    caption: 'Eco Club Tree Plantation Drive',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1200&auto=format&fit=crop',
    caption: 'Grade II Music Circle Time',
  },
]

export const eventTimeline = [
  {
    year: '2026',
    title: 'Global Citizenship Summit',
    description: 'Student delegations collaborated with partner schools in Singapore for sustainability hackathons.',
  },
  {
    year: '2025',
    title: 'Centennial Heritage Trail',
    description: 'Heritage walks and oral history projects curated by middle schoolers with local historians.',
  },
  {
    year: '2024',
    title: 'Future Ready Expo',
    description: 'Showcase of interdisciplinary projects featuring AR sandboxes, astronomy nights, and app prototypes.',
  },
]

export const eventHighlights = [
  {
    title: 'Innovation Week Showcase',
    description: 'A full week of design thinking sprints culminating in student-led demos across STEM, arts, and entrepreneurship.',
    date: 'August 2025',
  },
  {
    title: 'Harmony Cultural Soirée',
    description: 'Music, dance, and theatre ensembles celebrating pan-Indian traditions with contemporary interpretations.',
    date: 'December 2025',
  },
  {
    title: 'Green Crusaders Conclave',
    description: 'Eco club campaigns showcased zero-waste initiatives, urban farming projects, and climate innovation pitches.',
    date: 'March 2026',
  },
]

export const achievementHighlights = [
  {
    title: 'National Robotics League Champions',
    detail: 'Middle school robotics team secured first place for autonomous rescue bots at the 2025 national finals.',
  },
  {
    title: 'UNESCO Sustainable Campus Citation',
    detail: 'Recognised for sustainable architecture, green energy practises, and student-led conservation initiatives.',
  },
  {
    title: 'State Literary Olympiad Winners',
    detail: 'Senior students swept poetry slam, extempore speaking, and bilingual debates at the state round.',
  },
]

export const awardsAccolades = [
  {
    title: 'EduSpark Innovation Award 2026',
    issuer: 'Indian Association of Educational Innovators',
  },
  {
    title: 'Parent Circle Trustmark for Holistic Learning',
    issuer: 'Parent Circle Magazine',
  },
  {
    title: 'Excellence in Pastoral Care Recognition',
    issuer: 'National Federation of Independent Schools',
  },
]

export const contactDetails = {
  address: '144 Serene Meadows, Avinashi Road, Coimbatore – 641004, Tamil Nadu, India',
  phone: '+91 90254 12345',
  email: 'hello@antsnbeesschool.com',
  admissionsEmail: 'admissions@antsnbeesschool.com',
  officeHours: 'Monday – Saturday | 8:30 AM – 5:30 PM',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3911.8763334951857!2d77.03069377570669!3d11.016844454628538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857e7a4fda7cf%3A0xf8d36a33ad0396b5!2sAvinashi%20Rd%2C%20Peelamedu%2C%20Coimbatore%2C%20Tamil%20Nadu%20641004!5e0!3m2!1sen!2sin!4v1706183630000!5m2!1sen!2sin',
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/antsnbeestvr/' },
    { label: 'Instagram', href: 'https://www.instagram.com/antsnbees_school/?hl=en' },
    { label: 'YouTube', href: 'https://youtube.com/@antsnbeesschool' },
    { label: 'LinkedIn', href: 'https://linkedin.com/company/antsnbeesschool' },
  ],
}
