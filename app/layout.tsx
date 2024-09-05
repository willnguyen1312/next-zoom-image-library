import "../app.css";

export const metadata = {
  title: "Image Component with Next.js",
  description:
    "This page demonstrates the usage of the next/image component with zoom image library.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
