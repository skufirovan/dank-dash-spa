import { useSelector } from '@store';
import { getSection } from '@slices/active-section';
import { useNavigate } from 'react-router-dom';
import * as s from './header-navigation.module.css';

const HeaderNavigation = () => {
  const activeSection = useSelector(getSection);
  const navigate = useNavigate();
  const sections = ['home', 'about', 'shop'];

  const handleScroll = (id: string) => {
    navigate('/', { state: { scrollToId: id } });
  };

  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        {sections.map((section) => (
          <li key={section}>
            <button
              type="button"
              className={`${s.link} ${activeSection === section ? s.active : ''}`}
              onClick={() => handleScroll(section)}
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
