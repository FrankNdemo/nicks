import { createFileRoute } from "@tanstack/react-router";

import { ContactPage } from "../components/public-site";

export const Route = createFileRoute("/contact-us")({
  component: ContactPage,
});
