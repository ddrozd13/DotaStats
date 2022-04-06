import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import DotaAPI from '../../components/api/DotaAPI';
import IGetHeroActionType from './ActionType';
import { IHeroFilter } from './Type';

const getHero = new DotaAPI();

export const getAllHeroesAction = createAsyncThunk(IGetHeroActionType.GetAllHeroes, () => {
  return getHero.getAllHeroes();
});

export const getHeroDetailsAction = createAsyncThunk(IGetHeroActionType.GetHeroDetails, (id: number) => {
  return getHero.getHeroById(id)
})

export const updateHeroFilter = createAction<IHeroFilter>(IGetHeroActionType.FilterHeroes)