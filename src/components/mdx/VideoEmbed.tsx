'use client';

interface VideoEmbedProps {
  src: string;
}

export default function VideoEmbed({ src }: VideoEmbedProps) {
  return (
    <div className="aspect-video">
      <iframe
        src={src}
        title="Embedded video"
        className="w-full h-full"
        allowFullScreen
      />
    </div>
  );
}
