import styles from './styles.module.css';
import Image from 'next/image';

interface InfoPillProps {
  image: string;
  title: string;
  info: string;
}

const InfoPill = ({ image, title, info }: InfoPillProps) => (
  <div className={styles.info_pill}>
    <Image src={image} alt='' width={40} height={40} />
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <p className={styles.info}>{info}</p>
    </div>
  </div>
);

export default InfoPill;
