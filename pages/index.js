import Head from 'next/head'
import styles from '../styles/Home.module.css'
import BannerComponent from "../components/BannerComponent";
import NavBarComponent from "../components/NavBarComponent";
import CardComponent from "../components/CardComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Online Watch</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBarComponent username={'rick@h.com'} />
      <BannerComponent
        title={'movie name'}
        subTitle={'good movie'}
        imgUrl={'/static/images/clifford.webp'}
      />

      <CardComponent
        imgUrl={'/static/images/clifford.webp'}
        size={'large'}
      />
      <CardComponent
        size={'medium'}
      />
      <CardComponent
        imgUrl={'/static/images/clifford.webp'}
        size={'small'}
      />
    </div>
  )
}
