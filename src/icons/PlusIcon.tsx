import * as React from "react";
import { Svg } from '../ui/Svg';

type Props = {
  color: string,
}
const PlusIcon = ({ color = '#E0E0E0', ...rest }: Props) => {
  return (
    <Svg width={100} height={100} viewBox="0 0 100 100" fill="none" {...rest}>
      <g
        opacity={0.7}
        stroke={color}
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M50 97c25.957 0 47-21.043 47-47S75.957 3 50 3 3 24.043 3 50s21.043 47 47 47zM50 31.2v37.6M31.2 50h37.6" />
      </g>
    </Svg>
  );
}

export default PlusIcon;
