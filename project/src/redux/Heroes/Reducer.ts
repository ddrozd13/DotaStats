import  { IHeroesState, IHeroByIdState } from './Type';
import { createReducer } from '@reduxjs/toolkit';
import { getAllHeroesAction, getHeroDetailsAction, updateHeroFilter } from './ActionCreator';
import { sortBy } from 'lodash';

export const initialState: IHeroesState = {
  heroes: undefined,
  filterHeroes: {
    complexity: null,
    attribute: null,
  },
};

export const heroState: IHeroByIdState = {
  hero: undefined,
};

export const getAllHeroesReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllHeroesAction.fulfilled, (state, action) => {
    state.heroes = sortBy(action.payload,o => o.name_loc);
  });
  builder.addCase(updateHeroFilter, (state, action) => {
    state.filterHeroes = action.payload;
  });

  builder.addCase(getAllHeroesAction.rejected, (state) => {
    state.heroes = [];
  });
});

export const getHeroByIdReducer = createReducer(heroState, (builder) => {
  builder.addCase(getHeroDetailsAction.fulfilled, (state, action) => {
    state.hero = action.payload;
  });
});
