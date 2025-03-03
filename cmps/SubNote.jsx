import { useEffect, useState } from "react"
import { getNote } from "../services/apiService"


export default function SubNote({ note }) {
    const [noteObj, setNoteObj] = useState(note)

    useEffect(() => {
        setNoteObj(note)
    }, [note])

    const handleChange = (ev) => {
        setNoteObj({ ...note, desc: ev.target.value })
    }

    const handleBlur = async () => {
        getNote(note.note_id)
            .then((res) => { console.log(res) })
            .catch((err) => { console.log(err) })
    }

    if (note === undefined) {
        return (
            <div className="sub-note-container h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
                Loading ...
            </div>
        )
    }
    return (
        <div className="sub-note-container h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
            <input type="text" className="w-full h-full focus:outline-0 border-0" value={noteObj.desc} onChange={handleChange} onBlur={handleBlur} />
        </div>
    )
}