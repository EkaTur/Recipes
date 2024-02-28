import { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import Video from './Assets/food.mp4';
import SearchPic from './Assets/search.png';
import MyRecipesComponent from './MyRecipesComponent';
import gsap from "gsap";

function App() {

  const MY_ID = '45ddce74';
  const MY_KEY = '61173213d8e757ff7e1800399f9f8b23';

  const [mySearch, setMySearch] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [wordSubmitted, setWordSubmitted] = useState('salmon');

  useLayoutEffect(() => {
    gsap.fromTo('.el-1', {y: -50, opacity: 0}, {y: 0, opacity: 1, duration: 3})
  }, [])

  useEffect(() => {
    const getRecipe = async () => {
      const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
      const data = await response.json();
      setMyRecipes(data.hits);
    }
    getRecipe();
  }, [wordSubmitted]);

  useEffect(() => {
    if (myRecipes.length > 0) {
      gsap.fromTo('.label', { opacity: 0 }, { opacity: 1, duration: 2 });
      gsap.fromTo('.RecipePic', { opacity: 0 }, { opacity: 1, duration: 2 });
      gsap.fromTo('.CaloriesPar', { opacity: 0 }, { opacity: 1 });
      gsap.fromTo('.DietLabelsPar', { opacity: 0 }, { opacity: 1 });
      gsap.fromTo('.ingredientsBox', { y: 50, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 });
    }
  }, [myRecipes]);

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const finalSearch = (e) => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  return (
    <div>
      <div>
<<<<<<< HEAD
        <video autoPlay muted loop>
=======
        <video loop muted autoplay playsinline>
>>>>>>> d8122c1402cfc478da3966ac661cb925fc56493f
          <source src={Video} type="video/mp4" />
        </video>
      </div>

      <div className='container'>
        <form onSubmit={finalSearch}>
          <input className='el-1' placeholder='Type here to search ...' onChange={myRecipeSearch} value={mySearch} />
        </form>
      </div>

      <div className='container'>
        <button onClick={finalSearch} className='btn'>
          <img src={SearchPic} alt='searchPic' width='60px' />
        </button>
      </div>
      
      {myRecipes.map((element, index) => (
        <MyRecipesComponent key={index}
          label={element.recipe.label}
          image={element.recipe.image}
          calories={element.recipe.calories}
          ingredients={element.recipe.ingredientLines}
          dietLabels={element.recipe.dietLabels}
        />
      ))}
      

    </div>
  );
}




export default App;
