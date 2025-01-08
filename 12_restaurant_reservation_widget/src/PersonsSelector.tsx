import {useState} from "react";
import {PersonSelector} from "./PersonSelector.tsx";

interface PersonsSelectorProps {
    onSelect: (count?: number) => void,
}

export const PersonsSelector = (props: PersonsSelectorProps) => {
    const maxNumberOfPersons = 10;
    const personSelectors = [];

    const [personsSelected, setPersonsSelected] = useState<number | null>(null);

    const handlePersonSelectorClick = (personsCount: number) => {
        setPersonsSelected(personsCount);
        props.onSelect && props.onSelect(personsCount);
    }

    for (let i = 1; i <= maxNumberOfPersons; i++) {
        personSelectors.push(<PersonSelector key={i}
                                             personCount={i}
                                             selected={personsSelected === i}
                                             onClick={() => handlePersonSelectorClick(i)}/>)
    }


    return (
        <div className="row">
            <div className="col-6 offset-3">
                <label className="form-label">Persons: </label>
                <div className="numberOfPersons">
                    <ul>
                        {personSelectors}
                    </ul>
                </div>
            </div>
        </div>
    )
}