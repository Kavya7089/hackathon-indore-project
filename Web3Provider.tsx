import { createConfig, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { supportedChains } from '../config/chains';
import { http } from 'viem';

const queryClient = new QueryClient();

const config = createConfig({
  chains: supportedChains,
  transports: {
    [supportedChains[0].id]: http(),
    [supportedChains[1].id]: http(),
  },
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
};