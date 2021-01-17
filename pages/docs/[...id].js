import { getDocumentData, getAllDocumentsPaths } from '../../lib/docs';
import Document from '../../components/document';

export default function DocumentPage({ documentData: { contentHtml } }) {
    return (
        <Document>
            <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Document>
    );
}

export async function getStaticProps({ params }) {
    const id = params.id instanceof Array ? params.id.join("/") : (params.id || "");
    const documentData = await getDocumentData(id);

    return {
        props: {
            documentData
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: getAllDocumentsPaths(),
        fallback: false
    }
}