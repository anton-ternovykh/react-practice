import {ContactRow} from "./ContactRow.tsx";
import {ContactModel} from "./Models.ts";

interface ContactBookProps {
    contacts: ContactModel[];
    onEditClick: (contact: ContactModel) => void;
    onDeleteClick: (contact: ContactModel) => void;
}

export const ContactBook = (props: ContactBookProps) => {
    return (
        <>
            <table className="table table-striped table-bordered">
                <thead>
                <tr>
                    <th width={400}>Name</th>
                    <th>City</th>
                    <th width={200}></th>
                </tr>
                </thead>
                <tbody>
                {props.contacts.map((contact) =>
                    <ContactRow
                        key={contact.id}
                        contact={contact}
                        onEditClick={props.onEditClick}
                        onDeleteClick={props.onDeleteClick}
                    />)}
                </tbody>
            </table>
        </>
    )
}