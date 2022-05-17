import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://api.spacexdata.com/v3/missions';

export const fetchMissions = createAsyncThunk(
  'sth/missions/FETCH_MISSIONS',
  async () => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    const formatedData = data.map((mission) => ({
      id: mission.mission_id,
      name: mission.mission_name,
      description: mission.description,
      manufacturer: mission.manufacturers[0],
      wiki: mission.wikipedia,
      joined: false,
    }));
    return formatedData;
  },
);

export const missionsSlice = createSlice({
  name: 'sth/missions',
  initialState: [],
  reducers: {
    updateMission: (state, action) => state.map((mission) => {
      if (mission.id === action.payload) {
        return { ...mission, joined: !mission.joined };
      }
      return mission;
    })
    ,
  },
  extraReducers: {
    [fetchMissions.fulfilled]: (state, action) => action.payload,
  },
});

export const { updateMission } = missionsSlice.actions;

export default missionsSlice.reducer;
