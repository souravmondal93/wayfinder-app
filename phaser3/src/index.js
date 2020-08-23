import Phaser, { Game, Scene } from 'phaser';
import IsoPlugin from 'phaser3-plugin-isometric';
// import * as assets from './assets';

// import logoImg from "./assets/logo.png";

import { characterPickObject } from './util/characterPickUp';

import floorE from "./assets/tileset/tileset-images/prototype/Isometric/floor_E.png";
import wallCurveS from "./assets/tileset/tileset-images/prototype/Isometric/wallCurve_S.png";
import wallE from "./assets/tileset/tileset-images/prototype/Isometric/wall_E.png";
import wallS from "./assets/tileset/tileset-images/prototype/Isometric/wall_S.png";
import columnW from "./assets/tileset/tileset-images/prototype/Isometric/column_W.png";
import columnCornerW from "./assets/tileset/tileset-images/prototype/Isometric/columnCorner_W.png";
import slabS from "./assets/tileset/tileset-images/prototype/Isometric/slab_S.png";
import slabW from "./assets/tileset/tileset-images/prototype/Isometric/slab_W.png";
import slabHalfE from "./assets/tileset/tileset-images/prototype/Isometric/slabHalf_E.png";
import slabHalfN from "./assets/tileset/tileset-images/prototype/Isometric/slabHalf_N.png";
import slabHalfS from "./assets/tileset/tileset-images/prototype/Isometric/slabHalf_S.png";

import pumpkinBasicNE from "./assets/tileset/tileset-images/foodkit/output/pumpkinBasic_NE.png-512x256.png";
import cauliflowerNE from "./assets/tileset/tileset-images/foodkit/output/cauliflower_NE.png-512x256.png";
import cabbageSE from "./assets/tileset/tileset-images/foodkit/output/cabbage_SE.png-512x256.png";
import carrotNE from "./assets/tileset/tileset-images/foodkit/output/carrot_NE.png-512x256.png";
import cornNE from "./assets/tileset/tileset-images/foodkit/output/corn_NE.png-512x256.png";
import radishNE from "./assets/tileset/tileset-images/foodkit/output/radish_NE.png-512x256.png";
import pumpkinNW from "./assets/tileset/tileset-images/foodkit/output/pumpkin_NW.png-512x256.png";
import pepperNE from "./assets/tileset/tileset-images/foodkit/output/pepper_NE.png-512x256.png";
import beetNE from "./assets/tileset/tileset-images/foodkit/output/beet_NE.png-512x256.png";
import broccoliSW from "./assets/tileset/tileset-images/foodkit/output/broccoli_SW.png-512x256.png";
import paprikaNE from "./assets/tileset/tileset-images/foodkit/output/paprika_NE.png-512x256.png";
import eggplantSW from "./assets/tileset/tileset-images/foodkit/output/eggplant_SW.png-512x256.png";
import mushroomSE from "./assets/tileset/tileset-images/foodkit/output/mushroom_SE.png-512x256.png";
import leekNE from "./assets/tileset/tileset-images/foodkit/output/leek_NE.png-512x256.png";
import subNE from "./assets/tileset/tileset-images/foodkit/output/sub_NE.png-512x256.png";
import pineappleNE from "./assets/tileset/tileset-images/foodkit/output/pineapple_NE.png-512x256.png";
import bananaNE from "./assets/tileset/tileset-images/foodkit/output/banana_NE.png-512x256.png";
import pearNE from "./assets/tileset/tileset-images/foodkit/output/pear_NE.png-512x256.png";
import watermelonNW from "./assets/tileset/tileset-images/foodkit/output/watermelon_NW.png-512x256.png";
import grapesSE from "./assets/tileset/tileset-images/foodkit/output/grapes_SE.png-512x256.png";
import orangeNE from "./assets/tileset/tileset-images/foodkit/output/orange_NE.png-512x256.png";
import appleSE from "./assets/tileset/tileset-images/foodkit/output/apple_SE.png-512x256.png";
import avocadoHalfSE from "./assets/tileset/tileset-images/foodkit/output/avocadoHalf_SE.png-512x256.png";
import appleHalfSE from "./assets/tileset/tileset-images/foodkit/output/appleHalf_SE.png-512x256.png";
import cherriesNE from "./assets/tileset/tileset-images/foodkit/output/cherries_NE.png-512x256.png";
import strawberryNE from "./assets/tileset/tileset-images/foodkit/output/strawberry_NE.png-512x256.png";
import onionHalfNW from "./assets/tileset/tileset-images/foodkit/output/onionHalf_NW.png-512x256.png";
import cartonSE from "./assets/tileset/tileset-images/foodkit/output/carton_SE.png-512x256.png";
import wholeHamNW from "./assets/tileset/tileset-images/foodkit/output/wholeHam_NW.png-512x256.png";
import turkeyNE from "./assets/tileset/tileset-images/foodkit/output/turkey_NE.png-512x256.png";
import baconNW from "./assets/tileset/tileset-images/foodkit/output/bacon_NW.png-512x256.png";
import wholerHamSE from "./assets/tileset/tileset-images/foodkit/output/wholerHam_SE.png-512x256.png";
import fishNW from "./assets/tileset/tileset-images/foodkit/output/fish_NW.png-512x256.png";
import baconRawNE from "./assets/tileset/tileset-images/foodkit/output/baconRaw_NE.png-512x256.png";
import cartonSmallSW from "./assets/tileset/tileset-images/foodkit/output/cartonSmall_SW.png-512x256.png";
import cheeseCutSW from "./assets/tileset/tileset-images/foodkit/output/cheeseCut_SW.png-512x256.png";
import wineRedNE from "./assets/tileset/tileset-images/foodkit/output/wineRed_NE.png-512x256.png";
import sodaSE from "./assets/tileset/tileset-images/foodkit/output/soda_SE.png-512x256.png";
import sodaGlassNE from "./assets/tileset/tileset-images/foodkit/output/sodaGlass_NE.png-512x256.png";
import frappeSW from "./assets/tileset/tileset-images/foodkit/output/frappe_SW.png-512x256.png";
import sodaCanNW from "./assets/tileset/tileset-images/foodkit/output/sodaCan_NW.png-512x256.png";
import sodaBottleNE from "./assets/tileset/tileset-images/foodkit/output/sodaBottle_NE.png-512x256.png";
import wineWhiteSE from "./assets/tileset/tileset-images/foodkit/output/wineWhite_SE.png-512x256.png";
import sodaCanSE from "./assets/tileset/tileset-images/foodkit/output/sodaCan_SE.png-512x256.png";
import bowlCerealNW from "./assets/tileset/tileset-images/foodkit/output/bowlCereal_NW.png-512x256.png";
import bowlCerealNE from "./assets/tileset/tileset-images/foodkit/output/bowlCereal_NE.png-512x256.png";
import cupTheaNW from "./assets/tileset/tileset-images/foodkit/output/cupThea_NW.png-512x256.png";
import cupTeaSE from "./assets/tileset/tileset-images/foodkit/output/cupTea_SE.png-512x256.png";
import cakeBirthdaySE from "./assets/tileset/tileset-images/foodkit/output/cakeBirthday_SE.png-512x256.png";
import cakeNW from "./assets/tileset/tileset-images/foodkit/output/cake_NW.png-512x256.png";
import hotDogSW from "./assets/tileset/tileset-images/foodkit/output/hotDog_SW.png-512x256.png";
import croissantNE from "./assets/tileset/tileset-images/foodkit/output/croissant_NE.png-512x256.png";
import bowlSoupNW from "./assets/tileset/tileset-images/foodkit/output/bowlSoup_NW.png-512x256.png";
import burgerCheeseDoubleNW from "./assets/tileset/tileset-images/foodkit/output/burgerCheeseDouble_NW.png-512x256.png";
import bowlBrothSE from "./assets/tileset/tileset-images/foodkit/output/bowlBroth_SE.png-512x256.png";
import friesNE from "./assets/tileset/tileset-images/foodkit/output/fries_NE.png-512x256.png";
import tacoSW from "./assets/tileset/tileset-images/foodkit/output/taco_SW.png-512x256.png";
import chineseSW from "./assets/tileset/tileset-images/foodkit/output/chinese_SW.png-512x256.png";
import loafNE from "./assets/tileset/tileset-images/foodkit/output/loaf_NE.png-512x256.png";
import iceCreamCupSW from "./assets/tileset/tileset-images/foodkit/output/iceCreamCup_SW.png-512x256.png";
import bowlNE from "./assets/tileset/tileset-images/foodkit/output/bowl_NE.png-512x256.png";
import rollingPinSW from "./assets/tileset/tileset-images/foodkit/output/rollingPin_SW.png-512x256.png";
import cookingSpatulaNE from "./assets/tileset/tileset-images/foodkit/output/cookingSpatula_NE.png-512x256.png";
import cookingKnifeNE from "./assets/tileset/tileset-images/foodkit/output/cookingKnife_NE.png-512x256.png";
import utensilKnifeNE from "./assets/tileset/tileset-images/foodkit/output/utensilKnife_NE.png-512x256.png";
import cakeSlicerNE from "./assets/tileset/tileset-images/foodkit/output/cakeSlicer_NE.png-512x256.png";
import cookingKnifeChoppingNE from "./assets/tileset/tileset-images/foodkit/output/cookingKnifeChopping_NE.png-512x256.png";
import cookingSpatulaSW from "./assets/tileset/tileset-images/foodkit/output/cookingSpatula_SW.png-512x256.png";
import loafBaguetteNE from "./assets/tileset/tileset-images/foodkit/output/loafBaguette_NE.png-512x256.png";
import bagNW from "./assets/tileset/tileset-images/foodkit/output/bag_NW.png-512x256.png";
import bagNE from "./assets/tileset/tileset-images/foodkit/output/bag_NE.png-512x256.png";
import honeySW from "./assets/tileset/tileset-images/foodkit/output/honey_SW.png-512x256.png";
import bagFlatNW from "./assets/tileset/tileset-images/foodkit/output/bagFlat_NW.png-512x256.png";
import bagFlatNE from "./assets/tileset/tileset-images/foodkit/output/bagFlat_NE.png-512x256.png";
import waffleNW from "./assets/tileset/tileset-images/foodkit/output/waffle_NW.png-512x256.png";
import frikandelSpeciaalNE from "./assets/tileset/tileset-images/foodkit/output/frikandelSpeciaal_NE.png-512x256.png";
import muffinNW from "./assets/tileset/tileset-images/foodkit/output/muffin_NW.png-512x256.png";
import popsicleSE from "./assets/tileset/tileset-images/foodkit/output/popsicle_SE.png-512x256.png";
import popsicleChocolateSE from "./assets/tileset/tileset-images/foodkit/output/popsicleChocolate_SE.png-512x256.png";
import cupcakeSE from "./assets/tileset/tileset-images/foodkit/output/cupcake_SE.png-512x256.png";
import sundaeSW from "./assets/tileset/tileset-images/foodkit/output/sundae_SW.png-512x256.png";
import iceCreamSE from "./assets/tileset/tileset-images/foodkit/output/iceCream_SE.png-512x256.png";
import sundaeSE from "./assets/tileset/tileset-images/foodkit/output/sundae_SE.png-512x256.png";
import popsicleChocolateNW from "./assets/tileset/tileset-images/foodkit/output/popsicleChocolate_NW.png-512x256.png";

