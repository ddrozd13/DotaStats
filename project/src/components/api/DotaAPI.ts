import axios from 'axios';
import { IGetAllHeroes } from './Types';

export default class DotaAPI {

  async getAllHeroes(): Promise<IGetAllHeroes[]> {
    const response = await axios.get('https://api.opendota.com/api/heroes')

    return response.data;
  };


}