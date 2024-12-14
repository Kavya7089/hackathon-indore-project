import { BaseContract } from './BaseContract';
import { MarketplaceABI } from '../constants/abis/MarketplaceABI';
import { CreateListingParams, Listing, MarketplaceStats } from '../types/marketplace';
import { TransactionResponse } from '../types/transactions';
import { parseEther } from '../utils/format';

export class MarketplaceContract extends BaseContract {
  constructor(address: string, signer: ethers.Signer) {
    super(address, MarketplaceABI, signer);
  }

  async createListing(params: CreateListingParams): Promise<TransactionResponse> {
    const priceInWei = parseEther(params.price);
    return this.handleTransaction(
      this.contract.createListing(params.tokenId, priceInWei),
      'Failed to create listing'
    );
  }

  async buyAsset(listingId: number, value: string): Promise<TransactionResponse> {
    const valueInWei = parseEther(value);
    return this.handleTransaction(
      this.contract.buyAsset(listingId, { value: valueInWei }),
      'Failed to buy asset'
    );
  }

  async cancelListing(listingId: number): Promise<TransactionResponse> {
    return this.handleTransaction(
      this.contract.cancelListing(listingId),
      'Failed to cancel listing'
    );
  }

  async getListing(listingId: number): Promise<Listing> {
    return this.handleTransaction(
      this.contract.getListingDetails(listingId),
      'Failed to fetch listing'
    );
  }

  async getListingsByUser(user: string): Promise<number[]> {
    return this.handleTransaction(
      this.contract.getListingsByUser(user),
      'Failed to fetch user listings'
    );
  }

  async getMarketplaceStats(): Promise<MarketplaceStats> {
    // Implementation would depend on your specific contract methods
    throw new Error('Not implemented');
  }
}