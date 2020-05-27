import React from "react";
import CocktailList from "../components/CocktailList";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

export default function Random() {
  const [loading, setLoading] = React.useState(false);
  const [ count, setCount ] = React.useState(0)
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
         
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/random.php`
        );
        const data = await response.json();
        const { drinks } = data;
        if (drinks) {
          const newCocktails = drinks.map(item => {
            const {
              idDrink,
              strDrink,
              strDrinkThumb,
              strAlcoholic,
              strGlass
            } = item;

            return {
              id: idDrink,
              name: strDrink,
              image: strDrinkThumb,
              info: strAlcoholic,
              glass: strGlass
            };
          });
          setCocktails(newCocktails);
        } else {
          setCocktails([]);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }

    getDrinks();
  }, [count]);
  
  
  return (
    <main >
        <Hero>
       
        <Banner
      
          title="Great choices"
          subtitle="everytime for you"
          
        >
       
        
        </Banner>
      </Hero>
      <div className="section main-random">
      <Link  to="/random" onClick={() => setCount(count + 1)} className="btn btn-primary">
         shuffle the cocktails
        </Link>
      <CocktailList cocktails={cocktails} loading={loading} />
      </div>
    </main>
  );
}
