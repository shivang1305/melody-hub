export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div>Home Layout</div>
      {children}
    </>
  );
}
