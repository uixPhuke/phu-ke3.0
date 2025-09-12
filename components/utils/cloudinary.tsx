import { CldImage } from 'next-cloudinary';

interface CloudinaryImageProps {
  publicId: string;
  alt: string;
  width: number;
  height: number;
}

export default function CloudinaryImage({ publicId, alt, width, height }: CloudinaryImageProps) {
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