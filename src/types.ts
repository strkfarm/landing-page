export interface TokenInfo {
    token: string;
    decimals: number;
    displayDecimals: number;
    name: string;
    ekuboPriceKey?: string;
    isERC4626: boolean;
  }