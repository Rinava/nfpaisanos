import styles from './styles.module.css';
import Image from 'next/image';
import InfoPill from '../commons/InfoPill';
const PopularAuctions = () => {
  return (
    <div className={styles.auction}>
      <div className={styles.image}>
        <Image src='' alt='' width={311} height={478} />
      </div>
      <div className={styles.content}>
        <h1>Marco carrillo®</h1>
        <InfoPill />
        <InfoPill />
      </div>
    </div>
  );
};

export default PopularAuctions;
