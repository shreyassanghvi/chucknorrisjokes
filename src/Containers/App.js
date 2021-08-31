
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import "tachyons"

function App() {
    return (
        <div className={"tc ma7"}>
            <NavBar />
            <Card Text="Chuck Norris Me"/>
        </div>
    );
}

export default App;
