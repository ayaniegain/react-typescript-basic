type GreetProps = {
  name: string;
  messageCount: number;
};

function Greet(props: GreetProps) {
  return (
    <div>
      <h2>
        Greet name :{props.name} and count: {props.messageCount}
      </h2>
    </div>
  );
}

export default Greet;
