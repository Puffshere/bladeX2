import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function AddKnifeModal() {

    const [knives, setKnives] = useState([]);
    const [noKnives, setNoKnives] = useState('');

    const [state, setState] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        brand: '',
        model: '',
        price: 0,
        steel: '',
        handleMaterial: '',
        bladeShape: '',
    })

    useEffect(() => {
        const knivesRequest = {
            userId: '5f00047d255f07054cd8653e'
        }
        axios.post('https://bladexapp.herokuapp.com/api/getKnives', knivesRequest).then(res => {
            if (res.data.knives.length < 0) {
                setNoKnives('You need to go buy some knives.');
            }
            setKnives(res.data.knives);
        })
    })

    const handleSubmit = () => {
        axios
            .post('/api/adduser', state)
            .then(res => {
                console.log('successfully added new user!')
            })
            .catch(err => console.log(err, 'failed to add new user'));
    }

    const onChange = e => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    };

    const MyKnives = () => {
        if (knives.length > 0) {
            return (
                <div>
                    <h1>My Knives</h1>
                    {knives.map(knife => {
                        return (
                            <div>
                                <p>{knife.brand}</p>
                                <p>{knife.model}</p>
                                <p>{knife.price}</p>
                                <p>{knife.steel}</p>
                                <p>{knife.handleMaterial}</p>
                                <p>{knife.bladeShape}</p>
                            </div>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <h4>Loading...</h4>
            )
        }
    }

    return (
        <>
            <Wrapper>
                <Title>Add a Blade!</Title>
                {/* {!noKnives && <MyKnives />} */}
                {noKnives && <h3>{noKnives}</h3>}
                <input placeholder='firstname' name='firstname' onChange={(e) => onChange(e)} />
                <input placeholder='lastname' name='lastname' onChange={(e) => onChange(e)} />
                <input placeholder='email' name='email' onChange={(e) => onChange(e)} />
                <input placeholder='password' name='password' type='password' onChange={(e) => onChange(e)} />
                <input placeholder='brand' name='brand' onChange={(e) => onChange(e)} />
                <input placeholder='model' name='model' onChange={(e) => onChange(e)} />
                <input placeholder='price' name='price' onChange={(e) => onChange(e)} />
                <input placeholder='steel' name='steel' onChange={(e) => onChange(e)} />
                <input placeholder='handle material' name='handleMaterial' onChange={(e) => onChange(e)} />
                <input placeholder='blade shape' name='bladeShape' onChange={(e) => onChange(e)} />
                <BTN onClick={() => handleSubmit()}>Submit</BTN>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </Wrapper>
        </>
    )

}

const Title = styled.div`
    color: maroon;
    text-shadow: 1px 1px 1px grey;
    text-align: center;
    padding: 20px 0px 20px 0px;
    font-size: 30px;
`

const BTN = styled.button`
    text-shadow: 1px 1px 1px grey;
    background-color: maroon;
    margin-top: 20px;
    color: whitesmoke;
    float: right;
    margin-bottom: 20px;
    margin-right: 20px;
 &:hover {
    background-color: #620000;
    cursor: pointer
  }
 &:focus {
    background-color: #3d0000;
    cursor: pointer
  }
    
`

const Wrapper = styled.div`
    input {
        display: block;
        margin: 5px auto;
    }
    display: block;
    width: 300px;
    margin: 0 auto;
    box-shadow: 0 0 5px gray;
    border-radius: 8px;
    margin-top: 20px;
`

export default AddKnifeModal;