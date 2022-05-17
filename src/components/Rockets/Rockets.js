const Rockets = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <div className="rocket-img">
            <img src="" alt="rocket" />
          </div>
          <div className="rocket-description">
            <h1>Rocket1</h1>
            <p> short description of the rocket </p>
            <button className="reserve-rocket" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
        <div className="card">
          <div className="rocket-img">
            <img src="" alt="rocket" />
          </div>
          <div className="rocket-description">
            <h1>Rocket2</h1>
            <p> short description of the rocket </p>
            <button className="reserve-rocket" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
        <div className="card">
          <div className="rocket-img">
            <img src="" alt="rocket" />
          </div>
          <div className="rocket-description">
            <h1>Rocket3</h1>
            <p> short description of the rocket </p>
            <button className="reserve-rocket" type="button">
              Reserve Rocket
            </button>
          </div>
        </div>
      </div>
      <p>Rocket 1, Rocket 2</p>
    </>
  );
};

export default Rockets;
