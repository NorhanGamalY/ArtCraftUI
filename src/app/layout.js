import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-0 m-0" >
        {children}
      </body>
    </html>
  );
}
