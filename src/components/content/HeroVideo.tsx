import { urlFor } from "@/sanity/lib/image";

interface HeroVideoProps {
  video?: {
    asset?: {
      url?: string;
      _ref?: string;
      _type?: string;
    };
  };
  poster?: {
    asset?: {
      url?: string;
      _ref?: string;
      _type?: string;
    };
    alt?: string;
  };
}

export function HeroVideo({ video, poster }: HeroVideoProps) {
  if (!video?.asset?.url) {
    return null;
  }

  // Helper function to get poster URL
  const getPosterUrl = () => {
    if (!poster?.asset?.url) return undefined;

    // Check if it's already a full URL
    if (poster.asset.url.startsWith("http")) {
      return poster.asset.url;
    }

    // If it's a Sanity asset reference, use urlFor
    try {
      return urlFor(poster.asset).width(1920).height(1080).url();
    } catch (error) {
      console.warn("Error processing poster image:", error);
      return poster.asset.url; // Fallback to original URL
    }
  };

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={getPosterUrl()}
      >
        <source src={video.asset.url} type="video/mp4" />
        <source src={video.asset.url} type="video/webm" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