import Human0Idle0 from "./assets/tileset/tileset-images/character/Human/Human_0_Idle0.png";
import Human6Idle0 from "./assets/tileset/tileset-images/character/Human/Human_6_Idle0.png";

// import Human_0_Pickup0 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup0.png";
// import Human_0_Pickup1 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup1.png";
// import Human_0_Pickup2 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup2.png";
// import Human_0_Pickup3 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup3.png";
// import Human_0_Pickup4 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup4.png";
// import Human_0_Pickup5 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup5.png";
// import Human_0_Pickup6 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup6.png";
// import Human_0_Pickup7 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup7.png";
// import Human_0_Pickup8 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup9.png";
// import Human_0_Pickup9 from "./assets/tileset/tileset-images/character/Human/Human_0_Pickup8.png";

/**
 * Character Asset
 */
import characterSpriteImage from './assets/spritesheet/characterSpriteImage.png';
import characterSpriteJson from './assets/spritesheet/characterSpriteImage.json';

import map from './assets/IsometricMap.json';
import { update } from 'xstate/lib/actionTypes';


class IsoInteractionExample extends Scene {
  constructor() {
    const sceneConfig = {
      key: 'IsoInteractionExample',
      mapAdd: { isoPlugin: 'iso' }
    };

    let characterIsoSprite;

    super(sceneConfig);

    // phaser3/src/assets/tileset/tileset-images/character/Human
    // phaser3/src/assets/tileset/tileset-images/foodkit/output
    // phaser3/src/assets/tileset/tileset-images/prototype/Isometric
    // this.characterImages = this.importAll(require.context('./assets/tileset/tileset-images/character/Human', false, /\.(png|jpe?g|svg|tsx|json)$/));
    // this.foodImages = this.importAll(require.context('./assets/tileset/tileset-images/foodkit/output', false, /\.(png|jpe?g|svg|tsx|json)$/));
    // this.prototypeImages = this.importAll(require.context('./assets/tileset/tileset-images/prototype/Isometric', false, /\.(png|jpe?g|svg|tsx|json)$/));
    // phaser3/src/assets/tileset/tileset-images
    // this.tileSets = this.importAll(require.context('./assets/tileset', false, /\.(png|jpe?g|svg|tsx|json)$/));
    // phaser3/src/assets
    // this.map = this.importAll(require.context('./assets', false, /\.(png|jpe?g|svg|tsx|json)$/));


    // console.log('characterImages: ', this.characterImages);
    // console.log('foodImages: ', this.foodImages);
    // console.log('prototypeImages: ', this.prototypeImages);
    // console.log('tileSets: ', this.tileSets);
    // console.log('map: ', map, blockImg);
  }

