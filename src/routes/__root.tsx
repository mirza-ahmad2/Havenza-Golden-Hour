import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  Link,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site/header";
import { SiteFooter } from "@/components/site/footer";
import { LenisProvider } from "@/components/site/lenis-provider";
import { SITE_DEFAULT_DESCRIPTION, SITE_DEFAULT_TITLE, SITE_NAME, SITE_URL } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="text-[11px] uppercase tracking-[0.32em] text-gold">404</div>
        <h1 className="mt-4 font-serif text-5xl text-warm-white">Page not found</h1>
        <p className="mt-4 text-sm text-soft-gray">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center border border-gold px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
        >
          Return home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-serif text-3xl text-warm-white">This page didn't load</h1>
        <p className="mt-3 text-sm text-soft-gray">Please try again or return home.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button
            type="button"
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="border border-gold px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-gold transition-all duration-300 hover:bg-gold hover:text-background"
          >
            Try again
          </button>
          <a
            href="/"
            className="border border-white/15 px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-warm-white transition-colors hover:border-gold"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_DEFAULT_TITLE },
      { name: "description", content: SITE_DEFAULT_DESCRIPTION },
      { name: "author", content: "Havenza Properties LLC" },
      { name: "theme-color", content: "#0D0D0C" },
      { name: "application-name", content: SITE_NAME },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: "en_AE" },
      { property: "og:url", content: SITE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", href: "/favicon.png", type: "image/png", sizes: "32x32" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-gold focus:px-4 focus:py-2 focus:text-background"
        >
          Skip to content
        </a>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <LenisProvider>
        <div className="min-h-screen overflow-x-hidden bg-background text-foreground selection:bg-gold selection:text-background">
          <SiteHeader />
          <main id="main-content">
            <Outlet />
          </main>
          <SiteFooter />
        </div>
      </LenisProvider>
    </QueryClientProvider>
  );
}
