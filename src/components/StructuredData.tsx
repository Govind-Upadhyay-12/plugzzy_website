import {
  organizationSchema,
  webSiteSchema,
  webPageSchema,
  softwareAppSchema,
  serviceSchema,
  howToSchema,
  breadcrumbSchema,
  reviewSchema,
  faqSchema,
  HOW_TO_FIND_CHARGER,
  HOW_TO_BECOME_HOST,
} from '../lib/seo'

const schemas = [
  organizationSchema(),
  webSiteSchema(),
  webPageSchema(),
  softwareAppSchema(),
  serviceSchema(),
  howToSchema(HOW_TO_FIND_CHARGER),
  howToSchema(HOW_TO_BECOME_HOST),
  breadcrumbSchema(),
  reviewSchema(),
  faqSchema(),
]

export function StructuredData() {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  )
}
