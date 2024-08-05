package com.example.railwayApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwayApp.model.Train;
import com.example.railwayApp.service.TrainService;

@RestController
@RequestMapping("/api/trains")
public class TrainController {
    @Autowired
    private TrainService trainService;
    
    @GetMapping("/search")
    public ResponseEntity<List<Train>> searchTrains(@RequestParam String departureStation, @RequestParam String arrivalStation) {
        return ResponseEntity.ok(trainService.searchTrains(departureStation, arrivalStation));
    }
    
    // Add more train-related endpoints
}
