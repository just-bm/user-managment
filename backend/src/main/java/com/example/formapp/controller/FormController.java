package com.example.formapp.controller;

import com.example.formapp.model.FormData;
import com.example.formapp.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/forms")
@CrossOrigin(origins = "http://localhost:4200")
public class FormController {
    private final FormService formService;

    @Autowired
    public FormController(FormService formService) {
        this.formService = formService;
    }

    @PostMapping
    public ResponseEntity<FormData> submitForm(@RequestBody FormData formData) {
        FormData savedForm = formService.saveForm(formData);
        return ResponseEntity.ok(savedForm);
    }

    @GetMapping
    public ResponseEntity<List<FormData>> getAllForms() {
        List<FormData> forms = formService.getAllForms();
        return ResponseEntity.ok(forms);
    }
}


