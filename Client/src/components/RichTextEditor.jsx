import React, { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";

const RichTextEditor = ({ input, setInput }) => {
  const { quill, quillRef } = useQuill({
    theme: "snow",
    modules: {
      toolbar: [
        [{ header: [1, 2, false] }],
        ["bold", "italic", "underline"],
        ["link"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["clean"],
      ],
    },
  });

  // Set initial value
  useEffect(() => {
    if (quill && typeof input.description === "string") {
      quill.clipboard.dangerouslyPasteHTML(input.description);
    }
  }, [quill]);

  // Safely update description without wiping other fields
  useEffect(() => {
    if (quill) {
      quill.on("text-change", () => {
        setInput((prev) => ({
          ...prev,
          description: quill.root.innerHTML,
        }));
      });
    }
  }, [quill, setInput]);

  return (
    <div
      ref={quillRef}
      className="min-h-[100px] h-[150px] border border-gray-300 rounded-md p-3 bg-white overflow-y-auto"
    ></div>
  );
};

export default RichTextEditor;
