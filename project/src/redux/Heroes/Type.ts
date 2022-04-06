import { IGetAllHeroes, IGetHero } from '../../components/api/Types';
import HeroAttribute from '../../enums/HeroAttribute';
import HeroComplexity from '../../enums/HeroComplexity';

export interface IHeroFilter {
  complexity: HeroComplexity | null;
  attribute:  HeroAttribute | null;
}

export interface IHeroesState {
  heroes?: IGetAllHeroes[];
  filterHeroes: IHeroFilter;
};

export interface IHeroByIdState {
  hero?: IGetHero[];
}