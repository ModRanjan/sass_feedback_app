import { IIcon } from '@/typescript/IconType';

const ArrowLeftIcon = ({ width = '7', height = '10', color }: IIcon) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6 9L2 5l4-4"
      stroke={color}
      stroke-width="2"
      fill="none"
      fill-rule="evenodd"
    />
  </svg>
);

export default ArrowLeftIcon;
