import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.size}
    height={props.size}
    {...props}
  >
    <Path
      fill="#bac6d1"
      d="M27.334 22.253H4.77c-.379 0-.685-.311-.685-.695s.307-.695.685-.695h22.564c.379 0 .685.311.685.695s-.307.695-.685.695zM27.334 25.554H4.77c-.379 0-.685-.311-.685-.695s.307-.695.685-.695h22.564c.379 0 .685.311.685.695s-.307.695-.685.695zM19.692 28.679H4.769c-.379 0-.685-.311-.685-.695s.307-.695.685-.695h14.923c.379 0 .685.311.685.695s-.307.695-.685.695z"
    />
    <Path
      fill="#d6e3f2"
      d="M6.704 10.581c-2.227 0-4.039 1.855-4.039 4.136 0 2.28 1.812 4.136 4.039 4.136h17.561c2.796 0 5.069-2.329 5.069-5.193s-2.274-5.193-5.069-5.193c-.52 0-1.037.082-1.536.243l-.325.106-.115-.329c-1.073-3.09-3.942-5.166-7.137-5.166-3.907 0-7.149 2.998-7.543 6.973l-.036.368-.358-.045a3.89 3.89 0 0 0-.511-.037z"
    />
  </Svg>
);
export default SvgComponent;