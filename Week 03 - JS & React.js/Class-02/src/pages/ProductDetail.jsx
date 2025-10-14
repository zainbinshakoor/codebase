import { useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export function ProductDetail() {
  const { productId } = useParams();

  const [searchParams] = useSearchParams();
  console.log(searchParams.get("color"));
  console.log(searchParams.get("size"));

  return (
    <div>
      <h1>Product Detail Page</h1>
      <p>Product ID: {productId}</p>
    </div>
  );
}