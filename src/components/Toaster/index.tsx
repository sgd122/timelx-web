import type { ToasterProps } from 'react-hot-toast';
import { ToastBar, Toaster as DefaultToaster } from 'react-hot-toast';

export type Props = ToasterProps;

export const Toaster = ({ ...props }) => {
  const { duration = 2000, ...rest } = props;

  return (
    <DefaultToaster toastOptions={{ duration }} {...rest}>
      {(t) => (
        <ToastBar toast={t} style={{ padding: 0 }}>
          {({ message }) => <>{message}</>}
        </ToastBar>
      )}
    </DefaultToaster>
  );
};
