import Wrapper from "../assets/Wrapper/CocktailList";
import CocktailCard from "./CocktailCard";

export default function CocktailList({ drinks }) {
  if (!drinks) {
    return (
      <h2 style={{ textAlign: "center" }}>No matcheing cokctails found...</h2>
    );
  }
  const formattedDrinks = drinks.map((item) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });

  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
      })}
    </Wrapper>
  );
}
