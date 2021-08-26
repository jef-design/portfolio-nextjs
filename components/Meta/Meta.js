import Head from "next/head";
import jeffimage from '../../public/jeff.png'

function Meta({ title, keywords, description,image }) {
    return (
        <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
                <meta name="keywords" content={keywords} />
                <meta name="og:image" content={image}/>
                <meta name="description" content={description} />
                <link rel="icon" href="/favicon.ico" />
                <title>{title}</title>
        </Head>
    );
}
Meta.defaultProps = {
    title: "Jeff Bermejo | Front-end Developer",
    keywords: "Jeff Bermejo,jeffbermejo.ga",
    description: "Jeff Bermejo is a front-end web developer who specializes in building and designing exceptional digital experience.",
    image: {jeffimage}
};

export default Meta;
