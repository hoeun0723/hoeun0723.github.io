import { useEffect, useRef } from "react";

const customUtteranceAttribute = {
    src: 'https://utteranc.es/client.js',
    repo: 'hoeun0723/hoeun0723.github.io',
    'issue-term': 'pathname',
    theme: 'github-light',
    label:'💬 comments',
    crossorigin: 'anonymous',
    async: 'true',
}

const Comment = () => {
    const element = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if (element.current === null) return
        const utterances: HTMLScriptElement = document.createElement('script')
        const attributes = customUtteranceAttribute

        Object.entries(attributes).forEach(([key, value])=> {
            utterances.setAttribute(key, value)
        })

        element.current.appendChild(utterances)
    },[])

    return <div ref={element}/>
}

export default Comment