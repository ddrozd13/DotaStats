import { AppBar, Button, Container } from '@mui/material';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './PageLayout.module.scss';
import steamLogo from '../../images/steam-logo.svg';


const PageLayout: FC = ({ children }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.navigationContainer}>
            <a href='#root' className={styles.logoContainer}>
              <img src={logo} alt="DotaLogo" />
              <div>DOTA 2</div>
            </a>
            <div className={styles.navigation}>
              <a>Герои</a>
              <a>Статистика</a>
              <a>Новости</a>
            </div>
          <Button variant='outlined' color='secondary' href='https://store.steampowered.com/app/570/Dota_2/' className={styles.playButton}>
            <img src={steamLogo} alt="SteamLogo" />
            Играть бесплатно
          </Button>
        </Container>
      </AppBar>
      {children}
    </div>
    // <div className={styles.container}>
    //
    //   <a>
    //     Герои
    //   </a>
    // </div>
  )
};

export default PageLayout;
