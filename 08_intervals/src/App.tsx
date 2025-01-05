import {useRef, useState} from 'react'
import './App.css'

function App() {

    const defaultTimeValue = 5 * 60 * 1000;
    const [timerValue, setTimerValue] = useState(0);
    const intervalEnabled = useRef<boolean>(false);

    const handleStartClick = () => {
        if (intervalEnabled.current)
            return;
        intervalEnabled.current = true;

        const startTime = Date.now();

        const tick = (startTime: number) => {
            if (!intervalEnabled.current)
                return;
            setTimerValue(Date.now() - startTime);
            if (startTime + defaultTimeValue <= Date.now()) {
                return;
            }
            setTimeout(() => {
                tick(startTime);
            }, 10);
        }
        tick(startTime);
    }

    const handleStopClick = () => {
        intervalEnabled.current = false;
    }

    const handleResetClick = () => {
        setTimerValue(defaultTimeValue);
    }

    const deltaTime = defaultTimeValue - timerValue;

    const seconds = Math.floor(deltaTime / 1000);
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
                                disabled={intervalEnabled.current}
                                onClick={handleStartClick}>
                            Start
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary"
                            disabled={!intervalEnabled.current}
                            onClick={handleStopClick}>
                            Stop
                        </button>
                        <button type="button" className="btn btn-primary" onClick={handleResetClick}>Reset</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
