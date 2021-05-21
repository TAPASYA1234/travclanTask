import axios from 'axios';
import React,{useState,useEffect} from 'react';
import SingleBidData from './SingleBidData';
import { useLocation } from 'react-router-dom'

const CustomerBids = ({props})=> {


    const location = useLocation();
  
  var str =location.pathname ;
  var id = str.substring(10);

    const [customersBids, setCustomersBids] = useState([]);

    const fetchAllCustomers = ()=>{
        axios.get(`https://intense-tor-76305.herokuapp.com/merchants/${id}`).then(res =>{
            setCustomersBids(res.data.bids);
        }).catch(err => {
            console.log('failed customer bids fetched!');
    
          });
    }

    useEffect(() => {
        fetchAllCustomers()
    }, [])

    return(
        <div>
            {
                  customersBids && customersBids.length>0 && customersBids.map(customer =>
                    <SingleBidData
                      props={customer} key={customer.id}
                    />
                  )
                }


            </div>
    )
}
export default CustomerBids;