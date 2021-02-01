import MarkdownIt from 'markdown-it';
const md = new MarkdownIt();

type NotesProps = { notes: string[] };
const Notes: React.FC<NotesProps> = ({ notes }) => {
    return <>{notes.map((note) => <blockquote dangerouslySetInnerHTML={{__html: md.render(note)}}/>)}</>;
}

export default Notes;