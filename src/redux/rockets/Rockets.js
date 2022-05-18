import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchedRockets = createAsyncThunk(
  'sth/FETCHED_ROCKETS',
  async () => {
    const url = 'https://api.spacexdata.com/v3/rockets';
    const response = await fetch(url);
    const rocketsData = await response.json();
    const fetchedRockets = rocketsData.map((rocket) => ({
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_image: rocket.flickr_images[0],
      canceled: false,
    }));
    return fetchedRockets;
  },
);

export const rocketSlice = createSlice(
  {
    name: 'sth/Rockets',
    initialState: [],
    reducers: {
      updateRockets: (state, action) => state.map((rocket) => {
        if (rocket.id === action.payload) {
          return { ...rocket, canceled: !rocket.canceled };
        }
        return rocket;
      })
      ,
    },
    extraReducers: { [fetchedRockets.fulfilled]: (state, action) => action.payload },
  },
);
export const { updateRockets } = rocketSlice.actions;
export default rocketSlice.reducer;
