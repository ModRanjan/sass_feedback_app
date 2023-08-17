import { FC, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'mx-auto my-0 max-w-[120rem] w-full px-0 lg:px-8',
        className
      )}
    >
      {children}
    </div>
  );
};
