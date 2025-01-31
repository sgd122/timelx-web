import type { ToasterProps } from 'react-hot-toast';
import { Toaster as DefaultToaster } from 'react-hot-toast';

export type Props = ToasterProps;

export const Toaster = ({ ...props }) => {
  const { duration = 2000, ...rest } = props;

  return (
    <DefaultToaster
      toastOptions={{
        duration,
        position: 'top-right',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }}
      {...rest}
    ></DefaultToaster>
  );
};
