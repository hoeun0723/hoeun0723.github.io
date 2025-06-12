import useComment from '@/hooks/useComment'

const Comment = () => {
  const { $commentElement } = useComment()

  return <div ref={$commentElement} />
}

export default Comment
