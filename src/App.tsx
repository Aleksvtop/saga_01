import { useState } from 'react'

import './App.css'

function App() {
    let tags = [{id:1, title: "HTML"}, {id:2, title: "CSS"}, {id:3, title: "JS"}, {id:4, title: "React"}];
  return (
    <div>
      <ul>
          {
              tags.map(t =>
                  <div id={t.id.toString()}>{t.title}</div>)
          }

      </ul>
    </div>
  )
}

export default App
