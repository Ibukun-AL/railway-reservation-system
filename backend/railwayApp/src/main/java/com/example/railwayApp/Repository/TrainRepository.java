package com.example.railwayApp.Repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.railwayApp.model.Train;

@Repository
public interface TrainRepository extends JpaRepository<Train, Long> {
    List<Train> findByDepartureStationAndArrivalStation(String departureStation, String arrivalStation);
}
