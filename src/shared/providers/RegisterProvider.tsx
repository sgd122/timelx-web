import type React from 'react';
import { createContext, useContext } from 'react';
import type { FieldValues, UseFormRegister } from 'react-hook-form';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RegisterContext = createContext<UseFormRegister<any> | null>(null);

export const useRegister = <T extends FieldValues>() => {
  const context = useContext(
    RegisterContext as React.Context<UseFormRegister<T> | null>
  );
  if (!context) {
    throw new Error('useRegister must be used within a RegisterProvider');
  }
  return context;
};

export const RegisterProvider = <T extends FieldValues>({
  register,
  children,
}: {
  register: UseFormRegister<T>;
  children: React.ReactNode;
}) => {
  return (
    <RegisterContext.Provider value={register}>
      {children}
    </RegisterContext.Provider>
  );
};
