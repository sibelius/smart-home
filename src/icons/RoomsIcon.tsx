import React from "react";

type Props = {
  color?: string,
}
const RoomsIcon = ({ color = '#fff'}: Props) => (
  <svg width={32} height={37} viewBox="0 0 32 37" fill="none">
    <path
      d="M3.556 36.334h24.889A3.56 3.56 0 0032 32.778v-16a1.771 1.771 0 00-.52-1.257L17.256 1.3a1.777 1.777 0 00-2.514 0L.521 15.521A1.773 1.773 0 000 16.778v16a3.56 3.56 0 003.556 3.556zm8.889-3.556V23.89h7.11v8.89h-7.11zm-8.89-15.264L16 5.07l12.445 12.444.001 15.264h-5.335V23.89a3.559 3.559 0 00-3.555-3.555h-7.112a3.56 3.56 0 00-3.555 3.555v8.89H3.556V17.513z"
      fill="#fff"
      fillOpacity={0.65}
    />
  </svg>
);

export default RoomsIcon;
