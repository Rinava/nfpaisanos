import styles from './styles.module.css';
import Image from 'next/image';
const InfoPill = () => {
  return (
    <div className={styles.info_pill}>
      <Image
        src=''
        alt=''
        width={40}
        height={40}
      />
      <div className={styles.container}>
      <p className={styles.title}>Creator</p>
      <p className={styles.info}>Enrico Cole</p>
      </div>
    </div>
  );
};

export default InfoPill;
