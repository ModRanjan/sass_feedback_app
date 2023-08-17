import { IIcon } from '@/types/IconType';

const ArrowDownIcon = ({
  width = '10',
  height = '7',
  color = '#4661E6',
}: IIcon) => (
  <svg width={width} height={height} xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M1 1l4 4 4-4'
      stroke={color}
      stroke-width='2'
      fill='none'
      fill-rule='evenodd'
    />
  </svg>
);

export default ArrowDownIcon;
