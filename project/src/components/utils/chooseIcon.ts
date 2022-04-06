export const chooseIcon = (attr: number) => {
  if(attr === 1){
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_agility.png`;
  }else if(attr === 0){
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_strength.png`;
  }else if(attr === 2){
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/hero_intelligence.png`;
  };
};

export const chooseText = (attr: number) => {
  if(attr === 1){
    return 'Ловкость';
  }else if(attr === 0){
    return 'Cила';
  }else if(attr === 2){
    return `Интеллект`;
  };
}

export const typeAttack = (attack: number) => {
 if(attack === 1){
    return 'Ближний бой';
  }else if(attack === 2){
    return `Дальний бой`;
  };
}

export const typeAttackIcon = (attack: number) => {
  if(attack === 1){
    return 'https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/melee.svg';
  }else if(attack === 2){
    return `https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/icons/ranged.svg`;
  };
}

