import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const ScatteredCloudsDay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.size}
    height={props.size}
    {...props}
  >
    <Path
      fill="#d6e3f2"
      d="M6.678 15.506a4.05 4.05 0 0 0-4.051 4.039 4.05 4.05 0 0 0 4.051 4.038h17.611c2.804 0 5.084-2.274 5.084-5.07s-2.28-5.07-5.084-5.07c-.522 0-1.04.08-1.54.238l-.326.103-.115-.322a7.614 7.614 0 0 0-7.158-5.044 7.569 7.569 0 0 0-7.564 6.808l-.037.36-.359-.044a4.066 4.066 0 0 0-.512-.036z"
    />
  </Svg>
);
export default ScatteredCloudsDay;