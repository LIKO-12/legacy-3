import { GetStaticProps, GetStaticPaths } from 'next';
import { getDocumentData, getAllDocumentsPaths, DocumentData } from '../../lib/docs';
import Document from '../../components/document';

type DocumentPageProps = { documentData: DocumentData };
const DocumentPage: React.FC<DocumentPageProps> = ({ documentData: { title, contentHtml } }) => {
    return (
        <Document>
            {title ? <h1>{title}</h1> : null}
            <article dangerouslySetInnerHTML={{ __html: contentHtml }} />
        </Document>
    );
}
export default DocumentPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id instanceof Array ? params.id.join("/") : (params?.id || "");
    const documentData = await getDocumentData(id);

    return { props: { documentData } }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: getAllDocumentsPaths(),
        fallback: false
    }
}