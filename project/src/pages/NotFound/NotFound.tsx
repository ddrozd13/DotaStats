import { FC } from 'react';
import PageLayout from '../../components/PageLayout/PageLayout';
import styles from './NotFound.module.scss';

const NotFound: FC = () => {
  return (
    <PageLayout>
      <div className={styles.container}>
        <div>
          <img src="https://freefrontend.com/assets/img/html-funny-404-pages/SVG-Animation-404-Page.gif" alt="gif" />
        </div>
      </div>
    </PageLayout>
  )
}

export default NotFound;