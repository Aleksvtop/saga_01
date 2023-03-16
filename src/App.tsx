import {useEffect, useState} from 'react'
import axios from "axios";
import './App.css'

function App() {
    //1. tags = []
    //6. tags = [{},{},{},{}]
    const [todolists, setTodolists] = useState<any[]>([])

    //2. register effect
    useEffect(() => {
        //4.run effect
        axios.get('https://todolists.samuraijs.com/api/1.0/todolists?pageNumber=1&pageSize=10').then(response => {
            console.log(response.data)
            setTodolists(response.data.items)
        })
        }, [])
    //3.empty rendering
    //7.tags rendering
    return (
        <div>
            <ul>
                {
                    todolists.map((t: any) => {
                            return <div key={t.id.toString()}>{t.title}</div>
                        }
                    )
                }

            </ul>
        </div>
    )
}

export default App
