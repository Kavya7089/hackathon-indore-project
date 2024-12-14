export const MarketplaceABI = [
    // Core marketplace functions
    'function createListing(uint256 tokenId, uint256 price)',
    'function cancelListing(uint256 listingId)',
    'function buyAsset(uint256 listingId)',
    'function updateListingPrice(uint256 listingId, uint256 newPrice)',
    'function getListingDetails(uint256 listingId) view returns (address seller, uint256 tokenId, uint256 price, bool active)',
    'function getListingsByUser(address user) view returns (uint256[])',
    'function getActiveListing() view returns (uint256[])',
    // Platform fee functions
    'function setPlatformFee(uint256 fee)',
    'function getPlatformFee() view returns (uint256)',
    'function withdrawPlatformFees()',
    // Events
    'event ListingCreated(uint256 indexed listingId, address indexed seller, uint256 tokenId, uint256 price)',
    'event ListingCancelled(uint256 indexed listingId)',
    'event ListingUpdated(uint256 indexed listingId, uint256 newPrice)',
    'event ListingSold(uint256 indexed listingId, address indexed buyer, uint256 price)',
    'event PlatformFeeUpdated(uint256 newFee)',
    'event FeesWithdrawn(uint256 amount)'
  ];