const ALLOW_FILE = "mp4,mov";
const MAX_SIZE_LIMIT = 15 * 1024 * 1024;

export const fileExtensionValid = ({ name }: { name: string }): boolean => {
  const extension = removeFileName(name);
  if (!(ALLOW_FILE.indexOf(extension) > -1) || extension === "") {
    return false;
  }
  return true;
};

const removeFileName = (originalFileName: string): string => {
  const lastIndex = originalFileName.lastIndexOf(".");

  if (lastIndex < 0) {
    return "";
  }

  return originalFileName.substring(lastIndex + 1).toLowerCase();
};
