package com.example.railwayApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.railwayApp.model.Ticket;
import com.example.railwayApp.service.TicketService;

@RestController
@RequestMapping("/api/tickets")
public class TicketController {
    @Autowired
    private TicketService ticketService;
    
    @PostMapping
    public ResponseEntity<Ticket> bookTicket(@RequestBody Ticket ticket) {
        return ResponseEntity.ok(ticketService.bookTicket(ticket));
    }
    
    @DeleteMapping("/{bookingNumber}")
    public ResponseEntity<Void> cancelTicket(@PathVariable String bookingNumber) {
        ticketService.cancelTicket(bookingNumber);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/{bookingNumber}")
    public ResponseEntity<Ticket> getTicketStatus(@PathVariable String bookingNumber) {
        return ResponseEntity.ok(ticketService.getTicketStatus(bookingNumber));
    }
}
