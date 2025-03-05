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
        <div className="group sub-note-container relative flex justify-center items-center h-19 text-2xl font-light pl-18 text-blue-900 border-b-blue-200 border-b-1">
            <input type="checkbox" title={noteObj.completed ? 'Mark not completed' : 'Mark completed'} name={i} onChange={handleCheck} checked={noteObj.completed} className=" absolute cursor-pointer left-5 mt-1.5 z-20 w-5 h-4 rounded-2xl accent-amber-400" />
            <input type="text" placeholder="Your note here.." className={`w-full h-full focus:outline-0 border-0 decoration-amber-400 ${noteObj.completed && 'line-through'}`} value={noteObj.desc} onChange={handleChange} onBlur={handleBlur} />
            <button title="Delete note" className={`p-1.5 cursor-pointer opacity-0 transition duration-300 ease-in-out group-hover:${noteObj.note_id && 'opacity-100'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5 m-2 fill-current text-rose-700">
                    <path d="M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z" />
                </svg>
            </button>
        </div>
    )
}