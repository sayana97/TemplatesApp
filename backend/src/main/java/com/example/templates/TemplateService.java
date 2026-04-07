package com.example.templates;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class TemplateService {

    private final TemplateRepository repo;

    public TemplateService(TemplateRepository repo) {
        this.repo = repo;
    }

    public List<Template> getAll() {
        return repo.findAll();
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }

    public Template getById(Long id) {
        return repo.findById(id).orElseThrow();
    }

    public List<Template> getByCategory(String category) {
        return repo.findByCategory(category);
    }
}