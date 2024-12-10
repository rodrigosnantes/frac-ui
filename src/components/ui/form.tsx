import React, { ReactNode, useCallback } from 'react';
import {
  useForm,
  SubmitHandler,
  FieldValues,
  DefaultValues,
  FormProvider,
  useFormContext,
  Mode,
  UseFormReturn,
  Path,
} from 'react-hook-form';

const Form = <T extends FieldValues>({
  onSubmit,
  defaultValues,
  children,
  validationMode = 'all',
}: FormProps<T>) => {
  const methods = useForm<T>({ defaultValues, mode: validationMode });

  const clearForm = useCallback(() => {
    const emptyValues = Object.keys(defaultValues || {}).reduce((acc, key) => {
      (acc as any)[key] = '';
      return acc;
    }, {} as Record<string, any>);
    methods.reset(emptyValues as T);
    methods.clearErrors();
  }, [methods.reset, defaultValues]);

  const getFieldErrors = (): Record<string, any> => methods.formState.errors;

  const extendedMethods = {
    ...methods,
    clearForm,
    getFieldErrors,
  };

  return (
    <FormProvider {...(extendedMethods as any)}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

const useGlobalFormContext = <T extends FieldValues>() => {
  const context = useFormContext<T>();
  if (!context) {
    throw new Error('useGlobalFormContext must be used within a FormProvider');
  }

  const { getFieldErrors, clearForm } = context as typeof context & {
    getFieldErrors: () => Record<string, any>;
    clearForm: () => void;
  };

  return {
    ...context,
    getFieldErrors,
    clearForm,
  };
};

const useWatch = <T extends FieldValues>({ name }: { name: Path<T> }) => {
  const { watch } = useFormContext<T>();
  return watch(name);
};

const useFormState = <T extends FieldValues>() => {
  const { formState } = useFormContext<T>();
  return formState;
};

type FormProps<T extends FieldValues> = {
  onSubmit: SubmitHandler<T>;
  defaultValues?: DefaultValues<T>;
  children: ReactNode;
  validationMode: Mode;
};

export { Form, useGlobalFormContext, useWatch, useFormState };
