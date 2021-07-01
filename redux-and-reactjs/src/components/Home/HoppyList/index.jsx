import React from 'react'
import PropTypes from 'prop-types';
import './HobbyList.css';
HobbyList.prototype = {
    hobbyList: PropTypes.array,
    activeId: PropTypes.number,
    onhobbyClick: PropTypes.func,
};

HobbyList.defaultProps = {
    hobbyList: [],
    activeId: null,
    onhobbyClick: null,

};

function HobbyList(props) {
    const { hobbyList, activeId, onhobbyClick } = props;

    const handleClick = (hobby) => {
        if (onhobbyClick) {
            onhobbyClick(hobby);
        }
    }

    return (
        <ul className='hobby-list'>
            {
                hobbyList.map((hobby, index) => (
                    <li
                        key={index}
                        className={hobby.id === activeId ? 'active' : ''}
                        onClick={() => handleClick(hobby)}
                    >{hobby.title}</li>
                ))
            }
        </ul>
    );
}

export default HobbyList
