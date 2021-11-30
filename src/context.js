import React, { useState, useContext, useEffect } from 'react'
import { useCallback } from 'react'

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    const [searchTerm, setSearchTerm] = useState('ou')
    const [cocktails, setCocktails] = useState([])

    const fetchDrinks = useCallback( async () => {
        try {
            const response = await fetch(`${url}${searchTerm}`)
            const data = await response.json()
            console.log(data);
            const { drinks } = data
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
        } catch (error) {
            console.log(error)
        }
    },[searchTerm])
    useEffect(() => {
        fetchDrinks()
    }, [searchTerm,fetchDrinks])
    return (
        <AppContext.Provider
            value={{ cocktails, searchTerm, setSearchTerm }}
        >
            {children}
        </AppContext.Provider>
    )
}
// make sure use
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }