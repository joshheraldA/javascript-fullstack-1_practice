const { readFileSync, writeFileSync} = require('fs');
const { join } = require('path');

const firstPath = join(__dirname, '../', 'utils/', 'text.txt');
const secondPath = join(__dirname, '../', 'utils/', 'second.txt');

const firstFile = readFileSync(firstPath, 'utf8');
const secondFile = readFileSync(secondPath, 'utf8');

var name = "Brylle";

writeFileSync(firstPath, `Brylle has deeznuts`);
writeFileSync(secondPath, `Brylle has deeznuts`);
writeFileSync(join(__dirname, '../', 'utils/', 'sync_file.txt'), `Can ${name} itterate through deeznuts`);
