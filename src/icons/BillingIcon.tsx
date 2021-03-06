import React from "react";

type Props = {
  color?: string
}
const BillingIcon = ({ color = '#fff' }:Props) => (
  <svg width={17} height={31} viewBox="0 0 17 31" fill="none">
    <path
      d="M9.01 13.606c-3.859-1.017-5.1-2.067-5.1-3.703 0-1.877 1.717-3.186 4.59-3.186 2.414 0 3.621.93 4.063 2.41.204.69.765 1.206 1.479 1.206h.51a1.63 1.63 0 001.53-2.187c-.714-2.032-2.38-3.72-5.032-4.374V2.583C11.05 1.153 9.911 0 8.5 0 7.089 0 5.95 1.154 5.95 2.583V3.72C2.652 4.443 0 6.613 0 9.937c0 3.979 3.247 5.96 7.99 7.113 4.25 1.033 5.1 2.549 5.1 4.15 0 1.189-.833 3.083-4.59 3.083-2.805 0-4.25-1.016-4.811-2.462-.255-.672-.833-1.154-1.53-1.154h-.476c-1.139 0-1.938 1.17-1.513 2.239.969 2.393 3.23 3.806 5.78 4.357v1.154C5.95 29.847 7.089 31 8.5 31c1.411 0 2.55-1.154 2.55-2.583v-1.12c3.315-.637 5.95-2.583 5.95-6.114 0-4.89-4.131-6.561-7.99-7.577z"
      fill={color}
      fillOpacity={0.65}
    />
  </svg>
);

export default BillingIcon;
