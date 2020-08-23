export function characterPickObject(game, sprite) {
  game.anims.create({
    key: 'snooze',
    frames: [
        { key: 'Human_0_Pickup0' },
        { key: 'Human_0_Pickup1' },
        { key: 'Human_0_Pickup2' },
        { key: 'Human_0_Pickup3' },
        { key: 'Human_0_Pickup4' },
        { key: 'Human_0_Pickup5' },
        { key: 'Human_0_Pickup6' },
        { key: 'Human_0_Pickup7' },
        { key: 'Human_0_Pickup8' },
        { key: 'Human_0_Pickup9', duration: 50 }
    ],
    frameRate: 8,
    repeat: -1
  });

  console.log('Animate Character Pick Object');
  
  game.add.sprite(400, 300, 'Human_0_Pickup0').play('snooze');
}