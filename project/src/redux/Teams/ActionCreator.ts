import { createAsyncThunk } from '@reduxjs/toolkit';
import DotaAPI from '../../components/api/DotaAPI';
import IGetTeamsType from './ActionType';

const dotaApi = new DotaAPI();

export const getTeamsAction = createAsyncThunk(IGetTeamsType.GetAllTeams, () => {
  return dotaApi.getTeams();
});