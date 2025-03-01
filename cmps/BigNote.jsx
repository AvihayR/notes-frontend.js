export default function BigNote() {
    return (
        <div className="big-note w-100 md:w-150 h-180 p-1.5">
            <div className="horizontal-container w-full h-full flex bg-amber-200 rounded-lg relative">
                <div className="note-header text-lg md:text-2xl font-medium text-amber-400 border-b-blue-200 border-b-2 w-full h-18 flex justify-center items-center absolute">
                    Avihay's Notebook 📝
                </div>
                <div className="left-container border-r-1 border-r-pink-400 w-14 h-full relative"></div>
            </div>
            {/* <div className="note-header caret-amber-100 bg-amber-200 w-full h-8 rounded-tl-lg rounded-tr-lg"></div> */}
            {/* caret-amber-100 bg-amber-200 rounded-lg */}
        </div>
    )
}