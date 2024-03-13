import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h2 className="text-green-600">Mithai Layout</h2>
      {children}
    </>
  );
}
