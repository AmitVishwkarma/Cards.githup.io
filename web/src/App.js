import "./App.css";
import Card from "./component/Card/Card";
import CardList from "./component/Cardlist/CardList";
import Clinic from "./component/Cardlist1/Clinic";
import Card1 from "./component/Cardlist2/Card1";
import Customer from "./component/Customer/Customer";
import Navbar from "./component/Home/Navbar";
import NewsLetter from "./component/Newsletter/NewsLetter";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Card />
      <CardList />
      <Clinic />
      <Card1 />
      <Customer />
      <NewsLetter />
    </div>
  );
}

export default App;
