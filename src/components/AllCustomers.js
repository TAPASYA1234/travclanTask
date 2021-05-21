import { Typography } from '@material-ui/core';
import axios from 'axios';
import React,{useState} from 'react';
import SingleCustomerCard from './SingleCustomerCard';

const AllCustomers = ()=> {

    const [allCustomersList, setAllCustomersList] = useState([]);

    axios.get(`https://intense-tor-76305.herokuapp.com/merchants`).then(res =>{
        console.log(res.data);
        setAllCustomersList(res.data);
    })

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