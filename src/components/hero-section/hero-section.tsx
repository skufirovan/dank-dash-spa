import { useRef } from 'react';
import Button from '@components/ui/button/button';
import { scrollToSection } from '@utils/utils';
import { useSectionObserver } from '@hooks/useSectionObserver';
import * as s from './hero-section.module.css';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleScroll = (id: string) => {
    scrollToSection(id);
  };

  useSectionObserver({ id: 'home', ref: sectionRef });

  return (
    <section id="home" ref={sectionRef} className={s.hero}>
      <div className={s.container}>
        <h1 className={s.title}>
          Свежесть. Польза. <br />
          Прямо к вам.
        </h1>
        <p className={s.description}>
          Насыщенная витаминами микрозелень, выращенная с любовью — доставляем свежими прямо с
          грядки за 24 часа!
        </p>
        <Button className={s.button} onClick={() => handleScroll('shop')}>
          Заказать
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
