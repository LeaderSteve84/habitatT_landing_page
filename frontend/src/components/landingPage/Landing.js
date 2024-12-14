import React from "react";
import SimpleSlider from "./Slider";
import { Buildings } from "../../ImageData";
import Footer from "./Footer";
import { FiUser, FiClipboard, FiBell, FiHome, FiUpload, FiMail } from "react-icons/fi";
import propertyManagerImage from "../../assets/propertymanager.png";
// import accountManagementImage from "../../assets/accountmgr.webp";
// import centralCommunicationImage from "../../assets/centralize.jpeg";
import { Link } from "react-router-dom";

const features = [
    {
        icon: <FiUser size={40} />,
        title: "Account Management",
        tagline: "Simplified account management for real estate managers and tenants or clients.",
    },
    {
        icon: <FiClipboard size={40} />,
        title: "Log Requests",
        tagline: "Streamline service request tracking and resolutions.",
    },
    {
        icon: <FiBell size={40} />,
        title: "Announcements",
        tagline: "Broadcast essential updates to all stakeholders.",
    },
    {
        icon: <FiHome size={40} />,
        title: "Property Management",
        tagline: "Manage property listings with ease.",
    },
    {
        icon: <FiUpload size={40} />,
        title: "Document Management",
        tagline: "Effortlessly upload and manage documents.",
    },
    {
        icon: <FiMail size={40} />,
        title: "Email Notifications",
        tagline: "Stay updated with automated email alerts.",
    },
];

const Landing = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-primary text-white py-5 mt-5 text-center">
                <div className="container">
                    <h1 className="display-4 fw-bold">Welcome to HabitatT</h1>
                    <p className="lead">
                        Empowering property management with seamless communication and efficient operations.
                    </p>
                    <Link to="/register_interest" className="btn btn-light btn-lg mt-3">
                        Register Interest
                    </Link>
                </div>
            </section>

            <section>
                <SimpleSlider />
            </section>

            {/* Problem Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-dark fw-bold mb-4">The Problem</h2>
                    <p className="lead text-center text-muted">
                        Real estate professionals, tenants, and clients face challenges in effective communication
                        and collaboration, leading to delayed responses and reduced satisfaction.
                    </p>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <h2 className="fw-bold text-dark">Our Solution</h2>
                            <p className="text-muted">
                                HabitatT provides a centralized platform for real-time communication, efficient
                                tenant/client request handling, and automated workflows. Our web app ensures faster
                                responses, improved collaboration, and enhanced satisfaction for all stakeholders.
                            </p>
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-center mb-3">
                                    <FiHome className="me-3 text-primary" />
                                    Effective Property Management
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <FiBell className="me-3 text-primary" />
                                    Real-time communication
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <FiClipboard className="me-3 text-primary" />
                                    Maintenance service request management.
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <FiBell className="me-3 text-primary" />
                                    Timely announcements and updates.
                                </li>
                                <li className="d-flex align-items-center mb-3">
                                    <FiMail className="me-3 text-primary" />
                                    Automated notifications and reminders. Etc
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <img
                                src={propertyManagerImage}
                                alt="Property Management"
                                className="img-fluid rounded"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Unique Value Proposition */}
            <section className="py-5 bg-dark text-white text-center">
                <div className="container">
                    <h2 className="fw-bold mb-4">Why Choose HabitatT?</h2>
                    <p className="lead">
                        Simplifying property management with seamless communication, timely services, and efficient
                        operations, HabitatT empowers real estate professionals, clients and tenants in Africa’s urban
                        communities.
                    </p>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-5 bg-light">
                <div className="container">
                    <h2 className="text-center text-dark fw-bold mb-4">Key Features</h2>
                    <div className="row">
                        {features.map((feature, index) => (
                            <div key={index} className="col-md-4 mb-4">
                                <div className="card border-0 shadow-sm h-100 text-center">
                                    <div className="card-body">
                                        <div className="mb-3 text-primary">{feature.icon}</div>
                                        <h5 className="fw-bold text-dark">{feature.title}</h5>
                                        <p className="text-muted">{feature.tagline}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Properties Section */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="text-center text-dark fw-bold mb-4">Explore Available Properties</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        {Buildings.map((building, index) => (
                            <div className="col" key={index}>
                                <div className="card border-0 shadow-sm h-100">
                                    <img
                                        src={building.src}
                                        alt="Building"
                                        className="card-img-top"
                                        style={{ height: "200px", objectFit: "cover" }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{building.title}</h5>
                                        <p className="card-text">{building.message}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-4">
                        <Link to="#" className="btn btn-primary btn-lg">
                            View More Properties
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Landing;

