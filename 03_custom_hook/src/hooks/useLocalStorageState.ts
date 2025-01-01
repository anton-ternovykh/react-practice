import {useState} from "react";

const useLocalStorageState = <T>(key: string, defaultState: T): [T, (data: T) => void] => {
    const [storageData, setStorageData] = useState<T>(() => {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : defaultState;
    });

    const setData = (data: T) => {
        localStorage.setItem(key, JSON.stringify(data))
        setStorageData(data);
    }

    return [storageData, setData];
}

export default useLocalStorageState;