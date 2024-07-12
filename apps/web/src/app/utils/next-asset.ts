type NextAssetProps = {
  url?: string;
  width?: number;
  height?: number;
  quality?: number;

  defaultUrl?: string;
};

export function nextAsset({
  url,
  width,
  height,
  quality = 75,
  defaultUrl,
}: NextAssetProps) {
  if (!url) return defaultUrl;

  let str = `/_next/image?url=${encodeURIComponent(url)}`;

  if (width) {
    str += `&w=${width}`;
  }

  if (height) {
    str += `&h=${height}`;
  }

  if (quality) {
    str += `&q=${quality}`;
  }

  return str;
}
