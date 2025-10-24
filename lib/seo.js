export const defaultSEO = {
  title: 'Maximiliano Mendez - Front-End Developer',
  description: 'Portfolio de Maximiliano Mendez, desarrollador front-end especializado en React, Next.js y tecnologías modernas.',
  canonical: 'https://portfolio-maxs.vercel.app',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: 'https://portfolio-maxs.vercel.app',
    title: 'Maximiliano Mendez - Front-End Developer',
    description: 'Portfolio de Maximiliano Mendez, desarrollador front-end especializado en React, Next.js y tecnologías modernas.',
    site_name: 'Maximiliano Mendez Portfolio',
    images: [
      {
        url: 'https://portfolio-maxs.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Maximiliano Mendez Portfolio',
      },
    ],
  },
  twitter: {
    handle: '@maxs22',
    site: '@maxs22',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      name: 'theme-color',
      content: '#22222D',
    },
    {
      name: 'robots',
      content: 'index,follow',
    },
    {
      name: 'googlebot',
      content: 'index,follow',
    },
    {
      name: 'author',
      content: 'Maximiliano Mendez',
    },
    {
      name: 'keywords',
      content: 'frontend, developer, react, nextjs, javascript, typescript, portfolio, web development',
    },
  ],
};
