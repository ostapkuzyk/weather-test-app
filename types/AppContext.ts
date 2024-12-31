export type TAddress = {
  name: string;
  lat?: number;
  lon?: number;
};

export interface AppContextType {
  address: TAddress;
  handleChangeAddress: (value: TAddress) => void;
}
