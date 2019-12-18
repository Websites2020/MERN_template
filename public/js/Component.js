class Component extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = { check: true, text: "Save", color: "btn btn-primary"};
    // this.updateCheck = this.updateCheck.bind(this)
  }

  render() {
    return (
      <div>
        Component Here
      </div>
    );
  }
}

ReactDOM.render(<Component/>, document.querySelector('#component'));

