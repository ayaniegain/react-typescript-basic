type PersonProps={
    name:{
        first:string
        last:string
    }
}
function Person(props:PersonProps) {
  return (
    <div>
       <h2>
         name: {props.name.first} title:{props.name.last}
        </h2>
    </div>
  )
}

export default Person