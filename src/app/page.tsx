
import {Event} from "@/components/event";
import {SelectTicketType} from "@/components/select-ticket-type";

const event = {
    title: "Octoberfest",
    description: "The biggest beer festival in the world",
    date: "October 1st",
    location: "Munich, Germany"
}

export default function Home() {


  return (

      <>
          <Event

              title={event.title}
              description={event.description}
              date={event.date}
              location={event.location}
          />

          <SelectTicketType />
      </>

  );
}
