import {useRef, useState} from "react";
import "./BuyerForm.css";

interface Buyer {
    id: number;
    firstName: string;
    surname: string;
    address: string;
    postcode: string;
    phone: string;
}

interface BuyerFormProps {

    addHandler: (buyer: Buyer) => void;

}

const BuyerForm = (props: BuyerFormProps) => {
    const addHandler = props.addHandler;

    const firstNameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const postcodeRef = useRef<HTMLInputElement>(null);

    const [firstNameError, setFirstNameError] = useState(false);
    const [surnameError, setSurnameError] = useState(false);
    const [addressError, setAddressError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);
    const [postcodeError, setPostcodeError] = useState(false);

    const clearForm = () => {
        if (firstNameRef.current) firstNameRef.current.value = "";
        if (surnameRef.current) surnameRef.current.value = "";
        if (addressRef.current) addressRef.current.value = "";
        if (postcodeRef.current) postcodeRef.current.value = "";
        if (phoneRef.current) phoneRef.current.value = "";
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent event from bubbling up, we will handle it here
        e.preventDefault();

        setFirstNameError(!firstNameRef.current?.value);
        setSurnameError(!surnameRef.current?.value);
        setAddressError(!addressRef.current?.value);
        setPhoneError(!phoneRef.current?.value);
        setPostcodeError(!postcodeRef.current?.value);

        if (firstNameRef.current?.value && surnameRef.current?.value && addressRef.current?.value && phoneRef.current?.value && postcodeRef.current?.value) {
            addHandler({
                            "id": Date.now(), // or any other logic to generate a unique id
                            "firstName": firstNameRef.current.value,
                            "surname": surnameRef.current.value,
                            "address": addressRef.current.value,
                            "postcode": postcodeRef.current.value,
                            "phone": phoneRef.current.value,
                        });
            clearForm();
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="buyerFirstName">First Name</label>
                    <input type="text" className="form-control" id="buyerFirstName" ref={firstNameRef}/>
                    {firstNameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>First Name cannot
                            be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="buyerSurname">Surname</label>
                    <input type="text" className="form-control" id="buyerSurname" ref={surnameRef}/>
                    {surnameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Surname cannot be
                            blank</div> : ""}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="buyerAddress">Address</label>
                <input type="text" className="form-control" id="buyerAddress" ref={addressRef}/>
                {addressError ?
                    <div className="text-danger"><i className="bi bi-exclamation-circle"/>Address cannot be
                        blank</div> : ""}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="buyerPostcode">Postcode</label>
                    <input type="text" className="form-control" id="buyerPostcode" ref={postcodeRef}/>
                    {postcodeError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>
                            Postcode cannot be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="buyerPhone">Phone</label>
                    <input type="text" className="form-control" id="buyerPhone" ref={phoneRef}/>
                    {phoneError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Phone cannot be blank
                        </div> : ""}
                </div>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary"><i
                    className="bi bi-person-add"/>&nbsp;Add New Buyer
                </button>
            </div>
        </form>
    );
};
export default BuyerForm;