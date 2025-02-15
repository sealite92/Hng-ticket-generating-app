
import React from "react";
import {Ticket} from "@/components/ticket";

export default function page() {
    return (
        <div className="text-center" >
            <h1 className="font-bold text-3xl mt-10 mb-3" >Your Ticket is Booked!</h1>
            <p>Check your email for a copy or you can download</p>

            <Ticket/>
        </div>
    );
}
