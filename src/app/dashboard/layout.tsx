export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>
        <h3>Hola</h3>
      </div>
      <nav></nav>
      {children}
    </section>
  );
}
