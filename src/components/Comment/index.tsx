import useUtterance from "@/hooks/useUtterance"

const Comment = () => {
    const {utteranceElement} = useUtterance()

    return <div ref={utteranceElement}/>
}

export default Comment