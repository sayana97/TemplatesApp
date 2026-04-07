package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.boot.CommandLineRunner;

import com.example.templates.TemplateRepository;
import com.example.templates.Template;

@SpringBootApplication
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    CommandLineRunner initTemplates(TemplateRepository repo) {
        return args -> {

            repo.save(create(
                    "mcmaster_thesis",
                    "McMaster Thesis",
                    "This template is an adaptation of the official McMaster University’s Master’s/Doctoral thesis format",
                    "Feyi Adesanya",
                    "thesis"));

            repo.save(create(
                    "Wall_Calendar",
                    "Wall Calendar",
                    "(Template updated: wallcalendar v0.1.6 2026-03-14)",
                    "Gambhiro",
                    "calendar"));

            repo.save(create(
                    "MSc_or_PhD_Dissertation_Template__Originally_for_the_University_of_Malta_",
                    "MSc or PhD Dissertation Template (Originally for the University of Malta)",
                    "A modern dissertation LaTeX template adaptable for institutions.",
                    "Dr Jean-Paul Ebejer",
                    "thesis"));

            repo.save(create(
                    "Modern_Simple_CV",
                    "Modern Simple CV",
                    "A modern simple academic CV template.",
                    "Sarah Lang",
                    "cv"));

            repo.save(create(
                    "Example_Project",
                    "Example Project",
                    "An example LaTeX project for starting off your own article",
                    "",
                    ""));

            repo.save(create(
                    "Aarhus_University___Department_of_Biological_and_Chemical_Engineering",
                    "Aarhus University – Department of Biological and Chemical Engineering",
                    "BCE template for department of biological and chemical engineering at Aarhus University",
                    "Axel Rosenvinge",
                    "thesis"));
        };
    }

    private Template create(
            String slug,
            String title,
            String desc,
            String author,
            String category) {
        Template t = new Template();

        t.setSlug(slug);
        t.setTitle(title);
        t.setDescription(desc);

        t.setAuthor(
                (author != null && !author.isEmpty())
                        ? author
                        : "Overleaf");

        t.setCategory(
                (category != null && !category.isEmpty())
                        ? category
                        : "other");

        t.setZipPath("templates/" + slug + ".zip");
        t.setImagePath("images/" + slug + ".jpeg");

        return t;
    }
}