// Ninja Dash 3D settings. Edit, save, reload. Every line is optional.
window.NINJA_CONFIG = {

  // Loading screen background: put a picture in assets/ named loading.jpg
  // (loading.png or loading.webp also work). Tall phone pictures (9:16) fit best.
  loading: {
    file: 'assets/loading.jpg',
    showTitle: false   // true = also draw the NINJA DASH title on top of your picture
  },

  // Music: put an MP3 in assets/ named sound.mp3. It loops from the first tap.
  audio: {
    file: 'assets/sound.mp3',
    volume: 0.6,       // 0 to 1
    loop: true,
    enabled: true,
    sfx: true          // false = turn off the built-in jump/coin/crash sounds
  },

  // Camera. 45 = looking down at the floor at 45 degrees.
  camera: {
    angle: 29,         // 90 = straight down from above, 20 = low behind the runner
    minHeight: 6,     // how high the camera is (meters). Bigger = see more, runner looks smaller
    targetZ: -5.5      // where the camera aims on the road, ahead of the runner
  },

  // The runner: put a .glb file in assets/ named player.glb
  player: {
    file: 'assets/player.glb',
    height: 1.8,       // how tall he is in the game (meters). Bigger number = bigger runner
    rotateY: 180,      // turn the model. Most models need 180 to run away from the camera.
                       // If he runs backwards or sideways, try 0, 90 or -90.
    rotateX: 0,        // only change these if the model is lying on its back or side
    rotateZ: 0,
    runSpeed: 1,       // speed of the run animation, if your model has one
    // If your model has animations, they are found by name (run, jump, slide/roll, death, idle).
    // If yours are named differently, write the exact names here:
    animations: { run: '', jump: '', slide: '', dead: '', idle: '' }
  },

  // The coin: put a .glb file in assets/ named coin.glb
  coin: {
    file: 'assets/coin.glb',
    size: 0.8,         // size of the coin in meters
    rotateX: 0,        // a coin lying flat usually needs rotateX: 90 to stand up
    rotateY: 0,
    rotateZ: 0,
    spin: true,
    spinSpeed: 2.5
  },

  // The train: put a .glb file in assets/ named train.glb
  // It is ONE train car. The game joins 2 to 4 of them into a train.
  train: {
    file: 'assets/train.glb',
    length: 6,         // length of one car in meters (along the direction it travels)
    maxWidth: 2.0,     // a car is never wider than this (a lane is 2.2 wide)
    rotateY: 0,        // if the car is sideways, try 90 or -90. If the front faces backwards, try 180
    rotateX: 0,
    rotateZ: 0
  },

  // Plants in front of the houses, closer to the road: put a .glb file in assets/ named plant.glb
  plant: {
    file: 'assets/plant.glb',
    height: 1.4,       // how tall each plant is, in meters
    rotateX: 0,        // only change these if the model is lying on its side
    rotateY: 0,
    rotateZ: 0,
    min: 1,            // fewest plants in front of each house
    max: 3,            // most plants in front of each house
    distance: 4.5,     // how far from the middle of the road (road edge is 3.9, house is 5)
    enabled: true      // set false to remove the plants
  },

  // Houses are built into the game. Optionally, a picture of a house can replace them:
  // put a PNG (transparent background) in assets/ named house.png
  house: {
    file: 'assets/house.png',
    width: 9           // how wide each house picture is in the game (meters)
  }
};
