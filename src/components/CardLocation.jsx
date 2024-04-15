import { useEffect } from 'react'
import useFetch from '../hooks/useFetch'
import './style/CardLocation.css'

const CardLocation = ({ url }) => {

    const [resident, getResident, hasError, isLoading] = useFetch()

    useEffect(() => {
        getResident(url)
    }, [])

    return (
        <>
            {
                isLoading ?
                    <h2>Loading...</h2>
                    :
                    <article className='resident'>
                        <figure class="resident__img">
                            <img src={resident?.image} alt="resident photo" />
                            <figcaption className='resident__status'>
                                <div className={`resident__circle ${resident?.status}`}></div>
                                <span>{resident?.status}</span>
                            </figcaption>
                        </figure>
                        <h3 class="resident__name">{resident?.name}</h3>
                        <hr className='resident__line' />
                        <ul className='card__list'>
                            <li className='resident__item'>
                                <span>Specie</span>
                                <span>{resident?.species}</span>
                            </li>
                            <li className='resident__item'>
                                <span>Origin</span>
                                <span>{resident?.origin.name}</span>
                            </li>
                            <li className='resident__item'>
                                <span>Eppisodes where appear</span>
                                <span>{resident?.episode.length}</span>
                            </li>
                        </ul>
                    </article>
            }
        </>
    )
}

export default CardLocation