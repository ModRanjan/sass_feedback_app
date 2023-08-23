import { FC, ReactNode } from 'react';

interface IContainer extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export const Container: FC<IContainer> = ({ children, ...props }) => {
  const { className, ...rest } = props;
  return (
    <div className={`container ${className}`} {...rest}>
      {children}
    </div>
  );
};
