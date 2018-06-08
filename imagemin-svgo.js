const imagemin = require('imagemin');
const imageminSvgo = require('imagemin-svgo');

imagemin(['icons/**/*.svg'], 'dist', {
  use: [
    imageminSvgo({
      plugins: [
        {cleanupAttrs: {newlines: false}},
        {removeDoctype: true},
        {removeXMLProcInst: true},
        {removeComments: true},
        {removeMetadata: true},
        {removeTitle: true},
        {removeDesc: true },
        {removeUselessDefs: true},
        {removeXMLNS: false},
        {removeEditorsNSData: true},
        {removeEmptyAttrs: true},
        {removeHiddenElems: true},
        {removeEmptyText: true},
        {removeEmptyContainers: true},
        {removeViewBox: false},
        {cleanupEnableBackground: true},
        {minifyStyles: true},
        {convertStyleToAttrs: true},
        {convertColors: true},
        {convertPathData: false},
        {convertTransform: true},
        {removeUnknownsAndDefaults: true},
        {removeNonInheritableGroupAttrs: true},
        {removeUselessStrokeAndFill: true},
        {removeUnusedNS: true},
        {cleanupIDs: {remove: true, minify: true,
          prefix: {
            toString() {
              this.counter = this.counter || 0;
              return `svg_id_${this.counter++}`;
            }
          }
        }},
        {cleanupNumericValues: {floatPrecision: 3,leadingZero: true,defaultPx: true,convertToPx: true}},
        {cleanupListOfValues: {floatPrecision: 3,leadingZero: true,defaultPx: true,convertToPx: true}},
        {moveElemsAttrsToGroup: false},
        {moveGroupAttrsToElems: false},
        {collapseGroups: true},
        {removeRasterImages: false},
        {mergePaths: false},
        {convertShapeToPath: false},
        {sortAttrs: true},
        {removeDimensions: true},
        {removeAttrs: false},
        {removeElementsByAttr: false},
        {addClassesToSVGElement: false},
        {addAttributesToSVGElement: false},
        {removeStyleElement: false},
        {removeScriptElement: true},
      ],
      multipass: true
    })
  ]
}).then(function () {
  console.log('SVG-Icons were successfully optimized');
});