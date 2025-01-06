import {useEffect, useState} from "react";
import {ContactModel} from "./Models.ts";

interface ContactFormProps {
    contactToEdit?: ContactModel;
    onContactSaved: (contact: ContactModel) => void;
}

export const ContactForm = (props: ContactFormProps) => {

    const [id, setId] = useState<string | null>(null);
    const [name, setName] = useState<string>('');
    const [city, setCity] = useState<string>('');

    useEffect(() => {
        if (props.contactToEdit) {
            setId(props.contactToEdit.id);
            setName(props.contactToEdit.name);
            setCity(props.contactToEdit.city);
        }
    }, [props.contactToEdit]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !city) {
            return;
        }


        const contact = new ContactModel(name, city, id);
        if (props.onContactSaved)
            props.onContactSaved(contact);

        setId(null);
        setName('');
        setCity('');
    }

    const submitButtonLabel = id ? 'Save Contact' : 'Add Contact';

    return (
        <>
            <form onSubmit={handleSubmit} className="mb-2">
                <div className="row mb-2">
                    <div className="col">
                        <div className="row">
                            <div className="col-5">
                                <label htmlFor="name" className='form-label'>Name</label>
                                <input name="name"
                                       type="text"
                                       value={name}
                                       onChange={(e) => setName(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="col-5">
                                <label htmlFor="city" className='form-label'>City</label>
                                <input name="city"
                                       type="text"
                                       value={city}
                                       onChange={(e) => setCity(e.target.value)}
                                       className="form-control"/>
                            </div>
                            <div className="col-2 mt-4">
                                <button type='submit' className="btn btn-primary">{submitButtonLabel}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}