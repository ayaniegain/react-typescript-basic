type PersonListProps = {
  namelist:{
    first:string,
    last:string
  }[]
};

function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.namelist.map((e: any,i:any) => (
        <h2 key={i}>NAME: {e.first} || SURNAME: {e.last}</h2>
      ))}
    </div>
  );
}

export default PersonList;
