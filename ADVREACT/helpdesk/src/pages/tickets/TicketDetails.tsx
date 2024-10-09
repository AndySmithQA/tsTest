import { useParams, useLoaderData, LoaderFunctionArgs } from 'react-router-dom'

interface Ticket {
    title: string;
    user: string;
    location: string;
}

export default function TicketDetails() {
    useParams()
    const ticket = useLoaderData() as Ticket

    return (
        <div className="ticket-details">
            <h2>Ticket Details - {ticket.title}</h2>
            <p>User - {ticket.user}</p>
            <p>Located in - {ticket.location}</p>
            <div className="details">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus, similique non recusandae ducimus quaerat ipsum adipisci odit pariatur impedit 
                corporis assumenda dolore et doloremque temporibus delectus repellat amet? Facilis, quibusdam?
            </div>
        </div>
    )
}

export const ticketDetailsLoader = async ({ params }: LoaderFunctionArgs) => {

    const { id } = params as { id: string };
  
    const response = await fetch(`http://localhost:4000/tickets/` + id);
    return response.json();
}