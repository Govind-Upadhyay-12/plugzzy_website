export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://www.plugzzy.co.in'

export const SITE_NAME = 'Plugzzy'

export const SEO = {
  title:
    'Plugzzy — Best EV Charging App India 2025 | Find Nearby Chargers, Share Home Charger & Earn',
  description:
    'Plugzzy is India\'s #1 peer-to-peer EV charging app. Find affordable electric vehicle chargers near you in Bangalore, Mumbai, Delhi, Hyderabad & Pune. Book AC/DC charging slots instantly or list your home wall charger, driveway charger & earn ₹4,000+/month. Free download on Android & iOS.',
  keywords: [
    'EV charging app India',
    'best EV charging app India 2025',
    'electric vehicle charging near me',
    'find EV charger nearby',
    'peer to peer EV charging',
    'P2P EV charging India',
    'home EV charger sharing',
    'host EV charger earn money',
    'neighborhood EV charging',
    'EV charging station app',
    'book EV charging slot online',
    'affordable EV charging India',
    'share home charger India',
    'driveway EV charger rental',
    'EV charging Bangalore',
    'EV charging Mumbai',
    'EV charging Delhi NCR',
    'EV charging Hyderabad',
    'EV charging Pune',
    'EV charging Chennai',
    'electric car charging app',
    'Tata Nexon EV charging near me',
    'MG ZS EV charging station',
    'home AC charger booking',
    '7.4 kW charger sharing',
    'wall socket EV charging',
    'community EV charging network',
    'list EV charger online India',
    'EV host passive income',
    'clean energy mobility India',
    'Plugzzy app download',
    'neighbourhood charging station',
    'private EV charger sharing app',
    'cheapest EV charging India',
    'UPI EV charging payment',
  ].join(', '),
  ogImage: `${SITE_URL}/images/plugzzy-logo.png`,
  twitterHandle: '@plugzzy',
  locale: 'en_IN',
  themeColor: '#16a34a',
} as const

export const TARGET_CITIES = [
  'Bangalore',
  'Mumbai',
  'Delhi NCR',
  'Hyderabad',
  'Pune',
  'Chennai',
  'Kolkata',
  'Ahmedabad',
  'Jaipur',
  'Chandigarh',
  'Indore',
  'Kochi',
  'Lucknow',
  'Nagpur',
  'Goa',
  'Surat',
  'Coimbatore',
  'Visakhapatnam',
] as const

export const FAQ_ITEMS = [
  {
    question: 'What is Plugzzy and how does it work?',
    answer:
      'Plugzzy is India\'s first neighborhood peer-to-peer EV charging platform. EV drivers use the app to find and book nearby home chargers, wall sockets, and driveway AC chargers. Hosts list their existing charger, set rates and availability, and earn money every time a driver plugs in. It works like Airbnb — but for electric vehicle charging.',
  },
  {
    question: 'How do I find an EV charger near me on Plugzzy?',
    answer:
      'Download the free Plugzzy app on Android or iOS, allow location access, and open the live map. You\'ll see every available neighborhood charger within your radius. Filter by power (3.3 kW, 7.4 kW, 22 kW), price per hour, connector type, and real-time availability. Tap "Book Slot" to reserve instantly.',
  },
  {
    question: 'How can I earn money by hosting my EV charger on Plugzzy?',
    answer:
      'Sign up as a host, add photos of your charger, set your hourly rate (typically ₹10–₹40/hr), and choose your available time slots. When a nearby EV driver books, you receive payment directly via UPI or cash. Most hosts with a 7.4 kW AC charger earn ₹3,000–₹8,000 per month in passive income.',
  },
  {
    question: 'Is Plugzzy the best EV charging app in India?',
    answer:
      'Plugzzy is built specifically for neighborhood peer-to-peer charging — unlike public fast-charger apps that send you to highways and malls. It\'s rated 4.8 stars by hosts and drivers, offers the lowest rates for AC home charging, and is live in 180+ Indian cities with new hosts joining daily.',
  },
  {
    question: 'Which cities is Plugzzy available in?',
    answer:
      'Plugzzy is live in 180+ cities including Bangalore, Mumbai, Delhi NCR, Hyderabad, Pune, Chennai, Kolkata, Ahmedabad, Jaipur, Chandigarh, Indore, Kochi, Lucknow, and more. New neighborhoods are added every week as hosts list their chargers.',
  },
  {
    question: 'How much does EV charging cost on Plugzzy compared to public stations?',
    answer:
      'Home AC charging on Plugzzy typically costs ₹10–₹25 per hour — often 40–60% cheaper than public DC fast chargers (₹15–₹25 per kWh). Hosts set their own rates and all prices are shown upfront before booking. No hidden fees.',
  },
  {
    question: 'Can I charge my Tata Nexon EV or MG ZS EV using Plugzzy?',
    answer:
      'Yes. Plugzzy supports all Indian EV models including Tata Nexon EV, Tata Tiago EV, MG ZS EV, Hyundai Kona, BYD Atto 3, Mahindra XUV400, and more. Filter by connector type (Type 2, 15A socket, IEC 60309) and power rating to find a compatible charger near you.',
  },
  {
    question: 'What types of chargers can hosts list on Plugzzy?',
    answer:
      'Hosts can list wall-mounted AC chargers (3.3 kW, 7.4 kW, 11 kW), standard 15A home sockets, smart plugs, and driveway chargers. Both dedicated EV chargers and regular electrical sockets in gated communities, villas, and independent houses are supported.',
  },
  {
    question: 'How do payments work on Plugzzy?',
    answer:
      'Payments are handled directly between the driver and host — via UPI (Google Pay, PhonePe, Paytm) or cash. Plugzzy does not take a cut during the beta period. Hosts receive payment at the end of each session. A full digital payment gateway is coming soon.',
  },
  {
    question: 'Is Plugzzy safe for women EV drivers charging at a stranger\'s home?',
    answer:
      'Every host profile is verified with ID and address proof. Drivers can read reviews, see host ratings, and use in-app chat before arriving. You can also share your booking details with a friend. We recommend choosing hosts with 4+ star ratings and multiple completed sessions.',
  },
  {
    question: 'Can apartment residents in Bangalore or Mumbai host a charger on Plugzzy?',
    answer:
      'Yes, if your apartment society or RWA permits EV charging from your parking slot. Many Bangalore and Mumbai hosts operate from gated community parking with society approval. Check your building\'s EV policy, then list your charger with clear access instructions for drivers.',
  },
  {
    question: 'How is Plugzzy different from Tata Power EZ Charge or Statiq?',
    answer:
      'Tata Power EZ Charge and Statiq focus on commercial DC fast chargers at malls and highways. Plugzzy fills the gap for daily AC home charging in your neighborhood — cheaper, closer, and available 24/7 from real homeowners. Use Plugzzy for overnight and weekday top-ups; use fast chargers for long road trips.',
  },
] as const

