import React, { useState, useEffect, useRef } from "react";

const TextEditor = ({ content = "" }) => {
    const [text, setText] = useState(content);
    const editorRef = useRef<HTMLDivElement>(null);

    const handleInput = (event: React.ChangeEvent<HTMLDivElement>) => {
        setText(event.target.innerText);
        console.log(text);
    };

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.textContent = content;
        }
    }, [content]);

    
    return (
        <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className="bg-transparent outline-none border-none p-2 min-h-[100px] w-full box-border"
        />
    );
};

export default TextEditor;
