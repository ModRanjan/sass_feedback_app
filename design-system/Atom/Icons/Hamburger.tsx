import { IIcon } from '@/types/IconType';

export const Hamburger = ({
  width = 20,
  height = 17,
  color = '#FFF',
}: IIcon) => (
  <svg height={height} width={width} xmlns='http://www.w3.org/2000/svg'>
    <g fill={color} fill-rule='evenodd'>
      <path d='M0 0h20v3H0zM0 7h20v3H0zM0 14h20v3H0z' />
    </g>
  </svg>
);
