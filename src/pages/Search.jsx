import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams] = useSearchParams();
  const param = searchParams.get(`pokemon`);

  return <div>Search</div>;
}
