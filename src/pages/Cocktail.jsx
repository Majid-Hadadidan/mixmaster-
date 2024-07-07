import { useLoaderData, Navigate } from "react-router";
import axios from "axios";
import Wrapper from "../assets/Wrapper/CocktailPage";
import { Link } from "react-router-dom";

const singleCocktailUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export default function Cocktail() {
  const { id, data } = useLoaderData();

  if (!data) return <Navigate to="/" />;

  const singleDrink = data.drinks[0];

  // pull out ingredient value if they existed in drinks[0]
  const validIngredients = Object.keys(singleDrink)
    .filter(
      (key) => key.startsWith("strIngredient") && singleDrink[key] !== null
    )
    .map((key) => singleDrink[key]);
  //pull out some key in data
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = singleDrink;

  //JSX
  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          Home page
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span>
            {name}
          </p>
          <p>
            <span className="drink-data">category :</span>
            {category}
          </p>
          <p>
            <span className="drink-data">info :</span>
            {info}
          </p>
          <p>
            <span className="drink-data">glass :</span>
            {glass}
          </p>
          {/* display ingrediens with used of validIngrediens */}
          <p>
            <span className="drink-data">ingrediens :</span>
            {validIngredients.map((item, index) => {
              return (
                <span className="ing" key={index}>
                  {item}
                  {index < validIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructions :</span>
            {instructions}
          </p>
        </div>
      </div>
    </Wrapper>
  );
}

//loader function for every id in Cocktailpage/:id
export async function loader({ params }) {
  const id = params.id;
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  return { id, data };
}
