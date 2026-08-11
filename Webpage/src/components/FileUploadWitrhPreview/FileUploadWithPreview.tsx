import { useState, useRef } from "react"
import Upload from "@/icons/upload.png"

const FileUploadWithPreview : React.FC = () => {
    const [file, setFile] = useState()
    const fileInputRef = useRef(null)

    const handleUploadClick = () => {
        if (file) return
        fileInputRef.current?.click()
    }

    const handleFileSelected = (e) => {
        if (!e.target.files || e.target.files.length == 0) {
            setFile(undefined)
            return
        }
        setFile(e.target.files[0])
    }

    const handleClear = () => {
        setFile(undefined)
    }

    return (
        <div className="flex flex-col gap-4">
            <div className="bg-[#F3F3F3] flex items-center justify-center border border-[#808080] rounded-[7px]">
                <div onClick={handleUploadClick} className={`${!file ? 'cursor-pointer' : ''}`}>
                    {file ? (
                        <img src={URL.createObjectURL(file)} alt="uploaded-image"/>
                    ) : (
                        <span className="flex flex-col gap-2 items-center p-6">
                            <img src={Upload} alt="upload-icon" className="opacity-35 size-6"/>
                            <h4 className="text-[14px] opacity-35">Supports PNG JPG and JPEG</h4>
                        </span>
                    )}
                    <input ref={fileInputRef} type="file" onChange={handleFileSelected} style={{ display: "none"}}/>
                </div> 
            </div>
            <div className="flex justify-between gap-10">
                <button 
                    className="w-full p-2 bg-[#CEC5C5] hover:cursor-pointer focus:outline-none flex items-center justify-center rounded-[10px] text-white text-[16px]"
                    onClick={handleClear}
                >
                    Clear
                </button>
                <button className="w-full p-2 bg-[#FBBD86] hover:cursor-pointer focus:outline-none flex items-center justify-center rounded-[10px] text-white text-[16px]">
                    Analyse
                </button>
            </div>
        </div>
        
    )
}

export default FileUploadWithPreview