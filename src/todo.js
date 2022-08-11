function Todo({title,isDone}){
    // const {name,image} = props 1gza
    // const name = props.name; 2gza
    // const image = props.image
    return(
      <div>
        <h3>{title}</h3>
        <p>{isDone}</p>
        {/* <p>{description}</p> */}
        {/* {children} */}
      </div>
    )
  }

  export function TodoList({children}){
    return (
        <div>{children}</div>
    )
  }
  export default Todo