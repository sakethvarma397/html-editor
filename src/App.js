import React, { useRef, useState } from "react";
import Editor from "./components/Editor";
import Toolstrip from "./components/Toolstrip";
import ReactDOM from "react-dom";
import Preview from "./components/Preview";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./Theme";
import useDarkMode from "./hooks/useDarkMode";

const App = () => {
  const ref = useRef("aceEditor");
  const [value, setValue] = useState("");
  const [theme, setTheme] = useDarkMode();
  const code = useRef("");

  const updateCode = (newCode) => {
    code.current = newCode;
  };

  const executeCode = () => {
    let innerDoc = ReactDOM.findDOMNode(ref.current).contentDocument;
    innerDoc.body.innerHTML = code.current;
    setValue(code.current);
  };

  const resetCode = () => {
    code.current = "";
    executeCode();
    setValue("");
  };

  const handleSaveToPC = () => {
    var temp = document.createElement("div");
    temp.innerHTML = code.current;
    const fileData = temp.textContent || temp.innerText || "";
    const blob = new Blob([fileData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = "dowload.txt";
    link.href = url;
    link.click();
  };

  const changeTheme = () => {
    setTheme(theme === "light" ? "Dark" : "light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div className="main-container">
        <h1>Happy coding!</h1>
        <Toolstrip
          executeCode={executeCode}
          resetCode={resetCode}
          save={handleSaveToPC}
          changeTheme={changeTheme}
        />
        <div className="playground">
          <div className="editor">
            <Editor
              initialValue={value}
              theme={theme}
              updateCode={updateCode}
            />
          </div>
          <div className="preview">
            <Preview ref={ref} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
