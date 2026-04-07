import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cvImg from "../assets/categories/cv.svg";
import thesisImg from "../assets/categories/thesis.svg";
import calendarImg from "../assets/categories/calendar.svg";

export default function TemplatesPage() {
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/templates")
      .then(res => res.json())
      .then(setTemplates);
  }, []);

  const categories = [
    { name: "cv", label: "CV", image: cvImg },
    { name: "thesis", label: "Thesis", image: thesisImg },
    { name: "calendar", label: "Calendar", image: calendarImg },
    { name: "other", label: "Other", image: cvImg } // fallback
  ];

  return (
    <div className="website-redesign" data-theme="default">

      <nav className="navbar navbar-default navbar-main navbar-expand-lg website-redesign-navbar">
        <div className="container-fluid navbar-container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/">Overleaf</a>
          </div>
        </div>
      </nav>

      <main className="content content-page gallery-page">

        <div className="container gallery">

          <div className="row">
            <div className="col-md-12">
              <nav className="gallery-filters">
                <span>Filters:</span>
                <a href="/gallery">All</a>
                <span> / </span>
                <a className="active" href="/templates">Templates</a>
              </nav>
            </div>
          </div>

          <div className="gallery-header">
            <div className="row">
              <div className="col-md-12">
                <h1 className="gallery-title">
                  <span className="eyebrow-text">
                    <span>{"{"}</span>
                    <span> overleaf template gallery </span>
                    <span>{"}"}</span>
                  </span>
                  LaTeX templates
                </h1>
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <p className="gallery-summary">
                  LaTeX templates for journal articles, academic papers, CVs and résumés, presentations, and more.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <div className="gallery-search">
                <input
                  className="form-control"
                  placeholder="Search templates..."
                  disabled
                />
              </div>
            </div>
          </div>

        </div>

        <div className="container gallery mt-5">

          <div className="featured-docs mt-5">
            <h2>Featured</h2>

            <div className="row gallery-container">

              {templates.length === 0 && (
                <div className="col-md-12">
                  <p>No templates available.</p>
                </div>
              )}

              {templates.map(t => (
                <div className="gallery-thumbnail col-12 col-md-6 col-lg-4" key={t.id}>

                  <Link to={`/templates/${t.id}`}>
                    <div className="thumbnail text-center">
                      <img
                        src={`http://localhost:8080/${t.imagePath}`}
                        alt={t.title}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "300px",
                          objectFit: "cover",
                          borderRadius: "6px"
                        }}
                      />
                    </div>
                  </Link>

                  <span className="gallery-list-item-title">
                    <span className="caption-title">{t.title}</span>
                    <span className="badge-container"></span>
                  </span>

                  <div className="caption">
                    <p className="caption-description">{t.description}</p>
                    <div className="author-name">
                      <div>{t.author}</div>
                    </div>
                  </div>

                </div>
              ))}

            </div>
          </div>

          <div className="featured-docs mt-5">
            <h2>Categories</h2>

            <div className="row gallery-container">

              {categories.map(cat => (
                <div className="gallery-thumbnail col-12 col-md-6 col-lg-4" key={cat.name}>

                  <Link to={`/category/${cat.name}`}>
                    <div className="thumbnail text-center">
                      <img
                        src={cat.image}
                        alt={cat.label}
                        loading="lazy"
                        style={{
                          width: "100%",
                          height: "250px",
                          objectFit: "contain",
                          padding: "20px"
                        }}
                      />
                    </div>
                  </Link>

                  <span className="gallery-list-item-title">
                    <span className="caption-title">{cat.label}</span>
                  </span>

                  <div className="caption">
                    <p>Browse {cat.label} templates</p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>

      </main>

      <div className="container mt-5">
        <div className="row section-row">
          <div className="col-md-12">
            <div className="begin-now-card">
              <div className="card card-pattern">
                <div className="card-body text-center">
                  <p className="dm-mono">
                    <span className="font-size-display-xs">
                      <span className="text-purple-bright">\begin</span>
                      <span className="text-green-bright">{"{"}</span>
                      now
                      <span className="text-green-bright">{"}"}</span>
                    </span>
                  </p>

                  <div className="mt-4">
                    <a className="btn btn-primary btn-lg" href="#">
                      Start a Project
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="fat-footer website-redesign-fat-footer">
        <div className="fat-footer-container">
          <div className="fat-footer-base">
            <div className="fat-footer-base-section fat-footer-base-meta">
              <div className="fat-footer-base-item">
                <div className="fat-footer-base-copyright">
                  © 2026 Overleaf AU Edition
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}