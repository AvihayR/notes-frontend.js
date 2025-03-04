import { useState, useEffect } from "react"
import { getNotes } from "../services/apiService"
import SubNote from "./SubNote"


let initialPlaceHolders = Array(7).fill({ desc: "...", isMarked: false })


export default function BigNote() {
    const [placeHolders, setPlaceHolders] = useState(initialPlaceHolders)
    const [notes, setNotes] = useState([])

    useEffect(() => {
        getNotes().then((res) => {
            setNotes(res.notes)
        }).catch((error) => {
            console.error('Error fetching notes:', error)
        })
    }, [])

    useEffect(() => {
        if (notes.length > 0) {
            populatePlaceHolders(notes)
        }
    }, [notes])


    function addPlaceHolder() {
        if (placeHolders.length >= 99) return
        setPlaceHolders(p => [{ desc: '...', isMarked: false }, ...p])
    }


    function populatePlaceHolders() {
        let updatedPlaceHolders = [...placeHolders]

        while (updatedPlaceHolders.length < notes.length) {
            updatedPlaceHolders.unshift({ desc: "...", isMarked: false })
        }

        updatedPlaceHolders = updatedPlaceHolders.map((placeholder, index) => {
            if (notes[index]) {
                return {
                    ...placeholder,
                    desc: notes[index].desc.S,
                    note_id: notes[index].note_id.S,
                }
            }
            return placeholder
        })

        setPlaceHolders(updatedPlaceHolders)
    }


    return (
        <div className="big-note w-100 md:w-150 h-180 p-1.5">
            <div className="horizontal-container w-full h-full flex bg-amber-200 rounded-lg relative">
                <div className="note-header z-10 rounded-t-2xl bg-amber-200 text-md md:text-2xl font-extralight text-amber-400 border-b-blue-200 border-b-1 w-full h-18 flex flex-col justify-center items-center absolute">
                    <div className="plus-container">
                        <button onClick={addPlaceHolder} className="add-note-btn cursor-pointer overflow-hidden text-ellipsis w-16 whitespace-nowrap  m-2.5 rounded-full text-xl p-1.5 px-3.5 leading-none font-sans font-bold outline-2 bg-amber-400 text-amber-200 hover:bg-amber-300 hover:text-amber-50 hover:outline-amber-400 hover:pr-30 transition-all duration-600 ease-out">
                            +
                            Add note
                        </button>
                    </div>
                </div>
                <div className="left-container z-20 border-r-2 border-r-pink-400 w-16 h-full relative"></div>
                <div className="right-container overflow-y-scroll w-full h-full pt-20 absolute">
                    {placeHolders.map((note, index) => (
                        <div key={index} className="note">
                            <SubNote key={index} note={note} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}