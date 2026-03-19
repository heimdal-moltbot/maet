export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-muted-foreground">
        Velkommen til Mæt! Her får du et overblik over din families madplan.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Denne uges plan</h3>
          <p className="mt-2 text-2xl font-bold">0 måltider</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Indkøbsliste</h3>
          <p className="mt-2 text-2xl font-bold">0 varer</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Opskrifter</h3>
          <p className="mt-2 text-2xl font-bold">0 opskrifter</p>
        </div>
        <div className="rounded-lg border border-border p-6">
          <h3 className="text-sm font-medium text-muted-foreground">Familiemedlemmer</h3>
          <p className="mt-2 text-2xl font-bold">0 medlemmer</p>
        </div>
      </div>
    </div>
  );
}
