import type { IconMoonProps } from 'react-native-icomoon';
import Icomoon, { iconList } from 'react-native-icomoon';

import json from '../../assets/icomoon/selection.json';

type IconProps = Omit<IconMoonProps, 'iconSet'>;

export const Icon = ({ name, ...restProps }: IconProps) => {
  return <Icomoon iconSet={json} name={name} {...restProps} />;
};

export const iconNames = iconList(json);