  loadAssetsJSON() {
    const jsonFilePath = {
      "loadFiles": {
        "character": {
          "path": "assets/tileset/tileset-images/character/Human",
          "files": [
            "Human_0_Idle0.png",
            "Human_0_Pickup0.png",
            "Human_0_Pickup1.png",
            "Human_0_Pickup2.png",
            "Human_0_Pickup3.png",
            "Human_0_Pickup4.png",
            "Human_0_Pickup5.png",
            "Human_0_Pickup6.png",
            "Human_0_Pickup7.png",
            "Human_0_Pickup8.png",
            "Human_0_Pickup9.png",
            "Human_0_Run0.png",
            "Human_0_Run1.png",
            "Human_0_Run2.png",
            "Human_0_Run3.png",
            "Human_0_Run4.png",
            "Human_0_Run5.png",
            "Human_0_Run6.png",
            "Human_0_Run7.png",
            "Human_0_Run8.png",
            "Human_0_Run9.png",
            "Human_1_Idle0.png",
            "Human_1_Pickup0.png",
            "Human_1_Pickup1.png",
            "Human_1_Pickup2.png",
            "Human_1_Pickup3.png",
            "Human_1_Pickup4.png",
            "Human_1_Pickup5.png",
            "Human_1_Pickup6.png",
            "Human_1_Pickup7.png",
            "Human_1_Pickup8.png",
            "Human_1_Pickup9.png",
            "Human_1_Run0.png",
            "Human_1_Run1.png",
            "Human_1_Run2.png",
            "Human_1_Run3.png",
            "Human_1_Run4.png",
            "Human_1_Run5.png",
            "Human_1_Run6.png",
            "Human_1_Run7.png",
            "Human_1_Run8.png",
            "Human_1_Run9.png",
            "Human_2_Idle0.png",
            "Human_2_Pickup0.png",
            "Human_2_Pickup1.png",
            "Human_2_Pickup2.png",
            "Human_2_Pickup3.png",
            "Human_2_Pickup4.png",
            "Human_2_Pickup5.png",
            "Human_2_Pickup6.png",
            "Human_2_Pickup7.png",
            "Human_2_Pickup8.png",
            "Human_2_Pickup9.png",
            "Human_2_Run0.png",
            "Human_2_Run1.png",
            "Human_2_Run2.png",
            "Human_2_Run3.png",
            "Human_2_Run4.png",
            "Human_2_Run5.png",
            "Human_2_Run6.png",
            "Human_2_Run7.png",
            "Human_2_Run8.png",
            "Human_2_Run9.png",
            "Human_3_Idle0.png",
            "Human_3_Pickup0.png",
            "Human_3_Pickup1.png",
            "Human_3_Pickup2.png",
            "Human_3_Pickup3.png",
            "Human_3_Pickup4.png",
            "Human_3_Pickup5.png",
            "Human_3_Pickup6.png",
            "Human_3_Pickup7.png",
            "Human_3_Pickup8.png",
            "Human_3_Pickup9.png",
            "Human_3_Run0.png",
            "Human_3_Run1.png",
            "Human_3_Run2.png",
            "Human_3_Run3.png",
            "Human_3_Run4.png",
            "Human_3_Run5.png",
            "Human_3_Run6.png",
            "Human_3_Run7.png",
            "Human_3_Run8.png",
            "Human_3_Run9.png",
            "Human_4_Idle0.png",
            "Human_4_Pickup0.png",
            "Human_4_Pickup1.png",
            "Human_4_Pickup2.png",
            "Human_4_Pickup3.png",
            "Human_4_Pickup4.png",
            "Human_4_Pickup5.png",
            "Human_4_Pickup6.png",
            "Human_4_Pickup7.png",
            "Human_4_Pickup8.png",
            "Human_4_Pickup9.png",
            "Human_4_Run0.png",
            "Human_4_Run1.png",
            "Human_4_Run2.png",
            "Human_4_Run3.png",
            "Human_4_Run4.png",
            "Human_4_Run5.png",
            "Human_4_Run6.png",
            "Human_4_Run7.png",
            "Human_4_Run8.png",
            "Human_4_Run9.png",
            "Human_5_Idle0.png",
            "Human_5_Pickup0.png",
            "Human_5_Pickup1.png",
            "Human_5_Pickup2.png",
            "Human_5_Pickup3.png",
            "Human_5_Pickup4.png",
            "Human_5_Pickup5.png",
            "Human_5_Pickup6.png",
            "Human_5_Pickup7.png",
            "Human_5_Pickup8.png",
            "Human_5_Pickup9.png",
            "Human_5_Run0.png",
            "Human_5_Run1.png",
            "Human_5_Run2.png",
            "Human_5_Run3.png",
            "Human_5_Run4.png",
            "Human_5_Run5.png",
            "Human_5_Run6.png",
            "Human_5_Run7.png",
            "Human_5_Run8.png",
            "Human_5_Run9.png",
            "Human_6_Idle0.png",
            "Human_6_Pickup0.png",
            "Human_6_Pickup1.png",
            "Human_6_Pickup2.png",
            "Human_6_Pickup3.png",
            "Human_6_Pickup4.png",
            "Human_6_Pickup5.png",
            "Human_6_Pickup6.png",
            "Human_6_Pickup7.png",
            "Human_6_Pickup8.png",
            "Human_6_Pickup9.png",
            "Human_6_Run0.png",
            "Human_6_Run1.png",
            "Human_6_Run2.png",
            "Human_6_Run3.png",
            "Human_6_Run4.png",
            "Human_6_Run5.png",
            "Human_6_Run6.png",
            "Human_6_Run7.png",
            "Human_6_Run8.png",
            "Human_6_Run9.png",
            "Human_7_Idle0.png",
            "Human_7_Pickup0.png",
            "Human_7_Pickup1.png",
            "Human_7_Pickup2.png",
            "Human_7_Pickup3.png",
            "Human_7_Pickup4.png",
            "Human_7_Pickup5.png",
            "Human_7_Pickup6.png",
            "Human_7_Pickup7.png",
            "Human_7_Pickup8.png",
            "Human_7_Pickup9.png",
            "Human_7_Run0.png",
            "Human_7_Run1.png",
            "Human_7_Run2.png",
            "Human_7_Run3.png",
            "Human_7_Run4.png",
            "Human_7_Run5.png",
            "Human_7_Run6.png",
            "Human_7_Run7.png",
            "Human_7_Run8.png",
            "Human_7_Run9.png"
          ]
        },
        "foodkit": {
          "path": "assets/tileset/tileset-images/foodkit/output",
          "files": [
            "appleHalf_NE.png-512x256.png",
            "appleHalf_NW.png-512x256.png",
            "appleHalf_SE.png-512x256.png",
            "appleHalf_SW.png-512x256.png",
            "apple_NE.png-512x256.png",
            "apple_NW.png-512x256.png",
            "apple_SE.png-512x256.png",
            "apple_SW.png-512x256.png",
            "avocadoHalf_NE.png-512x256.png",
            "avocadoHalf_NW.png-512x256.png",
            "avocadoHalf_SE.png-512x256.png",
            "avocadoHalf_SW.png-512x256.png",
            "avocado_NE.png-512x256.png",
            "avocado_NW.png-512x256.png",
            "avocado_SE.png-512x256.png",
            "avocado_SW.png-512x256.png",
            "baconRaw_NE.png-512x256.png",
            "baconRaw_NW.png-512x256.png",
            "baconRaw_SE.png-512x256.png",
            "baconRaw_SW.png-512x256.png",
            "bacon_NE.png-512x256.png",
            "bacon_NW.png-512x256.png",
            "bacon_SE.png-512x256.png",
            "bacon_SW.png-512x256.png",
            "bagFlat_NE.png-512x256.png",
            "bagFlat_NW.png-512x256.png",
            "bagFlat_SE.png-512x256.png",
            "bagFlat_SW.png-512x256.png",
            "bag_NE.png-512x256.png",
            "bag_NW.png-512x256.png",
            "bag_SE.png-512x256.png",
            "bag_SW.png-512x256.png",
            "banana_NE.png-512x256.png",
            "banana_NW.png-512x256.png",
            "banana_SE.png-512x256.png",
            "banana_SW.png-512x256.png",
            "barrel_NE.png-512x256.png",
            "barrel_NW.png-512x256.png",
            "barrel_SE.png-512x256.png",
            "barrel_SW.png-512x256.png",
            "beet_NE.png-512x256.png",
            "beet_NW.png-512x256.png",
            "beet_SE.png-512x256.png",
            "beet_SW.png-512x256.png",
            "bottleKetchup_NE.png-512x256.png",
            "bottleKetchup_NW.png-512x256.png",
            "bottleKetchup_SE.png-512x256.png",
            "bottleKetchup_SW.png-512x256.png",
            "bottleMusterd_NE.png-512x256.png",
            "bottleMusterd_NW.png-512x256.png",
            "bottleMusterd_SE.png-512x256.png",
            "bottleMusterd_SW.png-512x256.png",
            "bottleOil_NE.png-512x256.png",
            "bottleOil_NW.png-512x256.png",
            "bottleOil_SE.png-512x256.png",
            "bottleOil_SW.png-512x256.png",
            "bowlBroth_NE.png-512x256.png",
            "bowlBroth_NW.png-512x256.png",
            "bowlBroth_SE.png-512x256.png",
            "bowlBroth_SW.png-512x256.png",
            "bowlCereal_NE.png-512x256.png",
            "bowlCereal_NW.png-512x256.png",
            "bowlCereal_SE.png-512x256.png",
            "bowlCereal_SW.png-512x256.png",
            "bowlSoup_NE.png-512x256.png",
            "bowlSoup_NW.png-512x256.png",
            "bowlSoup_SE.png-512x256.png",
            "bowlSoup_SW.png-512x256.png",
            "bowl_NE.png-512x256.png",
            "bowl_NW.png-512x256.png",
            "bowl_SE.png-512x256.png",
            "bowl_SW.png-512x256.png",
            "bread_NE.png-512x256.png",
            "bread_NW.png-512x256.png",
            "bread_SE.png-512x256.png",
            "bread_SW.png-512x256.png",
            "broccoli_NE.png-512x256.png",
            "broccoli_NW.png-512x256.png",
            "broccoli_SE.png-512x256.png",
            "broccoli_SW.png-512x256.png",
            "burgerCheeseDouble_NE.png-512x256.png",
            "burgerCheeseDouble_NW.png-512x256.png",
            "burgerCheeseDouble_SE.png-512x256.png",
            "burgerCheeseDouble_SW.png-512x256.png",
            "burgerCheese_NE.png-512x256.png",
            "burgerCheese_NW.png-512x256.png",
            "burgerCheese_SE.png-512x256.png",
            "burgerCheese_SW.png-512x256.png",
            "burgerDouble_NE.png-512x256.png",
            "burgerDouble_NW.png-512x256.png",
            "burgerDouble_SE.png-512x256.png",
            "burgerDouble_SW.png-512x256.png",
            "burger_NE.png-512x256.png",
            "burger_NW.png-512x256.png",
            "burger_SE.png-512x256.png",
            "burger_SW.png-512x256.png",
            "cabbage_NE.png-512x256.png",
            "cabbage_NW.png-512x256.png",
            "cabbage_SE.png-512x256.png",
            "cabbage_SW.png-512x256.png",
            "cakeBirthday_NE.png-512x256.png",
            "cakeBirthday_NW.png-512x256.png",
            "cakeBirthday_SE.png-512x256.png",
            "cakeBirthday_SW.png-512x256.png",
            "cakeSlicer_NE.png-512x256.png",
            "cakeSlicer_NW.png-512x256.png",
            "cakeSlicer_SE.png-512x256.png",
            "cakeSlicer_SW.png-512x256.png",
            "cake_NE.png-512x256.png",
            "cake_NW.png-512x256.png",
            "cake_SE.png-512x256.png",
            "cake_SW.png-512x256.png",
            "canOpen_NE.png-512x256.png",
            "canOpen_NW.png-512x256.png",
            "canOpen_SE.png-512x256.png",
            "canOpen_SW.png-512x256.png",
            "canSmall_NE.png-512x256.png",
            "canSmall_NW.png-512x256.png",
            "canSmall_SE.png-512x256.png",
            "canSmall_SW.png-512x256.png",
            "can_NE.png-512x256.png",
            "can_NW.png-512x256.png",
            "can_SE.png-512x256.png",
            "can_SW.png-512x256.png",
            "candyBarWrapper_NE.png-512x256.png",
            "candyBarWrapper_NW.png-512x256.png",
            "candyBarWrapper_SE.png-512x256.png",
            "candyBarWrapper_SW.png-512x256.png",
            "candyBar_NE.png-512x256.png",
            "candyBar_NW.png-512x256.png",
            "candyBar_SE.png-512x256.png",
            "candyBar_SW.png-512x256.png",
            "carrot_NE.png-512x256.png",
            "carrot_NW.png-512x256.png",
            "carrot_SE.png-512x256.png",
            "carrot_SW.png-512x256.png",
            "cartonSmall_NE.png-512x256.png",
            "cartonSmall_NW.png-512x256.png",
            "cartonSmall_SE.png-512x256.png",
            "cartonSmall_SW.png-512x256.png",
            "carton_NE.png-512x256.png",
            "carton_NW.png-512x256.png",
            "carton_SE.png-512x256.png",
            "carton_SW.png-512x256.png",
            "cauliflower_NE.png-512x256.png",
            "cauliflower_NW.png-512x256.png",
            "cauliflower_SE.png-512x256.png",
            "cauliflower_SW.png-512x256.png",
            "celeryStick_NE.png-512x256.png",
            "celeryStick_NW.png-512x256.png",
            "celeryStick_SE.png-512x256.png",
            "celeryStick_SW.png-512x256.png",
            "cheeseCut_NE.png-512x256.png",
            "cheeseCut_NW.png-512x256.png",
            "cheeseCut_SE.png-512x256.png",
            "cheeseCut_SW.png-512x256.png",
            "cheeseSlicer_NE.png-512x256.png",
            "cheeseSlicer_NW.png-512x256.png",
            "cheeseSlicer_SE.png-512x256.png",
            "cheeseSlicer_SW.png-512x256.png",
            "cheese_NE.png-512x256.png",
            "cheese_NW.png-512x256.png",
            "cheese_SE.png-512x256.png",
            "cheese_SW.png-512x256.png",
            "cherries_NE.png-512x256.png",
            "cherries_NW.png-512x256.png",
            "cherries_SE.png-512x256.png",
            "cherries_SW.png-512x256.png",
            "chinese_NE.png-512x256.png",
            "chinese_NW.png-512x256.png",
            "chinese_SE.png-512x256.png",
            "chinese_SW.png-512x256.png",
            "chocolateWrapper_NE.png-512x256.png",
            "chocolateWrapper_NW.png-512x256.png",
            "chocolateWrapper_SE.png-512x256.png",
            "chocolateWrapper_SW.png-512x256.png",
            "chocolate_NE.png-512x256.png",
            "chocolate_NW.png-512x256.png",
            "chocolate_SE.png-512x256.png",
            "chocolate_SW.png-512x256.png",
            "chopstickFancy_NE.png-512x256.png",
            "chopstickFancy_NW.png-512x256.png",
            "chopstickFancy_SE.png-512x256.png",
            "chopstickFancy_SW.png-512x256.png",
            "chopstick_NE.png-512x256.png",
            "chopstick_NW.png-512x256.png",
            "chopstick_SE.png-512x256.png",
            "chopstick_SW.png-512x256.png",
            "cocktail_NE.png-512x256.png",
            "cocktail_NW.png-512x256.png",
            "cocktail_SE.png-512x256.png",
            "cocktail_SW.png-512x256.png",
            "coconutHalf_NE.png-512x256.png",
            "coconutHalf_NW.png-512x256.png",
            "coconutHalf_SE.png-512x256.png",
            "coconutHalf_SW.png-512x256.png",
            "coconut_NE.png-512x256.png",
            "coconut_NW.png-512x256.png",
            "coconut_SE.png-512x256.png",
            "coconut_SW.png-512x256.png",
            "cookieChocolate_NE.png-512x256.png",
            "cookieChocolate_NW.png-512x256.png",
            "cookieChocolate_SE.png-512x256.png",
            "cookieChocolate_SW.png-512x256.png",
            "cookie_NE.png-512x256.png",
            "cookie_NW.png-512x256.png",
            "cookie_SE.png-512x256.png",
            "cookie_SW.png-512x256.png",
            "cookingFork_NE.png-512x256.png",
            "cookingFork_NW.png-512x256.png",
            "cookingFork_SE.png-512x256.png",
            "cookingFork_SW.png-512x256.png",
            "cookingKnifeChopping_NE.png-512x256.png",
            "cookingKnifeChopping_NW.png-512x256.png",
            "cookingKnifeChopping_SE.png-512x256.png",
            "cookingKnifeChopping_SW.png-512x256.png",
            "cookingKnife_NE.png-512x256.png",
            "cookingKnife_NW.png-512x256.png",
            "cookingKnife_SE.png-512x256.png",
            "cookingKnife_SW.png-512x256.png",
            "cookingSpatula_NE.png-512x256.png",
            "cookingSpatula_NW.png-512x256.png",
            "cookingSpatula_SE.png-512x256.png",
            "cookingSpatula_SW.png-512x256.png",
            "cookingSpoon_NE.png-512x256.png",
            "cookingSpoon_NW.png-512x256.png",
            "cookingSpoon_SE.png-512x256.png",
            "cookingSpoon_SW.png-512x256.png",
            "cornDog_NE.png-512x256.png",
            "cornDog_NW.png-512x256.png",
            "cornDog_SE.png-512x256.png",
            "cornDog_SW.png-512x256.png",
            "corn_NE.png-512x256.png",
            "corn_NW.png-512x256.png",
            "corn_SE.png-512x256.png",
            "corn_SW.png-512x256.png",
            "croissant_NE.png-512x256.png",
            "croissant_NW.png-512x256.png",
            "croissant_SE.png-512x256.png",
            "croissant_SW.png-512x256.png",
            "cupSaucer_NE.png-512x256.png",
            "cupSaucer_NW.png-512x256.png",
            "cupSaucer_SE.png-512x256.png",
            "cupSaucer_SW.png-512x256.png",
            "cupTea_NE.png-512x256.png",
            "cupTea_NW.png-512x256.png",
            "cupTea_SE.png-512x256.png",
            "cupTea_SW.png-512x256.png",
            "cupThea_NE.png-512x256.png",
            "cupThea_NW.png-512x256.png",
            "cupThea_SE.png-512x256.png",
            "cupThea_SW.png-512x256.png",
            "cup_NE.png-512x256.png",
            "cup_NW.png-512x256.png",
            "cup_SE.png-512x256.png",
            "cup_SW.png-512x256.png",
            "cupcake_NE.png-512x256.png",
            "cupcake_NW.png-512x256.png",
            "cupcake_SE.png-512x256.png",
            "cupcake_SW.png-512x256.png",
            "cuttingBoardJapanese_NE.png-512x256.png",
            "cuttingBoardJapanese_NW.png-512x256.png",
            "cuttingBoardJapanese_SE.png-512x256.png",
            "cuttingBoardJapanese_SW.png-512x256.png",
            "cuttingBoardRound_NE.png-512x256.png",
            "cuttingBoardRound_NW.png-512x256.png",
            "cuttingBoardRound_SE.png-512x256.png",
            "cuttingBoardRound_SW.png-512x256.png",
            "cuttingBoard_NE.png-512x256.png",
            "cuttingBoard_NW.png-512x256.png",
            "cuttingBoard_SE.png-512x256.png",
            "cuttingBoard_SW.png-512x256.png",
            "dimSum_NE.png-512x256.png",
            "dimSum_NW.png-512x256.png",
            "dimSum_SE.png-512x256.png",
            "dimSum_SW.png-512x256.png",
            "donutChocolate_NE.png-512x256.png",
            "donutChocolate_NW.png-512x256.png",
            "donutChocolate_SE.png-512x256.png",
            "donutChocolate_SW.png-512x256.png",
            "donutSprinkles_NE.png-512x256.png",
            "donutSprinkles_NW.png-512x256.png",
            "donutSprinkles_SE.png-512x256.png",
            "donutSprinkles_SW.png-512x256.png",
            "donut_NE.png-512x256.png",
            "donut_NW.png-512x256.png",
            "donut_SE.png-512x256.png",
            "donut_SW.png-512x256.png",
            "eggCooked_NE.png-512x256.png",
            "eggCooked_NW.png-512x256.png",
            "eggCooked_SE.png-512x256.png",
            "eggCooked_SW.png-512x256.png",
            "eggCup_NE.png-512x256.png",
            "eggCup_NW.png-512x256.png",
            "eggCup_SE.png-512x256.png",
            "eggCup_SW.png-512x256.png",
            "eggHalf_NE.png-512x256.png",
            "eggHalf_NW.png-512x256.png",
            "eggHalf_SE.png-512x256.png",
            "eggHalf_SW.png-512x256.png",
            "egg_NE.png-512x256.png",
            "egg_NW.png-512x256.png",
            "egg_SE.png-512x256.png",
            "egg_SW.png-512x256.png",
            "eggplant_NE.png-512x256.png",
            "eggplant_NW.png-512x256.png",
            "eggplant_SE.png-512x256.png",
            "eggplant_SW.png-512x256.png",
            "fishBones_NE.png-512x256.png",
            "fishBones_NW.png-512x256.png",
            "fishBones_SE.png-512x256.png",
            "fishBones_SW.png-512x256.png",
            "fish_NE.png-512x256.png",
            "fish_NW.png-512x256.png",
            "fish_SE.png-512x256.png",
            "fish_SW.png-512x256.png",
            "frappe_NE.png-512x256.png",
            "frappe_NW.png-512x256.png",
            "frappe_SE.png-512x256.png",
            "frappe_SW.png-512x256.png",
            "friesEmpty_NE.png-512x256.png",
            "friesEmpty_NW.png-512x256.png",
            "friesEmpty_SE.png-512x256.png",
            "friesEmpty_SW.png-512x256.png",
            "fries_NE.png-512x256.png",
            "fries_NW.png-512x256.png",
            "fries_SE.png-512x256.png",
            "fries_SW.png-512x256.png",
            "frikandelSpeciaal_NE.png-512x256.png",
            "frikandelSpeciaal_NW.png-512x256.png",
            "frikandelSpeciaal_SE.png-512x256.png",
            "frikandelSpeciaal_SW.png-512x256.png",
            "fryingPanLid_NE.png-512x256.png",
            "fryingPanLid_NW.png-512x256.png",
            "fryingPanLid_SE.png-512x256.png",
            "fryingPanLid_SW.png-512x256.png",
            "fryingPan_NE.png-512x256.png",
            "fryingPan_NW.png-512x256.png",
            "fryingPan_SE.png-512x256.png",
            "fryingPan_SW.png-512x256.png",
            "gingerBreadCutter_NE.png-512x256.png",
            "gingerBreadCutter_NW.png-512x256.png",
            "gingerBreadCutter_SE.png-512x256.png",
            "gingerBreadCutter_SW.png-512x256.png",
            "gingerBread_NE.png-512x256.png",
            "gingerBread_NW.png-512x256.png",
            "gingerBread_SE.png-512x256.png",
            "gingerBread_SW.png-512x256.png",
            "glassWine_NE.png-512x256.png",
            "glassWine_NW.png-512x256.png",
            "glassWine_SE.png-512x256.png",
            "glassWine_SW.png-512x256.png",
            "glass_NE.png-512x256.png",
            "glass_NW.png-512x256.png",
            "glass_SE.png-512x256.png",
            "glass_SW.png-512x256.png",
            "grapes_NE.png-512x256.png",
            "grapes_NW.png-512x256.png",
            "grapes_SE.png-512x256.png",
            "grapes_SW.png-512x256.png",
            "honey_NE.png-512x256.png",
            "honey_NW.png-512x256.png",
            "honey_SE.png-512x256.png",
            "honey_SW.png-512x256.png",
            "hotDogRaw_NE.png-512x256.png",
            "hotDogRaw_NW.png-512x256.png",
            "hotDogRaw_SE.png-512x256.png",
            "hotDogRaw_SW.png-512x256.png",
            "hotDog_NE.png-512x256.png",
            "hotDog_NW.png-512x256.png",
            "hotDog_SE.png-512x256.png",
            "hotDog_SW.png-512x256.png",
            "iceCreamCone_NE.png-512x256.png",
            "iceCreamCone_NW.png-512x256.png",
            "iceCreamCone_SE.png-512x256.png",
            "iceCreamCone_SW.png-512x256.png",
            "iceCreamCup_NE.png-512x256.png",
            "iceCreamCup_NW.png-512x256.png",
            "iceCreamCup_SE.png-512x256.png",
            "iceCreamCup_SW.png-512x256.png",
            "iceCreamScoopMint_NE.png-512x256.png",
            "iceCreamScoopMint_NW.png-512x256.png",
            "iceCreamScoopMint_SE.png-512x256.png",
            "iceCreamScoopMint_SW.png-512x256.png",
            "iceCreamScoop_NE.png-512x256.png",
            "iceCreamScoop_NW.png-512x256.png",
            "iceCreamScoop_SE.png-512x256.png",
            "iceCreamScoop_SW.png-512x256.png",
            "iceCream_NE.png-512x256.png",
            "iceCream_NW.png-512x256.png",
            "iceCream_SE.png-512x256.png",
            "iceCream_SW.png-512x256.png",
            "knifeBlock_NE.png-512x256.png",
            "knifeBlock_NW.png-512x256.png",
            "knifeBlock_SE.png-512x256.png",
            "knifeBlock_SW.png-512x256.png",
            "leek_NE.png-512x256.png",
            "leek_NW.png-512x256.png",
            "leek_SE.png-512x256.png",
            "leek_SW.png-512x256.png",
            "lemonHalf_NE.png-512x256.png",
            "lemonHalf_NW.png-512x256.png",
            "lemonHalf_SE.png-512x256.png",
            "lemonHalf_SW.png-512x256.png",
            "lemon_NE.png-512x256.png",
            "lemon_NW.png-512x256.png",
            "lemon_SE.png-512x256.png",
            "lemon_SW.png-512x256.png",
            "loafBaguette_NE.png-512x256.png",
            "loafBaguette_NW.png-512x256.png",
            "loafBaguette_SE.png-512x256.png",
            "loafBaguette_SW.png-512x256.png",
            "loafRound_NE.png-512x256.png",
            "loafRound_NW.png-512x256.png",
            "loafRound_SE.png-512x256.png",
            "loafRound_SW.png-512x256.png",
            "loaf_NE.png-512x256.png",
            "loaf_NW.png-512x256.png",
            "loaf_SE.png-512x256.png",
            "loaf_SW.png-512x256.png",
            "lollypop_NE.png-512x256.png",
            "lollypop_NW.png-512x256.png",
            "lollypop_SE.png-512x256.png",
            "lollypop_SW.png-512x256.png",
            "makiRoe_NE.png-512x256.png",
            "makiRoe_NW.png-512x256.png",
            "makiRoe_SE.png-512x256.png",
            "makiRoe_SW.png-512x256.png",
            "makiSalmon_NE.png-512x256.png",
            "makiSalmon_NW.png-512x256.png",
            "makiSalmon_SE.png-512x256.png",
            "makiSalmon_SW.png-512x256.png",
            "makiVegetable_NE.png-512x256.png",
            "makiVegetable_NW.png-512x256.png",
            "makiVegetable_SE.png-512x256.png",
            "makiVegetable_SW.png-512x256.png",
            "meatCooked_NE.png-512x256.png",
            "meatCooked_NW.png-512x256.png",
            "meatCooked_SE.png-512x256.png",
            "meatCooked_SW.png-512x256.png",
            "meatPatty_NE.png-512x256.png",
            "meatPatty_NW.png-512x256.png",
            "meatPatty_SE.png-512x256.png",
            "meatPatty_SW.png-512x256.png",
            "meatRaw_NE.png-512x256.png",
            "meatRaw_NW.png-512x256.png",
            "meatRaw_SE.png-512x256.png",
            "meatRaw_SW.png-512x256.png",
            "meatRibs_NE.png-512x256.png",
            "meatRibs_NW.png-512x256.png",
            "meatRibs_SE.png-512x256.png",
            "meatRibs_SW.png-512x256.png",
            "meatSausage_NE.png-512x256.png",
            "meatSausage_NW.png-512x256.png",
            "meatSausage_SE.png-512x256.png",
            "meatSausage_SW.png-512x256.png",
            "meatTenderizer_NE.png-512x256.png",
            "meatTenderizer_NW.png-512x256.png",
            "meatTenderizer_SE.png-512x256.png",
            "meatTenderizer_SW.png-512x256.png",
            "mincemeatPie_NE.png-512x256.png",
            "mincemeatPie_NW.png-512x256.png",
            "mincemeatPie_SE.png-512x256.png",
            "mincemeatPie_SW.png-512x256.png",
            "mortarPestle_NE.png-512x256.png",
            "mortarPestle_NW.png-512x256.png",
            "mortarPestle_SE.png-512x256.png",
            "mortarPestle_SW.png-512x256.png",
            "mortar_NE.png-512x256.png",
            "mortar_NW.png-512x256.png",
            "mortar_SE.png-512x256.png",
            "mortar_SW.png-512x256.png",
            "muffin_NE.png-512x256.png",
            "muffin_NW.png-512x256.png",
            "muffin_SE.png-512x256.png",
            "muffin_SW.png-512x256.png",
            "mug_NE.png-512x256.png",
            "mug_NW.png-512x256.png",
            "mug_SE.png-512x256.png",
            "mug_SW.png-512x256.png",
            "mushroomHalf_NE.png-512x256.png",
            "mushroomHalf_NW.png-512x256.png",
            "mushroomHalf_SE.png-512x256.png",
            "mushroomHalf_SW.png-512x256.png",
            "mushroom_NE.png-512x256.png",
            "mushroom_NW.png-512x256.png",
            "mushroom_SE.png-512x256.png",
            "mushroom_SW.png-512x256.png",
            "musselOpen_NE.png-512x256.png",
            "musselOpen_NW.png-512x256.png",
            "musselOpen_SE.png-512x256.png",
            "musselOpen_SW.png-512x256.png",
            "mussel_NE.png-512x256.png",
            "mussel_NW.png-512x256.png",
            "mussel_SE.png-512x256.png",
            "mussel_SW.png-512x256.png",
            "onionHalf_NE.png-512x256.png",
            "onionHalf_NW.png-512x256.png",
            "onionHalf_SE.png-512x256.png",
            "onionHalf_SW.png-512x256.png",
            "onion_NE.png-512x256.png",
            "onion_NW.png-512x256.png",
            "onion_SE.png-512x256.png",
            "onion_SW.png-512x256.png",
            "orange_NE.png-512x256.png",
            "orange_NW.png-512x256.png",
            "orange_SE.png-512x256.png",
            "orange_SW.png-512x256.png",
            "panStew_NE.png-512x256.png",
            "panStew_NW.png-512x256.png",
            "panStew_SE.png-512x256.png",
            "panStew_SW.png-512x256.png",
            "pan_NE.png-512x256.png",
            "pan_NW.png-512x256.png",
            "pan_SE.png-512x256.png",
            "pan_SW.png-512x256.png",
            "pancakes_NE.png-512x256.png",
            "pancakes_NW.png-512x256.png",
            "pancakes_SE.png-512x256.png",
            "pancakes_SW.png-512x256.png",
            "paprikaSlice_NE.png-512x256.png",
            "paprikaSlice_NW.png-512x256.png",
            "paprikaSlice_SE.png-512x256.png",
            "paprikaSlice_SW.png-512x256.png",
            "paprika_NE.png-512x256.png",
            "paprika_NW.png-512x256.png",
            "paprika_SE.png-512x256.png",
            "paprika_SW.png-512x256.png",
            "peanutButter_NE.png-512x256.png",
            "peanutButter_NW.png-512x256.png",
            "peanutButter_SE.png-512x256.png",
            "peanutButter_SW.png-512x256.png",
            "pearHalf_NE.png-512x256.png",
            "pearHalf_NW.png-512x256.png",
            "pearHalf_SE.png-512x256.png",
            "pearHalf_SW.png-512x256.png",
            "pear_NE.png-512x256.png",
            "pear_NW.png-512x256.png",
            "pear_SE.png-512x256.png",
            "pear_SW.png-512x256.png",
            "pepperMill_NE.png-512x256.png",
            "pepperMill_NW.png-512x256.png",
            "pepperMill_SE.png-512x256.png",
            "pepperMill_SW.png-512x256.png",
            "pepper_NE.png-512x256.png",
            "pepper_NW.png-512x256.png",
            "pepper_SE.png-512x256.png",
            "pepper_SW.png-512x256.png",
            "pie_NE.png-512x256.png",
            "pie_NW.png-512x256.png",
            "pie_SE.png-512x256.png",
            "pie_SW.png-512x256.png",
            "pineapple_NE.png-512x256.png",
            "pineapple_NW.png-512x256.png",
            "pineapple_SE.png-512x256.png",
            "pineapple_SW.png-512x256.png",
            "pizzaBox_NE.png-512x256.png",
            "pizzaBox_NW.png-512x256.png",
            "pizzaBox_SE.png-512x256.png",
            "pizzaBox_SW.png-512x256.png",
            "pizzaCutter_NE.png-512x256.png",
            "pizzaCutter_NW.png-512x256.png",
            "pizzaCutter_SE.png-512x256.png",
            "pizzaCutter_SW.png-512x256.png",
            "pizza_NE.png-512x256.png",
            "pizza_NW.png-512x256.png",
            "pizza_SE.png-512x256.png",
            "pizza_SW.png-512x256.png",
            "plateBroken_NE.png-512x256.png",
            "plateBroken_NW.png-512x256.png",
            "plateBroken_SE.png-512x256.png",
            "plateBroken_SW.png-512x256.png",
            "plateDeep_NE.png-512x256.png",
            "plateDeep_NW.png-512x256.png",
            "plateDeep_SE.png-512x256.png",
            "plateDeep_SW.png-512x256.png",
            "plateDinner_NE.png-512x256.png",
            "plateDinner_NW.png-512x256.png",
            "plateDinner_SE.png-512x256.png",
            "plateDinner_SW.png-512x256.png",
            "plateRectangle_NE.png-512x256.png",
            "plateRectangle_NW.png-512x256.png",
            "plateRectangle_SE.png-512x256.png",
            "plateRectangle_SW.png-512x256.png",
            "plateSauerkraut_NE.png-512x256.png",
            "plateSauerkraut_NW.png-512x256.png",
            "plateSauerkraut_SE.png-512x256.png",
            "plateSauerkraut_SW.png-512x256.png",
            "plate_NE.png-512x256.png",
            "plate_NW.png-512x256.png",
            "plate_SE.png-512x256.png",
            "plate_SW.png-512x256.png",
            "popsicleChocolate_NE.png-512x256.png",
            "popsicleChocolate_NW.png-512x256.png",
            "popsicleChocolate_SE.png-512x256.png",
            "popsicleChocolate_SW.png-512x256.png",
            "popsicleStick_NE.png-512x256.png",
            "popsicleStick_NW.png-512x256.png",
            "popsicleStick_SE.png-512x256.png",
            "popsicleStick_SW.png-512x256.png",
            "popsicle_NE.png-512x256.png",
            "popsicle_NW.png-512x256.png",
            "popsicle_SE.png-512x256.png",
            "popsicle_SW.png-512x256.png",
            "potLid_NE.png-512x256.png",
            "potLid_NW.png-512x256.png",
            "potLid_SE.png-512x256.png",
            "potLid_SW.png-512x256.png",
            "potStewLid_NE.png-512x256.png",
            "potStewLid_NW.png-512x256.png",
            "potStewLid_SE.png-512x256.png",
            "potStewLid_SW.png-512x256.png",
            "potStew_NE.png-512x256.png",
            "potStew_NW.png-512x256.png",
            "potStew_SE.png-512x256.png",
            "potStew_SW.png-512x256.png",
            "pot_NE.png-512x256.png",
            "pot_NW.png-512x256.png",
            "pot_SE.png-512x256.png",
            "pot_SW.png-512x256.png",
            "pudding_NE.png-512x256.png",
            "pudding_NW.png-512x256.png",
            "pudding_SE.png-512x256.png",
            "pudding_SW.png-512x256.png",
            "pumpkinBasic_NE.png-512x256.png",
            "pumpkinBasic_NW.png-512x256.png",
            "pumpkinBasic_SE.png-512x256.png",
            "pumpkinBasic_SW.png-512x256.png",
            "pumpkin_NE.png-512x256.png",
            "pumpkin_NW.png-512x256.png",
            "pumpkin_SE.png-512x256.png",
            "pumpkin_SW.png-512x256.png",
            "radish_NE.png-512x256.png",
            "radish_NW.png-512x256.png",
            "radish_SE.png-512x256.png",
            "radish_SW.png-512x256.png",
            "riceBall_NE.png-512x256.png",
            "riceBall_NW.png-512x256.png",
            "riceBall_SE.png-512x256.png",
            "riceBall_SW.png-512x256.png",
            "rollingPin_NE.png-512x256.png",
            "rollingPin_NW.png-512x256.png",
            "rollingPin_SE.png-512x256.png",
            "rollingPin_SW.png-512x256.png",
            "salad_NE.png-512x256.png",
            "salad_NW.png-512x256.png",
            "salad_SE.png-512x256.png",
            "salad_SW.png-512x256.png",
            "sandwich_NE.png-512x256.png",
            "sandwich_NW.png-512x256.png",
            "sandwich_SE.png-512x256.png",
            "sandwich_SW.png-512x256.png",
            "sausageHalf_NE.png-512x256.png",
            "sausageHalf_NW.png-512x256.png",
            "sausageHalf_SE.png-512x256.png",
            "sausageHalf_SW.png-512x256.png",
            "sausage_NE.png-512x256.png",
            "sausage_NW.png-512x256.png",
            "sausage_SE.png-512x256.png",
            "sausage_SW.png-512x256.png",
            "shakerPepper_NE.png-512x256.png",
            "shakerPepper_NW.png-512x256.png",
            "shakerPepper_SE.png-512x256.png",
            "shakerPepper_SW.png-512x256.png",
            "shakerSalt_NE.png-512x256.png",
            "shakerSalt_NW.png-512x256.png",
            "shakerSalt_SE.png-512x256.png",
            "shakerSalt_SW.png-512x256.png",
            "skewerVegetables_NE.png-512x256.png",
            "skewerVegetables_NW.png-512x256.png",
            "skewerVegetables_SE.png-512x256.png",
            "skewerVegetables_SW.png-512x256.png",
            "skewer_NE.png-512x256.png",
            "skewer_NW.png-512x256.png",
            "skewer_SE.png-512x256.png",
            "skewer_SW.png-512x256.png",
            "sodaBottle_NE.png-512x256.png",
            "sodaBottle_NW.png-512x256.png",
            "sodaBottle_SE.png-512x256.png",
            "sodaBottle_SW.png-512x256.png",
            "sodaCanCrushed_NE.png-512x256.png",
            "sodaCanCrushed_NW.png-512x256.png",
            "sodaCanCrushed_SE.png-512x256.png",
            "sodaCanCrushed_SW.png-512x256.png",
            "sodaCan_NE.png-512x256.png",
            "sodaCan_NW.png-512x256.png",
            "sodaCan_SE.png-512x256.png",
            "sodaCan_SW.png-512x256.png",
            "sodaGlass_NE.png-512x256.png",
            "sodaGlass_NW.png-512x256.png",
            "sodaGlass_SE.png-512x256.png",
            "sodaGlass_SW.png-512x256.png",
            "soda_NE.png-512x256.png",
            "soda_NW.png-512x256.png",
            "soda_SE.png-512x256.png",
            "soda_SW.png-512x256.png",
            "soy_NE.png-512x256.png",
            "soy_NW.png-512x256.png",
            "soy_SE.png-512x256.png",
            "soy_SW.png-512x256.png",
            "steamer_NE.png-512x256.png",
            "steamer_NW.png-512x256.png",
            "steamer_SE.png-512x256.png",
            "steamer_SW.png-512x256.png",
            "strawberry_NE.png-512x256.png",
            "strawberry_NW.png-512x256.png",
            "strawberry_SE.png-512x256.png",
            "strawberry_SW.png-512x256.png",
            "styrofoamDinner_NE.png-512x256.png",
            "styrofoamDinner_NW.png-512x256.png",
            "styrofoamDinner_SE.png-512x256.png",
            "styrofoamDinner_SW.png-512x256.png",
            "styrofoam_NE.png-512x256.png",
            "styrofoam_NW.png-512x256.png",
            "styrofoam_SE.png-512x256.png",
            "styrofoam_SW.png-512x256.png",
            "sub_NE.png-512x256.png",
            "sub_NW.png-512x256.png",
            "sub_SE.png-512x256.png",
            "sub_SW.png-512x256.png",
            "sundae_NE.png-512x256.png",
            "sundae_NW.png-512x256.png",
            "sundae_SE.png-512x256.png",
            "sundae_SW.png-512x256.png",
            "sushiEgg_NE.png-512x256.png",
            "sushiEgg_NW.png-512x256.png",
            "sushiEgg_SE.png-512x256.png",
            "sushiEgg_SW.png-512x256.png",
            "sushiSalmon_NE.png-512x256.png",
            "sushiSalmon_NW.png-512x256.png",
            "sushiSalmon_SE.png-512x256.png",
            "sushiSalmon_SW.png-512x256.png",
            "taco_NE.png-512x256.png",
            "taco_NW.png-512x256.png",
            "taco_SE.png-512x256.png",
            "taco_SW.png-512x256.png",
            "tajineLid_NE.png-512x256.png",
            "tajineLid_NW.png-512x256.png",
            "tajineLid_SE.png-512x256.png",
            "tajineLid_SW.png-512x256.png",
            "tajine_NE.png-512x256.png",
            "tajine_NW.png-512x256.png",
            "tajine_SE.png-512x256.png",
            "tajine_SW.png-512x256.png",
            "tomatoSlice_NE.png-512x256.png",
            "tomatoSlice_NW.png-512x256.png",
            "tomatoSlice_SE.png-512x256.png",
            "tomatoSlice_SW.png-512x256.png",
            "tomato_NE.png-512x256.png",
            "tomato_NW.png-512x256.png",
            "tomato_SE.png-512x256.png",
            "tomato_SW.png-512x256.png",
            "turkey_NE.png-512x256.png",
            "turkey_NW.png-512x256.png",
            "turkey_SE.png-512x256.png",
            "turkey_SW.png-512x256.png",
            "utensilFork_NE.png-512x256.png",
            "utensilFork_NW.png-512x256.png",
            "utensilFork_SE.png-512x256.png",
            "utensilFork_SW.png-512x256.png",
            "utensilKnife_NE.png-512x256.png",
            "utensilKnife_NW.png-512x256.png",
            "utensilKnife_SE.png-512x256.png",
            "utensilKnife_SW.png-512x256.png",
            "utensilSpoon_NE.png-512x256.png",
            "utensilSpoon_NW.png-512x256.png",
            "utensilSpoon_SE.png-512x256.png",
            "utensilSpoon_SW.png-512x256.png",
            "waffle_NE.png-512x256.png",
            "waffle_NW.png-512x256.png",
            "waffle_SE.png-512x256.png",
            "waffle_SW.png-512x256.png",
            "watermelon_NE.png-512x256.png",
            "watermelon_NW.png-512x256.png",
            "watermelon_SE.png-512x256.png",
            "watermelon_SW.png-512x256.png",
            "whippedCream_NE.png-512x256.png",
            "whippedCream_NW.png-512x256.png",
            "whippedCream_SE.png-512x256.png",
            "whippedCream_SW.png-512x256.png",
            "whisk_NE.png-512x256.png",
            "whisk_NW.png-512x256.png",
            "whisk_SE.png-512x256.png",
            "whisk_SW.png-512x256.png",
            "wholeHam_NE.png-512x256.png",
            "wholeHam_NW.png-512x256.png",
            "wholeHam_SE.png-512x256.png",
            "wholeHam_SW.png-512x256.png",
            "wholerHam_NE.png-512x256.png",
            "wholerHam_NW.png-512x256.png",
            "wholerHam_SE.png-512x256.png",
            "wholerHam_SW.png-512x256.png",
            "wineRed_NE.png-512x256.png",
            "wineRed_NW.png-512x256.png",
            "wineRed_SE.png-512x256.png",
            "wineRed_SW.png-512x256.png",
            "wineWhite_NE.png-512x256.png",
            "wineWhite_NW.png-512x256.png",
            "wineWhite_SE.png-512x256.png",
            "wineWhite_SW.png-512x256.png"
          ]
        },
        "prototype": {
          "path": "assets/tileset/tileset-images/prototype/Isometric",
          "files": [
            "arrowWall_E.png",
            "arrowWall_N.png",
            "arrowWall_S.png",
            "arrowWall_W.png",
            "arrow_E.png",
            "arrow_N.png",
            "arrow_S.png",
            "arrow_W.png",
            "blockAngle_E.png",
            "blockAngle_N.png",
            "blockAngle_S.png",
            "blockAngle_W.png",
            "blockHalf_E.png",
            "blockHalf_N.png",
            "blockHalf_S.png",
            "blockHalf_W.png",
            "blockQuarter_E.png",
            "blockQuarter_N.png",
            "blockQuarter_S.png",
            "blockQuarter_W.png",
            "block_E.png",
            "block_N.png",
            "block_S.png",
            "block_W.png",
            "columnBlocks_E.png",
            "columnBlocks_N.png",
            "columnBlocks_S.png",
            "columnBlocks_W.png",
            "columnCorner_E.png",
            "columnCorner_N.png",
            "columnCorner_S.png",
            "columnCorner_W.png",
            "column_E.png",
            "column_N.png",
            "column_S.png",
            "column_W.png",
            "crate_E.png",
            "crate_N.png",
            "crate_S.png",
            "crate_W.png",
            "doorClosed_E.png",
            "doorClosed_N.png",
            "doorClosed_S.png",
            "doorClosed_W.png",
            "doorOpen_E.png",
            "doorOpen_N.png",
            "doorOpen_S.png",
            "doorOpen_W.png",
            "doorwayBottom_E.png",
            "doorwayBottom_N.png",
            "doorwayBottom_S.png",
            "doorwayBottom_W.png",
            "doorwayCenter_E.png",
            "doorwayCenter_N.png",
            "doorwayCenter_S.png",
            "doorwayCenter_W.png",
            "doorwayLeftBottom_E.png",
            "doorwayLeftBottom_N.png",
            "doorwayLeftBottom_S.png",
            "doorwayLeftBottom_W.png",
            "doorwayLeft_E.png",
            "doorwayLeft_N.png",
            "doorwayLeft_S.png",
            "doorwayLeft_W.png",
            "doorwayMiddleBottom_E.png",
            "doorwayMiddleBottom_N.png",
            "doorwayMiddleBottom_S.png",
            "doorwayMiddleBottom_W.png",
            "doorwayMiddle_E.png",
            "doorwayMiddle_N.png",
            "doorwayMiddle_S.png",
            "doorwayMiddle_W.png",
            "doorwayRightBottom_E.png",
            "doorwayRightBottom_N.png",
            "doorwayRightBottom_S.png",
            "doorwayRightBottom_W.png",
            "doorwayRight_E.png",
            "doorwayRight_N.png",
            "doorwayRight_S.png",
            "doorwayRight_W.png",
            "doorway_E.png",
            "doorway_N.png",
            "doorway_S.png",
            "doorway_W.png",
            "fence_E.png",
            "fence_N.png",
            "fence_S.png",
            "fence_W.png",
            "floorHalf_E.png",
            "floorHalf_N.png",
            "floorHalf_S.png",
            "floorHalf_W.png",
            "floorQuarter_E.png",
            "floorQuarter_N.png",
            "floorQuarter_S.png",
            "floorQuarter_W.png",
            "floor_E.png",
            "floor_N.png",
            "floor_S.png",
            "floor_W.png",
            "ladder_E.png",
            "ladder_N.png",
            "ladder_S.png",
            "ladder_W.png",
            "poleGroup_E.png",
            "poleGroup_N.png",
            "poleGroup_S.png",
            "poleGroup_W.png",
            "pole_E.png",
            "pole_N.png",
            "pole_S.png",
            "pole_W.png",
            "slabAngle_E.png",
            "slabAngle_N.png",
            "slabAngle_S.png",
            "slabAngle_W.png",
            "slabHalf_E.png",
            "slabHalf_N.png",
            "slabHalf_S.png",
            "slabHalf_W.png",
            "slabQuarter_E.png",
            "slabQuarter_N.png",
            "slabQuarter_S.png",
            "slabQuarter_W.png",
            "slab_E.png",
            "slab_N.png",
            "slab_S.png",
            "slab_W.png",
            "slopeHalf_E.png",
            "slopeHalf_N.png",
            "slopeHalf_S.png",
            "slopeHalf_W.png",
            "slopeQuarter_E.png",
            "slopeQuarter_N.png",
            "slopeQuarter_S.png",
            "slopeQuarter_W.png",
            "slopeSmall_E.png",
            "slopeSmall_N.png",
            "slopeSmall_S.png",
            "slopeSmall_W.png",
            "slope_E.png",
            "slope_N.png",
            "slope_S.png",
            "slope_W.png",
            "sloperCornerInner_E.png",
            "sloperCornerInner_N.png",
            "sloperCornerInner_S.png",
            "sloperCornerInner_W.png",
            "sloperCornerOuter_E.png",
            "sloperCornerOuter_N.png",
            "sloperCornerOuter_S.png",
            "sloperCornerOuter_W.png",
            "stairsCornerInner_E.png",
            "stairsCornerInner_N.png",
            "stairsCornerInner_S.png",
            "stairsCornerInner_W.png",
            "stairsCornerOuter_E.png",
            "stairsCornerOuter_N.png",
            "stairsCornerOuter_S.png",
            "stairsCornerOuter_W.png",
            "stairsOpenCornerInner_E.png",
            "stairsOpenCornerInner_N.png",
            "stairsOpenCornerInner_S.png",
            "stairsOpenCornerInner_W.png",
            "stairsOpenCornerOuter_E.png",
            "stairsOpenCornerOuter_N.png",
            "stairsOpenCornerOuter_S.png",
            "stairsOpenCornerOuter_W.png",
            "stairsOpen_E.png",
            "stairsOpen_N.png",
            "stairsOpen_S.png",
            "stairsOpen_W.png",
            "stairs_E.png",
            "stairs_N.png",
            "stairs_S.png",
            "stairs_W.png",
            "steps_E.png",
            "steps_N.png",
            "steps_S.png",
            "steps_W.png",
            "switchFloorOff_E.png",
            "switchFloorOff_N.png",
            "switchFloorOff_S.png",
            "switchFloorOff_W.png",
            "switchFloorOn_E.png",
            "switchFloorOn_N.png",
            "switchFloorOn_S.png",
            "switchFloorOn_W.png",
            "switchWallOff_E.png",
            "switchWallOff_N.png",
            "switchWallOff_S.png",
            "switchWallOff_W.png",
            "switchWallOn_E.png",
            "switchWallOn_N.png",
            "switchWallOn_S.png",
            "switchWallOn_W.png",
            "wallBattlement_E.png",
            "wallBattlement_N.png",
            "wallBattlement_S.png",
            "wallBattlement_W.png",
            "wallCornerHalf_E.png",
            "wallCornerHalf_N.png",
            "wallCornerHalf_S.png",
            "wallCornerHalf_W.png",
            "wallCorner_E.png",
            "wallCorner_N.png",
            "wallCorner_S.png",
            "wallCorner_W.png",
            "wallCurveHalf_E.png",
            "wallCurveHalf_N.png",
            "wallCurveHalf_S.png",
            "wallCurveHalf_W.png",
            "wallCurve_E.png",
            "wallCurve_N.png",
            "wallCurve_S.png",
            "wallCurve_W.png",
            "wallHalf_E.png",
            "wallHalf_N.png",
            "wallHalf_S.png",
            "wallHalf_W.png",
            "wall_E.png",
            "wall_N.png",
            "wall_S.png",
            "wall_W.png",
            "windowLeft_E.png",
            "windowLeft_N.png",
            "windowLeft_S.png",
            "windowLeft_W.png",
            "windowMiddle_E.png",
            "windowMiddle_N.png",
            "windowMiddle_S.png",
            "windowMiddle_W.png",
            "windowRight_E.png",
            "windowRight_N.png",
            "windowRight_S.png",
            "windowRight_W.png",
            "window_E.png",
            "window_N.png",
            "window_S.png",
            "window_W.png"
          ]
        }
      }
    };

    return jsonFilePath;
  }

