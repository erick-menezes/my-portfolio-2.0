import Head from "next/head";

interface HeadContentProps {
    pageTitle?: string;
}

export function HeadContent({ pageTitle }: HeadContentProps) {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{pageTitle ?? 'Erick Menezes - Full Stack Developer'}</title>
        </Head>
    );
}
