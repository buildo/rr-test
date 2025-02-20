import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export function loader() {
  const randomId = Math.floor(Math.random() * 1000000);
  return { randomId };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Layout</h1>
      <p className="text-lg">Layout data: {loaderData.randomId}</p>
      <hr className="my-4" />
      <Outlet />
    </div>
  );
}
