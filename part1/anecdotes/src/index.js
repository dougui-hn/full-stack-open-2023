import {React, StrictMode, useState} from "react";
import {createRoot} from "react-dom/client";

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const qtyAnecdotes = anecdotes.length
  const initialPoints = new Array(qtyAnecdotes).fill(0)
  const [points, setPoints] = useState(initialPoints)

  const getNextAnecdote = () => setSelected(Math.floor(Math.random() * qtyAnecdotes))
  
  const incrementVoteTo = (index) => {
    const copy = [...points]
    copy[index] += 1
    setPoints(copy)
  }

  const mostVotedAnecdote = points.indexOf(Math.max(...points))

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p>
      <button onClick={() => {incrementVoteTo(selected)}}>vote</button>
      <button onClick={getNextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[mostVotedAnecdote]}</p>
      <p>has {points[mostVotedAnecdote]} votes</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>
    <App anecdotes={anecdotes} />
  </StrictMode>
)