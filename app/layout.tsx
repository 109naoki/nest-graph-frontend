"use client";

import "modern-css-reset";
import { ApolloProvider } from "@apollo/client";
import client from "@/apolloClient";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ApolloProvider client={client}>
      <html lang="ja">
        <body>{children}</body>
      </html>
    </ApolloProvider>
  );
}
