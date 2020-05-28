import React from 'react';
import PropTypes from 'prop-types';
import Star from './Star'
import shortid from 'shortid'
Stars.propTypes = {
    count: PropTypes.number
};

function Stars(props) {
    const { count } =props;
    return (
        <>
        { (typeof count === 'number') && (count<=5) && (count>=1) &&
        <ul className="card-body-stars u-clearfix">
           { [...Array(count)].map(item => <Star key={shortid.generate()}/>) }
        </ul>
        }
        </>
    );
}

Stars.defaultProps={
    count: 0
};

export default Stars;