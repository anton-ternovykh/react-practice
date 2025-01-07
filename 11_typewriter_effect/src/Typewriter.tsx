import {useEffect, useState} from "react";

interface TypewriterProps {
    text: string;
    delay: number;
}

export const Typewriter = (props: TypewriterProps) => {

    const [result, setResult] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(0);
        setResult('');
    }, [props.text]);

    useEffect(() => {
        if (!props.text)
            return;

        const tick = () => {
            setResult((prev) => prev + props.text[index]);
            setIndex(prev => prev + 1);
        }

        if (index <= props.text.length - 1) {
            setTimeout(() => {
                tick();
            }, props.delay);
        }

    }, [props.text, index, props.delay]);

    return result && (<p>You wrote {result}</p>)
}