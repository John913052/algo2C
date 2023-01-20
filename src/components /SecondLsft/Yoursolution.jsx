import { Box, Container } from '@chakra-ui/react'
import React from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools"
import 'ace-builds/webpack-resolver';
import { useState } from 'react';
import { style } from '@mui/system';

// store work
import { useSelector } from 'react-redux';

const Yoursolution = () => {
  const lang=useSelector((state)=>state.Selectlang1)
    // console.log(lang)
    const [code, setCode] = useState(lang);
  
    const onChange = (e) => {
      if (e.keyCode === 8) {
        e.preventDefault();
        let newValue = e.target.value.slice(0, -1);
        setCode(newValue);
      }
    }
  return (
    <Container width={'full'}>
      <AceEditor
        placeholder="Placeholder Text"
        mode={lang}
        theme="monokai"
        name="blah2"
        // onLoad={this.onLoad}
        // onChange={this.onChange}
        onChange={onChange}
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={code}

        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }} style={{ width: "100%"}} />
        

    </Container>
  )
}

export default Yoursolution