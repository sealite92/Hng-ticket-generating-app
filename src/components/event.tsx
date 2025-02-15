"use client";

import { Card } from "@/components/ui/card";
import { useTicketContext } from "@/store/ticket-context";

export type EventDetails = {
  title: string;
  description: string;
  date: string;
  location: string;
};

export function Event() {
  const { eventDetails } = useTicketContext();
  return (
    <Card className="bg-backgroundLight mt-5 p-3 text-center">
      <h1 className="text-3xl font-bold">{eventDetails?.title}</h1>
      <p className="text-sm">{eventDetails?.description}</p>
      <p className="text-lg font-medium">{eventDetails?.location}</p>
      <p>{eventDetails?.date}</p>
    </Card>
  );
}
