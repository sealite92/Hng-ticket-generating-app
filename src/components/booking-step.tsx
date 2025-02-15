"use client"

import {Progress} from "@/components/ui/progress";
import {useTicketContext} from "@/store/ticket-context";



export function BookingStep() {

    const { bookingStep} = useTicketContext();

    const progress = (bookingStep.currentStep / bookingStep.totalSteps) * 100;

    return (
        <div>
            <div className=" flex items-center justify-between font-mono  ">
                <div className="text-lg">
                    {bookingStep.stepTitle}
                </div>
                <div className="">
                    Step {bookingStep.currentStep}/{bookingStep.totalSteps}
                </div>

            </div>
            <Progress value={progress}/>
        </div>
    );
}
