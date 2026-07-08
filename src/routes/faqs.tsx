import { createFileRoute } from "@tanstack/react-router";

import { FaqsPage } from "../components/public-site";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
});
