const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const RESIZE_IMAGE_HEIGHT = 512;
const RESIZE_IMAGE_WIDTH = 256;

const imageDirectory = '/Users/soumonda/Downloads/foodKit_v1.2/Isometric/';

fs.readdir(imageDirectory, (err, files) => {
  // console.log('Files: ', files);
  console.error('Error: ', err);
  files.forEach(file => {
    // console.log(file);
    resizeImage(file);
  });
});

const resizeImage = (image) => {
  console.log('File: ', image);
  const resizedImage = sharp(`${imageDirectory}/${image}`)
    .resize(RESIZE_IMAGE_WIDTH, RESIZE_IMAGE_HEIGHT)
    .toFile(`./images/output/${image}-512x256.png`, (err) => {
      if (err) {
        console.error('Error: ', err);
      }
    });
};