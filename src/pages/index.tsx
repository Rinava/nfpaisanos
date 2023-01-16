import styles from '@/styles/Home.module.css';
import PopularAuctions from '@/components/PopularAuctions';
import ContentBlock from '@/components/ContentBlock';
export default function Home() {
  return (
    <>
      <ContentBlock />
      <PopularAuctions/>
    </>
  );
}
