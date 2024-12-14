import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-5">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-6 text-center text-md-start mb-4 mb-md-0">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/register_interest" className="text-white text-decoration-none mb-2 d-block">
                                    Register Interest
                                </a>
                            </li>
                            <li>
                                <button className="text-white text-decoration-none mb-2 d-block">
                                    Contact Us
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <h5 className="fw-bold mb-3">Follow Us</h5>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3">
                            <a href="mailto:habitattalk@gmail.com">
                                <img
                                    src="https://ik.imagekit.io/rmhnagyqw/habitatT/mail.png?updatedAt=1720008711166"
                                    alt="Email"
                                    style={{ width: 35, height: 35 }}
                                    className="h-8"
                                />
                            </a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://ik.imagekit.io/rmhnagyqw/habitatT/facebook.png?updatedAt=1720008710523"
                                    alt="Facebook"
                                    style={{ width: 35, height: 35 }}
                                    className="h-8"
                                />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://ik.imagekit.io/rmhnagyqw/habitatT/twitter.png?updatedAt=1720008710560"
                                    alt="Twitter"
                                    style={{ width: 35, height: 35 }}
                                    className="h-8"
                                />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <img
                                    src="https://ik.imagekit.io/rmhnagyqw/habitatT/linkedin.png?updatedAt=1720008709820"
                                    alt="LinkedIn"
                                    style={{ width: 35, height: 35 }}
                                    className="h-8"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p className="small mb-0">&copy; 2024 HabitatT. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
