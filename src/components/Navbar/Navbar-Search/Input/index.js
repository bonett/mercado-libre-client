/* eslint-disable react/default-props-match-prop-types */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const InputSearchComponent = ({ handleInputSearch, searchValue }) => {
    const search = require('../../../../assets/img/ic_Search@2x.png.png.png');
    return (
        <div className="form-control">
            <input
                type="search"
                className="form-control_input"
                placeholder="Nunca dejes de buscar"
                maxLength="120"
                autoComplete="off"
                onChange={handleInputSearch}
                defaultValue={searchValue}
            />
            <button type="submit" className="form-control_btn">
                <img className="icon" src={search} alt="search" />
            </button>
        </div>
    );
};

InputSearchComponent.propTypes = {
    handleInputSearch: PropTypes.func.isRequired
};

InputSearchComponent.defaultProps = {
    searchValue: PropTypes.string
};

export default InputSearchComponent;
