export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <nav>this is nav</nav>
      {children}
    </div>
  );
}
