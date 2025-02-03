import type React from 'react';
import { createContext, useContext } from 'react';
import type {
  FieldValues,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form';

export const RegisterContext = createContext<{
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  watch: UseFormWatch<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setValue: UseFormSetValue<any>;
} | null>(null);

export const useRegister = <T extends FieldValues>() => {
  const context = useContext(
    RegisterContext as React.Context<{
      register: UseFormRegister<T>;
      watch: UseFormRegister<T>;
      setValue: UseFormSetValue<T>;
    } | null>
  );
  if (!context) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
};

export const RegisterProvider = <T extends FieldValues>({
  register,
  watch,
  setValue,
  children,
}: {
  register: UseFormRegister<T>;
  watch: UseFormWatch<T>;
  setValue: UseFormSetValue<T>;
  children: React.ReactNode;
}) => {
  return (
    <RegisterContext.Provider value={{ register, watch, setValue }}>
      {children}
    </RegisterContext.Provider>
  );
};
