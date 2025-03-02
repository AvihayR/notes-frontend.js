export default function SubNote({ note }) {
    return (
        <div className="sub-note-container h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
            {note.desc}
        </div>
    )
}