
import './App.css';
import Profile from './components/profile/Profile.jsx';

function App() {
  const data = [
    {
      fullname: " Amine Ahmed ",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,facilis",
      profession: " Comptable ",
    },
    {
      
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,facilis",
      profession: " Dentiste ",
    },

    {
      fullname: " Ali Chaali ",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,facilis",
      profession: " Avocat ",
    },
    {
      fullname: " Samir Safi ",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,facilis",
      profession: " Pharmacien ",
    },

    {
      fullname: " Anis Ali ",
      bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,facilis",
      profession: " Pilote ",
    },
  ]; 
  const handleName =(name)=> { 
    alert(`Welcome ${name}`)
  }
  return (
    <div className="App">
      <Profile data={data} handleName={handleName} />
    </div>
  );
}

export default App;
