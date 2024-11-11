import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Invidual from './individual'




const ExtraPayment = ()=>{
    const { invoices, isLoading } = useSelector((state) => state?.invoices)

     // my code 
     const extrapayment =invoices?.filter((invoice)=>{
            return invoice.total<invoice.totalAmountReceived
     }
     );

     const extra="Extra Payment"

     return (
        <>
           <Invidual invoices={extrapayment} extra={extra} />
        </>
     )

}

export default ExtraPayment;