import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

Popularity.propTypes = {
    
};

const PopularityStyled = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 4rem 0;
    width: 70%;

    .form-label {
        flex: 0 1 20%;
        color: #fff;
        font-size: 1.8rem;
    }

    .form-range {
        flex: 0 1 80%;
        margin-left: 1rem;
    }

    input[type=range]::-webkit-slider-runnable-track {
        width: 100%;
        height: 0.1rem;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #000;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #000;
    }

    input[type=range]::-moz-range-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
        background: #000;
        border-radius: 1.3px;
        border: 0.2px solid #010101;
    }

    input[type=range]::-ms-track {
        width: 100%;
        height: 8.4px;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        border-width: 16px 0;
        color: transparent;
    }

    input[type=range]::-ms-fill-lower {
        background: #000;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }

    input[type=range]:focus::-ms-fill-lower {
        background: #000;
    }

    input[type=range]::-ms-fill-upper {
        background: #000;
        border: 0.2px solid #010101;
        border-radius: 2.6px;
        box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
    }

    input[type=range]:focus::-ms-fill-upper {
        background: #000;
    }

    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        background: #ffffff;
        cursor: pointer;
    }

    /* All the same stuff for Firefox */
    input[type=range]::-moz-range-thumb {
        background: #ffffff;
        cursor: pointer;
    }

    /* All the same stuff for IE */
    input[type=range]::-ms-thumb {
        background: #ffffff;
        cursor: pointer;
    }
`;


function Popularity({name, size, onChangeFontSize}) {

    return (
        <PopularityStyled>
            <Form.Label>Popularity</Form.Label>
            <Form.Range
                value={size}
                onChange={(val) => {
                    onChangeFontSize({size: val.target.value, name});
                }}
            />
        </PopularityStyled>
    );
}

export default Popularity;