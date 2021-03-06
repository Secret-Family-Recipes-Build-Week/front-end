import React from 'react'
import RecipeForm from '../RecipeForm/RecipeForm'
import styled from 'styled-components'

const AddRecipe = props => {


    return (
        <Wrapper>
            <Headline>Add Your Secret Family Recipe</Headline>
            <RecipeForm {...props} />
        </Wrapper>
        
    )
}

const Headline = styled.h1`
    font-size: 3.5rem;
    padding: 5rem 0 1rem;
    max-width: 45rem;
    text-align: center;
    line-height: 3rem;
    color: #fff;
    text-shadow: 2px 3px 3px rgba(0,0,0,0.3);
`

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
`

export default AddRecipe