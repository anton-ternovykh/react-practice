import './App.css'
import {useState} from "react";
import {Dialog} from "./Dialog.tsx";
import {ReservationDetails} from "./ReservationDetails.tsx";


const App = () => {

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [reservation, setReservation] = useState<ReservationDetails>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleBookTableClick = () => {
        setIsDialogOpen(true);
    }

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    }

    const handleDialogBook = (personsCount: number, date: number) => {
        setReservation({
            date: date,
            personCount: personsCount,
            name: '',
            phoneNumber: '',
        })
        setIsDialogOpen(false);
    }

    const isReservationValid = (): boolean => {
        return !!reservation &&
            reservation.phoneNumber.length > 0 &&
            reservation.name.length > 0 &&
            reservation.personCount > 0 &&
            !!reservation.date;
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setReservation(prev => {
            prev.phoneNumber = phone;
            prev.name = name;

            setTimeout(() => {
                console.table(reservation);
            })
            return prev;
        })
    }

    return (
        <>
            <button onClick={handleBookTableClick}>Book a table</button>
            <Dialog isOpen={isDialogOpen}
                    onCancel={handleDialogClose}
                    onBook={handleDialogBook}></Dialog>
            {reservation &&
                <div className="row">
                    <div className="col-6 offset-3">
                        <div className="row">
                            <div className="col">
                                <p className="alert alert-info">You are making a reservation
                                    for {reservation.personCount} persons,
                                    on {(new Date(reservation.date)).toLocaleDateString()} at {(new Date(reservation.date)).toLocaleTimeString()}</p>
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label className="form-label">Name</label>
                                    <input className="form-control"
                                           placeholder="Your name"
                                           value={name}
                                           onChange={event => (setName(event.target.value))}
                                    />
                                </div>
                                <div className="col">
                                    <label className="form-label">Phone Number</label>
                                    <input className="form-control"
                                           value={phone}
                                           onChange={event => (setPhone(event.target.value))}
                                           placeholder="Your Phone Number"/>
                                </div>
                            </div>
                            <div className="row mt-3">
                                <button type="submit"
                                        className="btn btn-primary col">Reserve
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            }

        </>
    )
}

export default App
