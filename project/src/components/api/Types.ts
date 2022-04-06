export interface IGetAllHeroes {
  id: number;
  name: string;
  name_loc: string;
  name_english_loc: string;
  primary_attr: number;
  complexity: number;
};

export interface IGetTeams {
  team_id: number;
  rating: number;
  wins: number;
  losses: number;
  last_match_time: Date;
  name: string;
  tag: string;
  logo_url: string;
};

export interface IGetHero {
  id: number;
  name: string;
  name_loc: string;
  bio_loc: string;
  hype_loc: string;
  str_base: number;
  str_gain: number;
  agi_base: number;
  agi_gain: number;
  int_base: number;
  int_gain: number;
  attack_capability: number;
  name_english_loc: string;
  primary_attr: number;
  complexity: number;
  role_levels: Array<number>;
  damage_min: number;
  damage_max: number;
  attack_rate: number;
  attack_range: number;
  projectile_speed: number;
  armor: number;
  magic_resistance: number;
  movement_speed: number;
  turn_rate: number;
  sight_range_day: number;
  sight_range_night: number;
  npe_desc_loc: string;
  max_health: number;
  health_regen: number;
  max_mana: number;
  mana_regen: number;
}
