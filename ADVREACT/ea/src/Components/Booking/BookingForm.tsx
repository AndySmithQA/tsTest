import {useRef} from "react";

// Define the Buyer interface
interface Buyer {
    id: number;
    firstName: string;
    surname: string;
    address: string;
}

// Define the Booking interface
interface Booking {
    id: number;
    date: string;
    buyerId: number;
}

interface BookingFormProps {
    addHandler: (buyerId: number, bookingDate: string) => void;
    bookings: Booking[];

    buyers: Buyer[];
    
}

const BookingForm = (props: BookingFormProps) => {
    const addHandler = props.addHandler;
    const buyers = props.buyers;

    const viewingDateRef = useRef<HTMLInputElement>(null);
    const timeslotRef = useRef<HTMLSelectElement>(null);
    const buyerRef = useRef<HTMLSelectElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (viewingDateRef.current && timeslotRef.current && buyerRef.current) {
            let viewingDate = new Date(viewingDateRef.current.value);
            viewingDate.setHours(Number(timeslotRef.current.value));
            addHandler(Number(buyerRef.current.value), viewingDate.toISOString());
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-md-6 form-group">
                    <label htmlFor="viewingDate">Date</label>
                    <input type="date" id="viewingDate" className="form-control" ref={viewingDateRef}
                           defaultValue={(new Date()).toISOString().substring(0, 10)}
                           min={(new Date()).toISOString().substring(0, 10)}/>
                </div>
                <div className="col-md-6 form-group">
                    <label htmlFor="timeSlot">Time Slot</label>
                    <select className="form-select" id="timeSlot" ref={timeslotRef}>
                        <option value="8">08:00</option>
                        <option value="9">09:00</option>
                        <option value="10">10:00</option>
                        <option value="11">11:00</option>
                        <option value="12">12:00</option>
                        <option value="13">13:00</option>
                        <option value="14">14:00</option>
                        <option value="15">15:00</option>
                        <option value="16">16:00</option>
                        <option value="17">17:00</option>
                    </select>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <label htmlFor="buyer">Buyer</label>
                    <select className="form-select" ref={buyerRef}>
                        {buyers.map(buyer => (
                            <option key={buyer.id} value={buyer.id}>
                                REF:{buyer.id} {buyer.firstName} {buyer.surname} (Address: {buyer.address})
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="text-end">
                <button className="btn btn-primary" type="submit">
                    <i className="bi bi-alarm-fill"/>&nbsp;Make Booking</button>
            </div>
        </form>
    );
};
export default BookingForm;