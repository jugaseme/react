import { Profile } from "./Profile";
import Gallery from "./gallery";
import "./App.css";

export default function App() {
  return (
    <div >
      <header>
        <h1>Gallery</h1>
        <Profile />
      </header>
      <div className="profile">
      <Gallery />
      </div>
    
    </div>
  );
}