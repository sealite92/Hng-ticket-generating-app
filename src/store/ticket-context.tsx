"use client";
import React, { createContext, useState } from "react";
import { TicketType } from "@/components/select-ticket-type";
import { EventDetails } from "@/components/event";

type SelectedTicket = {
  ticketType: TicketType;
  numberOfTickets: number;
};

type BookingStep = {
  totalSteps: number;
  currentStep: number;
  stepTitle: string;
};

type AttendeeDetails = {
  avatarUrl: string;
  name: string;
  email: string;
  message: string;
};

type TicketContextType = {
  selectedTicket: SelectedTicket | null;
  attendeeDetails: AttendeeDetails | null;
  eventDetails: EventDetails | null;
  bookingStep: BookingStep;
  handleSetBookingStep: (bookingStep: BookingStep) => void;
  handleSetSelectedTicket: (selectedTicket: SelectedTicket) => void;
  handleSetAttendeeDetails: (attendeeDetails: AttendeeDetails) => void;
};

export const TicketContext = createContext<TicketContextType | null>(null);

export function TicketContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(
    null
  );
  const [attendeeDetails, setAttendeeDetails] =
    useState<AttendeeDetails | null>(null);
  const [bookingStep, setBookingStep] = useState<BookingStep>({
    totalSteps: 3 as const,
    currentStep: 1,
    stepTitle: "Select Ticket",
  });

  //eslint-disable-next-line
  const [eventDetails, setEventDetails] = useState<EventDetails>({
    title: "October Fest",
    location: "Munich",
    date: "21 October 2025",
    description: "The world's largest beer festival",
  });

  const handleSetSelectedTicket = (selectedTicket: SelectedTicket) => {
    setSelectedTicket(selectedTicket);
  };

  const handleSetAttendeeDetails = (attendeeDetails: AttendeeDetails) => {
    setAttendeeDetails(attendeeDetails);
  };

  const handleSetBookingStep = (bookingStep: BookingStep) => {
    setBookingStep(bookingStep);
  };

  const contextValue = {
    selectedTicket,
    attendeeDetails,
    bookingStep,
    eventDetails,
    handleSetBookingStep,
    handleSetSelectedTicket,
    handleSetAttendeeDetails,
  };

  return (
    <TicketContext.Provider value={contextValue}>
      {children}
    </TicketContext.Provider>
  );
}

export function useTicketContext() {
  const context = React.useContext(TicketContext);
  if (!context) {
    throw new Error(
      "useTicketContext must be used within a TicketContextProvider"
    );
  }
  return context;
}
