import SubNote from "./SubNote";

export default function BigNote() {
    return (
        <div className="big-note w-100 md:w-150 h-180 p-1.5">
            <div className="horizontal-container w-full h-full flex bg-amber-200 rounded-lg relative">
                <div className="note-header z-10 bg-amber-200 text-md md:text-2xl font-extralight text-amber-400 border-b-blue-200 border-b-1 w-full h-18 flex justify-center items-center absolute">
                    Avihay's Notebook 📝
                </div>
                <div className="left-container z-20 border-r-2 border-r-pink-400 w-16 h-full relative"></div>
                <div className="right-container overflow-y-scroll w-full h-full pt-20 absolute">
                    <SubNote />
                    <SubNote />
                    <SubNote />
                    <SubNote />
                    <SubNote />
                    <SubNote />
                </div>
            </div>
        </div>
    )
}