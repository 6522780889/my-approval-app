import "./globals.css";

export const metadata = {
  title: "Approval App",
  description: "Request Approval System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* ใส่ฟอนต์มาตรฐานจาก Google Fonts เพื่อความสวยงามแทน Geist */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
