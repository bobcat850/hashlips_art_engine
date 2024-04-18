const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "OG_BUDS";
const description = "4200 Unique Cannabis Buds";
const baseUri = "ipfs://NewUriToReplace";
const solanaMetadata = {
  symbol: "OGBUD",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://twitter.com/CCCannasseurs",
  creators: [
    {
      address: "0x3adC2b65777F919a8f093fb428cb40584368dA8d",
      share: 100,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 420,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Durban Poison" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 840,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Grape Ape" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 1260,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Sour Diesel" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 1680,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Skunk" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 2100,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Cheese" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 2520,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Purp" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 2940,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Northern Lights" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 3360,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Original OG" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 3780,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "Pineapple Express" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
  {
    growEditionSizeTo: 4200,
    layersOrder: [
      { name: "Background" },
      { name: "Shoes" },
      { name: "Eyes" },
      { name: "White Widow" },
      { name: "Hands" },
      { name: "Chain" },
      { name: "Headwear"},
      { name: "Glasses"},
    ],
  },
];

const shuffleLayerConfigurations = true;

const debugLogs = false;

const format = {
  width: 3000,
  height: 3000,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
