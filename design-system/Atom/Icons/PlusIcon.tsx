import { IIcon } from '@/typescript/IconType';

const PlusIcon = ({ width = 9, height = 9, color }: IIcon) => (
  <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg">
    <text
      transform="translate(-24 -20)"
      fill={color}
      fill-rule="evenodd"
      font-family="Jost-Bold, Jost"
      font-size="14"
      font-weight="bold"
    >
      <tspan x="24" y="27.5">
        +
      </tspan>
    </text>
  </svg>
);

export default PlusIcon;
