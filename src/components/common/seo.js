import Head from "next/head";

const Seo = ({ pageTitle }) => (
  <>
    <Head>
      <title>{pageTitle && `${pageTitle} `}</title>
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="keywords"
        content="advanced custom search, agency, agent, business, clean, corporate, directory, google maps, homes, idx agent, listing properties, membership packages, property, real broker, real estate, real estate agent, real estate agency, realtor"
      />
      <meta
        name="description"
        content="top fruit is a real estate website template."
      />
      <meta name="ibthemes" content="ATFN" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="format-detection"
        content="telephone=no, date=no, email=no, address=no"
      />

      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,500;0,600;0,700;1,300;1,600;1,700&display=swap"
        rel="stylesheet"
      />
      <link rel="icon" href="favicon.ico" />
    </Head>
  </>
);

export default Seo;
