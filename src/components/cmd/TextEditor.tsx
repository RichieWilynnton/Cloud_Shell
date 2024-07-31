import React, { useState, useEffect, useRef } from "react";

const TextEditor = ({ content = "", handleTextEditorExit } : {content : string, handleTextEditorExit : (content : string) => void}) => {
    const editorRef = useRef<HTMLDivElement>(null);
    const [text, setText] = useState(content);

    const handleInput = (event: React.ChangeEvent<HTMLDivElement>) => {
        setText(event.target.innerText);
    };

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.innerHTML = content;  
        }
    }, [content]);

    return (
        <div>
            <button className="text-white" onClick={() => {handleTextEditorExit(text)}}>Exit text editor</button>
            <div
            ref={editorRef}
            contentEditable
            onInput={handleInput}
            className="bg-transparent outline-none border-none p-2 min-h-[100px] w-full box-border"
            style={{ whiteSpace: 'pre-wrap' }}
            />
        </div>
    );
};

export default TextEditor;