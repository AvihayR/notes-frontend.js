import { useEffect, useState } from "react"
import { getNote, createNote, updateNote } from "../services/apiService"


export default function SubNote({ note, i }) {
    const [noteObj, setNoteObj] = useState(note)
    useEffect(() => {
        setNoteObj(note)
    }, [note])

    const handleChange = (ev) => {
        setNoteObj({ ...note, desc: ev.target.value })
    }

    const handleBlur = async () => {
        try {
            let res = await getNote(note.note_id)

            if (!res) {
                res = await createNote(noteObj)
                setNoteObj({ ...noteObj, note_id: res.note.note_id })
            }
            else if (res.note.desc === noteObj.desc) return
            else {
                res = await updateNote(noteObj)
            }


        } catch (err) {
            console.log(err)
        }

    }

    const handleCheck = async () => {
        setNoteObj({ ...noteObj, completed: !noteObj.completed })
        await updateNote({
            note_id: noteObj.note_id,
            desc: noteObj.desc,
            completed: !noteObj.completed
        })
    }

    if (note === undefined) {
        return (
            <div className="sub-note-container h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
                Loading ...
            </div>
        )
    }
    return (
        <div className="sub-note-container relative flex justify-center items-center h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
            <input type="checkbox" name={i} onChange={handleCheck} checked={noteObj.completed} className="absolute left-5 mt-1.5 z-20 w-5 h-5 rounded-2xl accent-amber-400" />
            <input type="text" className={`w-full h-full focus:outline-0 border-0 decoration-amber-400 ${noteObj.completed && 'line-through'}`} value={noteObj.desc} onChange={handleChange} onBlur={handleBlur} />
        </div>
    )
}