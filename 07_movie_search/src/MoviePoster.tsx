export const MoviePoster = ({poster_path}: { poster_path: string }) => {
    if (!poster_path)
        return null;

    const posterPath = `https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}`;

    return (
        <div className="poster-container">
            <img src={posterPath} alt='Movie poster'/>
        </div>
    )
}