  importAll(r) {
    return r.keys().map(r);
  }

  preload() {
    this.load.image('Human0Idle0', Human0Idle0);
    this.load.image('Human6Idle0', Human6Idle0);

    this.load.image('floorE', floorE);
    this.load.image('wallCurveS', wallCurveS);
    this.load.image('wallE', wallE);
    this.load.image('wallS', wallS);
    this.load.image('columnW', columnW);
    this.load.image('columnCornerW', columnCornerW);
    this.load.image('slabS', slabS);
    this.load.image('slabW', slabW);
    this.load.image('slabHalfE', slabHalfE);
    this.load.image('slabHalfN', slabHalfN);
    this.load.image('slabHalfS', slabHalfS);

    this.load.image('pumpkinBasicNE', pumpkinBasicNE);
    this.load.image('cauliflowerNE', cauliflowerNE);
    this.load.image('cabbageSE', cabbageSE);
    this.load.image('carrotNE', carrotNE);
    this.load.image('cornNE', cornNE);
    this.load.image('radishNE', radishNE);
    this.load.image('pumpkinNW', pumpkinNW);
    this.load.image('pepperNE', pepperNE);
    this.load.image('beetNE', beetNE);
    this.load.image('broccoliSW', broccoliSW);
    this.load.image('paprikaNE', paprikaNE);
    this.load.image('eggplantSW', eggplantSW);
    this.load.image('mushroomSE', mushroomSE);
    this.load.image('leekNE', leekNE);
    this.load.image('subNE', subNE);
    this.load.image('pineappleNE', pineappleNE);
    this.load.image('bananaNE', bananaNE);
    this.load.image('pearNE', pearNE);
    this.load.image('watermelonNW', watermelonNW);
    this.load.image('grapesSE', grapesSE);
    this.load.image('orangeNE', orangeNE);
    this.load.image('appleSE', appleSE);
    this.load.image('avocadoHalfSE', avocadoHalfSE);
    this.load.image('appleHalfSE', appleHalfSE);
    this.load.image('cherriesNE', cherriesNE);
    this.load.image('strawberryNE', strawberryNE);
    this.load.image('onionHalfNW', onionHalfNW);
    this.load.image('cartonSE', cartonSE);
    this.load.image('wholeHamNW', wholeHamNW);
    this.load.image('turkeyNE', turkeyNE);
    this.load.image('baconNW', baconNW);
    this.load.image('wholerHamSE', wholerHamSE);
    this.load.image('fishNW', fishNW);
    this.load.image('baconRawNE', baconRawNE);
    this.load.image('cartonSmallSW', cartonSmallSW);
    this.load.image('cheeseCutSW', cheeseCutSW);
    this.load.image('wineRedNE', wineRedNE);
    this.load.image('sodaSE', sodaSE);
    this.load.image('sodaGlassNE', sodaGlassNE);
    this.load.image('frappeSW', frappeSW);
    this.load.image('sodaCanNW', sodaCanNW);
    this.load.image('sodaBottleNE', sodaBottleNE);
    this.load.image('wineWhiteSE', wineWhiteSE);
    this.load.image('sodaCanSE', sodaCanSE);
    this.load.image('bowlCerealNW', bowlCerealNW);
    this.load.image('bowlCerealNE', bowlCerealNE);
    this.load.image('cupTheaNW', cupTheaNW);
    this.load.image('cupTeaSE', cupTeaSE);
    this.load.image('cakeBirthdaySE', cakeBirthdaySE);
    this.load.image('cakeNW', cakeNW);
    this.load.image('hotDogSW', hotDogSW);
    this.load.image('croissantNE', croissantNE);
    this.load.image('bowlSoupNW', bowlSoupNW);
    this.load.image('burgerCheeseDoubleNW', burgerCheeseDoubleNW);
    this.load.image('bowlBrothSE', bowlBrothSE);
    this.load.image('friesNE', friesNE);
    this.load.image('tacoSW', tacoSW);
    this.load.image('chineseSW', chineseSW);
    this.load.image('loafNE', loafNE);
    this.load.image('iceCreamCupSW', iceCreamCupSW);
    this.load.image('bowlNE', bowlNE);
    this.load.image('rollingPinSW', rollingPinSW);
    this.load.image('cookingSpatulaNE', cookingSpatulaNE);
    this.load.image('cookingKnifeNE', cookingKnifeNE);
    this.load.image('utensilKnifeNE', utensilKnifeNE);
    this.load.image('cakeSlicerNE', cakeSlicerNE);
    this.load.image('cookingKnifeChoppingNE', cookingKnifeChoppingNE);
    this.load.image('cookingSpatulaSW', cookingSpatulaSW);
    this.load.image('loafBaguetteNE', loafBaguetteNE);
    this.load.image('bagNW', bagNW);
    this.load.image('bagNE', bagNE);
    this.load.image('honeySW', honeySW);
    this.load.image('bagFlatNW', bagFlatNW);
    this.load.image('bagFlatNE', bagFlatNE);
    this.load.image('waffleNW', waffleNW);
    this.load.image('frikandelSpeciaalNE', frikandelSpeciaalNE);
    this.load.image('muffinNW', muffinNW);
    this.load.image('popsicleSE', popsicleSE);
    this.load.image('popsicleChocolateSE', popsicleChocolateSE);
    this.load.image('cupcakeSE', cupcakeSE);
    this.load.image('sundaeSW', sundaeSW);
    this.load.image('iceCreamSE', iceCreamSE);
    this.load.image('sundaeSE', sundaeSE);
    this.load.image('popsicleChocolateNW', popsicleChocolateNW);

    // console.log('THIS: ', this);
    // this.world.setBounds(0, 0, 2048, 1024);

    // console.log('Assets: ', this.images);

    // const { loadFiles } = this.loadAssetsJSON();

    // const assetImages = [ ...this.characterImages, ...this.foodImages, ...this.prototypeImages ];

    // for(let file in loadFiles) {
    //   for(let imageFile of loadFiles[file].files) {
    //     // this.load.image('background', 'assets/images/background.png');
    //     // console.log(imageFile, `${loadFiles[file].path}/${imageFile}`);
    //     this.load.image(imageFile, `../${loadFiles[file].path}/${imageFile}`);
    //   }
    // }

    // for(let image of assetImages) {
    //   console.log(image);
    //   this.load.image(image.toString(), image);
    // }

    // this.load.tilemapTiledJSON('map', 'src/assets/IsometricMap.json');

    /**
     * Load Assets for Character Object pick up animation
     */

    // const frames = { ...characterSpriteJson.textures[0].frames };
    // const atlas = this.load.multiatlas('character12345', characterSpriteJson, characterSpriteImage);

    // console.log('Atlas: ', atlas);

    this.load.scenePlugin({
      key: 'IsoPlugin',
      url: IsoPlugin,
      sceneKey: 'iso'
    });
  }

