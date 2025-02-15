"use client"
import React, {createContext, useState} from "react";
import {TicketType} from "@/components/select-ticket-type";


type SelectedTicket = {
    ticketType: TicketType;
    numberOfTickets: number;
}

type BookingStep ={
    totalSteps: number;
    currentStep: number;
    stepTitle: string;
}

type AttendeeDetails = {
    avatarUrl: string;
    name: string;
    email: string;
    message: string;
}

type TicketContextType = {
    selectedTicket: SelectedTicket | null;
    attendeeDetails: AttendeeDetails | null;
    bookingStep: BookingStep;
    handleSetBookingStep: (bookingStep: BookingStep) => void;
    handleSetSelectedTicket: (selectedTicket: SelectedTicket) => void;
    handleSetAttendeeDetails: (attendeeDetails: AttendeeDetails) => void;
}

export  const TicketContext = createContext<TicketContextType | null>(null);


export function TicketContextProvider({children}: {children: React.ReactNode}) {
    const [selectedTicket, setSelectedTicket] = useState<SelectedTicket | null>(null);
    const [attendeeDetails, setAttendeeDetails] = useState<AttendeeDetails | null>(null);
    const [bookingStep, setBookingStep] = useState<BookingStep>({
        totalSteps: 3 as const,
        currentStep: 1,
        stepTitle: "Select Ticket"
    })

    const handleSetSelectedTicket = (selectedTicket: SelectedTicket) => {
        setSelectedTicket(selectedTicket);
    };

    const handleSetAttendeeDetails = (attendeeDetails: AttendeeDetails) => {
        setAttendeeDetails(attendeeDetails);
    };

    const handleSetBookingStep = (bookingStep: BookingStep) => {
        setBookingStep(bookingStep);
    }

    const contextValue = {
        selectedTicket,
        attendeeDetails,
        bookingStep,
        handleSetBookingStep,
        handleSetSelectedTicket,
        handleSetAttendeeDetails
    }


    return <TicketContext.Provider
        value={contextValue}>
        {children}
    </TicketContext.Provider>
}

export function useTicketContext() {
    const context = React.useContext(TicketContext);
    if(!context) {
        throw new Error("useTicketContext must be used within a TicketContextProvider")
    }
    return context;
}