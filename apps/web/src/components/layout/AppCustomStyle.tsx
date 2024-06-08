import { useSharedData } from '@/app/store';

export function AppCustomStyle() {
  const { SiteLayout } = useSharedData();
  return (
    <>
      {SiteLayout?.site_background_color && (
        <style jsx global>{`
          .prose {
            --tw-prose-pre-bg: ${SiteLayout?.site_background_color};
          }
        `}</style>
      )}
    </>
  );
}
