export const metadata = {
    metadataBase: new URL('https:ai.zenobyte.com.vn'),
    title: 'My Page Title',
    description: '"Restore your old face photos and keep the memories alive.',
    icons: {
        icon: '/favicon.ico',
    },
    openGraph: {
        siteName: 'restorePhotos.io',
        description: 'Restore your old face photos and keep the memories alive.',
        title: 'Face Photo Restorer',
    },
    twitter: {
        title: 'Face Photo Restorer',
        description: 'Restore your old photos and keep the memories alive.',
        images: [
            {
                url: 'https://restore-photos.vercel.app/og-image.png',
                alt: 'Face Photo Restorer',
            },
        ],
        card: 'summary_large_image',
    },
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body>
        {children}
        </body>
        </html>
    )
}
