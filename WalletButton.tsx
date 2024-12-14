import React from 'react';
import { Wallet } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import { motion } from 'framer-motion';

export const WalletButton: React.FC = () => {
  const { address, isConnected, connectWallet, disconnect } = useWallet();

  const formatAddress = (addr: string) => {
    return ${addr.slice(0, 6)}...${addr.slice(-4)};
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={isConnected ? () => disconnect() : connectWallet}
      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition"
    >
      <Wallet className="h-5 w-5" />
      <span>
        {isConnected ? formatAddress(address!) : 'Connect Wallet'}
      </span>
    </motion.button>
  );
};