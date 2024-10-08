import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: 'Marieke Ceeleart - Naturopathy & Sewing',
  description: 'Discover the healing power of naturopathy and the creative joy of sewing with Marieke Ceeleart. Join our workshops and consultations for a healthier, more creative life.',
  openGraph: {
    title: 'Marieke Ceeleart - Naturopathy & Sewing',
    description: 'Discover the healing power of naturopathy and the creative joy of sewing with Marieke Ceeleart. Join our workshops and consultations for a healthier, more creative life.',
    url: 'https://marieke-ceeleart.com',
    siteName: 'Marieke Ceeleart',
    images: [
      {
        url: 'https://media.licdn.com/dms/image/v2/C5603AQHR-52WrYwG8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516469448779?e=1733961600&v=beta&t=ypt4amijwYfn0W3723CxFUrRpcHpXCA9X1ahsXe1Qrc',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marieke Ceeleart - Naturopathy & Sewing',
    description: 'Discover naturopathy and sewing with Marieke Ceeleart. Join our workshops for a healthier, creative life.',
    images: ['https://media.licdn.com/dms/image/v2/C5603AQHR-52WrYwG8g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516469448779?e=1733961600&v=beta&t=ypt4amijwYfn0W3723CxFUrRpcHpXCA9X1ahsXe1Qrc'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
