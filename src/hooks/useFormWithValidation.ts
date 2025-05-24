import React, { ChangeEvent } from 'react';
import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { RootState, useDispatch, useSelector } from '@store';
import { TFieldType } from '@utils/types';
import { TErrorState, TFormValidators } from '@models/form-validator/formValidator';

type TUseFormWithValidation<T> = {
  values: T;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  errors: TErrorState<T>;
  isErrors: () => boolean;
};

function initError<T>(a: T): TErrorState<T> {
  return Object.keys(a as object).reduce((acc, k) => {
    acc[k as keyof T] = '';
    return acc;
  }, {} as TErrorState<T>);
}

export function useFormWithValidation<T>(
  selector: (state: RootState) => T,
  setFormValue: ActionCreatorWithPayload<TFieldType<T>>,
  validators: TFormValidators<T>,
): TUseFormWithValidation<T> {
  const values = useSelector(selector);
  const [errors, setErrors] = React.useState<TErrorState<T>>(initError<T>(values));
  const [isValid, setIsValid] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    const initialErrors = Object.entries(values!).reduce((acc, [field, value]) => {
      const name = field as keyof T;
      const isFieldValid = validators[name]?.validator(String(value)) ?? true;
      acc[name] = !isFieldValid ? validators[name]!.message : undefined;
      return acc;
    }, {} as TErrorState<T>);

    setErrors(initialErrors);
  }, []);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const input = evt.target;
    const { value } = input;
    const name = input.name as keyof T;
    const isFieldValid = validators[name]?.validator(value) ?? true;
    dispatch(setFormValue({ field: name, value }));
    setErrors({
      ...errors,
      [name]: !isFieldValid ? validators[name]!.message : undefined,
    });
    setIsValid(isFieldValid);
  };

  const isErrors = (): boolean => {
    return Object.values(errors).some((error) => error !== undefined);
  };

  return { values, handleChange, errors, isErrors };
}
