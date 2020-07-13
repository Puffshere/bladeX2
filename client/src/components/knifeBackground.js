import React, { } from 'react';
import styled from 'styled-components';
import SignIn from './signIn';

const KnifeBackground = () => {
    return (
        <KnifeBackgroundStyling>
            <div className="">
                <div className="heroImage">
                        <SignIn />
                    <div className="heroText">
                        <h1>Welcome to BladeX</h1>
                        <h3>Mangage your Collection</h3>
                    </div>
                </div>
            </div>
        </KnifeBackgroundStyling>
    )
}

const KnifeBackgroundStyling = styled.div`

`

export default KnifeBackground;