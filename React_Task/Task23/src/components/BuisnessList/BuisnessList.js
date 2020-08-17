import  React from 'react';
import ReactDOM from 'react-dom';
import './BuisnessList.css';
import Business from '../Buisness/Buisness';


class BusinessList extends React.Component {
	render() {
		return(
      <div className="BusinessList">
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
        <Business />
      </div>
    );
						
	}
}
export default BusinessList ;
