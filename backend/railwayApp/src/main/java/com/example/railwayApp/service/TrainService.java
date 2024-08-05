package com.example.railwayApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.railwayApp.Repository.TrainRepository;
import com.example.railwayApp.model.Train;

@Service
public class TrainService {
    @Autowired
    private TrainRepository trainRepository;
    
    public List<Train> searchTrains(String departureStation, String arrivalStation) {
        return trainRepository.findByDepartureStationAndArrivalStation(departureStation, arrivalStation);
    }
    
    // Add more train-related methods
}
