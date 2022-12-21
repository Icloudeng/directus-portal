import { GetServerSidePropsContext } from 'next';

export default function Page() {
  return <></>;
}

export async function getServerSideProps({
  locale,
  defaultLocale,
}: GetServerSidePropsContext) {
  return {
    props: {},
    redirect: {
      destination: `/documentation/${
        locale !== defaultLocale && locale ? `${locale}/` : ''
      }`, // redirectto docusaurus base url
    },
  };
}
