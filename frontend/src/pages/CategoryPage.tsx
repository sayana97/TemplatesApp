import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

export default function CategoryPage() {
  const { category } = useParams();
  const [templates, setTemplates] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://templatesapp.onrender.com/templates/category/${category}`)
      .then(res => res.json())
      .then(setTemplates);
  }, [category]);

  return (
    <div className="website-redesign" data-theme="default">

      <div className="container mt-5">

        <Link to="/">← Back to templates</Link>

        <h1 className="category-title mt-3">
          {category} templates
        </h1>

        <div className="row mt-4">

          {templates.map(t => (
            <div className="col-md-4 mb-4" key={t.id}>

              <Link to={`/templates/${t.id}`}>
                <img
                  src={`https://templatesapp.onrender.com/${t.imagePath}`}
                  style={{
                    width: "100%",
                    height: "300px",
                    objectFit: "cover",
                    borderRadius: "6px"
                  }}
                />
              </Link>

              <h5 className="mt-2">{t.title}</h5>
              <p>{t.description}</p>
              <p><b>{t.author}</b></p>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}