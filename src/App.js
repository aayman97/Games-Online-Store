import logo from './logo.svg';
import './App.css';

function App() {
  
  return (
    <div className="App">
       <nav>
         <ul>
           <li><a href="#">Store</a></li>
           <li><a href="#">News</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Install App</a></li>
         </ul>
       </nav>

       <div className="TopContainer">

          <div className="showCase">
            <div>
              <p className="experience">Experience the masterpiece of a game</p>
               <p className="published">Published by Namco Bandai Games developed by FromSoftware. Dark Soul is an action role-playing game.</p>
               <button className="takeAlook"> Take A Look</button>
            </div>
          </div>

      
                <div className="topBox-a">
                   <h3>Available on</h3>
                   <h1>Xbox Series X|S</h1>
                   <h1>Xbox one</h1>
                </div>

                <div className="topBox-b">
                   <h3>Price</h3>
                   <h1>$ 49,99</h1>
                  <button>Special Offer!</button>
                </div>
     
       </div>

       <div className="newThisWeekContainer">
          <section className="card">
            <h1>New this week</h1>
            <h6>Explore all the new games released this week</h6>
          </section>

          <section className="card">
            <h1>Special Offers</h1>
            <h6>Find and enjoy all our special offers</h6>
          </section>

          <section className="card ">
            <h1 className="sellers">Top Sellers</h1>
            <h6>See which are the top sellers and find the best recommended games for you</h6>
          </section>

          <section className="card">
            <h1>Coming Soon</h1>
            <h6 className="save">Save the games are you waiting for and follow the release date</h6>
          </section>
       </div>


       <div className='newSeason'>
            <section className='newSeasonImage'>

            </section>

            <section className="newSeasonText">
              <section>
                <h1>Best this week</h1>
                <h5>See what's new in Season 6,the latest update for Halo.</h5>
                <button>Take A Look</button>
              </section>
            </section>
       </div>

       <div className="gamesContainer">
          <section className="destiny2"/>
          <section className="watchdog"/>
          <section className="masseffect"/>
          <section className="prey"/>
          <section className="skyrim"/>
          <section className="dishonored"/>
          <section className="rust"/>
          <section className="narcosis"/>
       </div>

       <div className="copyright">
         <h5>GamesPage &copy; 2021</h5>
       </div>
    </div>  
  );
}

export default App;
