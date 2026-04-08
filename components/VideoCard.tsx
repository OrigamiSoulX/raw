import Link from 'next/link';
import Image from 'next/image';

interface VideoCardProps {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  type?: string;
  episodes?: string;
  duration?: string;
  rating?: string;
  layout?: 'standard' | 'vertical' | 'wide' | 'horizontal';
}

export default function VideoCard({
  id,
  title,
  subtitle,
  imageUrl,
  type = 'series',
  episodes,
  duration,
  rating,
  layout = 'standard'
}: VideoCardProps) {

  const layoutStyles = {
    standard: "aspect-video",
    vertical: "aspect-[9/16]",
    wide: "md:col-span-2 aspect-[21/9]",
    horizontal: "flex gap-4 items-start w-full"
  };

  if (layout === 'horizontal') {
    return (
      <Link href={`/watch/${id}`} className="group flex gap-4 items-start w-full transition-colors hover:bg-white/5 p-2 rounded-xl">
        <div className="w-40 aspect-video flex-shrink-0 rounded-lg overflow-hidden relative">
          <Image fill src={imageUrl} alt={title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
          {duration && (
            <div className="absolute bottom-1 right-1 bg-black/80 px-1.5 py-0.5 rounded text-[10px] font-bold text-white">
              {duration}
            </div>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-bold text-white line-clamp-2 leading-tight mb-1">{title}</h4>
          <div className="text-[11px] text-on-surface-variant flex items-center gap-2">
             <span className="uppercase tracking-wider">{type}</span>
             {rating && <span>•</span>}
             {rating && <span className={rating === 'LOCKED' ? 'text-primary font-black' : ''}>{rating}</span>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/watch/${id}`}
      className={`group flex flex-col gap-3 ${layout === 'wide' ? 'md:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden rounded-xl bg-surface-high ${layoutStyles[layout === 'wide' ? 'wide' : layout === 'vertical' ? 'vertical' : 'standard']}`}>
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />

        {episodes && (
          <div className="absolute top-2 right-2 glass px-2 py-1 rounded text-[10px] font-black text-white uppercase tracking-tighter">
            {episodes}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1 pr-2">
        <h3 className="text-sm md:text-base font-bold text-white line-clamp-2 leading-tight transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="text-xs text-on-surface-variant uppercase tracking-widest font-medium">
          {type} {subtitle && `• ${subtitle}`}
        </p>
      </div>
    </Link>
  );
}
