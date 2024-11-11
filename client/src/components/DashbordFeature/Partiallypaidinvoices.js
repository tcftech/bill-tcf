


import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Invidual from './individual'





const PartiallyPaidInvoices = () => {
    

    const { invoices, isLoading } = useSelector((state) => state?.invoices)
    const partial = invoices?.filter((invoice) => invoice.status === 'Partial')

    return(
        <>
        <Invidual invoices={partial}/>
        </>
    )
   
  
}

export default PartiallyPaidInvoices;