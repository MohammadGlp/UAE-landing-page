import "@/styles/globals.css";
import { HeaderComponent } from "@/screens/layout";
import { RootLoader } from "@/hooks/rootLoader";
export const metadata = {
  title: "UAEMO",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-main-color" suppressHydrationWarning={true}>
        <RootLoader>{children}</RootLoader>
      </body>
    </html>
  );
}