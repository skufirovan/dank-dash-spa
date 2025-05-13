import { useLocation } from 'react-router-dom';
import ProductList from '@components/product-list/product-list';
import HeroSection from '@components/hero-section/hero-section';
import { useEffect } from 'react';
import { scrollToSection } from '@utils/utils';
import AboutSection from '@components/about-section/about-section';
import * as s from './catalog-page.module.css';

export const CatalogPage = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollToId;
    if (!id) return;

    const el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(() => {
        scrollToSection(id);
      });
    }

    window.history.replaceState({}, document.title);
  }, [location.state]);

  return (
    <div className={s.catalog}>
      <HeroSection />
      <AboutSection />
      <ProductList />
    </div>
  );
};
