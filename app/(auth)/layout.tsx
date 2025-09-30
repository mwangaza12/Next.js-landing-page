import { HeroHeader } from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div>
            <HeroHeader />
            {children}
        </div>
  );
}
