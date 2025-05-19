import { readFile } from 'fs/promises';
import path from 'path';

async function validateJSON(filePath: string): Promise<boolean> {
  try {
    const data = await readFile(filePath, 'utf8');
    JSON.parse(data);
    return true;
  } catch {
    return false;
  }
}


const valid = await validateJSON(path.join(__dirname, '../assets/valid.json'));
console.log(valid);

const invalid = await validateJSON(path.join(__dirname, '../assets/invalid.json'));
console.log(invalid);
