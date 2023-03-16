import {useEffect, useState} from 'react'
import axios from "axios";
import './App.css'

type TodolistsResponseType = {
    pagesCount: number,
    page: number,
    pageSize: number,
    totalCount: number,
    items: ItemType[]
}
type ItemType = {
    isImportant: boolean,
    id: string,
    title:string,
    description: string,
    addedDate: string,
    order: number,
    images: ImagesType
}
type ImageType = {
    url: string
    width: number,
    height: number,
    fileSize: number
}
type ImagesType = {
    main: ImageType[]
}

function App() {
    //1. tags = []
    //6. tags = [{},{},{},{}]
    const [todolists, setTodolists] = useState<ItemType[]>([])

    //2. register effect
    useEffect(() => {
        //4.run effect
        axios.get<TodolistsResponseType>('https://todolists.samuraijs.com/api/1.0/todolists?pageNumber=1&pageSize=10').then(response => {
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
                    todolists.map((t) => {
                            const imageUrl = t.images.main.length > 1 ? t.images.main[1].url : 'https://placehold.co/48'
                            return <div key={t.id.toString()}>
                                <img src={imageUrl} alt={'https://placehold.co/48'}/>
                                <input type={"checkbox"} checked={t.isImportant}/>
                                <h4>{t.title}</h4>
                                <div>{t.description}</div>
                            </div>
                        }
                    )
                }

            </ul>
        </div>
    )
}

export default App
