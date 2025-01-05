import {useState} from 'react'
import './App.css'
import {useInterval} from "./UseInterval.tsx";

const App = () => {

    const defaultTimeValue = 5 * 60;
    const [enabled, setEnabled] = useState<boolean>(false);
    const [timer, setTimer] = useState(defaultTimeValue);

    useInterval(() => {
        if (!enabled) {
            return;
        }
        if (timer > 0)
            setTimer(timer - 1);
    }, 1000)

    const seconds = Math.floor(timer);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);

    const secondsToShow = (seconds % 60).toString().padStart(2, '0');
    const minutesToShow = (minutes % 60).toString().padStart(2, '0');
    const hoursToShow = (hours % 60).toString().padStart(2, '0');

    return (
        <>
            <div className="row mb-3">
                <div className="col">
                    <div className="timer">
                        {hoursToShow}:{minutesToShow}:{secondsToShow}
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button"
                                className="btn btn-primary"
                                disabled={enabled}
                                onClick={() => setEnabled(true)}>
                            Start
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={!enabled}
                            onClick={() => setEnabled(false)}>
                            Stop
                        </button>
                        <button type="button" className="btn btn-primary"
                                onClick={() => setTimer(defaultTimeValue)}>Reset
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
