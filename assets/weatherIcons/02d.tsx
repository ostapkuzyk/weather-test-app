import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const FewCloudsDay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width={props.size}
    height={props.size}
    {...props}
  >
    <Path
      fill="#f9c900"
      d="M10.85 11.268c2.676.002 4.843 2.159 4.841 4.817s-2.173 4.812-4.848 4.81C8.167 20.893 6 18.736 6.002 16.078s2.173-4.812 4.848-4.81zM9.695 22.501a.707.707 0 0 1-.023.175l-.804 2.972a.679.679 0 0 1-1.312-.351l.804-2.972a.68.68 0 0 1 1.335.175zM6.329 21.281a.671.671 0 0 1-.219.496l-2.277 2.086c-.276.252-.705.235-.959-.039s-.237-.701.039-.954l2.277-2.085a.683.683 0 0 1 .96.039c.12.129.18.294.18.457zM4.489 18.005c0 .3-.204.574-.509.652l-2.998.771c-.363.093-.734-.124-.828-.484s.125-.729.488-.823l2.998-.77a.679.679 0 0 1 .849.654zM4.584 14.224a.68.68 0 0 1-.849.653l-3-.767a.675.675 0 1 1 .339-1.307l2.999.767c.306.078.51.352.51.653zM6.313 10.938a.668.668 0 0 1-.191.469.683.683 0 0 1-.961.016L2.937 9.282c-.27-.259-.276-.686-.016-.954s.691-.275.961-.016l2.224 2.14a.672.672 0 0 1 .207.486zM9.468 9.062a.68.68 0 0 1-1.338.163l-.757-2.984a.68.68 0 0 1 1.317-.329l.757 2.984c.014.055.02.111.02.166zM14.015 6.298a.73.73 0 0 1-.022.172l-.787 2.976a.68.68 0 0 1-1.314-.343l.787-2.976a.68.68 0 0 1 1.337.172zM18.94 8.867a.67.67 0 0 1-.234.509l-2.337 2.02c-.283.244-.712.214-.958-.066s-.216-.708.067-.952l2.337-2.019a.682.682 0 0 1 1.125.509zM21.348 13.371a.675.675 0 0 1-.5.65l-2.986.814c-.362.099-.736-.112-.835-.472s.113-.731.475-.829l2.986-.814a.68.68 0 0 1 .859.651zM21.297 18.632a.68.68 0 0 1-.849.653l-3-.767a.674.674 0 1 1 .339-1.307l2.999.767c.306.078.51.352.51.653zM18.761 23.266a.67.67 0 0 1-.204.482.683.683 0 0 1-.961-.01l-2.165-2.201c-.262-.267-.257-.693.011-.954s.699-.256.961.01l2.165 2.201a.671.671 0 0 1 .193.472zM14.085 25.754a.68.68 0 0 1-1.335.175l-.806-2.971a.68.68 0 0 1 1.312-.351l.805 2.971a.674.674 0 0 1 .024.177z"
    />
    <Path
      fill="#d6e3f2"
      d="M9.857 18.714c-2.166 0-3.928 1.768-3.928 3.942 0 2.173 1.763 3.942 3.928 3.942h17.081c2.719 0 4.931-2.22 4.931-4.949S29.658 16.7 26.938 16.7c-.506 0-1.009.078-1.494.232l-.316.101-.112-.314c-1.044-2.945-3.834-4.924-6.942-4.924a7.358 7.358 0 0 0-7.336 6.646l-.035.351-.349-.043a3.992 3.992 0 0 0-.497-.035z"
    />
  </Svg>
);
export default FewCloudsDay;