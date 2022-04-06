import { FC } from 'react';
import styles from './PageFooter.module.scss';

const PageFooter: FC = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_Logos}>
        <a href="https://www.valvesoftware.com/en/about">
          <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/valve_logo.png' alt="ValveLogo" className={styles.footer_Logo}/>
        </a>
        <a href="/">
          <img src='https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/footer_logo.png' alt="ValveLogo" className={styles.footer_Logo}/>
        </a>
      </div>
      <div className={styles.footer_Legal}>
        Dota и логотип Dota являются товарными знаками и/или зарегистрированными товарными знаками Valve Corporation. 2022 Valve Corporation, все права защищены.
      </div>
    </div>
  );
};

export default PageFooter;