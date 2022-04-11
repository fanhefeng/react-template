import {
  useAccount,
  useBalance,
  useNetwork
} from "wagmi";

import Abi from "../abis/abi";

const useWagmi = () => {
  const contractConfig = {
    addressOrName: import.meta.env.VITE_CONTRACT_ADDRESS as string,
    contractInterface: Abi,
  };

  const [{ data: networkData, error: switchNetworkError }, switchNetwork] =
    useNetwork();

  const [
    { data: accountData, error: accountError, loading: accountLoading },
    disconnect,
  ] = useAccount({
    fetchEns: false,
  });

  const [
    { data: balanceData, error: balanceError, loading: balanceLoading },
    getBalance,
  ] = useBalance({
    addressOrName: accountData?.address,
  });


  return {
    networkData,
    switchNetworkError,

    accountData,
    accountError,
    accountLoading,

    balanceData,
    balanceError,
    balanceLoading
  };
};
export default useWagmi;
