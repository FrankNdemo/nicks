import { createFileRoute } from "@tanstack/react-router";

import { SuccessPage } from "../components/public-site";

export const Route = createFileRoute("/success")({
  component: SuccessPage,
});
