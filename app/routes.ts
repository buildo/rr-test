import { type RouteConfig, layout, route } from "@react-router/dev/routes";

export default [
  layout("routes/layout.tsx", [route("route/:id", "routes/route.tsx")]),
] satisfies RouteConfig;
