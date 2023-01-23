import { Box, Container } from '@chakra-ui/react'
import React from 'react';
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/webpack-resolver';
import { useState } from 'react';
import { style } from '@mui/system';
import './yoursolution.css'
import { useEffect } from 'react';
// store work
import { useSelector } from 'react-redux';
import { useRef } from 'react';


const Yoursolution = () => {
  const Font3s = useSelector((state) => state.FontSlice)
  const lang = useSelector((state) => state.Selectlang1)
  const [code, setCode] = useState('');

  const editorRef = useRef(null);

  const handleChange = newValue => {
    setCode(newValue);
  };
  const handleBackspace = () => {
    editorRef.current.editor.delete();
};
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.editor.textInput.focus();
    }
  }, [editorRef]);


  return (
    <Container width={'100%'} mt={'50px'}>
      <AceEditor
        ref={editorRef}
        placeholder={`Write your code here ${lang}`}
        mode={lang}
        theme="monokai"
        name="blah2"
        onKeyDown={handleBackspace} 
        onChange={handleChange}
        fontSize={`${Font3s}px`}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={false}
        value={code}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} style={{ width: "100%", backgroundColor: 'var(--compoback)' }} className='yoursolution' />
    </Container>
  )
}
export default Yoursolution