export default function Page({ params }: { params: { type: string } }) {
  return <>Type: {params.type}</>;
}
