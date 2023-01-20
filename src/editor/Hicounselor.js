


import AceEditor from "react-ace";

<AceEditor
  placeholder="Enter Your Code here"
  mode="javascript"
  theme="monokai"
  name="blah2"
  onLoad={this.onLoad}
  onChange={this.onChange}
  fontSize={14}
  showPrintMargin={true}
  showGutter={true}
  highlightActiveLine={true}
  value={`function onLoad(editor) {
  console.log("i've loaded");
  
}`}
  setOptions={{
  enableBasicAutocompletion: true,
  enableLiveAutocompletion: true,
  enableSnippets: true,
  showLineNumbers: true,
  tabSize: 2,
  }}/>