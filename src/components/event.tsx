import {Card} from "@/components/ui/card";

 type event = {
    title: string;
    description: string;
    date: string;
    location: string;
}

export function Event(
    event: event
) {
    return (

        <Card className="bg-backgroundLight mt-5 p-3 text-center" >
            <h1 className="text-3xl font-bold" >{event.title}</h1>
            <p className="text-sm">{event.description}</p>
            <p className="text-lg font-medium" >{event.location}</p>
            <p>{event.date}</p>
        </Card>
    );
}
