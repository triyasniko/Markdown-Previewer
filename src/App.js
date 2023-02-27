// import './App.css';
import ReactMarkdown from 'react-markdown';
// import remarkGfm from 'remark-gfm';
// import rehypeRaw from 'rehype-raw';
import {useState} from 'react';

function App() {
  const [markdown,setMarkdown]=useState('Test');
  return (
    <div className="bg-slate-300 py-20 w-full md:w-auto">
      <div className="mx-auto max-w-7xl px-4 lg:px-4 text-blue-600">
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div class="border-4 border-grey-400 px-5 py-5 pb-20 rounded-md">
            Editor
            <br />
            <textarea id="editor" value={markdown}
              onChange={e=>setMarkdown(e.target.value)}>

            </textarea>
          </div>
          <div class="border-4 border-grey-400 px-5 py-5 pb-20 rounded-md">
            Preview<br />
            <ReactMarkdown id="preview"
              // components={{
              //   h1:'h1',h2:'h2',h3:'h3',h4:'h4'
              // }}
              children={markdown}></ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
