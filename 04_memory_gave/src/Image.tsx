import classNames from "classnames";

const Image = ({src, flipped, onClick}: { src: string, flipped: boolean, onClick: () => void }) => {
    const imgClassName = classNames(
        {
            'image': true,
            'flipped': flipped
        }
    )

    const coverClassName = classNames(
        {
            'flipped-cover': true,
            'flipped': !flipped
        }
    )

    return (
        <div className="col-3">
            <div className='image-container'>
                <img src={src}
                     className={imgClassName}
                     onClick={onClick}
                />
                <div className={coverClassName}
                     onClick={onClick}>
                </div>
            </div>
        </div>
    )
}

export default Image;