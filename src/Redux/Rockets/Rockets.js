import axios from "axios";

export const FETCH_ROCKETS = 'space-travelers-hub/Rockets/FETCH_ROCKETS';
export const url = 'https://api.spacexdata.com/v3/rockets';
export const initialState = [];

//Fetched rocket action

const fetchRocketsAction = () => async (dispatch)=>{
    const response = await axios.get(url);
    const fetchedRockets = Object.entries(response.data).map((item) => {
        const { id, rocket_name, description, flickr_images } = item[0]
    })
}
export default fetchRocketsAction;