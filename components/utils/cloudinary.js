import { CldImage } from 'next-cloudinary';

export default function CloudinaryImage({ publicId, alt, width, height }) {
  return (
    <CldImage
      src={publicId}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      quality="auto"
      fetchPriority="high"
    />
  );
}