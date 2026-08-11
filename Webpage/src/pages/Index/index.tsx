import Document from "@/icons/document.png"
import FileUploadWithPreview from "@/components/FileUploadWitrhPreview/FileUploadWithPreview"

const Index: React.FC = () => {
    return (
        <div className="w-full h-full flex flex-col justify-center align-middle">
            <div className="flex bg-[#FBBD86] h-20 justify-between p-4">
                <h1 className="text-[48px] -translate-y-4">Kuria</h1>
                <div className="flex gap-6">
                    <h1 className="text-white text-[24px]">Log In</h1>
                    <h1 className="text-white text-[24px]">Sign Up</h1>
                </div>
            </div>
            <div className="flex gap-8 p-6">
                <div className="flex flex-col gap-6">
                    <h2 className="text-[32px]">Welcome to Kuria</h2>
                    <p className="text-[20px]">Kuria is a study tool which breaks down Chinese/Japanese text from 
                        images into strings of words for you to read and store into your vocabulary. </p>
                    <p className="text-[20px]">
                        How to use:
                        <br/>
                        1. Upload a photo/document containing the text
                        <br/>
                        2. Press "Analyse"
                        <br/>
                        3. On the output screen, hover around the text to see the meaning of the text. 
                        Sign up to store them for your knowledge!
                    </p>
                    <p>Try it now!</p>
                    <FileUploadWithPreview />
                </div>
                <div className="flex justify-center items-center h-screen w-full bg-[#EEEEEE] border border-[#FBBD86] rounded-[7px]">
                    <div className="flex flex-col gap-2 items-center">
                        <img src={Document} className="size-10 opacity-35"/>
                        <h4 className="opacity-35 text-[16px]">Extracted Text will appear here.</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index