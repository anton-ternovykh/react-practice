import {ChangeEvent} from "react";

interface DateSelectorProps {
    selectedDate: number;
    onChange: (date: Date) => void,
}

export const DateSelector = (props: DateSelectorProps) => {

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const date = e.currentTarget.value;
        props.onChange && props.onChange(date as Date);
    }

    return (
        <div className="row date-selector">
            <div className="col-4 offset-4">
                <label className="form-label">Date: </label>
                <input className="form-control" type="datetime-local" value={props.selectedDate}
                       onChange={handleDateChange}/>
            </div>
        </div>
    )
}