import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css'
import Editor from './component/Editor'
import Preview from './component/Preview'
import { useState } from 'react';

function App() {
  const defaultText = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.


There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;

  const [expandEditor, setExpandEditor] = useState(false)
  const [expandPreview, setExpandPreview] = useState(false)
  const [text, setText] = useState(defaultText)
  const changeText = (e) => {
    setText(e.target.value)
  }
  return (
    <div className="App bg-primary d-flex align-items-center flex-column flex-wrap justify-content-center">
      <Editor text={text} changeText={changeText} expandEditor={expandEditor} setExpandEditor={setExpandEditor} expandPreview={expandPreview}/>
      <Preview text={text} expandPreview={expandPreview} setExpandPreview={setExpandPreview} expandEditor={expandEditor}/>
    </div>
  )
}

export default App;
