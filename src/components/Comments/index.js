import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from './styledComponents'

const Comments = () => {
  const [name, setName] = useState('')
  const [commentText, setCommentText] = useState('')

  const [commentList, setCommentList] = useState([])

  const onNameChange = event => setName(event.target.value)
  const onCommentChange = event => setCommentText(event.target.value)

  const onSubmit = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      name,
      commentText,
    }
    setCommentList(prevState => [...prevState, newComment])

    setName('')
    setCommentText('')
  }
  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={onSubmit}>
        <NameInput
          type="text"
          placeholder="Your name"
          value={name}
          onChange={onNameChange}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={onCommentChange}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentList.map(eachItem => (
          <CommentItem commentDetails={eachItem} key={eachItem.id} />
        ))}
      </CommentsList>
    </CommentsContainer>
  )
}

export default Comments
