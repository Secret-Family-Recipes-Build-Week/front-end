import React from 'react'
import { Route } from 'react-router-dom'
import './App.css';
import Recipes from './components/Recipes/Recipes'
import RecipeForm from './components/RecipeForm/RecipeForm'
import HomePage from './components/HomePage/HomePage'
import AddRecipe from './components/AddRecipe/AddRecipe'
import Nav from './components/Nav'
import SignUpForm from './components/SignUp/SignUpForm'
import LoginForm from './components/Login/LoginForm'

function App() {
  return (
    <div>
      <Nav />

      <Route exact path='/' render={(props) => (<HomePage />)} />
      <Route path='/add-a-recipe' render={(props) => (<AddRecipe />)} />
      <Route path='/sign-up' render={(props) => (<SignUpForm />)} />
      <Route path = '/log-in' render = {(props) => (<LoginForm/>)} />
    </div>
  );
}

export default App;
