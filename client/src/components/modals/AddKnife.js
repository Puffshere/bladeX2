import React, { useState } from 'react';
import styled from 'styled-components';

function AddKnifeModal(){

    const[state, setState] = useState({
        knife: ''
    })
        return(
            <Wrapper>
                <Title>I am the add knife modal</Title>
            </Wrapper>
        )

}

const Title = styled.h1`
    color: green;
`

const Wrapper = styled.div`
    display: block;
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 0 5px gray;
    border-radius: 8px;
`

export default AddKnifeModal;