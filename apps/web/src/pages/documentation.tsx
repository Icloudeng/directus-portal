export default function Page() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    props: {},
    redirect: {
      destination: '/documentation', // redirectto docusaurus base url
    },
  };
}
