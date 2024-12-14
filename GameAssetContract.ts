import { BaseContract } from './BaseContract';
import { GameAssetABI } from '../constants/abis/GameAssetABI';
import { Asset, AssetMintParams } from '../types/assets';
import { TransactionResponse } from '../types/transactions';

export class GameAssetContract extends BaseContract {
  constructor(address: string, signer: ethers.Signer) {
    super(address, GameAssetABI, signer);
  }

  async mintAsset(params: AssetMintParams): Promise<TransactionResponse> {
    return this.handleTransaction(
      this.contract.mintAsset(params.to, params.uri, params.rarity),
      'Failed to mint asset'
    );
  }

  async transferAsset(to: string, tokenId: number): Promise<TransactionResponse> {
    const from = await this.getSignerAddress();
    return this.handleTransaction(
      this.contract.transferFrom(from, to, tokenId),
      'Failed to transfer asset'
    );
  }

  async getAssetDetails(tokenId: number): Promise<Asset> {
    return this.handleTransaction(
      this.contract.getAssetDetails(tokenId),
      'Failed to fetch asset details'
    );
  }

  async setAssetTransferable(tokenId: number, transferable: boolean): Promise<TransactionResponse> {
    return this.handleTransaction(
      this.contract.setAssetTransferable(tokenId, transferable),
      'Failed to update asset transferability'
    );
  }

  async balanceOf(owner: string): Promise<number> {
    return this.handleTransaction(
      this.contract.balanceOf(owner),
      'Failed to fetch balance'
    );
  }
}