  create() {
    // this.isoGroup = this.add.group();
    // this.world.setBounds(-960, -600, 1920, 1200);

    console.log('THIS: ', this);
    console.log('MAP: ', map);

    // const frames = { ...characterSpriteJson.textures[0].frames };
    // console.log('Sprite JSON: ', { frames });


    this.cameras.main.setZoom(0.20);

    this.iso.projector.origin.setTo(0.5, -1.2);

    this.floorGroup = this.add.group();
    this.foundationsLvl1 = this.add.group();
    this.foundationsLvl2 = this.add.group();
    this.carpets = this.add.group();
    this.furnitureRack = this.add.group();
    this.food = this.add.group();
    this.characterLvl = this.add.group();

    // this.add.isoSprite(0, 15 * 128, 0, 'Human0Idle0', this.floorGroup);
    this.createLayer(this);
    // floorTile.anchor.set(0.5)

    // Add some tiles to our scene
    // this.spawnTiles();

    // this.addCharacter(this);

    const upKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    const downKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN);
    const leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    const rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);

    upKey.on('down', (key, event) => {
      event.stopPropagation();
      // console.log('UP: ', this.characterIsoSprite);
      if (this.isWalkableArea({x: this.characterIsoSprite.isoX, y: this.characterIsoSprite.isoY - 128}, 'x')) {
        this.characterIsoSprite.isoY -= 128;
      }
    });

    downKey.on('down', (key, event) => {
      event.stopPropagation();
      // console.log('DOWN: ', this.characterIsoSprite, event, key);
      if (this.isWalkableArea({x: this.characterIsoSprite.isoX, y: this.characterIsoSprite.isoY + 128}, 'x')) {
        this.characterIsoSprite.isoY += 128;
      }
    });

    leftKey.on('down', (key, event) => {
      event.stopPropagation();
      // console.log('LEFT: ', this.characterIsoSprite);
      if (this.isWalkableArea({x: this.characterIsoSprite.isoX - 128, y: this.characterIsoSprite.isoY}, 'y')) {
        this.characterIsoSprite.isoX -= 128;
      }
    });

    rightKey.on('down', (key, event) => {
      event.stopPropagation();
      // console.log('RIGHT: ', this.characterIsoSprite);
      if (this.isWalkableArea({x: this.characterIsoSprite.isoX + 128, y: this.characterIsoSprite.isoY}, 'y')) {
        this.characterIsoSprite.isoX += 128;
      }
    });
  }

  isWalkableArea(coordinates, axis) {
    console.log(coordinates, axis);
    const walkableCoordinates = this.generateWalkableCoordinatesArray();
    const MAP_SIZE = 128;

    // console.log(walkableCoordinates);

    // console.log(`X: ${coordinates.x / MAP_SIZE}, Y: ${coordinates.y / MAP_SIZE}, ${walkableCoordinates[axis].includes(coordinates[axis] / MAP_SIZE)}`);
    console.log(`X: ${coordinates.x / MAP_SIZE}, Y: ${coordinates.y / MAP_SIZE}`);

    // return (walkableCoordinates[axis].includes(coordinates[axis] / MAP_SIZE));

    return walkableCoordinates.some((coord) => {
      return ((coordinates.x / MAP_SIZE === coord[0]) && (coordinates.y / MAP_SIZE === coord[1]))
    });
  }

  generateWalkableCoordinatesArray() {
    const WALKABLE_MAP_SIZE = 14;
    const pathableX = [1, 14];
    const pathableY = [1, 4, 7, 8, 11, 14];
    const additionalXY = [[1, 13], [1, 12], [14, 13], [14, 12], 
                          [1, 9], [1, 10], [14, 9], [14, 10], 
                          [1, 6], [1, 5], [14, 6], [14, 5],
                          [1, 3], [1, 2], [14, 3], [14, 2]];
    const walkableCoordinates = [];

    for(let i = 1; i <= WALKABLE_MAP_SIZE; i++) {
      for(let j of pathableY) {
        walkableCoordinates.push([i, j]);
      }
    }

    return [ ...walkableCoordinates, ...additionalXY ];
  }

  getWalkableCoordinates() {
    const WALKABLE_MAP_SIZE = 14;
    const pathableX = [1, 14];
    const pathableY = [1, 4, 7, 8, 11, 14];
    const additionalXY = [];

    return ({x: pathableX, y: pathableY});
  }

  getMappedTile(tile) {
    const mappedTiled = {
      '17': 'wallCurveS',
      '3': 'wallS',
      '1': 'wallE',
      '214': 'columnW',
      '222': 'columnCornerW',
      '166': 'slabS',
      '167': 'slabW',
      '174': 'slabHalfE',
      '175': 'slabHalfN',
      '176': 'slabHalfS',
      '436': 'pumpkinBasicNE',
      '488': 'cauliflowerNE',
      '520': 'cabbageSE',
      '2684355069': 'carrotNE',
      '3758097153': 'cornNE',
      '2684355324': 'radishNE',
      '315': 'pumpkinNW',
      '2147483971': 'pepperNE',
      '2684354882': 'beetNE',
      '342': 'broccoliSW',
      '579': 'paprikaNE',
      '768': 'eggplantSW',
      '827': 'mushroomSE',
      '2684355411': 'leekNE',
      '296': 'subNE',
      '2147484342': 'pineappleNE',
      '2147484593': 'bananaNE',
      '1028': 'pearNE',
      '256': 'watermelonNW',
      '259': 'grapesSE',
      '347': 'orangeNE',
      '705': 'appleSE',
      '767': 'avocadoHalfSE',
      '780': 'appleHalfSE',
      '2147484588': 'cherriesNE',
      '2147484597': 'strawberryNE',
      '956': 'onionHalfNW',
      '377': 'cartonSE',
      '1026': 'wholeHamNW',
      '2147484684': 'turkeyNE',
      '996': 'baconNW',
      '818': 'wholerHamSE',
      '936': 'fishNW',
      '2147484163': 'baconRawNE',
      '616': 'cartonSmallSW',
      '882': 'cheeseCutSW',
      '503': 'wineRedNE',
      '528': 'sodaSE',
      '311': 'sodaGlassNE',
      '460': 'frappeSW',
      '490': 'sodaCanNW',
      '525': 'sodaBottleNE',
      '650': 'wineWhiteSE',
      '997': 'sodaCanSE',
      '861': 'bowlCerealNW',
      '2147484509': 'bowlCerealNE',
      '265': 'cupTheaNW',
      '349': 'cupTeaSE',
      '255': 'cakeBirthdaySE',
      '1039': 'cakeNW',
      '800': 'hotDogSW',
      '2147484352': 'croissantNE',
      '711': 'bowlSoupNW',
      '706': 'burgerCheeseDoubleNW',
      '815': 'bowlBrothSE',
      '2147484484': 'friesNE',
      '874': 'tacoSW',
      '871': 'chineseSW',
      '2147483927': 'loafNE',
      '865': 'iceCreamCupSW',
      '881': 'bowlNE',
      '848': 'rollingPinSW',
      '2147484679': 'cookingSpatulaNE',
      '2147484672': 'cookingKnifeNE',
      '1027': 'utensilKnifeNE',
      '977': 'cakeSlicerNE',
      '951': 'cookingKnifeChoppingNE',
      '891': 'cookingSpatulaSW',
      '2147483921': 'loafBaguetteNE',
      '633': 'bagNW',
      '2147484281': 'bagNE',
      '984': 'honeySW',
      '2147484253': 'bagFlatNW',
      '605': 'bagFlatNE',
      '582': 'waffleNW',
      '580': 'frikandelSpeciaalNE',
      '807': 'muffinNW',
      '2147484838': 'Human0Idle0',
      '712': 'popsicleSE',
      '1034': 'popsicleChocolateSE',
      '953': 'cupcakeSE',
      '811': 'sundaeSW',
      '682': 'iceCreamSE',
      '656': 'sundaeSE',
      '461': 'popsicleChocolateNW',
      '1129': 'Human6Idle0',
    };

    return mappedTiled[tile];
  }

  createLayer(game) {
    const MAP_WIDTH = 16;
    const MAP_HEIGHT = 16;
    const TILE_WIDTH = 128;
    const TILE_HEIGHT = 128;

    let dataCounter = 0;

    for (let yy = 0; yy < (MAP_HEIGHT * TILE_HEIGHT); yy += TILE_HEIGHT) {
      for (let xx = 0; xx < (MAP_WIDTH * TILE_WIDTH); xx += TILE_WIDTH) {
        game.add.isoSprite(xx, yy, 0, 'floorE', game.floorGroup);

        const layer1Tile = map.layers[1].data[dataCounter];
        layer1Tile && game.add.isoSprite(xx, yy, 1, this.getMappedTile(layer1Tile), game.foundationsLvl1);

        const layer2Tile = map.layers[2].data[dataCounter];
        layer2Tile && game.add.isoSprite(xx, yy, 2, this.getMappedTile(layer2Tile), game.foundationsLvl2);

        const layer3Tile = map.layers[3].data[dataCounter];
        layer3Tile && game.add.isoSprite(xx, yy, 3, this.getMappedTile(layer3Tile), game.carpets);

        const layer4Tile = map.layers[4].data[dataCounter];
        if (layer4Tile) {
          const tile = game.add.isoSprite(xx, yy, 4, this.getMappedTile(layer4Tile), game.furnitureRack);
          tile.setTint(0x86bfda);
        }

        const layer5Tile = map.layers[5].data[dataCounter];
        if (layer5Tile) {
          // (layer5Tile == 1026) && console.log('1026: ', xx, yy)
          const tile = game.add.isoSprite(xx, yy, 5, this.getMappedTile(layer5Tile), game.food);
          // tile.setTint(0x86bfda);
        }

        const layer10Tile = map.layers[10].data[dataCounter];
        if (layer10Tile) {
          this.characterIsoSprite = game.add.isoSprite(xx, yy, 200, this.getMappedTile(layer10Tile), game.characterLvl);
          this.characterIsoSprite.setScale(2);
          console.log('characterIsoSprite: ', this.characterIsoSprite);
        }

        dataCounter++;
      }
    }
  }

  addCharacter(game) {
    // const character = game.add.sprite(1, 1, 'character', 'Human_0_Idle0.png');// keep him out side screen area

    const generatedFrames = game.anims.generateFrameNames('character12345', {
      start: 0, end: 9, zeroPad: 1,
      prefix: 'Human_0_Pickup', suffix: '.png'
    });

    console.log('Generated Frames: ', generatedFrames);

    const anim = game.anims.create({
      key: 'characterPickUp',
      frames: generatedFrames,
      repeat: -1
    });

    game.add.sprite(400, 300, 'character12345').setScale(4).play('characterPickUp');
  }

  spawnTiles() {
    var tile;

    for (var xx = 0; xx < 256; xx += 64) {
      for (var yy = 0; yy < 256; yy += 64) {
        tile = this.add.isoSprite(xx, yy, 0, 'tile', this.isoGroup);
        tile.setInteractive();

        tile.on('pointerover', function () {
          this.setTint(0x86bfda);
          this.isoZ += 5;
        });

        tile.on('pointerout', function () {
          this.clearTint();
          this.isoZ -= 5;
        });
      }
    }
  }

  update() {
    // this.updateCharacterPosition(this);
  }
  
  updateCharacterPosition(game) {
    // console.log('ABC');
    game.characterLvl.clear();
    setTimeout(() => {
      this.add.isoSprite(0, 15 * 128, 0, 'Human0Idle0', this.floorGroup);
    }, 1000)
  }
}

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  pixelArt: true,
  scene: IsoInteractionExample
};

new Game(config);