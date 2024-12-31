import {Holiday} from "./models";

export const HolidayComp = ({holiday}: { holiday: Holiday }) => {
    return (
        <tr>
            <td>{holiday.name[0].text}</td>
            <td>{holiday.startDate}</td>
            <td>{holiday.endDate}</td>
            <td>{holiday.type}</td>
            <td>{holiday.nationwide ? 'Yes' : ''}</td>
        </tr>
    )
}