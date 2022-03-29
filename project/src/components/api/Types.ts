export interface IGetAllHeroes {
  id: number;
  name: string;
  localized_name: string;
  primary_attr: string;
  attack_type: string;
  roles: Array<string>
  legs: number;
}
