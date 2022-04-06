import { Skeleton, Stack, Tooltip } from '@mui/material';
import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PageFooter from '../../components/PageFooter/PageFooter';
import PageLayout from '../../components/PageLayout/PageLayout';
import { RootState } from '../../redux/store';
import { getTeamsAction } from '../../redux/Teams/ActionCreator';
import bgVideo from '../../video/dota_movie.mp4';
import bgVideoWeb from '../../video/dota_movie.webm';
import styles from './Main.module.scss';

const Main: FC = () => {
  const dispatch = useDispatch();
  const  { teams } = useSelector((state: RootState) => state.allTeams);
  const navigate = useNavigate();
  const handleGoToHeroes = () => {
    navigate('/heroes');
  };

  useEffect(() => {
    dispatch(getTeamsAction());
  }, []);

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.backgroundContainer}>
            <video autoPlay loop muted className={styles.video}>
              <source src={bgVideoWeb} type="video/webm" />
              <source src={bgVideo} type="video/mp4" />
            </video>
          </div>
          <div className={styles.firstContent}>
            <div className={styles.title}>«СОВРЕМЕННЫЙ МНОГОПОЛЬЗОВАТЕЛЬСКИЙ ШЕДЕВР»</div>
            <div className={styles.subtitle}>Destructoid</div>
            <div className={styles.horizontalLine}></div>
            <a href="https://store.steampowered.com/app/570/Dota_2/">
              <div className={styles.homepage_LogoContainer}>
                <div className={styles.homepage_LogoContainer_left}></div>
                <div className={styles.homepage_LogoContainer_right}>
                  <div className={styles.homepage_LogoContainer_playFree}>Играть бесплатно</div>
                  <div className={styles.homepage_LogoContainer_download}>Скачать в Steam</div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className={styles.second}>
          <div className={styles.second_wrapper}>
            <div className={styles.second_TitleText}>
              <span className={styles.Minor}>Кого вы</span>
              <br></br>
              выберете?
            </div>
            <div className={styles.horizontalLine}></div>
            <div className={styles.second_botContainer}>
              <div className={styles.second_SubTitle}>Список героев в Dota 2 огромен и безгранично разнообразен: здесь вы встретите и магов-тактиков, и свирепых громил, и хитроумных негодяев. Их невероятные способности и сокрушительные ульты непременно приведут вас к победе.</div>
              <a href="/heroes" className={styles.second_button}>
                <div className={styles.standardButton}>
                  <div className={styles.buttonText} onClick={handleGoToHeroes}>Все герои</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.third} id="top">
          <div className={styles.third_wrapper}>
            <div className={styles.title}>Топ-10 лучших команд DOTA2</div>
            <div className={styles.topContainer}>
              {!teams && (
                <Stack sx={{gap: 5, ml: 12}}>
                  <Stack sx={{flex: 1, flexDirection: 'row', gap: 5}}>
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                  </Stack>
                  <Stack sx={{flex: 1, flexDirection: 'row', gap: 5}}>
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                    <Skeleton variant="rectangular" width={200} height={200} sx={{borderRadius: '20%'}} animation="wave" />
                  </Stack>
                </Stack>
              )}
              {teams && teams.slice(0, 10).map((command) => (
                <Tooltip title={command.name !== '' ? command.name : command.tag} key={command.team_id}>
                  <div className={styles.teamsLogo} key={command.team_id}>
                    <img src={command.logo_url} alt={command.tag} />
                  </div>
                </Tooltip>
              ))}
            </div>
            <PageFooter />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Main;
