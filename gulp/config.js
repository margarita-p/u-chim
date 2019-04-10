const destPath = './public';
const srcPath = './source';

const config = {
  name: 'project',
  src: {
    root          : srcPath,
    blocks        : srcPath + '/blocks',
    pug           : srcPath + '/pug/*.pug',
    html          : srcPath + '/html/',
    sass          : srcPath + '/sass/styles.scss',
    scripts       : srcPath + '/scripts/**/*.js',
    images        : [srcPath + '/assets/images/**/*.*', srcPath + '/pug/blocks/**/images/*.*', srcPath + '/html/blocks/**/images/*.*'],
    svg           : srcPath + '/assets/image',
    upload        : srcPath + '/assets/upload/**/*.*',
    spritePng     : srcPath + '/assets/sprites/png/**/*.png',
    spriteSvg     : srcPath + '/assets/sprites/svg/**/*.svg',
    fonts         : srcPath + '/assets/fonts/**/*',
    favicon       : srcPath + '/assets/favicon/**/*',
    sassCopy      : srcPath + '/sass/**/*.scss',
    sassCopyBlock : srcPath + '/pug/**/*.scss',
    libScripts    : [
                      'node_modules/jquery/dist/jquery.js',
                      './node_modules/object-fit-images/dist/ofi.js',
                      './node_modules/svg4everybody/dist/svg4everybody.js',
                      './node_modules/imask/dist/imask.js',
                      './node_modules/picturefill/dist/picturefill.js',
                      // 'node_modules/jquery-match-height/dist/jquery.matchHeight.js',
                      'node_modules/slick-carousel/slick/slick.js',
                      // 'node_modules/jquery.maskedinput/src/jquery.maskedinput.js',
                    ],
    libStyles     : [
                      './node_modules/normalize.css/normalize.css',
                    ],
    zip           : destPath + '/**/*.*',
  },
  dest: {
    root          : destPath,
    html          : destPath,
    css           : destPath + '/styles',
    sassCopy      : destPath + '/styles',
    sassCopyBlock : destPath + '/styles/blocks',
    libStyles     : destPath + '/styles/libs',
    scripts       : destPath + '/scripts',
    scriptsBlock  : destPath + '/scripts/blocks',
    libScripts    : destPath + '/scripts/libs',
    images        : destPath + '/assets/images',
    fonts         : destPath + '/assets/fonts',
    favicon       : destPath + '/assets/favicon',
    spriteSvg     : destPath + '/assets/images/sprites',
    upload        : destPath + '/assets/upload',
    zip           : 'D:/projects/zip/',
  },
  watch: {
    root          : srcPath,
    pug           : srcPath + '/pug/**/*.pug',
    html          : srcPath + '/html/**/*.html',
    sass          : srcPath + '/**/*.scss',
    scripts       : srcPath + '/**/*.js',
    spriteSvg     : srcPath + '/assets/sprites/svg/**/*.svg',
    fonts         : srcPath + '/assets/fonts/**/*.*',
    favicon       : srcPath + '/assets/favicon/**/*',
    images        : [srcPath + '/assets/images/**/*.*', srcPath + '/blocks/**/images/*.*', srcPath + '/html/blocks/**/images/*.*'],
    upload        : srcPath + '/assets/upload',
  },
  onError: require('./util/onError')
};

module.exports = config;
