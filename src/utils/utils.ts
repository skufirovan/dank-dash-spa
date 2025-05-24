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

export const isISODate = (dateString: string): boolean => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString)) {
    return false;
  }

  return true;
};

export const validateDate = (dateString: string): boolean => {
  if (!isISODate(dateString)) {
    return false;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const inputDate = new Date(dateString);
  inputDate.setHours(0, 0, 0, 0);

  if (inputDate < today) {
    return false;
  }

  return true;
};
