//import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import style from "./style.module.css"

interface TextEditorProps {
  value: string;
  onChange: (content: string) => void;
}

export function TextEditor({value, onChange}: TextEditorProps) {
// Enviar htmlContent via API para o backend

  //const [value, setValue] = useState('');
  //const value2 = "<p>Alan Duarte <strong>Psicanalista</strong></p>";
  return (
    <div>
        <ReactQuill className={style.reactQuill} theme="snow" value={value} onChange={onChange} />
    </div>
    
  );
}
