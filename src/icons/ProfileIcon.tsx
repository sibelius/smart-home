import * as React from "react";
import { Svg } from '../ui/Svg';

function ProfileIcon({ color = '#1D2343', size = 46, ...rest }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 46 46" fill="none" {...rest}>
      <path
        d="M23.32.002C10.387-.173-.172 10.386.003 23.321.175 35.725 10.275 45.825 22.68 45.998c12.937.177 23.494-10.382 23.317-23.316C45.826 10.274 35.726.174 23.32.002zm13.978 36.183a.442.442 0 01-.678-.035 13.739 13.739 0 00-3.577-3.272C30.228 31.071 26.66 30.076 23 30.076c-3.66 0-7.228.995-10.043 2.802a13.738 13.738 0 00-3.577 3.27.441.441 0 01-.678.036A19.384 19.384 0 013.54 23.332C3.36 12.572 12.19 3.567 22.952 3.54 33.716 3.514 42.46 12.254 42.46 23a19.384 19.384 0 01-5.162 13.185z"
        fill={color}
      />
      <path
        d="M23 11.617c-2.18 0-4.152.817-5.553 2.301-1.4 1.485-2.1 3.539-1.942 5.742.32 4.34 3.683 7.878 7.495 7.878 3.812 0 7.168-3.538 7.495-7.877.164-2.182-.53-4.217-1.954-5.73-1.407-1.492-3.375-2.314-5.541-2.314z"
        fill={color}
      />
    </Svg>
  );
}

export default ProfileIcon;
