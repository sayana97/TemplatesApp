package com.example.templates;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface TemplateRepository extends JpaRepository<Template, Long> {

    List<Template> findByCategory(String category);
}