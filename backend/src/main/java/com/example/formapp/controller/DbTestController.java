package com.example.formapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/dbtest")
public class DbTestController {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public DbTestController(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @GetMapping
    public String testDbConnection() {
        try {
            String result = jdbcTemplate.queryForObject("SELECT 'PostgreSQL connection successful!'", String.class);
            return result;
        } catch (Exception e) {
            return "Database connection failed: " + e.getMessage();
        }
    }
}