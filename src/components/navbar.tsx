import { Card } from "@/components/ui/card";
import Image from "next/image";

export function Navbar() {
  return (
    <Card className="bg-backgroundLight p-3 ">
      <nav className="flex justify-between">
        <div className="flex justify-between gap-2">
          <Image src="/vector.png" alt="img" width={30} height={30}></Image>
          <Image src="/ticz.png" alt="img" width={30} height={30}></Image>
        </div>
        <ul className="hidden md:{block} flex gap-2 items-center">
          <li className="cursor-pointer">Events</li>
          <li className="cursor-pointer">My Tickets</li>
          <li className="cursor-pointer">About Project</li>
        </ul>

        <h2 className="bg-white bord text-black cursor-pointer p-1 rounded-md">
          My Ticket &rarr;
        </h2>
      </nav>
    </Card>
  );
}
