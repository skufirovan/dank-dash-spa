import { useRef } from 'react';
import { useSectionObserver } from '@hooks/useSectionObserver';
import * as s from './about-section.module.css';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useSectionObserver({ id: 'about', ref: sectionRef });

  return (
    <section id="about" ref={sectionRef} className={s.about}>
      <h2 className={s.title}>Почему выбирают нашу микрозелень?</h2>
      <p className={s.description}>
        Максимум пользы и насыщенный вкус — для здорового и вкусного питания!
      </p>
      <div className={s.container}>
        <div className={s.item}>
          <div className={s.icon}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M512 32c0 113.6-84.6 207.5-194.2 222c-7.1-53.4-30.6-101.6-65.3-139.3C290.8 46.3 364 0 448 0h32c17.7 0 32 14.3 32 32zM0 96C0 78.3 14.3 64 32 64H64c123.7 0 224 100.3 224 224v32V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V320C100.3 320 0 219.7 0 96z"
              />
            </svg>
          </div>
          <h4 className={s.itemTitle}>Выращено рядом с вами</h4>
          <p className={s.itemDescription}>
            Вся наша микрозелень выращивается локально на экологичной городской ферме с
            использованием органических методов.
          </p>
        </div>
        <div className={s.item}>
          <div className={s.icon}>
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2 49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3L320 253.7l1.7 3.4c9.5 19 28.9 31 50.1 31H476.3c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9zM503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8L205.9 158.2c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9H16c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141C165 36.5 211.4 51.4 244 84l12 12 12-12c32.6-32.6 79-47.5 124.6-39.9C461.5 55.6 512 115.2 512 185.1v5.8c0 16.9-2.8 33.5-8.3 49.1z"
              />
            </svg>
          </div>
          <h4 className={s.itemTitle}>Максимум пользы в каждом ростке</h4>
          <p className={s.itemDescription}>
            В 40 раз питательнее обычной зелени — мощный заряд витаминов и антиоксидантов!
          </p>
        </div>
        <div className={s.item}>
          <div className={s.icon}>
            <svg
              width="100%"
              height="30px"
              viewBox="0 0 512 512"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M48 0C21.5 0 0 21.5 0 48V368c0 26.5 21.5 48 48 48H64c0 53 43 96 96 96s96-43 96-96H384c0 53 43 96 96 96s96-43 96-96h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288 256 237.3c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7H416V48c0-26.5-21.5-48-48-48H48zM416 160h50.7L544 237.3V256H416V160zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </div>
          <h4 className={s.itemTitle}>Свежесть в режиме 24/7</h4>
          <p className={s.itemDescription}>
            Срезаем по вашему заказу и доставляем за 24 часа — чтобы вы получили максимум вкуса и
            пользы!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
