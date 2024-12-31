import Item from "./models/item.ts";
import {AccordionItem} from "./AccordionItem.tsx";

const Accordion = ({items}: { items: Item[] }) => {
    return (
        <>
            {items.map((item: Item) => <AccordionItem key={item.id} item={item}/>)}
        </>
    )
}

export default Accordion;