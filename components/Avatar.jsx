import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

Avatar.propTypes = {
    
};

const AvatarStyled = styled.div`
    border-radius: 5px;
    width: ${props => props.size || '20rem'};
    height: ${props => props.size || '20rem'};
    
    img {
        width: ${props => props.size || '20rem'};
        height: ${props => props.size || '20rem'};
        border: 0.1rem solid #fff;
        border-radius: 0.3rem;
    }
`;

function Avatar({url, size}) {
    return (
        <AvatarStyled size={size}>
            <img src={url} alt={url}/>
        </AvatarStyled>
    );
}

export default Avatar;