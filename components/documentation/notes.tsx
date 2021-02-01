import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

export default function Notes({ notes }: { notes: string[] }) {
    return <>{notes.map((note) => <blockquote dangerouslySetInnerHTML={{__html: md.render(note)}}/>)}</>;
}