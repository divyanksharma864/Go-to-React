export default function Entry(props) {
    return (

        <article className="journal-entry">
            <div className="main-image-container">
                <img className="main-image" 
                src={props.entry.img.src}
                alt={props.entry.img.alt}
                />
            </div>
            <div className="info-container">
                <img className="marker" 
                    src="../Images/Marker.png" 
                    alt="Location Marker Icon" 
                />

                <span className="country" >{props.entry.country}</span>

                <a href={props.entry.googleMapsLink}> View on Google Maps </a>

                <h2 className="entry-title">{props.entry.title}</h2>

                <p className="trip-dates">{props.entry.dates}</p>

                <p className="entry-text">{props.entry.text}</p>
            </div>
        </article>
    )
}