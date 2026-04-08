package com.example.templates;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import org.springframework.core.io.Resource;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;

import java.nio.file.Path;
import java.nio.file.Paths;

@RestController
@RequestMapping("/templates")
@CrossOrigin(origins = "*")
public class TemplateController {

    private final TemplateService service;

    public TemplateController(TemplateService service) {
        this.service = service;
    }

    @GetMapping
    public List<Template> getAll() {
        return service.getAll();
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }

    @GetMapping("/{id}")
    public Template getById(@PathVariable Long id) {
        return service.getById(id);
    }

    @GetMapping("/category/{category}")
    public List<Template> getByCategory(@PathVariable String category) {
        return service.getByCategory(category);
    }

    @GetMapping("/download/{id}")
    public ResponseEntity<Resource> download(@PathVariable Long id) {

        Template t = service.getById(id);

        Path path = Paths.get("backend/storage/" + t.getZipPath());

        System.out.println("DEBUG PATH: " + path.toAbsolutePath());

        Resource resource = new FileSystemResource(path);

        if (!resource.exists()) {
            throw new RuntimeException("File NOT FOUND: " + path);
        }

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=" + path.getFileName())
                .body(resource);
    }
}