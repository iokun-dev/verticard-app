import Link from 'next/link';

import { client } from '@/services/graphql';

import { GET_GALLERY_PAGE, GET_GLOBAL_DATA } from '@/services/queries';

async function getData() {
    return client.request(GET_GALLERY_PAGE);
}

async function getGlobalData() {
    return client.request(GET_GLOBAL_DATA);
}

export default async function GalleryPage() {
    const data: any = await getData();

    const gallery = data.galleryPage;

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

                        <h2>
                            {gallery.title}
                        </h2>

                        <p>
                            {gallery.description}
                        </p>

                        <div className="container-fluid">

                            <div
                                className="row tm-gallery"
                                id="tmGallery"
                            >

                                {/* ITEM 1 */}

                                {gallery.galleryItems.map(
                                    (
                                        item: any,
                                        index: number
                                    ) => (

                                        <div className="col-sm-6 tm-gallery-item" key={index}>

                                            <figure className="effect-bubba">

                                                <img
                                                    src="/img/gallery/gallery-img-01.jpg"
                                                    alt="Gallery item"
                                                    className="img-fluid"
                                                />

                                                <figcaption>

                                                    <h2>
                                                        {item.title}
                                                    </h2>

                                                    <p>
                                                        {item.description}
                                                    </p>

                                                    <a href={`${item.image.url}`}>
                                                        View more
                                                    </a>

                                                </figcaption>

                                            </figure>

                                        </div>

                                    )
                                )}

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
                    `designed by {global.footerAuthor}`
                </span>

            </footer>

        </div>
    );
}