"use client";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useTicketContext } from "@/store/ticket-context";

const tickets: TicketType[] = [
  {
    title: "General Admission",
    price: 0,
    numberAvailable: 100,
    numberSold: 50,
    isSelected: false,
  },
  {
    title: "VIP",
    price: 50,
    numberAvailable: 20,
    numberSold: 10,
    isSelected: false,
  },
  {
    title: "Backstage",
    price: 100,
    numberAvailable: 5,
    numberSold: 2,
    isSelected: false,
  },
];

const ticketOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50];

export function SelectTicketType() {
  const { handleSetSelectedTicket, handleSetBookingStep } = useTicketContext();

  const [selectedTick, setSelectedTick] = useState<TicketType | null>(null);
  const [numberOfTickets, setNumberOfTickets] = useState(1);
  const [selectTicketTypeError, setSelectTicketTypeError] = useState<
    string | null
  >(null);

  const router = useRouter();

  const handleSubmission = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTick) {
      setSelectTicketTypeError("Please select a ticket type");
      return;
    }
    handleSetSelectedTicket({
      ticketType: selectedTick,
      numberOfTickets,
    });

    handleSetBookingStep({
      currentStep: 2,
      stepTitle: "Attendee Details",
      totalSteps: 3,
    });
    router.push("/attendee-details");
  };
  return (
    <form onSubmit={handleSubmission} className="mt-5 py-5">
      <p>Select Ticket Type:</p>
      <Card className="bg-backgroundDark p-3 mt-5 ">
        <p className="text-red-500">{selectTicketTypeError}</p>
        <ul className="flex flex-col gap-3 md:flex-row justify-between align-middle">
          {tickets.map((ticket) => (
            <li
              className="flex-1  w-full md:w-[250px]"
              key={ticket.title}
              onClick={() => setSelectedTick(ticket)}
            >
              <TicketType
                isSelected={selectedTick === ticket}
                title={ticket.title}
                price={ticket.price}
                numberAvailable={ticket.numberAvailable}
                numberSold={ticket.numberSold}
              />
            </li>
          ))}
        </ul>
      </Card>
      <div className="mt-5">
        <p>Number of Tickets:</p>
        <Select onValueChange={(value) => setNumberOfTickets(+value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="1" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {/*<SelectLabel>Fruits</SelectLabel>*/}
              {ticketOptions.map((number) => (
                <SelectItem key={number} value={number.toString()}>
                  {number}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-5 flex flex-col md:flex-row gap-3 ">
        <Button type="submit" variant="default">
          Next
        </Button>
        <Button type="reset" variant="outline" className="bg-backgroundLight">
          Cancel
        </Button>
      </div>
    </form>
  );
}

export type TicketType = {
  title: string;
  price: number;
  numberAvailable: number;
  numberSold: number;
  isSelected: boolean;
};

function TicketType({
  title,
  price,
  numberAvailable,
  numberSold,
  isSelected,
}: TicketType) {
  return (
    <Card
      className={`bg-backgroundDark hover:bg-[#197686]
         ${isSelected ? "bg-[#197686]" : ""} `}
    >
      <h2 className="text-xl font-bold mb-2">
        {" "}
        {price ? "$" : ""} {price || "Free"}
      </h2>
      <p>{title}</p>
      <p>
        {numberSold}/{numberAvailable}
      </p>
    </Card>
  );
}
