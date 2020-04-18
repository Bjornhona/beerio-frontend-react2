import React, { useState, useEffect } from 'react';
import { withAuth } from '../../lib/authContext';
import { beerService } from '../../lib/beer-service';
import { Link, Redirect, useRouteMatch, useHistory } from 'react-router-dom';
// import Heart from '../components/Heart';
import './Beer.css';
import LoadingScreen from '../../components/loading-screen/LoadingScreen';

const Beer = (props) => {
  let match = useRouteMatch();
  const history = useHistory();
  const {id} = match.params;
  
  const goBack = () => {
    history.goBack();
  }
  const [beerData, setBeerData] = useState([]);
  const [redirect, setRedirect] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // const icon = beerData.labels && beerData.labels.icon;
  // const style = beerData.style && beerData.style.category.name;

  useEffect(() => {
    let ignore = false;

    const getBeer = () => beerService.getBeer(id)
    .then(data => {
      if (!ignore) {
        setBeerData(data);
        setIsLoading(false);  
      }
    })
    .catch(error => {
      console.error(error.response);
      if (error.response.status === 404 || error.response.status === 500) {
        setRedirect(true);
        setIsLoading(false);
      }
    });
    getBeer();

    return () => {ignore = true}
  }, [id]);

  const {labels, name, style, abv, isOrganic} = beerData;

  return (
    isLoading ? <LoadingScreen /> : 
    redirect ? <Redirect to='/notfound'/> :
    // redirect ? props.history.replace('/notfound') :
      <div className="section">
        <div className="beer-container">
          <div className="back-heart">
            <Link to='/favorites' className="go-back" onClick={goBack}><span role="img" aria-label="left-angle-bracket">〈</span></Link>
            {/* <Heart beerData={beerData} /> */}
          </div>

          {labels && <div className="label-img">
            <div>
              <img className="big-label-img" src={labels.large} alt="No pic" />
            </div>
          </div>}

          <h1>{name}</h1>
          {style && 
            <>
              <h5>{style.name}</h5>
              <h6>{style.category.name}</h6>
              <p>{style.year}</p>
              <p>{style.description}</p>
            </>
          }
          <div className="beer-info">
            <div><strong>Abv: </strong>{abv}%</div>
            <div><strong>Ibu: </strong>{style && style.ibuMax}</div>
            <div><strong>Organic Beer:</strong> {isOrganic}</div>
          </div>
        </div>
      </div>
  )
}

export default withAuth(Beer);