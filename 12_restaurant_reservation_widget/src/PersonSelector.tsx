import classNames from "classnames";

interface PersonSelectorProps {
    personCount: number;
    selected: boolean;
    onClick: () => void
}

export const PersonSelector = (props: PersonSelectorProps) => {

    const className = classNames(
        {
            numberOfPersons__selector: true,
            selected: props.selected,
        }
    )

    return <li onClick={props.onClick} className={className}>{props.personCount}</li>
}