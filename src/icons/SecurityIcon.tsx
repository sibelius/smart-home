import React from "react";

type Props = {
  color?: string
}
const SecurityIcon = ({ color = '#fff' }: Props) => (
  <svg width={31} height={39} viewBox="0 0 31 39" fill="none">
    <path
      d="M25.188 11.7V9.75C25.188 4.374 20.841 0 15.5 0c-5.342 0-9.688 4.374-9.688 9.75v5.85H3.875C1.738 15.6 0 17.35 0 19.5v15.6C0 37.25 1.738 39 3.875 39h23.25C29.262 39 31 37.25 31 35.1V19.5c0-2.15-1.738-3.9-3.875-3.9H9.687V9.75c0-3.225 2.608-5.85 5.813-5.85 3.205 0 5.813 2.625 5.813 5.85v1.95h3.875zm1.937 7.8l.004 15.6H3.875V19.5h23.25z"
      fill={color}
      fillOpacity={0.65}
    />
  </svg>
);

export default SecurityIcon;
