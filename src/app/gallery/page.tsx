import Link from 'next/link';

export default function GalleryPage() {

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

      <div className="tm-section">

        <nav className="tm-nav">

          <ul>

            <li>

              <Link href="/">
                <span className="tm-nav-deco"></span>
                Intro
              </Link>

            </li>

            <li className="active">

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

          <div className="tm-content tm-content-2">

            <p>
              This gallery contains a beautiful hover
              effect and pop-up larger images.
              Please mention TemplateMo site to your friends.
            </p>

            <div className="container-fluid">

              <div
                className="row tm-gallery"
                id="tmGallery"
              >

                {/* ITEM 1 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-01.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-01.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

                {/* ITEM 2 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-02.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-02.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

                {/* ITEM 3 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-03.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-03.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

                {/* ITEM 4 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-04.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-04.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

                {/* ITEM 5 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-05.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-05.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

                {/* ITEM 6 */}

                <div className="col-sm-6 tm-gallery-item">

                  <figure className="effect-bubba">

                    <img
                      src="/img/gallery/gallery-img-06.jpg"
                      alt="Gallery item"
                      className="img-fluid"
                    />

                    <figcaption>

                      <h2>
                        Fresh <span>Bubba</span>
                      </h2>

                      <p>
                        Bubba likes to appear out of thin air.
                      </p>

                      <a href="/img/gallery/gallery-img-06.jpg">
                        View more
                      </a>

                    </figcaption>

                  </figure>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

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