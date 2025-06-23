import useComment from '@/hooks/useComment'

const Comment = () => {
  const { $commentElementRef } = useComment()

  return <div ref={$commentElementRef} />
}

export default Comment
