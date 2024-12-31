import ClearSkyDay from './01d';
import ClearSkyNight from './01n';
import FewCloudsDay from './02d';
import FewCloudsNight from './02n';
import ScatteredCloudsDay from './03d';
import ScatteredCloudsNight from './03n';
import BrokenCloudsDay from './04d';
import BrokenCloudsNight from './04n';
import ShowerRainDay from './09d';
import ShowerRainNight from './09n';
import RainDay from './10d';
import RainNight from './10n';
import ThunderstormDay from './11d';
import ThunderstormNight from './11n';
import SnowDay from './13d';
import SnowNight from './13n';
import MistDay from './50d';
import MistNight from './50n';

export const weatherIcons = {
  clearSkyDay: ClearSkyDay,
  clearSkyNight: ClearSkyNight,
  fewCloudsDay: FewCloudsDay,
  fewCloudsNight: FewCloudsNight,
  scatteredCloudsDay: ScatteredCloudsDay,
  scatteredCloudsNight: ScatteredCloudsNight,
  brokenCloudsDay: BrokenCloudsDay,
  brokenCloudsNight: BrokenCloudsNight,
  showerRainDay: ShowerRainDay,
  showerRainNight: ShowerRainNight,
  rainDay: RainDay,
  rainNight: RainNight,
  thunderstormDay: ThunderstormDay,
  thunderstormNight: ThunderstormNight,
  snowDay: SnowDay,
  snowNight: SnowNight,
  mistDay: MistDay,
  mistNight: MistNight,
};

export const weatherIconsCodes = {
  '01d': ClearSkyDay,
  '01m': ClearSkyNight,
  '02d': FewCloudsDay,
  '02n': FewCloudsNight,
  '03d': ScatteredCloudsDay,
  '03n': ScatteredCloudsNight,
  '04d': BrokenCloudsDay,
  '04n': BrokenCloudsNight,
  '09d': ShowerRainDay,
  '09n': ShowerRainNight,
  '10d': RainDay,
  '10n': RainNight,
  '11d': ThunderstormDay,
  '11n': ThunderstormNight,
  '13d': SnowDay,
  '13n': SnowNight,
  '50d': MistDay,
  '50n': MistNight,
};