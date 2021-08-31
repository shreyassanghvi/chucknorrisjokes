import "tachyons"
import {Component} from "react";
import NavBar from "../components/NavBar";
import Card from "../components/Card";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            joke: "Let's Get Going"
        }
    }
    componentWillUnmount() {
        this.setState({joke:""})
    }
    onRefresh = async function () {
        const resp = await fetch("https://api.chucknorris.io/jokes/random")
        const data = await resp.json();
        this.setState({joke: data["value"]});
    }

    render() {
        return (
            <div className={"tc ma7"}>
                <NavBar/>
                <div>
                    <Card Joke ={this.state.joke}/>
                </div>
                <button onClick={this.onRefresh} className={"white bg-black dib br3 pa3 grow ma4 f4"}>Let's Chuck it</button>
            </div>
        );
    }
}
export default App;
