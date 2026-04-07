import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function TemplateDetail() {
    const { id } = useParams();
    const [template, setTemplate] = useState<any>(null);

    useEffect(() => {
        fetch(`http://localhost:8080/templates/${id}`)
            .then(res => res.json())
            .then(setTemplate);
    }, [id]);

    if (!template) return <p>Loading...</p>;

    return (
        <div className="website-redesign" data-theme="default">

            <div className="container mt-5">
                <div className="row">

                    <Link to="/">← Back to templates</Link>

                    <div className="col-md-6">

                        <h1 className="mb-3">{template.title}</h1>

                        <p className="text-muted">
                            <strong>Author:</strong> {template.author}
                        </p>

                        <p className="mt-3">{template.description}</p>

                        <div className="mt-4">

                            <button className="btn btn-primary btn-lg me-2" disabled>
                                Open as template
                            </button>

                            <a href={`http://localhost:8080/templates/download/${template.id}`}>
                                <button className="btn btn-success btn-lg">
                                    Download
                                </button>
                            </a>

                        </div>
                    </div>

                    <div className="col-md-6 text-center">
                        <img
                            src={`http://localhost:8080/${template.imagePath}`}
                            className="img-fluid rounded shadow"
                            style={{ maxHeight: "500px" }}
                        />
                    </div>

                </div>
            </div>

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

            <footer className="fat-footer hidden-print website-redesign-fat-footer">
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