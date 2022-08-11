
import React from "react";
import Todo, {TodoList} from "./todo";

function App(props){
  // return (<div> 
  //   {/* {new Array(3).fill(null).map(el => <MovieCard/>)} */}
  //   <MovieCard 
  //   name ="batman"
  //   image = 'https://static.adjaranet.com/movies/posters/240/157/878575157-ed8bea02cc54f4c62ef55352ed39b447.jpg'

  //   />
  //   <MovieCard
  //   name ="batman"
  //   image = 'https://static.adjaranet.com/movies/posters/240/343/878578343-40f128fdcd35df7d71f5d3ad1c6fa543.jpg'

  //   ></MovieCard>
    
  //   <MovieCard
  //   name ="batman"
  //   image = 'https://static.adjaranet.com/movies/posters/240/157/878575157-ed8bea02cc54f4c62ef55352ed39b447.jpg'
  //   children='description'
  //   />
  // </div>
  // )
  return (
    <TodoList>
      <Todo title="Learn react" isDone={false}/>
      <Todo title="Learn node" isDone={true}/>
      <Todo title="Cry because as a developer i don't have a life" isDone={true}/>
    </TodoList>
  )
}
export default App