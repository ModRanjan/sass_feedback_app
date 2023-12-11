import { IIcon } from '@/typescript/IconType';

export const ArrowUpIcon = ({
  width = 10,
  height = 7,
  color = '#4661E6',
}: IIcon) => (
  <svg height={height} width={width} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 6l4-4 4 4"
      stroke={color}
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
);
