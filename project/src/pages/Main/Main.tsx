import { FC } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout';
import { fadeIn } from 'react-animations';
import styles from './Main.module.scss';

const Main: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.first}>
          <div className={styles.title}>Список команд DOTA2</div>

        </div>
      </div>
    </PageLayout>
  )
};

export default Main;
