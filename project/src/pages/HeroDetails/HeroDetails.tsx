import clsx from 'clsx';
import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageLayout from '../../components/PageLayout/PageLayout';
import { chooseIcon, chooseText, typeAttack, typeAttackIcon } from '../../components/utils/chooseIcon';
import { urlImage } from '../../components/utils/urlImage';
import { getHeroDetailsAction } from '../../redux/Heroes/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './HeroDetails.module.scss';
import { ceil } from 'lodash';
import { Stack, CircularProgress } from '@mui/material';

const HeroDetails: FC = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { hero } = useSelector((state: RootState) => state.heroById);
  const [history, setHistory] = useState(true);
  const linkUp = (id: number) => {
    if(136 >= id){
      return `/heroes/${id + 1}`;
    }else {
      return `/heroes/${1}`
    };
  };
  const linkDown = (id: number) => {
    if(1 < id){
      return `/heroes/${id - 1}`;
    }else {
      return `/heroes/${137}`
    };
  };
  const heropageLore = (text: string) => {
    const newText = text.split('<b>').join('');
    const result = newText.split('</b>').join('');

    return result;
  };

  const filledContainer = (index: number) => {
    if(index === 0){
      return
    }else if(index === 1){
      return true && styles.filledBy1
    }else if(index === 2){
      return true && styles.filledBy2
    }else if(index === 3){
      return styles.filledBy3
    }
  };


  useEffect(() => {
    dispatch(getHeroDetailsAction(Number(id)));
  }, [id])

  return (
    <PageLayout>
      <div className={styles.container}>
        {!hero && (
          <div className={styles.container_wrapper}>
            <div className={styles.container_UpperSection}>
              <Stack sx={{ flex: 1, alignItem: 'center', justifyContent: 'center', height: '70vh' }}>
                <CircularProgress color="secondary" />
              </Stack>
            </div>
          </div>
        )}
        {hero && hero.map((info) => (
          <div className={styles.container_wrapper} key={info.id}>
            <div className={styles.container_UpperSection}>
              <div className={styles.container_BackgroundGradient}></div>
              <div className={styles.container_HeroNavigator}>
                <a href={linkDown(Number(id))} className={clsx(styles.HeroNavigator_Arrow, styles.leftArrow)}> </a>
                <a href="/heroes"className={clsx(styles.HeroNavigator_Center, styles.centerArrow)}>All</a>
                <a href={linkUp(Number(id))} className={clsx(styles.HeroNavigator_Arrow, styles.rightArrow)}> </a>
              </div>
              <div className={styles.heroPortraitContainer}>
                <video
                  poster={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${urlImage(info.name)}.png`}
                  loop
                  playsInline
                  autoPlay
                  preload="auto"
                  className={styles.heroPortrait}
                >
                  <source type="video/webm" src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${urlImage(info.name)}.webm`}/>
                  <img src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/${urlImage(info.name)}.png`} alt="logo"/>
                </video>
              </div>
              <div className={clsx(styles.container_fade, styles.container_fade_Bottom)}>
                <div className={styles.container_fade_Fade}></div>
              </div>
              <div className={styles.container_Summary}>
                <div className={styles.container_title}>
                  <img
                    src={chooseIcon(info.primary_attr)}
                    className={styles.container_PrimaryStateIcon}
                    alt="Attribute"
                  />
                  <div className={styles.container_PrimaryStat}>{chooseText(info.primary_attr)}</div>
                </div>
                <div className={styles.container_HeroName}>{info.name_loc}</div>
                <div className={styles.container_HerOneLiner}>{info.npe_desc_loc}</div>
                {!history && (
                  <div className={styles.container_BioOrSummaryContainer}>
                    <div className={clsx(styles.container_BioContainer)}>
                      {info.bio_loc}
                      <div className={styles.ShowBio} onClick={() => setHistory(true)}>Закрыть историю</div>
                    </div>
                  </div>
                )}
                {history && (
                  <div className={styles.container_SummaryContainer}>
                    <div className={clsx(styles.container_Lore)}>
                      {heropageLore(info.hype_loc)}
                      <div className={clsx(styles.ShowBio)} onClick={() => setHistory(false)}>Полная история</div>
                    </div>
                    <div className={styles.subtitle}>
                      <div className={styles.container_SummaryContainer_title}>Тип атаки</div>
                      <div className={styles.AttackTypeDetail}>
                        <img src={typeAttackIcon(info.attack_capability)} alt={typeAttack(info.attack_capability)} className={styles.AttackTypeDetail_Icon}/>
                        <div className={styles.AttackTypeDetail_value}>{typeAttack(info.attack_capability)}</div>
                      </div>
                    </div>
                    <div className={styles.subtitle}>
                      <div className={styles.container_SummaryContainer_title}>Сложность</div>
                      <div className={styles.container_PipContainer}>
                        <div className={clsx(styles.container_DiamondPip, info.complexity >= 1 && styles.container_filled)}></div>
                        <div className={clsx(styles.container_DiamondPip, info.complexity >= 2 && styles.container_filled)}></div>
                        <div className={clsx(styles.container_DiamondPip, info.complexity === 3 && styles.container_filled)}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.container_HeroVerticalBar}>
                <img src={chooseIcon(info.primary_attr)} alt="Attribute" className={styles.container_PrimaryStateIcon}/>
                <div className={styles.container_HeroName_vertical}>{info.name_loc}</div>
                <div className={styles.container_HeroId}>{info.id}</div>
                <div className={styles.container_Line}></div>
              </div>
            </div>
            <div className={styles.container_DetailsBarContainer}>
              <div className={styles.container_DetailsBar}>
                <div className={styles.container_DetailsAttributes}>
                  <div className={styles.container_TopAttributes}>
                    <div className={styles.container_PortraitContainer}>
                      <img
                        src={`https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${urlImage(info.name)}.png`}
                        alt="HeroImage"
                        className={styles.container_Portrait}
                      />
                      <div className={styles.container_HealthBar}>
                        <div className={styles.container_BarNumberMajor}>{info.max_health}</div>
                        <div className={styles.container_BarNumberMinor}>+{ceil(info.health_regen, 1)}</div>
                      </div>
                      <div className={styles.container_ManaBar}>
                        <div className={styles.container_BarNumberMajor}>{info.max_mana}</div>
                        <div className={styles.container_BarNumberMinor}>+{ceil(info.mana_regen, 1)}</div>
                      </div>
                    </div>
                    <div className={styles.container_AttributeContainer}>
                      <div className={styles.container_SingleAttribute}>
                        <img src={chooseIcon(0)} alt="Attribute" className={styles.container_AttributeIcon}/>
                        <div className={styles.container_AttributeValue}>{info.str_base}</div>
                        <div className={styles.container_AttributeGain}>{ceil(info.str_gain, 1)}</div>
                      </div>
                      <div className={styles.container_SingleAttribute}>
                        <img src={chooseIcon(1)} alt="Attribute" className={styles.container_AttributeIcon}/>
                        <div className={styles.container_AttributeValue}>{info.agi_base}</div>
                        <div className={styles.container_AttributeGain}>+{ceil(info.agi_gain, 1)}</div>
                      </div>
                      <div className={styles.container_SingleAttribute}>
                        <img src={chooseIcon(2)} alt="Attribute" className={styles.container_AttributeIcon}/>
                        <div className={styles.container_AttributeValue}>{info.int_base}</div>
                        <div className={styles.container_AttributeGain}>+{ceil(info.int_gain, 1)}</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container_DetailSectionHeader}>Атрибуты</div>
                </div>
                <div className={styles.container_VerticalSeparator}></div>
                <div className={styles.container_DetailsRoles}>
                  <div className={styles.container_RoleList}>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Основа</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[0]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Поддержка</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[1]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Быстрый урон</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[2]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Контроль</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[3]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Лес</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[4]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Стойкость</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[5]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Побег</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[6]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Осада</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[7]))}></div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.container_Role}>
                      <div className={styles.container_RoleName}>Инициация</div>
                      <div className={styles.container_BarContainer}>
                        <div className={styles.container_BarBackground}>
                          <div className={clsx(styles.container_BarFilled, filledContainer(info.role_levels[8]))}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.container_DetailSectionHeader}>Роли</div>
                </div>
                <div className={styles.container_VerticalSeparator}></div>
                <div className={styles.container_DetailsStats}>
                  <div className={styles.container_StatList}>
                    <div className={styles.container_HeroValues}>
                      <div className={styles.container_HeroValues_title}>Атака</div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_damage.png" alt="Damage"/>
                        {info.damage_min}-{info.damage_max}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_time.png" alt="Damage"/>
                        {ceil(info.attack_rate, 1)}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_attack_range.png" alt="Damage"/>
                        {info.attack_range}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_projectile_speed.png" alt="Damage"/>
                        {info.projectile_speed}
                      </div>
                    </div>
                    <div className={styles.container_HeroValues}>
                      <div className={styles.container_HeroValues_title}>Защита</div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_armor.png" alt="Damage"/>
                        {ceil(info.armor, 1)}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_magic_resist.png" alt="Damage"/>
                        {info.magic_resistance}%
                      </div>
                    </div>
                    <div className={styles.container_HeroValues}>
                      <div className={styles.container_HeroValues_title}>Мобильность</div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_movement_speed.png" alt="Damage"/>
                        {info.movement_speed}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_turn_rate.png" alt="Damage"/>
                        {ceil(info.turn_rate, 1)}
                      </div>
                      <div className={styles.container_HeroValue_Element}>
                        <img className={styles.container_swordIcon} src="https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react//heroes/stats/icon_vision.png" alt="Damage"/>
                        {info.sight_range_day} / {info.sight_range_night}
                      </div>
                    </div>
                  </div>
                  <div className={styles.container_DetailSectionHeader}>Показатели</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <PageFooter />
      </div>
    </PageLayout>
  );
};

export default HeroDetails;
