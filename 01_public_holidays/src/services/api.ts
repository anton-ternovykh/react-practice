import {Country, Holiday} from "../models";

const getCountries = async () => {
    return await fetch('https://openholidaysapi.org/Countries')
        .then<Country[]>((res) => res.json());
}

const getHolidays = async (countryIsoCode: string) => {
    const year = 2024;
    const language = 'EN';
    const dateStart = new Date(year, 0, 1);
    const dateEnd = new Date(year + 1, 0, 0);
    const url = `https://openholidaysapi.org/PublicHolidays?countryIsoCode=${countryIsoCode}&validFrom=${dateStart.getFullYear()}-${dateStart.getMonth()+1}-${dateStart.getDate()}&validTo=${dateEnd.getFullYear()}-${dateEnd.getMonth()+1}-${dateEnd.getDate()}&languageIsoCode=${language}`;
    return await fetch(url)
        .then<Holiday[]>((res) => res.json());
}

export default {
    getCountries: getCountries,
    getHolidays: getHolidays,
}