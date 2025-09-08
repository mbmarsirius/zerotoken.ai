import { Helmet } from "react-helmet-async";

type MetaProps = {
  title?: string;
  description?: string;
  canonicalPath?: string; // e.g., "/privacy" or "/"
  canonicalUrl?: string; // absolute URL overrides canonicalPath
};

const CANONICAL_BASE_URL = "https://www.zerotoken.ai";

export const Meta = ({ title, description, canonicalPath, canonicalUrl }: MetaProps) => {
  const href = canonicalUrl ?? (canonicalPath ? `${CANONICAL_BASE_URL}${canonicalPath}` : undefined);
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {href && <link rel="canonical" href={href} />}
    </Helmet>
  );
};

export default Meta;

