import {Country} from "./models";
import {ChangeEvent, useEffect, useState} from "react";
import API from "./services/api.ts";

export const CountrySelector = ({onCountrySelect}: { onCountrySelect: (country: Country) => void }) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        async function fetchData() {
            const countries = await API.getCountries();
            setCountries(countries);
        }

        fetchData();
    }, []);

    const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        onCountrySelect(countries.find((country) => country.isoCode === event.target.value)!);
    }

    return (
        <select className='form-control' onChange={selectHandler}>
            {countries.map(country => <option key={country.isoCode}
                                              value={country.isoCode}>{country.name[0].text}</option>)}
        </select>
    )
}