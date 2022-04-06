import { AppBar, Button, Container } from '@mui/material';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import styles from './PageLayout.module.scss';
import steamLogo from '../../images/steam-logo.svg';


const PageLayout: FC = ({ children }) => {
  const navigate = useNavigate();
  const handleGoToHeroes = () => {
    navigate('/heroes');
  };

  return (
    <div className={styles.container}>
      <AppBar position='sticky' className={styles.appBar}>
        <Container className={styles.navigationContainer}>
            <a className={styles.logoContainer} href="/">
              <img src={logo} alt="DotaLogo" />
              <div>DOTA 2</div>
            </a>
            <div className={styles.navigation}>
              <div onClick={handleGoToHeroes}>Герои</div>
              <a href='/#top'>Топ-10</a>
            </div>
          <Button variant='outlined' color='secondary' href='https://store.steampowered.com/app/570/Dota_2/' className={styles.playButton}>
            <img src={steamLogo} alt="SteamLogo" />
            Играть бесплатно
          </Button>
        </Container>
      </AppBar>
      {children}
    </div>
  )
};

export default PageLayout;
