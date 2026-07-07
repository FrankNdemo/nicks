import { createFileRoute } from "@tanstack/react-router";

import { JobsPage } from "../components/public-site";

export const Route = createFileRoute("/jobs")({
  validateSearch: (search: Record<string, unknown>) => ({
    destination: typeof search.destination === "string" ? search.destination : undefined,
  }),
  component: JobsRouteComponent,
});

function JobsRouteComponent() {
  const { destination } = Route.useSearch();

  return <JobsPage initialDestination={destination} />;
}
