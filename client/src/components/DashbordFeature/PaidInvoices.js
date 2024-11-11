import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Invidual from './individual'





const PaidInvoices = () => {
    

    const { invoices, isLoading } = useSelector((state) => state?.invoices)
    const paid = invoices?.filter((invoice) => invoice.status === 'Paid')

    return(
        <>
        <Invidual invoices={paid}/>
        </>
    )
   
  
}

export default PaidInvoices;