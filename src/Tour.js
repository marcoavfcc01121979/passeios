import { useState } from "react"

const Tour = ({id, image, name, price, info, removeTour}) => {
    const [readMore, setReadMore] = useState(false);

    return(
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">R$ {price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0, 200)}...`}
                    <button onClick={() => setReadMore(!readMore)}>
                        {readMore ? 'mostrar menos' : 'leia mais'}
                    </button>
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>não interessante</button>
            </footer>
        </article>
    )
}

export { Tour }