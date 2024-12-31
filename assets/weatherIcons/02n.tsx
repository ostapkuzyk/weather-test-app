import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FewCloudsNight = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.size}
    height={props.size}
    {...props}
  >
    <Path
      fill="#adc1e3"
      d="M8.515 4.761c-1.098 4.426-2.76 17.501 14.397 17.182a.564.564 0 0 1 .477.889c-1.173 1.659-4.363 4.855-11.292 4.267 0 0-9.954-1.239-10.384-12.528 0 0-.4-6.578 5.904-10.476.46-.284 1.029.14.898.666z"
    />
    <Path
      fill="#8aa1c4"
      d="M7.655 15.91c.144 1.212-.716 2.312-1.919 2.456s-2.296-.721-2.439-1.933c-.144-1.212.715-2.312 1.919-2.456s2.295.721 2.439 1.933zM10.603 22.378c.109.916-.541 1.747-1.451 1.857s-1.735-.545-1.843-1.461c-.109-.916.541-1.747 1.451-1.857s1.735.545 1.843 1.461zM13.879 22.264c.09.764-.452 1.458-1.21 1.548s-1.447-.454-1.537-1.219c-.091-.764.451-1.458 1.21-1.548s1.447.454 1.537 1.219zM19.322 23.699c.068.576-.34 1.099-.912 1.168s-1.091-.343-1.159-.919c-.068-.576.34-1.099.912-1.167s1.091.343 1.159.919zM7.191 11.332c.068.576-.34 1.099-.912 1.168s-1.091-.343-1.159-.919c-.068-.576.34-1.099.912-1.167s1.091.343 1.159.919z"
    />
    <Path
      fill="#d6e3f2"
      d="M7.186 19.606c-2.273 0-4.124 1.882-4.124 4.195 0 2.312 1.85 4.195 4.124 4.195h17.93c2.855 0 5.176-2.363 5.176-5.267s-2.321-5.267-5.176-5.267c-.531 0-1.059.084-1.568.247l-.332.107-.117-.334c-1.096-3.134-4.024-5.24-7.287-5.24-3.989 0-7.299 3.041-7.701 7.073l-.037.374-.366-.046a4.057 4.057 0 0 0-.522-.037z"
    />
  </Svg>
);
export default FewCloudsNight;