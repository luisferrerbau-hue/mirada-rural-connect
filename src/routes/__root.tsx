import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-serif text-2xl">Camino sin salida</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Esta página se perdió entre los caminos de tierra.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-sm bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Volver al pueblo
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-2xl">Algo no cargó bien</h1>
        <p className="mt-2 text-sm text-muted-foreground">Inténtalo de nuevo.</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 rounded-sm bg-primary px-5 py-2 text-sm text-primary-foreground hover:bg-primary/90"
        >
          Reintentar
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mirada Rural — Visibilidad para los pueblos" },
      { name: "description", content: "Mirada Rural da visibilidad a los problemas del medio rural: despoblación, servicios, agricultura y memoria." },
      { property: "og:title", content: "Mirada Rural — Visibilidad para los pueblos" },
      { property: "og:description", content: "Mirada Rural da visibilidad a los problemas del medio rural: despoblación, servicios, agricultura y memoria." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Mirada Rural" },
      { name: "twitter:title", content: "Mirada Rural — Visibilidad para los pueblos" },
      { name: "twitter:description", content: "Mirada Rural da visibilidad a los problemas del medio rural: despoblación, servicios, agricultura y memoria." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aaa0b444-10c4-4df3-8678-9796774a86a7/id-preview-73d72ffd--04199d0f-1688-4774-ad7c-4ab645a4a678.lovable.app-1779366058729.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/aaa0b444-10c4-4df3-8678-9796774a86a7/id-preview-73d72ffd--04199d0f-1688-4774-ad7c-4ab645a4a678.lovable.app-1779366058729.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head><HeadContent /></head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
