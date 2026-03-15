export default function Schema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Plumber",
    "name": "Gastech Plumbing & Heating",
    "alternateName": "Gastech Plumbing",
    "url": "https://gastechplumbing.co.uk",
    "logo": "https://gastechplumbing.co.uk/logo.png",
    "image": "https://images.unsplash.com/photo-1754620906571-9ba64bd3ffb4",
    "description": "Keighley’s trusted plumbing experts. Fast, reliable help for emergency plumbing, blocked drains, burst pipes, and hot water repairs across Keighley and nearby areas.",
    "telephone": "1300205205",
    "priceRange": "££",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Keighley",
      "addressRegion": "West Yorkshire",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 53.8677,
      "longitude": -1.9124
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "areaServed": [
      { "@type": "City", "name": "Keighley" },
      { "@type": "City", "name": "Bingley" },
      { "@type": "City", "name": "Shipley" },
      { "@type": "City", "name": "Ilkley" },
      { "@type": "City", "name": "Skipton" }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "184"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do you offer emergency 24/7 plumbing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our plumbers are available 24/7 for emergency plumbing issues like burst pipes, water leaks, blocked drains, and hot water failures."
        }
      },
      {
        "@type": "Question",
        "name": "How much does a plumbing call-out cost?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Call-out costs depend on the type of plumbing issue and repair required. We always provide clear upfront pricing with no hidden fees."
        }
      },
      {
        "@type": "Question",
        "name": "Are your plumbers licensed and insured?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our team includes fully licensed and insured plumbers with years of experience in residential plumbing repairs and installations."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
