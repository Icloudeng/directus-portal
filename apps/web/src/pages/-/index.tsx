export default function Page() {
  return <></>;
}

export async function getServerSideProps() {
  return {
    props: {},
    redirect: {
      destination: '/',
      permanent: true,
    },
  };
}
