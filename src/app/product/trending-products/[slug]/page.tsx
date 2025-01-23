import ProductDetail from "@/app/components/ProductDetail";

export default function getProducts({
  params: { slug },
}: {
  params: { slug: string };
}) {
  return (
    <>
      <ProductDetail params={{ slug }} />
    </>
  );
}
