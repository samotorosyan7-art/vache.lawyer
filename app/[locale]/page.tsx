import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Protocol from '@/components/Protocol';
import Services from '@/components/Services';
import Ticker from '@/components/Ticker';
import IntakeForm from '@/components/IntakeForm';
import Archive from '@/components/Archive';
import Footer from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function Home() {
  const tHero = useTranslations('Hero');

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Protocol />
        <Services />
        <Ticker />
        <IntakeForm />
        <Archive />
      </main>
      <Footer />
      <a href="#intake" className="float-btn">{tHero('cta')}</a>
    </>
  );
}
