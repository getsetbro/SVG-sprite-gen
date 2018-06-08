const fs = require('fs');
const glob = require("glob");
const path = require('path');
const ejs = require('ejs');

let demoTemplate = fs.readFileSync('index.ejs', 'utf8');
let svgspriteContent = fs.readFileSync('svgsprite.svg', 'utf8');
let context = {svgsprite: svgspriteContent};

glob("icons/*.svg", function (err, files) {
    if (err) {console.log(err);
        return;
    }
    context.files = files.map(function(file){
        return path.basename(file, '.svg');
    });
    let demoHtml = ejs.render(demoTemplate, context);
    fs.writeFileSync('index.html', demoHtml);
});