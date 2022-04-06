import { configureStore } from '@reduxjs/toolkit';
import { getAllHeroesReducer, getHeroByIdReducer } from './Heroes/Reducer';
import getAllTeamsReducer from './Teams/Reducer';

const store = configureStore({
  reducer: {
    allTeams: getAllTeamsReducer,
    allHeroes: getAllHeroesReducer,
    heroById: getHeroByIdReducer,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch