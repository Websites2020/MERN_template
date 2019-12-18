class App extends React.Component {
    constructor(props) {
      super(props);
    }

    
    render() {
      return <div>
                Content Here
                <div id="component"></div>
            </div>;
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));