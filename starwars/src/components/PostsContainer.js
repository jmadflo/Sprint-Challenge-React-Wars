import React from "react";
import Post from "./Post";
import styled from "styled-components"


const PostsContainer = ({data}) => {

    const Container = styled.div`
        margin: 20px 5%;
    `
  
    let posts = data.map((singleCharacter) => <Post postContent={singleCharacter} key={singleCharacter.name}/>)

    return (
        <Container>
            {posts}
        </Container>
    );
};

export default PostsContainer;
