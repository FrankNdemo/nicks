import { createFileRoute } from "@tanstack/react-router";

import { DestinationsPage } from "../components/public-site";

export const Route = createFileRoute("/destinations")({
  component: DestinationsPage,
});
