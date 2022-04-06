import axios from 'axios';
import { IGetAllHeroes, IGetHero, IGetTeams } from './Types';

export default class DotaAPI {

  async getAllHeroes(): Promise<IGetAllHeroes[]> {
    const response = await axios.get('/datafeed/herolist?language=russian');

    return response.data.result.data.heroes;
  };

  async getHeroById(id: number): Promise<IGetHero[]> {
    const response = await axios.get(`/datafeed/herodata?language=russian&hero_id=${id}`);

    return response.data.result.data.heroes;
  };

  async getTeams(): Promise<IGetTeams[]> {
    const response = await axios.get('https://api.opendota.com/api/teams');

    return response.data;
  };
};