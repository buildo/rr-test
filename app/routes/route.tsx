import { Link } from "react-router";
import type { Route } from "./+types/route";

export function loader() {
  const randomId = Math.floor(Math.random() * 1000000);
  return { randomId };
}

export default function Route({ loaderData, params }: Route.ComponentProps) {
  return (
    <div>
      <h1>Route {params.id}</h1>
      <p>Route data: {loaderData.randomId}</p>
      <Link
        className="text-blue-500 underline"
        to={`/route/${loaderData.randomId}`}
      >
        Random Page
      </Link>
    </div>
  );
}
