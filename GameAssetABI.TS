export const GameAssetABI = [
    // ERC721 standard interface
    'function name() view returns (string)',
    'function symbol() view returns (string)',
    'function balanceOf(address owner) view returns (uint256)',
    'function ownerOf(uint256 tokenId) view returns (address)',
    'function transferFrom(address from, address to, uint256 tokenId)',
    'function safeTransferFrom(address from, address to, uint256 tokenId)',
    'function approve(address to, uint256 tokenId)',
    'function getApproved(uint256 tokenId) view returns (address)',
    'function setApprovalForAll(address operator, bool approved)',
    'function isApprovedForAll(address owner, address operator) view returns (bool)',
    // Custom game asset functions
    'function mintAsset(address to, string uri, uint8 rarity) returns (uint256)',
    'function getAssetDetails(uint256 tokenId) view returns (string uri, uint8 rarity, bool transferable)',
    'function setAssetTransferable(uint256 tokenId, bool transferable)',
    // Events
    'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
    'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
    'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
    'event AssetMinted(uint256 indexed tokenId, address indexed owner, uint8 rarity)',
    'event AssetTransferableUpdated(uint256 indexed tokenId, bool transferable)'
  ];