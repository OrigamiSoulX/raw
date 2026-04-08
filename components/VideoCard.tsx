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
  imageUrl,
  type = 'Transmission',
  duration,
  layout = 'standard'
}: VideoCardProps) {

  if (layout === 'horizontal') {
    return (
      <Link href={`/watch/${id}`} className="group flex gap-4 items-start w-full hover:bg-white hover:soft-shadow p-2 rounded-2xl transition-all duration-300">
        <div className="w-36 aspect-video flex-shrink-0 rounded-xl overflow-hidden relative bg-gray-50 border border-gray-100">
          <Image fill src={imageUrl} alt={title} className="object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="flex-1 min-w-0 pt-1">
          <h4 className="text-sm font-bold text-on-background line-clamp-2 leading-tight mb-1 group-hover:text-primary transition-colors">{title}</h4>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{type}</span>
            {duration && <span className="text-[10px] text-gray-300">•</span>}
            {duration && <span className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">{duration}</span>}
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/watch/${id}`}
      className="group flex flex-col gap-4"
    >
      <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-gray-50 soft-shadow border-4 border-white transition-all duration-500 group-hover:-translate-y-1">
        <Image
          fill
          src={imageUrl}
          alt={title}
          className="object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
        />
        {duration && (
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-on-background soft-shadow">
            {duration}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-1.5 px-2">
        <h3 className="text-base font-bold text-on-background line-clamp-2 leading-tight group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2">
           <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
             {type}
           </span>
           <div className="w-1 h-1 rounded-full bg-gray-200" />
           <span className="text-[11px] text-on-surface-variant font-bold uppercase tracking-widest">
             RAW Studio
           </span>
        </div>
      </div>
    </Link>
  );
}
