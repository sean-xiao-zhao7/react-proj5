import { useRef } from "react";

const OrderForm = ({ onCancelHandler, submitOrderHandler }) => {
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        submitOrderHandler({
            name,
            street,
            postal,
            city,
        });
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="form-control">
                <label htmlFor="name">Your name</label>
                <input type="text" id="name" ref={nameRef} />
            </div>
            <div className="form-control">
                <label htmlFor="street">Street</label>
                <input type="text" id="street" ref={streetRef} />
            </div>
            <div className="form-control">
                <label htmlFor="postal">Postal code</label>
                <input type="text" id="postal" ref={postalRef} />
            </div>
            <div className="form-control">
                <label htmlFor="city">City</label>
                <input type="text" id="city" ref={cityRef} />
            </div>
            <button type="button" onClick={onCancelHandler}>
                Cancel
            </button>
            <button>Confirm</button>
        </form>
    );
};

export default OrderForm;
