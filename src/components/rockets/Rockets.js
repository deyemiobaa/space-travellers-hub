import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchedRockets, updateRockets } from '../../redux/rockets/Rockets';
import './Rockets.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const allRockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (!allRockets.length) dispatch(fetchedRockets());
  }, [dispatch]);

  const handleClick = ({ target }) => {
    const { id } = target;
    dispatch(updateRockets(Number(id)));
  };

  return (
    <div className="cards-container">
      {allRockets.map((rocket) => ((
        <div key={rocket.id} className="card">
          <div className="rocket-img">
            <img className="img" src={rocket.flickr_image} alt="rocket" />
          </div>
          <div className="rocket-description">
            <h1>{rocket.rocket_name}</h1>
            <span />
            <p className="description">
              <span>{rocket.canceled && <button type="button" className="canceled">Reserved</button>}</span>
              {rocket.description}
            </p>
            {rocket.canceled && (
            <button
              id={rocket.id}
              onClick={handleClick}
              className="cancel-reservation"
              type="button"
            >
              Cancel Reservation
            </button>
            )}
            {!rocket.canceled && (
            <button
              id={rocket.id}
              onClick={handleClick}
              className="reserve-rocket"
              type="button"
            >
              Reserve Rocket
            </button>
            )}
          </div>
        </div>
      )))}
    </div>
  );
};

export default Rockets;
