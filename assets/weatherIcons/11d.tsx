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
      fill="#38a1e8"
      d="M20.273 19.131s-.878 2.391-.656 3.306c.184.756.95 1.22 1.71 1.035a1.415 1.415 0 0 0 1.044-1.706c-.222-.915-2.098-2.635-2.098-2.635zM25.73 19.029s-.878 2.391-.656 3.306c.184.756.95 1.221 1.71 1.036a1.415 1.415 0 0 0 1.044-1.706c-.222-.915-2.098-2.635-2.098-2.635zM4.733 19.437s-.878 2.391-.656 3.306c.184.756.95 1.221 1.71 1.036a1.415 1.415 0 0 0 1.044-1.706c-.222-.915-2.098-2.635-2.098-2.635zM8.517 24.638s-.882 2.376-.662 3.283c.182.75.947 1.21 1.708 1.025a1.409 1.409 0 0 0 1.046-1.696c-.22-.908-2.092-2.612-2.092-2.612zM18.27 24.325s-.882 2.376-.662 3.283c.182.75.947 1.21 1.708 1.025a1.409 1.409 0 0 0 1.046-1.696c-.22-.908-2.092-2.612-2.092-2.612zM24.037 24.059s-.882 2.375-.662 3.283c.182.75.947 1.21 1.708 1.025a1.41 1.41 0 0 0 1.047-1.696c-.22-.908-2.092-2.612-2.092-2.612z"
    />
    <Path
      fill="#f9c900"
      d="M9.201 20.936h4.489l-.237-.66c-.428-1.192-.817-2.273-.94-2.611-.204-.565-.212-1.004-.022-1.269a.646.646 0 0 1 .459-.262h1.359c.852 0 1.372.851 1.558 1.578l.199.774c.296 1.149.702 2.722.984 3.949.2.868.003 1.232-.091 1.348-.087.108-.208.16-.371.16h-4.671l1.635 4.671c.076.215.064.334.05.371-.062.009-.285-.042-.485-.331a365.19 365.19 0 0 1-4.395-6.514c-.253-.39-.334-.711-.226-.905.098-.176.388-.299.706-.299z"
    />
    <Path
      fill="#d6e3f2"
      d="M28.314 10.698c1.961 0 3.556 1.619 3.556 3.611 0 1.99-1.595 3.609-3.556 3.609H12.853c-2.461 0-4.463-2.033-4.463-4.532s2.002-4.532 4.463-4.532c.458 0 .914.072 1.352.213l.287.092.101-.287c.945-2.697 3.47-4.51 6.284-4.51 3.44 0 6.294 2.616 6.641 6.086l.032.321.316-.04c.174-.022.317-.032.449-.032z"
    />
    <Path
      fill="#bac6d1"
      d="M4.059 9.99C1.893 9.99.13 11.773.13 13.965c0 2.191 1.763 3.974 3.929 3.974h17.08c2.719 0 4.931-2.238 4.931-4.99s-2.211-4.99-4.931-4.99c-.506 0-1.009.079-1.494.234l-.316.102-.112-.316c-1.044-2.97-3.834-4.965-6.942-4.965-3.8 0-6.954 2.881-7.336 6.701l-.035.354-.349-.044a3.808 3.808 0 0 0-.497-.035z"
    />
  </Svg>
);
export default SvgComponent;