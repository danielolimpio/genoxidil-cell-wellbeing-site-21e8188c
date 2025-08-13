import { Helmet } from "react-helmet-async";

export type SEOProps = {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  jsonLd?: object | object[];
  robots?: string;
  keywords?: string | string[];
};

const SEO = ({ title, description, canonical, image, jsonLd, robots, keywords }: SEOProps) => {
  const jsonArray = Array.isArray(jsonLd) ? jsonLd : jsonLd ? [jsonLd] : [];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && (
          <meta
            name="keywords"
            content={Array.isArray(keywords) ? keywords.join(", ") : keywords}
          />
        )}
        {robots && <meta name="robots" content={robots} />}
        {canonical && <link rel="canonical" href={canonical} />}

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {image && <meta property="og:image" content={image} />}        
        <meta property="og:type" content="website" />
        {canonical && <meta property="og:url" content={canonical} />}

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        {image && <meta name="twitter:image" content={image} />}
      </Helmet>

      {jsonArray.map((data, idx) => (
        <script
          // eslint-disable-next-line react/no-danger
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

export default SEO;
