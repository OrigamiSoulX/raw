import Link from 'next/link';
import Image from 'next/image';

interface VideoCardProps {
  id: string;
  title: string;
  subtitle?: string;
  imageUrl: string;
  type?: 'series' | 'dialogue' | 'studio' | 'ritual' | 'masterclass' | 'notes';
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
    standard: "aspect-[4/3]",
    vertical: "md:row-span-2 aspect-[4/5]",
    wide: "md:col-span-2 aspect-video",
    horizontal: "flex gap-4 items-start"
  };

  if (layout === 'horizontal') {
    return (
      <Link href={`/watch/${id}`} className="group flex gap-4 items-start">
        <div className="w-32 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-900 border border-white/10 relative">
          <Image fill src={imageUrl} alt={title} className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
        </div>
        <div className="space-y-1">
          <div className="text-[10px] font-black text-primary tracking-widest uppercase">{type}</div>
          <h4 className="text-sm font-bold leading-snug group-hover:text-primary transition-colors text-white">{title}</h4>
          <div className="text-[10px] text-zinc-500 uppercase">{duration} • {rating} RATING</div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/watch/${id}`}
      className={`group relative overflow-hidden rounded-xl bg-surface-container shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,124,245,0.3)] ${layoutStyles[layout]}`}
    >
      <Image
        fill
        src={imageUrl}
        alt={title}
        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>

      <div className="absolute bottom-0 p-6 w-full space-y-2">
        <span className="text-xs font-black tracking-widest text-primary uppercase">
          {type} {episodes ? `/ ${episodes}` : ''}
        </span>
        <h3 className={`${layout === 'vertical' ? 'text-3xl' : 'text-xl'} font-bold leading-tight text-white`}>
          {title}
        </h3>
        {subtitle && (
          <p className="text-on-surface-variant text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {subtitle}
          </p>
        )}
      </div>
    </Link>
  );
}
