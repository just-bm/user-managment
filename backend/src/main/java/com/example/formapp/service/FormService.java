package com.example.formapp.service;

import com.example.formapp.model.FormData;
import com.example.formapp.repository.FormRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FormService {
    private final FormRepository formRepository;

    @Autowired
    public FormService(FormRepository formRepository) {
        this.formRepository = formRepository;
    }

    public FormData saveForm(FormData formData) {
        return formRepository.save(formData);
    }

    public List<FormData> getAllForms() {
        return formRepository.findAll();
    }
}
