import Link from 'next/link';

import { client } from '@/services/graphql';

import { GET_HOMEPAGE, GET_GLOBAL_DATA } from '@/services/queries';

async function getData() {
  return client.request(GET_HOMEPAGE);
}

async function getGlobalData() {
  return client.request(GET_GLOBAL_DATA);
}

export default async function HomePage() {
  const data: any = await getData();

  const home = data.homepage;

  const globalData: any =
  await getGlobalData();

const global = globalData.globalSetting;

  return (
    <div className="tm-page-container mx-auto">

      <header className="tm-header text-center">

        <h1 className="tm-title text-uppercase">
          {global.siteTitle}
        </h1>

        <p className="tm-primary-color">
          <i>{global.siteSubtitle}</i>
        </p>

      </header>

      <section className="tm-section">

        <nav className="tm-nav">

          <ul>

            <li className="active">

              <Link href="/">
                <span className="tm-nav-deco"></span>
                Intro
              </Link>

            </li>

            <li>

              <Link href="/gallery">
                <span className="tm-nav-deco"></span>
                Gallery
              </Link>

            </li>

            <li>

              <Link href="/contact">
                <span className="tm-nav-deco"></span>
                Contact
              </Link>

            </li>

          </ul>

        </nav>

        <div className="tm-content-container">

          <figure className="mb-0">

            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${home.heroImage.url}`}
              alt="Image"
              className="img-fluid tm-img"
            />

          </figure>

          <div className="tm-content">

            <h2 className="tm-page-title">
              {home.contentTitle}
            </h2>

            {/* <p className="mb-4">
              Curabitur ac est dapibus, ultricies diam non,
              vestibulum odio. Sed ac nunc lacinia,
              maximus nisi non, efficitur lacus,
              Donec efficitur at dui non molestie.
            </p>

            <p>
              Verticard is provided by TemplateMo site
              for 100% free download. You can use it
              absolutely free for any website.
              Template re-distribution is NOT allowed
              on any kind of download website.
              Thank you.
            </p> */}

            {home.sections.map(
              (section: any, index: number) => {

                if (
                  section.__typename ===
                  'ComponentSharedParagraphSection'
                ) {
                  return (
                    <p
                      key={index}
                      className="mb-4"
                    >
                      {section.content}
                    </p>
                  );
                }

                return null;
              }
            )}

          </div>

        </div>

      </section>

      <footer>

        <span>
          Copyright 2019 Simple Profile
        </span>

        <span>
          `designed by {global.footerAuthor}``
        </span>

      </footer>

    </div>
  );
}