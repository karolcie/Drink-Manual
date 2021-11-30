import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../context'

export default function CocktailList() {
    const { cocktails } = useGlobalContext()
    if (cocktails.length < 1) {
        return (
            <h2 className="section-title sorry" >
                Przepraszamy, ale nie mamy jeszcze tego drinka.
            </h2>
        )
    }
    return (
        <section className='section'>
            <h2 className='section-title'>Drinki</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}