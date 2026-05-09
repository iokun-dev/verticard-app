import Link from 'next/link';

export default function HomePage() {

  return (
    <div className="tm-page-container mx-auto">

      <header className="tm-header text-center">

        <h1 className="tm-title text-uppercase">
          Verticard
        </h1>

        <p className="tm-primary-color">
          <i>new bootstrap theme</i>
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
              src="/img/img-1.jpg"
              alt="Image"
              className="img-fluid tm-img"
            />

          </figure>

          <div className="tm-content">

            <h2 className="tm-page-title">
              Verticard Simple CSS Template
            </h2>

            <p className="mb-4">
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
            </p>

          </div>

        </div>

      </section>

      <footer>

        <span>
          Copyright 2019 Simple Profile
        </span>

        <span>
          designed by TemplateMo
        </span>

      </footer>

    </div>
  );
}