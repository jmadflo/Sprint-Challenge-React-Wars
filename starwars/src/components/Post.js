// You will add code in this file
import React, { useState, useEffect }from "react";
import styled from 'styled-components'


// pass props in this file to
const Post = ({postContent}) => {

    const CharacterPost = styled.div`
        background-color: white;
        border: 3px solid #7F7FFF;
        font-family: 'Roboto', sans-serif;
        margin-bottom: 20px;
        padding: 10px;
    `
    const Characteristic = styled.li`
        text-align: left;
        margin-bottom: 10px;
    `
    
    const Name = styled.h2`
        text-decoration: underline;
        color: ${postContent.name === "Darth Vader" ? "red" : "blue"};
    `

    return (
        <CharacterPost>
            <Name>{postContent.name}</Name>
            
            <ul>
                <Characteristic>Height: {postContent.height}cm</Characteristic>
                <Characteristic>Weight: {postContent.mass}kg</Characteristic>
                <Characteristic>Birth Year: {postContent.birth_year}</Characteristic>
                
            </ul>
        
        
        </CharacterPost>
    );
};

export default Post;