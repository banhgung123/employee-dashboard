import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Biography.propTypes = {
    
};

const BiographyStyled = styled.div`
    span {
        display: block;
        margin-bottom: 1.2rem;
        font-size: 1.8rem;
    }

    p {
        font-size: 1.3rem;
        font-weight: 300;
        line-height: 1.8rem;
        height: 18rem;
        overflow: auto;
    }

    background-color: #403b3b;
    padding: 1.2rem;
    color: #fff;
    width: 70%;
    max-width: 100%;
    border-radius: 0.3rem;
`;

function Biography({biography}) {
    return (
        <BiographyStyled>
            <span>Biography</span>
            <p>{biography}</p>
        </BiographyStyled>
    );
}

export default Biography;