import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-noconflict/theme-dawn";
import "ace-builds/src-noconflict/theme-twilight";

require("ace-builds/webpack-resolver");

const Editor = ({ updateCode, initialValue, theme }) => {
  return (
    <AceEditor
      mode="html"
      theme={theme === "light" ? "dawn" : "twilight"}
      name="HTML Editor"
      height={"100%"}
      width={"100%"}
      onChange={(newValue) => updateCode(newValue)}
      fontSize={14}
      showPrintMargin
      focus
      editorProps={{ $blockScrolling: true }}
      wrapEnabled
      highlightActiveLine
      autoScrollEditorIntoView
      value={initialValue}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 2,
        showGutter: true,
      }}
    />
  );
};

export default Editor;
