import React, {
  /* useCallback, */ useContext, useEffect, /* , useMemo, useState */
} from 'react';

import { useHistory, useParams } from 'react-router-dom';
// import clipboardCopy from 'clipboard-copy';
// import shareIcon from '../../images/shareIcon.svg';
// import blackHeart from '../../images/blackHeartIcon.svg';
// import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import {
  VideoEmbed,
  RecipeDetailsHeader,
  RecipeDetailsIngredients,
  RecipeDetailsInstructions,
  RecommendedRecipes,
} from '../../components';
import { RecipeContext, ResearchRecipesContext } from '../../context';

import './recipeDetails.css';

function RecipeDetails() {
  const { location: { pathname } } = useHistory();
  const { id } = useParams();
  const { handleGetRecipe, recipeDetail: { strYoutube } } = useContext(RecipeContext);
  const {
    handleGetRecipes: handleGetRecommendedRecipes,
  } = useContext(ResearchRecipesContext);

  useEffect(() => {
    const dataBase = pathname.split('/')[1];
    handleGetRecipe(dataBase, id);
    if (dataBase === 'meals') { handleGetRecommendedRecipes('drinks'); }
    if (dataBase === 'drinks') { handleGetRecommendedRecipes('meals'); }
  }, [pathname, id]);

  // const [copied, setCopied] = useState(false);
  // const [favorited, setFavorited] = useState(false);
  // const [fav, setFav] = useState([]);

  // const recommendMealsOrDrink = () => {
  //   if (drinkOrMeal.includes('drinks')) {
  //     return recommendMeals;
  //   }
  //   return recommendDrinks;
  // };

  // const mealWithoutEmptyValues = [];
  // const mealsDrink = () => {
  //   mealsOrDrink().forEach((recipe) => {
  //     const ingredients = Object.keys(recipe).filter((el) => el
  //       .includes('strIngredient')).map((el) => recipe[el]);
  //     const measures = Object.keys(recipe).filter((el) => el
  //       .includes('strMeasure')).map((el) => recipe[el]);
  //     mealWithoutEmptyValues.push(ingredients, measures);
  //     return mealWithoutEmptyValues;
  //   });
  // };
  // mealsDrink();

  // const handleClick = () => {
  //   if (!inProgressRecipes.length > 0) {
  //     history.push(`${drinkOrMeal}/in-progress`);
  //   }
  //   return null;
  // };

  // const newMeal = useMemo(() => ({
  //   id: mealDetail.length > 0 ? mealDetail[0].idMeal : null,
  //   type: 'meal',
  //   nationality: mealDetail.length > 0 ? mealDetail[0].strArea : null,
  //   category: mealDetail.length > 0 ? mealDetail[0].strCategory : null,
  //   alcoholicOrNot: '',
  //   name: mealDetail.length > 0 ? mealDetail[0].strMeal : null,
  //   image: mealDetail.length > 0 ? mealDetail[0].strMealThumb : null,
  // }), [mealDetail]);

  // const newDrink = useMemo(() => ({
  //   id: drinkDetail.length > 0 ? drinkDetail[0].idDrink : null,
  //   type: 'drink',
  //   nationality: '',
  //   category: drinkDetail.length > 0 ? drinkDetail[0].strCategory : null,
  //   alcoholicOrNot: drinkDetail.length > 0 ? drinkDetail[0].strAlcoholic : null,
  //   name: drinkDetail.length > 0 ? drinkDetail[0].strDrink : null,
  //   image: drinkDetail.length > 0 ? drinkDetail[0].strDrinkThumb : null,
  // }), [drinkDetail]);

  // const newDrinkOrMeal = useCallback(() => {
  //   if (drinkOrMeal.includes('drinks')) {
  //     return newDrink;
  //   }
  //   return newMeal;
  // }, [drinkOrMeal, newDrink, newMeal]);

  // const vitao = useCallback(() => {
  //   const bebidasSalvas = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  //   const index = bebidasSalvas.some((item) => item.id === id);
  //   setFav(bebidasSalvas);
  //   setFavorited(index);
  // }, [id]);

  // useEffect(() => {
  //   vitao();
  // }, [vitao]);

  // const salvarNoLocalStorage = useCallback(() => {
  //   // const bebidasSalvas = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
  //   if (favorited) {
  //     const updatedItens = fav
  //       .filter((item) => item.id !== id);
  //     localStorage.setItem('favoriteRecipes', JSON.stringify(updatedItens));
  //   } else {
  //     const filtroDrinkOrMeal = [...fav, newDrinkOrMeal()];
  //     localStorage.setItem('favoriteRecipes', JSON.stringify(filtroDrinkOrMeal));
  //   }
  //   setFavorited((prev) => !prev);
  // }, [favorited, newDrinkOrMeal, fav, id]);

  // const handleClickFavorite = () => {
  //   salvarNoLocalStorage();
  // };

  // const handleCopy = async () => {
  //   await clipboardCopy(window.location.href);
  //   setCopied(true);
  // };

  return (
    <div className="recipe-details-page">
      <RecipeDetailsHeader />
      <RecipeDetailsIngredients />
      <RecipeDetailsInstructions />
      {
        strYoutube ? <VideoEmbed /> : ''
      }
      <RecommendedRecipes />

      {/*

      <butdataton
        type="button"
        data-testid="share-btn"
        onClick={ handleCopy }
      >
        <img src={ shareIcon } alt="share" />
      </butdataton>

      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startRecipe"
        onClick={ handleClick }
      >
        {!inProgressRecipes.length ? 'Continue Recipe' : 'Start Recipes'}
      </button>
      <p>
        {copied
          && 'Link copied!'}
      </p> */}

    </div>
  );
}

export default RecipeDetails;
