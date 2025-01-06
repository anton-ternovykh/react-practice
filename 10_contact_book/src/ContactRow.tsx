import {ContactModel} from "./Models.ts";

interface ContactRowProps {
    contact: ContactModel;
    onEditClick: (contact: ContactModel) => void;
    onDeleteClick: (contact: ContactModel) => void;
}

export const ContactRow = (props: ContactRowProps) => {
    return (
        <tr>
            <td>{props.contact.name}</td>
            <td>{props.contact.city}</td>
            <td className="text-center">
                <div className="btn-group">
                    <button className="btn btn-primary"
                            onClick={() => props.onEditClick(props.contact)}
                    >
                        Edit
                    </button>
                    <button className="btn btn-danger"
                            onClick={() => props.onDeleteClick(props.contact)}>
                        Delete
                    </button>
                </div>
            </td>
        </tr>
    )
}