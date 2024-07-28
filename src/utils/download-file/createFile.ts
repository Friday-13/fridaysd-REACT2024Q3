function createFile(content: string, type: string) {
  const rawData = new Blob([content], { type });
  const url = URL.createObjectURL(rawData);
  return url;
}

export default createFile;
