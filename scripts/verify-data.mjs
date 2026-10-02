import fs from 'fs';

const content = fs.readFileSync('./src/data/projects.ts', 'utf8');
const names = [...content.matchAll(/name:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total projects found:', names.length);
console.log('Projects list:');
names.forEach((name, i) => console.log(`${i + 1}. ${name}`));

const urls = [...content.matchAll(/url:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
console.log('Total URLs found:', urls.length);

const categories = [...content.matchAll(/category:\s*['"]([^'"]+)['"]/g)].map(m => m[1]);
const uniqueCategories = [...new Set(categories)];
console.log('Categories:', uniqueCategories);
