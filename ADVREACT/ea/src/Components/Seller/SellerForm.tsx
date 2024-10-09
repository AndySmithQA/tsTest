import {useRef, useState} from "react";
import "./SellerForm.css";

interface SellerFormProps {
    addHandler: (seller: {
        id: number;
        firstName: string;
        surname: string;
        address: string;
        postcode: string;
        phone: string;
    }) => void;
}

const SellerForm = (props: SellerFormProps) => {
    const addHandler = props.addHandler;

    const firstNameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const addressRef = useRef<HTMLInputElement>(null);
    const phoneRef = useRef<HTMLInputElement>(null);
    const postcodeRef = useRef<HTMLInputElement>(null);

    const [firstNameError, setFirstNameError] = useState<boolean>(false);
    const [surnameError, setSurnameError] = useState<boolean>(false);
    const [addressError, setAddressError] = useState<boolean>(false);
    const [phoneError, setPhoneError] = useState<boolean>(false);
    const [postcodeError, setPostcodeError] = useState<boolean>(false);

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

        if (firstNameRef.current?.value && 
            surnameRef.current?.value && 
            addressRef.current?.value && 
            phoneRef.current?.value && 
            postcodeRef.current?.value) {
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
                    <label htmlFor="sellerFirstName">First Name</label>
                    <input type="text" className="form-control" id="sellerFirstName" ref={firstNameRef}/>
                    {firstNameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>First Name cannot
                            be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="sellerSurname">Surname</label>
                    <input type="text" className="form-control" id="sellerSurname" ref={surnameRef}/>
                    {surnameError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Surname cannot be
                            blank</div> : ""}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="sellerAddress">Address</label>
                <input type="text" className="form-control" id="sellerAddress" ref={addressRef}/>
                {addressError ?
                    <div className="text-danger"><i className="bi bi-exclamation-circle"/>Address cannot be
                        blank</div> : ""}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="sellerPostcode">Postcode</label>
                    <input type="text" className="form-control" id="sellerPostcode" ref={postcodeRef}/>
                    {postcodeError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>
                            Postcode cannot be blank</div> : ""}
                </div>
                <div className="form-group col-md-6">
                    <label htmlFor="sellerPhone">Phone</label>
                    <input type="text" className="form-control" id="sellerPhone" ref={phoneRef}/>
                    {phoneError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"/>Phone cannot be blank
                        </div> : ""}
                </div>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary"><i
                    className="bi bi-person-add"/>&nbsp;Add New Seller
                </button>
            </div>
        </form>
    );
};
export default SellerForm;