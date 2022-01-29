import Head from 'next/head';
import React from 'react';

export const siteName = 'webdriven.io NextJS TailwindCSS Boilerplate';
export const description = 'Boilerplate for modern NextJS applications';

const HeadCustom: React.FC = (props) => {
    const { children } = props;

    return (
        <Head>
            <title>{siteName}</title>
            <meta
                property="description"
                content={description}
            />
            <meta
                name="description"
                content={description}
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="theme-color" content="#002C57" />
            <meta property="og:site_name" content={siteName} />

            <meta name="twitter:card" content="summary" />
            <meta name="twitter:domain" content="webdriven.io" />

            {children}
        </Head>
    );
};

export default HeadCustom;