export const HOW_TO_FIND_CHARGER = {
  name: 'How to find an EV charger near you using Plugzzy',
  steps: [
    { name: 'Download Plugzzy', text: 'Install the free Plugzzy app from Google Play Store or Apple App Store.' },
    { name: 'Open the map', text: 'Allow location access and browse live neighborhood chargers on the interactive map.' },
    { name: 'Filter and compare', text: 'Filter by power rating, price, connector type, and "Available Now" status.' },
    { name: 'Book your slot', text: 'Select a charger, pick your time slot, and confirm your booking in seconds.' },
    { name: 'Navigate and charge', text: 'Use in-app directions to reach the host location, plug in, and monitor your session.' },
  ],
} as const

export const HOW_TO_BECOME_HOST = {
  name: 'How to become an EV charging host and earn money on Plugzzy',
  steps: [
    { name: 'Sign up as a host', text: 'Open Plugzzy, choose "I\'m a Host", and complete your profile verification.' },
    { name: 'List your charger', text: 'Add photos, charger specs (kW, connector type), and access instructions.' },
    { name: 'Set rates and schedule', text: 'Choose your hourly rate and mark when your charger is available for booking.' },
    { name: 'Accept bookings', text: 'Receive booking requests from nearby EV drivers and confirm via the app.' },
    { name: 'Earn weekly income', text: 'Get paid directly after each session. Track earnings in your host dashboard.' },
  ],
} as const

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/plugzzy-logo.png`,
    description: SEO.description,
    foundingDate: '2024',
    areaServed: { '@type': 'Country', name: 'India' },
    knowsAbout: [
      'Electric vehicle charging',
      'Peer-to-peer charging networks',
      'Sustainable mobility',
      'Home EV charger sharing',
    ],
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'govindupadhyay85273@gmail.com',
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    description: SEO.description,
    inLanguage: 'en-IN',
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }
}

export function webPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: SEO.title,
    description: SEO.description,
    url: SITE_URL,
    inLanguage: 'en-IN',
    isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
    about: { '@type': 'Thing', name: 'Electric Vehicle Charging in India' },
    primaryImageOfPage: `${SITE_URL}/images/plugzzy-logo.png`,
  }
}

export function softwareAppSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: SITE_NAME,
    operatingSystem: 'Android, iOS',
    applicationCategory: 'UtilitiesApplication',
    description: SEO.description,
    downloadUrl: `${SITE_URL}/#download`,
    featureList: [
      'Live map of neighborhood EV chargers',
      'Book charging slots instantly',
      'Host home charger and earn income',
      'Filter by power, price, availability',
      'In-app messaging with hosts',
      'Verified host profiles',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '1200',
      bestRating: '5',
    },
  }
}

export function serviceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Plugzzy Peer-to-Peer EV Charging',
    provider: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    description:
      'Neighborhood electric vehicle charging service connecting EV drivers with home charger hosts across India.',
    areaServed: TARGET_CITIES.map((city) => ({
      '@type': 'City',
      name: city,
      containedInPlace: { '@type': 'Country', name: 'India' },
    })),
    serviceType: 'Electric Vehicle Charging',
    offers: {
      '@type': 'Offer',
      price: '10',
      priceCurrency: 'INR',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '10',
        priceCurrency: 'INR',
        unitText: 'hour',
      },
    },
  }
}

export function howToSchema(howTo: typeof HOW_TO_FIND_CHARGER | typeof HOW_TO_BECOME_HOST) {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: howTo.name,
    step: howTo.steps.map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  }
}

export function breadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'EV Charging App', item: `${SITE_URL}/#features` },
      { '@type': 'ListItem', position: 3, name: 'Download', item: `${SITE_URL}/#download` },
    ],
  }
}

export function reviewSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Plugzzy EV Charging App',
    description: SEO.description,
    brand: { '@type': 'Brand', name: SITE_NAME },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '1200',
      bestRating: '5',
    },
    review: [
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Priya Mehta' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'I used to drive 8 km to the nearest public charger. Now I plug in at my neighbour\'s driveway for ₹15/hr. Game changer.',
      },
      {
        '@type': 'Review',
        author: { '@type': 'Person', name: 'Arjun Reddy' },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
        reviewBody:
          'Listed my 7.4 kW charger in under 5 minutes. Already earning ₹4,000 a month from slots I wasn\'t using anyway.',
      },
    ],
  }
}

export function faqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}
