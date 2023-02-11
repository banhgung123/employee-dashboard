import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

Name.propTypes = {
    
};

const NameStyled = styled.div`
    text-align: center;
    padding: 1rem;
    cursor: pointer;
    font-size: ${props => props?.fontSize};

    ${props => props?.active === true && css`
        background-color: #928c8c;
    `};

    ${props => props?.choose === true && css`
        color: #2dabc8;
    `};
`;

function Name({name, active, fontSize, choose, onChooseEmployee}) {
    return (
        <NameStyled
            choose={choose} 
            active={active}
            fontSize={fontSize}
            onClick={onChooseEmployee}
        >
            {name}
        </NameStyled>
    );
}

export default Name;