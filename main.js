console.log(window.Redux);

const { createStore } = window.Redux
// SETUP Reduct Store
// state
// reducer
// store
const initialState = JSON.parse(localStorage.getItem('hobyList')) || [];

const hobbyReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            const newList = [...state];
            newList.push(action.payload);
            return newList;
        }
        default:
            return state;
    }
}

const store = createStore(hobbyReducer);

// RENDER REDUX HOBBY LIST
const renderHobbList = (hobbyList) => {
    if (!Array.isArray(hobbyList) || hobbyList.length === 0) return;

    const ulElement = document.querySelector('#hobbyList');
    if (!ulElement) return;
    // reset previous content of ul 
    ulElement.innerHTML = '';

    for (const hobby of hobbyList) {
        const liElement = document.createElement('li');
        liElement.textContent = hobby;

        ulElement.appendChild(liElement);
    }
}

// RENDER INITIAL HOBBY LIST
const inittialHobbyList = store.getState();
console.log(inittialHobbyList);
renderHobbList(inittialHobbyList);


// HANDLE FROM SUMIT 

const hobyyFormElement = document.querySelector('#hobbyFormId');
if (hobyyFormElement) {
    const handleFormSubmit = (e) => {
        // prevent browser from reloading
        e.preventDefault();

        const hobbyTextElenment = document.querySelector('#hobbyTextId');
        if (!hobbyTextElenment) return;
        console.log('submit', hobbyTextElenment.value);
        const action = {
            type: 'ADD_HOBBY',
            payload: hobbyTextElenment.value
        };
        store.dispatch(action);

        // reset form
        hobyyFormElement.reset();
    };
    hobyyFormElement.addEventListener('submit', handleFormSubmit);
}

store.subscribe(() => {
    console.log('State UPDATE:', store.getState());
    const newHobbyList = store.getState();
    renderHobbList(newHobbyList);


    localStorage.setItem('hobyList', JSON.stringify(newHobbyList));
})
