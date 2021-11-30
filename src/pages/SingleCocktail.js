import React from 'react'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
    const { id } = useParams()
    const [cocktail, setCocktail] = React.useState(null)

    React.useEffect(() => {
        async function getCocktail() {
            try {
                const response = await fetch(
                    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
                )
                const data = await response.json()
                if (data.drinks) {
                    const {
                        strDrink: name,
                        strDrinkThumb: image,
                        strAlcoholic: info,
                        strCategory: category,
                        strGlass: glass,
                        strInstructions: instructions,
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    } = data.drinks[0]
                    const ingredients = [
                        strIngredient1,
                        strIngredient2,
                        strIngredient3,
                        strIngredient4,
                        strIngredient5,
                    ]
                    const newCocktail = {
                        name,
                        image,
                        info,
                        category,
                        glass,
                        instructions,
                        ingredients,
                    }
                    setCocktail(newCocktail)
                } else {
                    setCocktail(null)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getCocktail()
    }, [id])
    if (!cocktail) {
        return <h2 className='section-title'>:( nie ma tego drinka</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail
        return (
            <section className='section cocktail-section'>
                <Link to='/' className='btn btn-primary'>
                    powró<span className="letterOut">t</span>
                </Link>
                <h2 className='section-title'>{name}</h2>
                <div className='drink'>
                    <img src={image} alt={name}></img>
                    <div className='drink-info'>
                        <p>
                            <span className='drink-data'>nazwa:</span> {name}
                        </p>
                        <p>
                            <span className='drink-data'>Kategoria:</span> {category}
                        </p>
                        <p>
                            <span className='drink-data'>info:</span> {info}
                        </p>
                        <p>
                            <span className='drink-data'>szkło:</span> {glass}
                        </p>
                        <p>
                            <span className='drink-data'>instrukcja:</span> {instructions}
                        </p>
                        <p>
                            <span className='drink-data'>składniki:</span>
                            {ingredients.map((item, index) => {
                                return item ? <span key={index}> {item}</span> : null
                            })}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}