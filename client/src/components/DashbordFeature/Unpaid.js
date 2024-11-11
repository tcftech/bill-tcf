import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Invidual from './individual'





const UnPaidInvoices = () => {
    

    const { invoices, isLoading } = useSelector((state) => state?.invoices)
    const unpaidInvoice = invoices?.filter((invoice) => invoice.status === 'Unpaid')

    return(
        <>
           <Invidual invoices={unpaidInvoice}/>
        </>
    )
   
  
}

export default UnPaidInvoices;