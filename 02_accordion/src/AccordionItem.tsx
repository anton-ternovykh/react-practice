import Item from "./models/item.ts";
import {useState} from "react";
import classNames from "classnames";

export const AccordionItem = ({item}: { item: Item }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggle = () => setCollapsed(!collapsed);

    const toggleClassName = classNames({
        'accordion-item__toggle': true,
    })

    const contentClassName = classNames({
        'accordion-item__content': true,
        'collapsed': collapsed,
    })

    return (
        <div className="accordion-item">
            <div className="accordion-item__header">
                <div className="accordion-item__title">
                    {item.title}
                </div>
                {(collapsed) ?
                    <div className={toggleClassName} onClick={toggle}>+</div>
                    : <div className={toggleClassName} onClick={toggle}>-</div>
                }
            </div>
            <div className={contentClassName}>
                {item.content}
            </div>
        </div>
    )
}