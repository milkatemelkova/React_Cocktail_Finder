import React from "react";
import CocktailList from "../components/CocktailList";
import ToRandom from "../components/ToRandom";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";

export default function Home() {
  const [loading, setLoading] = React.useState(false);
  const [searchTerm, setSearchTerm] = React.useState("strawberry");
  const [cocktails, setCocktails] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getDrinks() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
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
  }, [searchTerm]);
  return (
    <main>
       <Hero>
        <Banner
          title="Try our shuffle"
          subtitle="find something new"
        >
          <Link to="/random" className="btn-primary">
            To random cocktals
          </Link>
        </Banner>
      </Hero>
      
      <SearchForm setSearchTerm={setSearchTerm}  />
      
       
      <CocktailList cocktails={cocktails} loading={loading} />
    </main>
  );
}
