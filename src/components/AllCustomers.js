import { Typography } from '@material-ui/core';
import axios from 'axios';
import React,{useState,useEffect} from 'react';
import SingleCustomerCard from './SingleCustomerCard';

const AllCustomers = ()=> {

    const [allCustomersList, setAllCustomersList] = useState([]);

    const fetchAllCustomers = ()=>{
        axios.get(`https://intense-tor-76305.herokuapp.com/merchants`).then(res =>{
            setAllCustomersList(res.data);
        }).catch(err => {
            console.log('failed customer fetched!');
    
          });
    }

    useEffect(() => {
        fetchAllCustomers()
    }, [])

    

    return(
        <div>
            <Typography variant='h4' style={{textAlign:'center'}}  >All Customers List</Typography>
            {
                  allCustomersList && allCustomersList.length>0 && allCustomersList.map(customer =>
                    <SingleCustomerCard
                      props={customer} key={customer.id}
                    />
                  )
                }
        </div>
    )

}
export default AllCustomers;