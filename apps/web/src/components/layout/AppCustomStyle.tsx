import { useSharedData } from '@/app/store';

export function AppCustomStyle() {
  const { Layout } = useSharedData();
  return (
    <>
      {Layout?.site_background_color && (
        <style jsx global>{`
          .prose {
            --tw-prose-pre-bg: ${Layout?.site_background_color};
          }
        `}</style>
      )}
    </>
  );
}
