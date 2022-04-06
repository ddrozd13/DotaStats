import { createReducer } from '@reduxjs/toolkit';
import { getTeamsAction } from './ActionCreator';
import ITeamsState from './Type';

const initialState: ITeamsState  = {
  teams: undefined
};

const getAllTeamsReducer = createReducer(initialState, (builder) => {
  builder.addCase(getTeamsAction.fulfilled, (state, action) => {
    state.teams = action.payload;
  });
  builder.addCase(getTeamsAction.rejected, (state, ) => {
    state.teams = [];
  });
});

export default getAllTeamsReducer;