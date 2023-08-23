import { cn } from '@/lib/utils';

type BadgeProps = {
  title: string;
  color?: string; // latter on we use || operator
  bgColor?: string; // latter on we use || operator
};

export const Badge = ({ title, color, bgColor }: BadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center capitalize rounded-[10px] w-fit font-semibold',
        'text-xs font-medium',
        'px-2 lg:px-4 py-1',
        bgColor,
        color
      )}
    >
      {title}
    </span>
  );
};
