import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from '@services/store';
import { priceSelector, quantitySelector } from '@services/slices/cart';
import { userSelector } from '@services/slices/user';
import { getProductWord } from '@utils/utils';
import CartProductList from '@components/cart-product-list/cart-product-list';
import Button from '@components/ui/button/button';
import Modal from '@components/modal/modal';
import OrderingFormOne from '@components/ordering-form-one/ordering-form-one';
import OrderingFormTwo from '@components/ordering-form-two/ordering-form-two';
import * as s from './cart-page.module.css';

export const CartPage = () => {
  const [step, setStep] = useState<0 | 1 | null>(null);

  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const price = useSelector(priceSelector);
  const quantity = useSelector(quantitySelector);

  const handleOrder = () => {
    if (!user) {
      navigate('/sign-in', { replace: true });
    } else {
      setStep(0);
    }
  };

  const closeModal = () => setStep(null);

  return (
    <section className={s.cart}>
      <CartProductList />
      <div className={s.total}>
        {quantity ? (
          <>
            <Button className={s.button} onClick={handleOrder}>
              Оформить заказ
            </Button>
            <p className={s.priceText}>
              {price} ₽, {quantity} {getProductWord(quantity)}
            </p>
          </>
        ) : (
          'Ваша корзина пуста'
        )}
      </div>
      {step !== null && (
        <Modal onClose={closeModal}>
          {step === 0 && <OrderingFormOne onNext={() => setStep(1)} />}
          {step === 1 && <OrderingFormTwo onBack={() => setStep(0)} onClose={closeModal} />}
        </Modal>
      )}
    </section>
  );
};
