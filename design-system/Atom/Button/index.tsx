'use client';

import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { cva, VariantProps } from 'class-variance-authority';

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva(
  'relative rounded-[10px] inline-flex items-center font-bold whitespace-nowrap transition-colors ease-in outline-none capitalize border-none',
  {
    variants: {
      variant: {
        primary: 'bg-tertiary text-layer-light hover:bg-tertiary-tint',
        secondary: 'bg-secondary text-layer-light hover:bg-layer-darker',
        tertiary: 'bg-primary-lighter text-layer-light hover:bg-gray-lighter ',
        danger: 'bg-red text-layer-light hover:bg-danger',
        link: 'gap-x-2 bg-transparent rounded-none px-0 text-grey hover:underline underline-offset-2 decoration-0 w-fit',
        highlight:
          'gap-x-2 bg-primary text-white hover:underline underline-offset-2 decoration-0 w-fit',
      },
      size: {
        small: 'text-xs px-3 py-2 h-7',
        medium: 'text-sm px-4 py-3 h-10',
        large: 'text-md px-6 py-4 h-11',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

const highlightBtnClasses = cva(
  'relative rounded-[10px] inline-flex  items-center font-bold whitespace-nowrap transition-colors ease-in outline-none capitalize border-none',
  {
    variants: {
      variant: {
        horizontal: 'bg-layer-base gap-x-2 text-secondary hover:bg-layer-dark',
        vetical:
          'flex-col gap-y-1 bg-layer-light text-primary-lighter hover:bg-layer-dark',
      },
      size: {
        small: 'text-xs px-2 py-2',
        medium: 'text-sm px-3 py-3',
        large: 'text-md px-5 py-3',
      },
    },
    defaultVariants: {
      variant: 'horizontal',
      size: 'medium',
    },
  }
);

type HighlightBaseType = VariantProps<typeof highlightBtnClasses> & {
  children: React.ReactNode;
};

type HighlightBtnType = HighlightBaseType &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

export const Highlight = ({
  children,
  variant,
  size,
  ...props
}: HighlightBtnType) => {
  const classes = highlightBtnClasses({
    variant,
    size,
    className: props.className,
  });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ('href' in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};
