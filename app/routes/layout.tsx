import { Outlet } from "react-router";
import type { Route } from "./+types/layout";

export function loader() {
  return { layoutData: "LAYOUT_DATA" };
}

export default function Layout({ loaderData }: Route.ComponentProps) {
  return (
    <div>
      <h1>Layout</h1>
      <p>{loaderData.layoutData}</p>
      <Outlet />
    </div>
  );
}
