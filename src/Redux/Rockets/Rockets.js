import { Action } from "history";

export const FETCH_ROCKETS = 'space-travelers-hub/Rockets/FETCH_ROCKETS';
export const url = 'https://api.spacexdata.com/v3/rockets';
export const initialState = [];

//on fetched book 

const onSuccess = (rockets) => ({
    type: FETCH_ROCKETS,
    playload: rockets
})

//Fetched rocket action

const fetchRocketsAction = () => async (dispatch) =>{
    const response = await fetch(url);
    const rocketsData = await response.json();
    const fetchedRockets = rocketsData.map((rocket) => ({
        id: rocket[0],
        rocket_name: rocket[0].rocket_name,
        description: rocket[0].flickr_images
    }))
    dispatch(onSuccess(fetchedRockets));
}

const rocketsReducer = (state = initialState, action) => {
    
}

export default fetchRocketsAction;