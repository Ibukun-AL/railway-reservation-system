package com.example.railwayApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.railwayApp.Repository.TicketRepository;
import com.example.railwayApp.model.Ticket;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;
    
    public Ticket bookTicket(Ticket ticket) {
        ticket.setBookingNumber(generateBookingNumber());
        return ticketRepository.save(ticket);
    }
    
    public void cancelTicket(String bookingNumber) {
        ticketRepository.findByBookingNumber(bookingNumber)
            .ifPresent(ticket -> ticketRepository.delete(ticket));
    }
    
    public Ticket getTicketStatus(String bookingNumber) {
        return ticketRepository.findByBookingNumber(bookingNumber)
            .orElseThrow(() -> new RuntimeException("Ticket not found"));
    }
    
    private String generateBookingNumber() {
        return "BK" + System.currentTimeMillis();
    }
}
