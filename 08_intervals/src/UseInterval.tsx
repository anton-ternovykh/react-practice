import {useEffect, useRef} from "react";

export const useInterval = (callback: () => void, interval: number) => {
    const intervalCallback = useRef();

    useEffect(() => {
        intervalCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const tick = () => {
            intervalCallback.current();
        }

        if (interval !== null) {
            const id = setInterval(tick, interval);

            return () => clearInterval(id);
        }
    }, [interval])
}