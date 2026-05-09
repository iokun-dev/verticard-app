'use client';

import Link from 'next/link';

export default function ContactPage() {

  function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault();

    alert('Form Submitted');
  }

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

            <li>

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

            <li className="active">

              <Link href="/contact">
                <span className="tm-nav-deco"></span>
                Contact
              </Link>

            </li>

          </ul>

        </nav>

        <div className="tm-content-container">

          {/* IMAGE OVERLAY SECTION */}

          <div className="mb-0 tm-img-overlay-wrap">

            <div className="tm-img-overlay"></div>

            <div className="tm-img-overlay-text text-white p-5">

              <h4 className="mb-4">
                Contact Text on Image
              </h4>

              <p className="tm-small">

                Text on image has a CSS semi-transparent
                BG layer on image.

                Praesent ut metus nibh.
                Vivamus diam purus,
                finibus et porttitor quis,
                tristique ac velit.

                Etiam sed nunc eget lacus sagittis
                hendrerit at ullamcorper nulla.

              </p>

            </div>

          </div>

          {/* CONTACT FORM */}

          <div className="tm-content">

            <form
              onSubmit={handleSubmit}
              className="tm-contact-form"
            >

              <div className="form-group">

                <input
                  type="text"
                  id="contact_name"
                  name="contact_name"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Name"
                  required
                />

              </div>

              <div className="form-group">

                <input
                  type="email"
                  id="contact_email"
                  name="contact_email"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Email"
                  required
                />

              </div>

              <div className="form-group">

                <textarea
                  rows={6}
                  id="contact_message"
                  name="contact_message"
                  className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                  placeholder="Message..."
                  required
                ></textarea>

              </div>

              <div className="form-group text-right">

                <button
                  type="submit"
                  className="btn btn-primary rounded-0"
                >
                  Submit
                </button>

              </div>

            </form>

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