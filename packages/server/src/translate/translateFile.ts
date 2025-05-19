import fs from 'fs/promises';
// 获取指定目录下所有文件
const getFiles = async (dir: string, files: string[] = []) => { 
  const dirents = await fs.readdir(dir, { withFileTypes: true });
  for (const dirent of dirents) {
    const res = `${dir}/${dirent.name}`;
    if (dirent.isDirectory()) {
      await getFiles(res, files);
    } else {
      files.push(res);
    }
  }
  return files;
}
