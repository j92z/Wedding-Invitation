const $fs = require('fs');
const $fm = require('fontmin');

const fmInstance = new $fm()
  .src('Fonts/Chn-Regular.ttf')
  .use($fm.glyph({
    text: $fs.readFileSync('Languages/zh.json'),
    hinting: false
  }))
  .dest('Assets');

fmInstance.run();