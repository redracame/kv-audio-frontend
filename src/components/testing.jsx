import { useState } from "react";
import mediaUpload from "../utils/mediaUpload";

export default function Testing() {
    const [files, setFiles] = useState([]);

    function UploadFile() {
        // Log the file names
        files.forEach((file) => {
            console.log(file.name);
        });

        // Upload each file using the mediaUpload function
        files.forEach((file) => {
            mediaUpload(file).then((url) => {
                console.log(url); // Log the uploaded file's URL
            });
        });
    }

    return (
        <div className="w-full flex flex-col justify-center items-center bg-gray-100 h-screen">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <input
                    type="file"
                    multiple
                    onChange={(e) => setFiles(Array.from(e.target.files))}
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
