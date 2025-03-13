import { useState } from "react";
import mediaUpload from "../utils/mediaUpload";

export default function Testing() {
    const [files, setFiles] = useState([]);

    function UploadFile() {
        if (files.length === 0) {
            console.log("No files selected.");
            return;
        }

        files.forEach((file) => {
            console.log("Uploading file:", file.name);
            mediaUpload(file).then((url) => {
                console.log("File uploaded to:", url);
            });
        });
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-gray-100 h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg">
            <input
    type="file"
    multiple// ✅ Enables selecting multiple files
    accept="image/*,application/pdf,.doc,.docx,.xlsx,.mp3" // ✅ Ensures different file types are selectable
    onChange={(e) => {
        const selectedFiles = Array.from(e.target.files || []); // Convert FileList to Array safely
        console.log("Selected files:", selectedFiles);
        setFiles(selectedFiles);
    }}
    className="mb-4"
/>

                <button
                    onClick={UploadFile}
                    className="w-[200px] h-[50px] bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-150"
                >
                    Upload
                </button>
            </div>
        </div>
    );
}
