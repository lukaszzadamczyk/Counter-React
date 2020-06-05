class App extends React.Component {
  state = {
    count: this.props.start,
    result: this.props.start,
  };

  handleCounter = (type, number) => {
    if (type === "minus") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result - number,
      }));
    } else if (type === "reset") {
      this.setState((prevState) => ({
        result: (prevState.result = 0),
      }));
    } else if (type === "add") {
      this.setState((prevState) => ({
        count: prevState.count + 1,
        result: prevState.result + number,
      }));
    }
  };

  render() {
    return (
      <>
        <BtnCount
          name="-1"
          type="minus"
          number="1"
          click={this.handleCounter}
        />
        <BtnCount name="reset" type="reset" click={this.handleCounter} />
        <BtnCount name="+1" type="add" number="1" click={this.handleCounter} />
        <ShowPanel count={this.state.count} result={this.state.result} />
      </>
    );
  }
}

const BtnCount = (props) => {
  const number = parseInt(props.number);
  return (
    <button onClick={() => props.click(props.type, number)}>
      {props.name}
    </button>
  );
};

const ShowPanel = (props) => {
  return (
    <>
      <h1>{props.count}</h1>
      <h1>{props.result}</h1>
    </>
  );
};
const number = 0;
ReactDOM.render(<App start={number} />, document.getElementById("root"));
