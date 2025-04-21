import { Container } from '@/components/Container/Container';
import styles from './page.module.scss';
import { Header } from '@/components/Header/Header';
import { Hero } from '@/components/Hero/Hero';
import { AboutUs } from '@/components/AboutUs/AboutUs';
import { Services } from '@/components/Services/Services';
import { StagesWork } from '@/components/StagesWork/StagesWork';
import { Price } from '@/components/Price/Price';
import { FAQ } from '@/components/FAQ/FAQ';
import { ConsultationForm } from '@/components/ConsultationForm/ConsultationForm';
import { Footer } from '@/components/Footer/Footer';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Header />
      </Container>
      <main className={styles.main}>
        <Hero />
        <Container>
          <AboutUs />
          <Services />
          <StagesWork />
          <Price />
          <FAQ />
          <ConsultationForm />
        </Container>
      </main>

      <Footer />
    </div>
  );
}
