import {useEffect, useState} from 'react'
import API from './services/api.ts'
import {Country, Holiday} from "./models";
import './App.css'
import {CountrySelector} from "./CountrySelector.tsx";
import {Holidays} from "./Holidays.tsx";

function App() {
    const [selectedCountry, setSelectedCountry] = useState<Country>();
    const [holidays, setHolidays] = useState<Holiday[]>([]);

    useEffect(() => {
        if (!selectedCountry)
            return;

        async function fetchData() {
            setHolidays([]);

            const holidays = await API.getHolidays(selectedCountry!.isoCode);
            setHolidays(holidays);
        }

        fetchData();
    }, [selectedCountry]);

    return (
        <>
            <CountrySelector onCountrySelect={setSelectedCountry}/>
            <Holidays holidays={holidays}/>
        </>
    )
}

export default App
