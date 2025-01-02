import {useState} from "react";
import randomSortArray from "./RandomSortArray.tsx";
import IImage from "./IImage.tsx";
import Image from "./Image.tsx";

const MemoryGame = ({images}: { images: string[] }) => {

    const [game, setGame] = useState(() => {
        const gameData = [...images, ...images].map((image, i) => {
            return {index: i, src: image, flipped: true, locked: false};
        }).sort(() => Math.random() - 0.5);

        return randomSortArray(gameData);
    })

    const [clickCount, setClickCount] = useState(0);

    const gameIsDone = game.filter((image) => image.flipped).length === 0;

    const handleClick = (image: IImage) => {
        if (image.locked) {
            return;
        }

        if (!image.flipped) {
            return;
        }

        setClickCount(clickCount + 1);

        const images = [...game] as IImage[];

        const twinImage = images.find(i => i.src === image.src && i.index !== image.index)!;

        if (twinImage.flipped) {
            for (const i of images) {
                if (i.index === image.index) {
                    i.flipped = !i.flipped;
                } else if (!i.locked) {
                    i.flipped = true;
                }
            }
        } else {
            for (const i of images) {
                if (i.src === image.src) {
                    i.flipped = false;
                    i.locked = true;
                }
            }
        }

        setGame(images);
    }

    return (
        <>
            <h1>Memory Game</h1>
            <div className="row" style={{width: '500px', height: '375px'}}>
                {game.map((image) => <Image key={image.index}
                                            src={image.src}
                                            flipped={image.flipped}
                                            onClick={() => handleClick(image)}/>)}
            </div>
            {!gameIsDone ?
                (
                    <div className="row">
                        <div className="col">
                            <p>Clicks: {clickCount}</p>
                        </div>
                    </div>
                )
                :
                (
                    <div className="row">
                        <div className="col">
                            <p>You won! You've used {clickCount} clicks.</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default MemoryGame;