package com.example.templates;

import jakarta.persistence.*;

@Entity
public class Template {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String author;
    private String slug;
    private String category;
    private String zipPath;
    private String imagePath;

    // GETTERS
    public Long getId() { return id; }
    public String getTitle() { return title; }
    public String getDescription() { return description; }
    public String getAuthor() { return author; }
    public String getSlug() { return slug; }
    public String getCategory() { return category; }
    public String getZipPath() { return zipPath; }
    public String getImagePath() { return imagePath; }

    // SETTERS
    public void setTitle(String title) { this.title = title; }
    public void setDescription(String description) { this.description = description; }
    public void setAuthor(String author) { this.author = author; }
    public void setSlug(String slug) { this.slug = slug; }
    public void setCategory(String category) { this.category = category; }
    public void setZipPath(String zipPath) { this.zipPath = zipPath; }
    public void setImagePath(String imagePath) { this.imagePath = imagePath; }
}