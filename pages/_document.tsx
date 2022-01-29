import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    static async getInitialProps(ctx: never) {
        const initialProps = await Document.getInitialProps(ctx);
        return {...initialProps};
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    render() {
        return (
            <Html lang="de">
                <Head>
                    <link rel="shortcut icon" href="/images/favicon.svg"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;
