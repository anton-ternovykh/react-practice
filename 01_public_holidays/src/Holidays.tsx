import {Holiday} from "./models";
import {HolidayComp} from "./HolidayComp.tsx";

export const Holidays = ({holidays}: { holidays: Holiday[] }) => {

    if (holidays.length === 0) {
        return null
    } else
        return (
            <>
                <table className='table table-striped'>
                    <thead>
                    <tr>
                        <td>Name</td>
                        <td>Start</td>
                        <td>End</td>
                        <td>Type</td>
                        <td>Nationwide</td>
                    </tr>
                    </thead>
                    <tbody>
                    {holidays.map((holiday) => <HolidayComp key={holiday.id} holiday={holiday}/>)}
                    </tbody>
                </table>
            </>
        )
}