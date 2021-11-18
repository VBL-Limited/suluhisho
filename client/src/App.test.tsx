import App from "./App";
import ReactDOM from "react-dom";
it("Dummy test ", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
});
