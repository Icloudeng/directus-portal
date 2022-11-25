import { useSharedData } from '@/app/store';
import { mut } from '@/cms/mut';
import { STemplates_Props, ST_LatestBlog } from '@apps/contracts';
import { BlingCard } from '@/components/ui/cards/BlingCard';

export function ST_LatestBlogFC({ items }: STemplates_Props<ST_LatestBlog>) {
  const { item } = items[0];
  const { locale } = useSharedData();

  return (
    <div className='grid grid-cols-1 sd:grid-cols-2 md:grid-cols-3 gap-5 '>
      {item.blogs?.map((blog) => {
        const { translations, id, image, slug } = mut(blog, locale);
        return (
          <BlingCard
            key={id}
            title={translations?.title || ''}
            description={translations?.summary || ''}
            link={'/blog/' + slug}
            image={image}
          />
        );
      })}
    </div>
  );
}
