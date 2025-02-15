"use client"

import Image from "next/image";
import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import React from "react";
import {useRouter} from "next/navigation";
import {useTicketContext} from "@/store/ticket-context";

export function Ticket() {

    const router = useRouter();
    const {  selectedTicket, attendeeDetails,handleSetBookingStep} = useTicketContext();

    return (

        <div className="p-5 rounded-md" >
            <div className="p-3 rounded-md border-2 border-backgroundDark/60  text-center">
                <div>
                    <h2 className="font-bold text-2xl">Event Title</h2>
                    <p>Event location</p>
                    <p>Event Date</p>
                </div>
                <Image src={`${attendeeDetails?.avatarUrl}`}
                       className="w-[100px] h-[100px] m-auto rounded-md border-2 border-b-blue-500 my-5"
                       alt="avatar" width={50} height={50}>
                </Image>
                <Card className="grid grid-cols-2 bg-backgroundLight  p-5 my-5  text-left">
                    <div className="border-r-2 p-2 border-b-2 border-backgroundDark/45">
                        <p className="text-white/30 text-sm font-light mb-2 " >Name</p>
                        <p className="text-white" >{attendeeDetails?.name}</p>

                    </div>
                    <div className="border-b-2 p-2 border-backgroundDark/45">
                        <p className="text-white/30 text-sm font-light mb-2 " >Email</p>
                        <p className="text-white" >{attendeeDetails?.email}</p>
                    </div>
                    <div className="border-b-2 p-2 border-r-2 border-backgroundDark/45">
                        <p className="text-white/30 text-sm font-light mb-2 " >Ticket Type</p>
                        <p className="text-white" >{selectedTicket?.ticketType.title}</p>
                    </div>
                    <div className="border-b-2 p-2  border-backgroundDark/45">
                        <p className="text-white/30 text-sm font-light mb-2 " >Number of tickets</p>
                        <p className="text-white" >{selectedTicket?.numberOfTickets}</p>
                    </div>
                    <div className="col-span-full p-3">
                        <p className="text-white/30 text-sm font-light mb-2 " >Any special request?</p>
                        <p className="text-white" >{attendeeDetails?.message}</p>
                    </div>
                </Card>

            </div>
            <div className="mt-5 flex flex-col lg:flex-row gap-3 " >
                <Button type="submit" variant="default">Download Ticket</Button>
                <Button onClick={(e) => {
                    e.preventDefault();
                    handleSetBookingStep({
                        currentStep: 1,
                        stepTitle: "Select Ticket Type",
                        totalSteps: 3
                    })
                    router.push("/")
                }} type="reset" variant="outline" className="bg-backgroundLight" >Book Another Ticket</Button>
            </div>
        </div>
    );
}
