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
                        <p>Welcome to BladeX</p>
                        <p>Manage your Collection</p>
                    </div>
                </div>
            </div>
        </KnifeBackgroundStyling>
    )
}

const KnifeBackgroundStyling = styled.div`

`

export default KnifeBackground;
