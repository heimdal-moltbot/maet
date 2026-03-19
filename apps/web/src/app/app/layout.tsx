import Link from 'next/link';

const navItems = [
  { href: '/app/dashboard', label: 'Dashboard' },
  { href: '/app/ugeplaner', label: 'Ugeplaner' },
  { href: '/app/indkoebsliste', label: 'Indkøbsliste' },
  { href: '/app/opskrifter', label: 'Opskrifter' },
  { href: '/app/profil', label: 'Profil' },
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="border-b border-border bg-background">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/app/dashboard" className="text-2xl font-bold text-primary">
            Mæt
          </Link>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-6 py-8">{children}</main>
    </div>
  );
}
