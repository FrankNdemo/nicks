import { createFileRoute } from "@tanstack/react-router";

import { AboutPage } from "../components/public-site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});
