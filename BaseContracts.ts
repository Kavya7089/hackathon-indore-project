import { ethers } from 'ethers';
import { TransactionError } from '../types/transactions';

export abstract class BaseContract {
  protected contract: ethers.Contract;
  protected signer: ethers.Signer;

  constructor(address: string, abi: any[], signer: ethers.Signer) {
    this.contract = new ethers.Contract(address, abi, signer);
    this.signer = signer;
  }

  protected async handleTransaction<T>(
    transaction: Promise<T>,
    errorMessage: string
  ): Promise<T> {
    try {
      return await transaction;
    } catch (error) {
      const txError: TransactionError = {
        code: (error as any).code || -1,
        message: (error as any).message || errorMessage,
      };
      throw txError;
    }
  }

  protected async getSignerAddress(): Promise<string> {
    return await this.signer.getAddress();
  }
}