import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-primary">Mæt</h1>
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Log ind
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Kom i gang
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <h2 className="text-5xl font-bold tracking-tight text-foreground">
            Madplanlægning for
            <span className="text-primary"> hele familien</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Mæt hjælper din familie med at planlægge ugens måltider, generere indkøbslister
            automatisk og finde opskrifter som alle elsker.
          </p>
          <div className="mt-10 flex items-center justify-center gap-4">
            <Link
              href="/signup"
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              Start gratis
            </Link>
            <Link
              href="#features"
              className="rounded-md border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted"
            >
              Se funktioner
            </Link>
          </div>
        </section>

        <section id="features" className="border-t border-border bg-muted/50 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <h3 className="text-center text-3xl font-bold text-foreground">
              Alt du behøver til madplanlægning
            </h3>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <div className="rounded-lg border border-border bg-background p-8">
                <div className="mb-4 text-3xl">📅</div>
                <h4 className="text-lg font-semibold">Ugeplaner</h4>
                <p className="mt-2 text-muted-foreground">
                  Planlæg hele ugens måltider med et enkelt overblik. Morgenmad, frokost og
                  aftensmad.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-8">
                <div className="mb-4 text-3xl">🛒</div>
                <h4 className="text-lg font-semibold">Indkøbslister</h4>
                <p className="mt-2 text-muted-foreground">
                  Automatisk genererede indkøbslister baseret på din ugeplan. Del med hele familien.
                </p>
              </div>
              <div className="rounded-lg border border-border bg-background p-8">
                <div className="mb-4 text-3xl">👨‍🍳</div>
                <h4 className="text-lg font-semibold">Opskrifter</h4>
                <p className="mt-2 text-muted-foreground">
                  Saml familiens yndlingsopskrifter ét sted. Importer, opret og del opskrifter.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Mæt. Alle rettigheder forbeholdes.
        </div>
      </footer>
    </div>
  );
}
