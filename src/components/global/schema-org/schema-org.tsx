import React from "react";

interface SchemaOrgProps {
    url: string;
    title: string;
    description: string;
    images: string[];
    datePublished: string;
    dateModified: string;
}

function SchemaOrg({
    url,
    title,
    description,
    images,
    datePublished,
    dateModified,
}: SchemaOrgProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        url,
        name: title,
        description,
        image: images,
        datePublished,
        dateModified,
        inLanguage: "vi",
        publisher: {
            "@type": "Organization",
            name: "Your Organization Name",
            logo: {
                "@type": "ImageObject",
                url: "https://yourdomain.com/logo.png",
            },
        },
        mainEntityOfPage: {
            "@type": "WebPage",
            "@id": url,
        },
    };

    return (
        <script
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            type="application/ld+json"
        />
    );
}

export default SchemaOrg;
