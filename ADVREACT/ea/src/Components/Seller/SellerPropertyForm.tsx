import {useRef, useState} from "react";
import {useParams} from "react-router-dom";


interface SellerPropertyFormProps {
    addHandler: (property: any) => void;
}

const SellerPropertyForm = (props: SellerPropertyFormProps) => {
    const {sellerId} = useParams();
    const addHandler = props.addHandler;

    const addressRef = useRef<HTMLInputElement>(null);
    const postcodeRef = useRef<HTMLInputElement>(null);
    const typeRef = useRef<HTMLSelectElement>(null);
    const bedroomsRef = useRef<HTMLSelectElement>(null);
    const bathroomsRef = useRef<HTMLSelectElement>(null);
    const gardenRef = useRef<HTMLSelectElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);

    const [addressError, setAddressError] = useState<boolean>(false);
    const [postcodeError, setPostcodeError] = useState<boolean>(false);
    const [priceError, setPriceError] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setPriceError(!(priceRef.current && priceRef.current.value));
        setAddressError(!(addressRef.current && addressRef.current.value));
        setPostcodeError(!(postcodeRef.current && postcodeRef.current.value));

        if (priceRef.current && priceRef.current.value && addressRef.current && addressRef.current.value && postcodeRef.current && postcodeRef.current.value) {
            const newProperty = {
                "address": addressRef.current.value,
                "postcode": postcodeRef.current.value,
                "type": typeRef.current?.value,
                "price": Number(priceRef.current.value),
                "bedrooms": Number(bedroomsRef.current?.value),
                "bathrooms": Number(bathroomsRef.current?.value),
                "garden": gardenRef.current?.value,
                "sellerId": sellerId,
                "status": "FORSALE"
            };
            addHandler(newProperty);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col">
                    <label htmlFor="propertyType">Type</label>
                    <select className="form-select" ref={typeRef}>
                        <option value="DETACHED">Detached</option>
                        <option value="SEMI">Semi</option>
                        <option value="APARTMENT">Apartment</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="propertyPrice">Price</label>
                    <input type="text" className="form-control" id="propertyPrice" ref={priceRef}/>
                    {priceError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;Price cannot be
                            blank</div> : ""}
                </div>

                <div className="form-group col">
                    <label htmlFor="numberOfBedrooms">Bedrooms</label>
                    <select className="form-select" ref={bedroomsRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="numberOfBathrooms">Bathrooms</label>
                    <select className="form-select" ref={bathroomsRef}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div className="form-group col">
                    <label htmlFor="numberOfGardens">Garden</label>
                    <select className="form-select" ref={gardenRef}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="propertyAddress">Address</label>
                <input type="text" className="form-control" id="propertyAddress" ref={addressRef}/>
                {addressError ?
                    <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;Address cannot be
                        blank</div> : ""}
            </div>
            <div className="row">
                <div className="form-group col-md-6">
                    <label htmlFor="propertyPostcode">Postcode</label>
                    <input type="text" className="form-control" id="propertyPostcode" ref={postcodeRef}/>
                    {postcodeError ?
                        <div className="text-danger"><i className="bi bi-exclamation-circle"></i>&nbsp;
                            Postcode cannot be blank</div> : ""}
                </div>
            </div>
            <div className="text-end">
                <button type="submit" className="btn btn-primary">
                    <i className="bi bi-house-add"/>&nbsp;Add New Property
                </button>
            </div>
        </form>
    );
};

export default SellerPropertyForm;