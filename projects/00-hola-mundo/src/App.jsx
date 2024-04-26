import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'asaprocky',
    name: 'Asap Rocky',
    isFollowing: true,
    id: 1,
  },
  {
    userName: 'elonmusk',
    name: 'Elon Musk',
    isFollowing: false,
    id: 2,
  },
  {
    userName: 'martinwest',
    name: 'Martin',
    isFollowing: true,
    id: 3,
  },
]


export function App () {

  return (
    <section className="App">
      {
        users.map(user => {
          const { userName, name, isFollowing, id } = user
          return (
            <TwitterFollowCard
              userName={userName}
              name={name}
              initialIsFollowing={isFollowing}
              key={id}
            />
          )
        })
      }
    </section>
  )
}