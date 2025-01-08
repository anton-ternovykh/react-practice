import {useState} from "react";
import {PersonsSelector} from "./PersonsSelector.tsx";
import {DateSelector} from "./DateSelector.tsx";

interface DialogProps {
    isOpen: boolean;
    onCancel: () => void,
    onBook: (personNumber: number, date: number) => void,
}

export const Dialog = (props: DialogProps) => {
    if (!props.isOpen) {
        return;
    }

    const [personsCount, setPersonsCount] = useState(0);
    const [date, setDate] = useState<number>(Date.now());

    const handlePersonsSelect = (count?: number) => {
        setPersonsCount(count ?? 0)
    }

    const handleDateChange = (date: Date) => {
        setDate(date);
    }

    const handleCancelClick = () => {
        props.onCancel && props.onCancel();
    }

    const handleBookClick = () => {
        props.onBook && props.onBook(personsCount, date);
    }

    return (
        <div className="dialog-overlay">
            <div className="dialog-container">
                <div className="dialog-header">Book a Table</div>
                <div className="dialog-content">
                    <PersonsSelector onSelect={handlePersonsSelect}/>
                    <DateSelector onChange={handleDateChange} selectedDate={date}/>
                </div>
                <div className="dialog-footer">
                    <div className="row">
                        <div className="col-6 button-container">
                            <button className="btn btn-warning" onClick={handleCancelClick}>Cancel</button>
                        </div>
                        <div className="col-6 button-container">
                            <button className="btn btn-primary" onClick={handleBookClick}>Book</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}