import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  url: string;
  schema?: Record<string, any> | Record<string, any>[];
}

export default function SEO({ title, description, keywords, url, schema }: SEOProps) {
  const siteUrl = 'https://sashaschool.com';
  const fullUrl = `${siteUrl}${url}`;
  
  // Default Local Business Schema
  const defaultSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "SASHA School of Life",
    "description": "Premium primary school in Coimbatore blending Montessori, Cambridge IGCSE, Waldorf and Reggio Emilia curricula with AI-enhanced learning and life skills development.",
    "url": siteUrl,
    "telephone": "+91 97501 70007",
    "email": "sashaschoolcbe@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kulathupalayam Road, Kovaipudur",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641042",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "10.9435",
      "longitude": "76.9420"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "bestRating": "5",
      "ratingCount": "45"
    },
    "areaServed": ["Coimbatore", "Kovaipudur", "Kuniamuthur", "Saravanampatti", "Ganapathy", "Peelamedu", "Race Course", "RS Puram", "Saibaba Colony"],
    "foundingDate": "2006",
    "founder": {
      "@type": "Person",
      "name": "Dr. Sashi Kumaar Samraj & Smt. Hemalatha Sashi Kumaar"
    },
    "knowsAbout": ["Montessori Education", "Cambridge IGCSE", "Waldorf Education", "Reggio Emilia", "AI-Enhanced Learning", "Life Skills Education", "Holistic Child Development"],
    "offers": {
      "@type": "EducationalOccupationalProgram",
      "name": "Primary Education (Toddler Pre-KG to Grade V)",
      "educationalCredentialAwarded": "Primary School Certificate"
    }
  };

  const schemas = schema ? (Array.isArray(schema) ? [defaultSchema, ...schema] : [defaultSchema, schema]) : [defaultSchema];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:locale" content="en_IN" />

      {/* Local SEO Base Meta Tags */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Coimbatore" />
      <meta name="geo.position" content="10.9435;76.9420" />
      <meta name="ICBM" content="10.9435, 76.9420" />

      {/* Injecting JSON-LD Schemas */}
      {schemas.map((s, idx) => (
        <script type="application/ld+json" key={idx}>
          {JSON.stringify(s)}
        </script>
      ))}
    </Helmet>
  );
}
