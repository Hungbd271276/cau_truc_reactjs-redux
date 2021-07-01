import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import HobbyList from '../components/Home/HoppyList';
// import casual from 'casual';
import { AddNewhobby, setActiveHobby } from '../actions/Hoppy';
Homepages.prototype = {

};

const RandomNumber = () => {
    return 1000 + Math.trunc((Math.random() * 9000))
}

function Homepages(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();

    console.log('hobby', hobbyList);

    const handleAddHobbyList = () => {
        // Random hobby object: id + title
        const newId = RandomNumber()
        const newhobby = {
            // id: casual.uuid,
            // title: casual.title,
            id: 1,
            title: `Hobby ${newId}`
        }
        // Dispatch action to add new hobby to redux store
        const action = AddNewhobby(newhobby);
        dispatch(action);
    }

    const handHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>Đây là redux-hook homepage</h1>
            <button onClick={handleAddHobbyList}>Random hobby</button>
            <HobbyList
                hobbyList={hobbyList}
                activeId={activeId}
                onhobbyClick={handHobbyClick}
            />
        </div>
    )
}

export default Homepages

