import { useState } from 'react';
import * as s from './header-navigation.module.css';

const HeaderNavigation = () => {
  const [activeSection] = useState('home');
  const sections = ['home', 'shop', 'about'];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {sections.map((section) => (
          <li key={section}>
            <button
              type="button"
              className={`${s.link} ${activeSection === section ? s.active : ''}`}
              onClick={() => scrollToSection(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNavigation;
