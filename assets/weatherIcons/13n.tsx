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
      fill="#4fb4ed"
      d="M26.044 17.044a.719.719 0 0 0-.873-.513l-4.659 1.248L17.431 16l3.081-1.78 4.67 1.251a.716.716 0 0 0 .357-1.386l-3.27-.877 3.177-1.833a.717.717 0 0 0-.725-1.239l-3.167 1.831.877-3.273a.725.725 0 0 0-.076-.546.705.705 0 0 0-.437-.329.725.725 0 0 0-.871.507l-1.248 4.654-3.081 1.78v-3.559l3.409-3.409a.725.725 0 0 0-.001-1.01.712.712 0 0 0-1.014-.001l-2.394 2.394V5.514a.715.715 0 0 0-1.432 0v3.661l-2.393-2.393a.715.715 0 0 0-1.017.002.725.725 0 0 0 .003 1.01l3.407 3.407v3.559l-3.082-1.78-1.249-4.658a.722.722 0 0 0-.869-.503.72.72 0 0 0-.514.877l.877 3.271-3.172-1.833a.717.717 0 0 0-.712 1.243l3.169 1.828-3.264.876c-.185.047-.34.162-.437.327s-.125.366-.076.554a.72.72 0 0 0 .878.504l4.651-1.247 3.084 1.78-3.081 1.779-4.657-1.248a.723.723 0 0 0-.547.077.698.698 0 0 0-.324.427.712.712 0 0 0 .503.88l3.27.877-3.174 1.831a.715.715 0 0 0 .364 1.333.721.721 0 0 0 .357-.094l3.17-1.832-.876 3.268a.711.711 0 0 0 .497.876.65.65 0 0 0 .194.028.73.73 0 0 0 .693-.531l1.244-4.654 3.081-1.779v3.559l-3.404 3.407a.718.718 0 0 0 1.014 1.013l2.391-2.393v3.66a.717.717 0 0 0 1.432 0v-3.661l2.392 2.392a.707.707 0 0 0 .506.212.718.718 0 0 0 .508-1.223l-3.407-3.407v-3.559l3.081 1.782 1.246 4.657a.72.72 0 0 0 .881.498.715.715 0 0 0 .501-.875l-.877-3.268 3.174 1.831a.716.716 0 0 0 .975-.265.724.724 0 0 0-.26-.98l-3.169-1.828 3.268-.876a.708.708 0 0 0 .437-.335.703.703 0 0 0 .071-.538z"
    />
  </Svg>
);
export default SvgComponent;