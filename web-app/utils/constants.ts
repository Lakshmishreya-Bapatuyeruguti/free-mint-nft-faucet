import EthereumLogo from '@/public/images/ethereum.png';
import BscLogo from '@/public/images/bsc.png';
import PolygonLogo from '@/public/images/polygon.png';
import {
  mainnet,
  goerli,
  sepolia,
  polygon,
  polygonMumbai,
  bsc,
  bscTestnet,
} from '@wagmi/core/chains';

export const blockchains = [
  {
    ...mainnet,
    name: 'Mainnet',
    logo: EthereumLogo,
  },
  {
    ...goerli,
    name: 'Goerli',
    logo: EthereumLogo,
  },
  {
    ...sepolia,
    name: 'Seploia',
    logo: EthereumLogo,
  },
  {
    ...polygon,
    name: 'Polygon',
    logo: PolygonLogo,
  },
  {
    ...polygonMumbai,
    name: 'Mumbai',
    logo: PolygonLogo,
  },
  {
    ...bsc,
    name: 'BSC',
    logo: BscLogo,
  },
  {
    ...bscTestnet,
    name: 'Bsc Testnet',
    logo: BscLogo,
  },
];

interface ContractAddresses {
  [key: number]: string;
}

export const contractAddresses721: ContractAddresses = {
  1: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
  5: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
  11155111: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
};

export const contractAddresses1155: ContractAddresses = {
  1: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
  5: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
  11155111: '0x8C10AfbA44d5871850b3Ae33Bd7f65E46457995a',
};
