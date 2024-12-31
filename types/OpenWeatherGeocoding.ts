interface LocalNames {
  [key: string]: string;
}

interface Location {
  country: string;
  lat: number;
  lon: number;
  local_names?: LocalNames;
  name: string;
  state?: string;
}
