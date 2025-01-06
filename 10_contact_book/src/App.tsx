import './App.css'
import {useState} from "react";
import {ContactModel} from "./Models.ts";
import {ContactBook} from "./ContactBook.tsx";
import {ContactForm} from "./ContactForm.tsx";


const App = () => {

    const [contacts, setContacts] = useState<ContactModel[]>([]);
    const [contactToEdit, setContactToEdit] = useState<ContactModel>();


    const handleEditClick = (contact: ContactModel) => {
        setContactToEdit(contact);
    }

    const handleDeleteClick = (contact: ContactModel) => {
        if (confirm("Are you sure you want to delete this contact?")) {
            setContacts([...contacts.filter(c => c.id !== contact.id)]);
        }
    }

    const handleContactSaved = (contact: ContactModel) => {
        if (!contact)
            return;

        const existingContact = contacts.find(c => c.id === contact.id);

        if (existingContact) {
            const newContacts = [...contacts];
            for (const c of contacts) {
                if (c.id === contact.id) {
                    c.name = contact.name;
                    c.city = contact.city;
                }
            }
            setContacts(newContacts);
        } else {
            setContacts([...contacts, contact]);
        }
    }

    return (
        <>
            <div className="row">
                <div className="col">
                    <ContactForm onContactSaved={handleContactSaved} contactToEdit={contactToEdit}/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <ContactBook contacts={contacts}
                                 onEditClick={handleEditClick}
                                 onDeleteClick={handleDeleteClick}
                    />
                </div>
            </div>
        </>
    )
}

export default App
