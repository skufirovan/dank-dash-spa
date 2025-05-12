import { setSection } from '@slices/active-section';
import { useDispatch } from '@store';
import { useEffect } from 'react';

type SectionRef = {
  id: string;
  ref: React.RefObject<HTMLElement | null>;
};

export const useSectionObserver = (section: SectionRef) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) dispatch(setSection(id));
          }
        });
      },
      {
        threshold: 0.35,
      },
    );

    if (section.ref.current) observer.observe(section.ref.current);

    return () => observer.disconnect();
  }, [section, dispatch]);
};
