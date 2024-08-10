export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-teal-100 dark:bg-teal-900">
      {children}
    </div>
  );
}
