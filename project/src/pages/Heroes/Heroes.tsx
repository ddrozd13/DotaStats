import clsx from 'clsx';
import { FC, MouseEvent, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageLayout from '../../components/PageLayout/PageLayout';
import { chooseIcon } from '../../components/utils/chooseIcon';
import { urlImage } from '../../components/utils/urlImage';
import HeroAttribute from '../../enums/HeroAttribute';
import HeroComplexity from '../../enums/HeroComplexity';
import { getAllHeroesAction, updateHeroFilter } from '../../redux/Heroes/ActionCreator';
import { RootState } from '../../redux/store';
import styles from './Heroes.module.scss';

const Heroes: FC = () => {
  const dispatch = useDispatch();
  const { heroes, filterHeroes } = useSelector((state: RootState) => state.allHeroes);
  const handleChangeOpacity = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.background = "linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.733) 75%, rgb(0, 0, 0) 100%)"
  };
  const handleChangeOpacityNone = (e: MouseEvent<HTMLElement>) => {
    e.currentTarget.style.opacity = "0"
  };

  const hrefLink = (id: number) => {
    return `/heroes/${id}`
  };

  const updateHeroesAttributeFilter = (attribute: HeroAttribute) => {
    if(attribute === filterHeroes.attribute){
      dispatch(updateHeroFilter({ ...filterHeroes, attribute: null }));
    }else {
      dispatch(updateHeroFilter({ ...filterHeroes, attribute }));
    }
  }

  const updateHeroesComplexityFilter = (complexity: HeroComplexity) => {
    if(complexity === filterHeroes.complexity){
      dispatch(updateHeroFilter({ ...filterHeroes, complexity: null }));
    }else {
      dispatch(updateHeroFilter({ ...filterHeroes, complexity }));
    };
  };

  useEffect(() => {
    dispatch(getAllHeroesAction());
  }, []);

  const filteredHeroes = heroes?.filter(hero => (filterHeroes.attribute === null ||  hero.primary_attr === filterHeroes.attribute) && (filterHeroes.complexity === null ||  hero.complexity === filterHeroes.complexity))
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.container_text}>
            <div className={styles.container_text_title}>
              Выберите героя
            </div>
            <div className={styles.container_text_subtitle}>
              Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев. Их невероятные способности и сокрушительные ульты непременно приведут вас к победе.
            </div>
          </div>
          <div className={styles.container_filter}>
            <div className={styles.container_filterLabel}>Фильтр</div>
            <div className={styles.container_filterSpecific}>
              <div className={styles.container_filterSpecific_Label}>Атрибут</div>
              <div
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.attribute === HeroAttribute.Strength && styles.active)}
                onClick={() => updateHeroesAttributeFilter(HeroAttribute.Strength)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-str-active.png')`}}
              ></div>
              <div
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.attribute === HeroAttribute.Agility && styles.active)}
                onClick={() => updateHeroesAttributeFilter(HeroAttribute.Agility)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-agi-active.png')`}}
              ></div>
              <div
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.attribute === HeroAttribute.Intelligence && styles.active)}
                onClick={() => updateHeroesAttributeFilter(HeroAttribute.Intelligence)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-int-active.png')`}}
              ></div>
            </div>
            <div className={styles.container_filterSpecific}>
              <div className={styles.container_filterSpecific_Label}>Сложность</div>
              <div
                onClick={() => updateHeroesComplexityFilter(HeroComplexity.Low)}
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.complexity === HeroComplexity.Low && styles.active , filterHeroes.complexity === HeroComplexity.Medium && styles.active, filterHeroes.complexity === HeroComplexity.Large && styles.active)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')`}}
              ></div>
              <div
                onClick={() => updateHeroesComplexityFilter(HeroComplexity.Medium)}
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.complexity === HeroComplexity.Medium && styles.active, filterHeroes.complexity === HeroComplexity.Large && styles.active)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')`}}
              ></div>
              <div
                onClick={() => updateHeroesComplexityFilter(HeroComplexity.Large)}
                className={clsx(styles.container_filterSpecific_Logo, filterHeroes.complexity === HeroComplexity.Large && styles.active)}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/herogrid/filter-diamond.png')`}}
              ></div>
            </div>
          </div>
          <div className={styles.container_GridList}>
            {!heroes && (
              <div className={styles.container_Grid}>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
                <div className={styles.container_HeroIcon}></div>
              </div>
            )}
            {filteredHeroes && filteredHeroes.map((item) => (
              <a
                key={item.id + item.name}
                style={{backgroundImage: `url('https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/${urlImage(item.name)}.png')`}}
                href={hrefLink(item.id)}
                className={styles.container_HeroIcon}
              >
                <div
                  className={clsx(styles.container_HeroNameContainer)}
                  onMouseOver={(event) => handleChangeOpacity(event)}
                  onMouseOut={(event) => handleChangeOpacityNone(event)}
                >
                  <img src={chooseIcon(item.primary_attr)} alt="attrIcon" className={styles.container_PrimaryIcon}/>
                  <div className={styles.container_HeroName}>{item.name_loc}</div>
                </div>
                <div className={clsx(styles.container_FadeContainer, styles.fade_Bottom)}
                >
                  <div className={styles.fadeContainer}>
                    <div className={styles.fade_Fade}></div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
        <PageFooter />
      </div>
    </PageLayout>
  );
};

export default Heroes;
