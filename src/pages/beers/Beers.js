import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import { Link } from 'react-router-dom';
import BeersItem from '../../components/beers-item/BeersItem';
import { beerService } from '../../lib/beer-service';
import './Beers.css';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';

const Beers = () => {
  // const { beersData } = props.location.myProps;
  // const otherData = beersData && (typeof beersData !== undefined );
  const [inputValue, setInputValue] = useState('');
  const [beersData, setBeersData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let ignore = false;

    const getBeers = async () => await beerService.getBeers()
    .then(data => {if (!ignore) {
      setBeersData(data);
      setIsLoading(false);
    }})
    .catch(error => console.error('Error'));
    getBeers();

    return () => {ignore = true}
  }, []);

  const newData = beersData.filter((item) => {
    let dataName = item.name.toUpperCase();
    return dataName.includes(inputValue.toUpperCase())
  });

  const handleSearchInput = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <div className="beers-div section">
      <div className="searchbar">
        <input type="text" name="name" value={inputValue} onChange={handleSearchInput} placeholder="Search" />
      </div>
      <div className="beers-title">
        <Link to='/home' className="back-sign">
          <span role="img" aria-label="left-angle-bracket">〈</span>
        </Link>
        <h4>Explore the worlds best beers</h4>
        <span></span>
      </div>
      {isLoading ? <LoadingScreen /> : 
      newData.map((item) => {
        // handleFavorite(item);
        // const style = item.style && item.style.category.name;
        return (
          <BeersItem
            key={item.id}
            // id={item.id}
            // isFavorite={item.favorite}
            item={item}
            // icon={item.labels.icon}
            // style={style}
            // data={newData}
            // favorites={favorites}
          />
        )
      })}
    </div>
  )
}

export default withAuth(Beers);