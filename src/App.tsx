import {useEffect, useState} from 'react'

import './App.css'

function App() {
    const [tags, setTags] = useState<any[]>([])

    //2. register effect
    useEffect(() => {
        //4.run effect
        setTimeout(() => {
            //5. change observable state
            setTags([{id: 1, title: "HTML"},
                {id: 2, title: "CSS"},
                {id: 3, title: "JS"},
                {id: 4, title: "React"}]
            )
        }, 2000)
    }, [])
    //3.empty rendering
    //7.tags rendering
    return (
        <div>
            <ul>
                {
                    tags.map((t: any) => {
                            return <div key={t.id.toString()}>{t.title}</div>
                        }
                    )
                }

            </ul>
        </div>
    )
}

export default App
