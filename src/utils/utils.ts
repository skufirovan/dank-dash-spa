export const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 100;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
};

export const getProductWord = (count: number): string => {
  const lastTwo = count % 100;
  const lastOne = count % 10;

  if (lastTwo >= 11 && lastTwo <= 19) {
    return 'товаров';
  }

  if (lastOne === 1) {
    return 'товар';
  }

  if (lastOne >= 2 && lastOne <= 4) {
    return 'товара';
  }

  return 'товаров';
};
