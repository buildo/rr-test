import { Link } from "react-router";
import type { Route } from "./+types/route";

export function loader() {
  const randomId = Math.floor(Math.random() * 1000000);
  return { data: "DATA", randomId };
}

export default function Route({ loaderData, params }: Route.ComponentProps) {
  return (
    <div>
      <h1>Route</h1>
      <p>{loaderData.data}</p>
      <p>{params.id}</p>
      <Link to={`/route/${loaderData.randomId}`}>Random Page</Link>
    </div>
  );
}
