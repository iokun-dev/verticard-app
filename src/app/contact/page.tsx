'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';

import { client } from '@/services/graphql';

import { GET_CONTACT_PAGE, GET_GLOBAL_DATA } from '@/services/queries';

export default function ContactPage() {
    const [contact, setContact] = useState<any>(null);
    const [global, setGlobal] = useState<any>(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    useEffect(() => {

        async function loadData() {

            const data: any =
                await client.request(GET_CONTACT_PAGE);

            setContact(data.contactPage);

            const globalData: any = await client.request(GET_GLOBAL_DATA);
            setGlobal(globalData.globalSetting);
        }

        loadData();

    }, []);

    async function handleSubmit(
        e: React.FormEvent<HTMLFormElement>
    ) {

        e.preventDefault();

        try {

            const response = await fetch(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-submissions`,
                {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        data: formData,
                    }),
                }
            );

            // API ERROR

            if (!response.ok) {

                const errorData = await response.json();

                console.log(errorData);

                alert(
                    errorData?.error?.message ||
                    'Failed to submit form'
                );

                return;
            }

            // SUCCESS
            alert('Form submitted successfully');

            setFormData({
                name: '',
                email: '',
                message: '',
            });

        } catch (error) {

            console.log(error);

            alert('Something went wrong. Please try again.');
        }
    }

    if (!contact || !global) {
        return <div>Loading...</div>;
    }
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

                    <div
                        className="mb-0 tm-img-overlay-wrap"
                        style={{
                            backgroundImage: `url(
      ${process.env.NEXT_PUBLIC_API_URL}${contact.overlayImage.url}
    )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >

                        <div className="tm-img-overlay"></div>

                        <div className="tm-img-overlay-text text-white p-5">

                            <h4 className="mb-4">
                                {contact.title}
                            </h4>

                            <p className="tm-small">

                                {contact.description}

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
                                    placeholder="Name"
                                    required
                                    value={formData.name}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            name: e.target.value,
                                        })
                                    }
                                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                />

                            </div>

                            <div className="form-group">

                                <input
                                    type="email"
                                    placeholder="Email"
                                    required
                                    value={formData.email}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
                                        })
                                    }
                                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                                />

                            </div>

                            <div className="form-group">

                                <textarea
                                    rows={6}
                                    placeholder="Message..."
                                    required
                                    value={formData.message}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            message: e.target.value,
                                        })
                                    }
                                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
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
                    `designed by {global.footerAuthor}`
                </span>

            </footer>

        </div>
    );
}