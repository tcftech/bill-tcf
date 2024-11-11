import moment from 'moment'
import toCommas from '../middleware/tocommas.js';





export default function (
   {  name,
      address,
      phone,
      email,
      dueDate,
      date,
      id,
      notes,
      subTotal,
      type,
      vat,
      total,
      items,
      status,
      totalAmountReceived,
      balanceDue,
      company,
   }) {
    const today = new Date();

 

   const balanceDueCommas= toCommas(Math.floor(balanceDue.split(",").join("")));
    
    
    

    

    return  `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TCF Technologies - Invoice</title>
    <style>
        body {
            font-family: Arial, sans-serif;
           
            background-color: #f4f4f4;
            padding:0px;
        }
        .invoice-box {
            max-width: 800px;
            margin: auto;
            padding: 20px;++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
            background: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        }
        .header {
             display: flex;
             justify-content: space-between;
             align-items: center;
        }
         .header div img {
            max-width: 150px;
           
        }
        .header div {
            text-align: right;
           
        }

        .summary, .student-details, .enrolled-package, .payment-history, .payment-terms {
            margin-top: 20px;
        }
        h2 {
            border-bottom: 2px solid #ddd;
            padding-bottom: 10px;
            margin-bottom: 10px;
        }
        .summary, .student-details, .enrolled-package, .payment-history, .payment-terms {
            width: 100%;
        }
        .summary p, .student-details p, .payment-terms p {
            margin: 5px 0;
        }
        table {
            width: 100%;
            height:30%;
            border-collapse: collapse;
            margin-top: 10px;
        }
        table th, table td {
            padding: 3px;
            text-align: left;
            border-bottom: 1px solid #ddd;
        }
        table th {
            background-color: #f4f4f4;
        }
        .payment-terms p {
            font-size: 12px;
            color: #555;
        }
    </style>
</head>
<body>

    <div class="invoice-box">
        <div class="header">
           
        <div  >
        <img src=${true?"https://tcftechnologys.com/assets/img/TCF_Logo%20(1).jpg":company?.logo} />
                <p>TCF Technologies</p>
                <p>9/5, 4th street, Railway Colony, Aminjikarai,</p>
                <p>Chennai - 600 029.</p>
                <p>GST IN: 33DEPPS6314F1ZB</p>
            </div>
        </div>

        <h2>Invoice</h2>
        <div class="summary">
            <p><strong>Invoice No.: </strong>CC-${id}</p>
            <p><strong>Invoice Date: </strong>${date}</p>
            <p><strong>Total: </strong>${total}</p>
            <p><strong>Discount: </strong>₹0</p>
            <p><strong>Paid: </strong>${totalAmountReceived}</p>
            <p><strong>Balance: </strong>${balanceDueCommas}</p>
        </div>

        <h2>Student Details</h2>
        <div class="student-details">
            <p><strong>ID: </strong>TCF ${id}</p>
            <p><strong>Name: </strong>${name}</p>
            <p><strong>Mobile No: </strong>${phone}</p>
            <p><strong>Email : </strong>${email}</p>

        </div>

        <h2>Enrolled Package</h2>
        <table class="enrolled-package">
            <tr>
                <th>Details</th>
                <th></th>
                <th>Fees</th>
            </tr>
            ${items.map((det)=>{
              return `<tr>
                <td>${det.itemName}</td>
                <td></td>
                <td>${det.unitPrice}</td>
            </tr>`
            })}
           
            <tr>
                <th>Sub total</th>
                <th></th>
                <th>${subTotal}</th>
            </tr>
            <tr>
                <th>GST(18%)</th>
                <th></th>
                <th>${vat}</th>
            </tr>
            <tr>
                <th>Total Fees</th>
                <th></th>
                <th>${total}</th>
            </tr>

        </table>

      

        <h2>Payment Terms</h2>
        <div class="payment-terms">
            <p>1. This invoice acknowledges that a payment has been made to TCF Technologies for its educational services.</p>
            <p>2. The amount includes all applicable taxes.</p>
            <p>3. Admission, once confirmed, cannot be canceled.</p>
            <p>4. Payments made are non-transferable and non-refundable.</p>
            <p>5. Cheque bounce charges have been revised to ₹300, plus ₹200 for courier charges, totaling ₹500, for bounced cheques sent to the student's address.</p>
            <p>6. This is a computer-generated document and does not require a hand signature for authorization.</p>
            <p>7. TCF Technologies reserves the right to make changes to the course structure and schedule without prior notice.</p>
            <p>8. All disputes are subject to the jurisdiction of Chennai courts only.</p>
            <p>9. The course fee is non-refundable under any circumstances.</p>
            <p>10. Fees paid for the course are non-transferable to any other student.</p>
            <p>11. In case of health issues or any other personal circumstances preventing you from attending the class, no refund will be issued.</p>
            <p>12. By enrolling in the course, you agree to these terms and conditions.</p>
            <p>13. Any late payments beyond the due date will incur a penalty of ₹500 per week.</p>
            <p>14. No rescheduling of classes is permitted. Students must attend the classes as per the scheduled timetable.</p>
         </div>
    </div>
</body>
</html>

    `
// return `
// <!DOCTYPE html>
// <html>
// <head>
// <style>

// .invoice-container {
//     margin: 0;
//     padding: 0;
//     padding-top: 10px;
//     font-family: 'Roboto', sans-serif;
//     width: 530px;
//     margin: 0px auto;
//     }

// table {
//   font-family: Arial, Helvetica, sans-serif;
//   border-collapse: collapse;
//   width: 100%;
// }

// table td, table th {
//   border: 1px solid rgb(247, 247, 247);
//   padding: 5px;
// }

// table tr:nth-child(even){background-color: #f8f8f8;}

// table tr:hover {background-color: rgb(243, 243, 243);}

// table th {
//   padding-top: 10px;
//   padding-bottom: 10px;
//   text-align: left;
//   background-color: #FFFFFF;
//   color: rgb(78, 78, 78);
// }

// .header {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
//     padding: 10px 5px;
    

// }
// .address {
//     display: flex;
//     align-items: center;
//     flex-direction: column;
//     justify-content: space-between;
//     padding: 10px 0px 15px 0px;
//     line-height: 10px;
//     font-size: 12px;
//     margin-top: -20px

// }

// .status {
//     text-align: right;
// }
// .receipt-id {
//     text-align: right;
// }

// .title {
//     font-weight: 100px;
//     text-transform: uppercase;
//     color: gray;
//     letter-spacing: 2px;
//     font-size: 8px;
//     line-height: 5px;
// }

// .summary {
//     margin-top: 2px;
//     margin-right: 0px;
//     margin-left: 50%;
//     margin-bottom: 15px;
// }

// img {
//     width: 100px;
   
// }

// </style>
// </head>
// <body>
// <div class="invoice-container">
// <section  class="header">
//         <div>
//           ${company?.logo ? `<img src=${company?.logo} />` : `<h2>___</h2>`}
//         </div>
//         <div class="receipt-id" style="margin-top: -120px 0 40px 0">
            
//         </div>
// </section>
// <section class="address">

//       <div>
//           <p class="title">From:</p>
//           <h4 style="font-size: 9px; line-height: 5px">${company.businessName ? company.businessName : company.name}</h4>
//           <p style="font-size: 9px; line-height: 5px">${company.email}</p>
//           <p style="font-size: 9px; line-height: 5px">${company.phoneNumber}</p>
//           <p style="font-size: 9px; line-height: 5px">${company.contactAddress}</p>
//       </div>

//       <div style="margin-bottom: 100px; margin-top: 20px">
//       <p class="title">Bill to:</p>
//         <h4 style="font-size: 9px; line-height: 5px">${name}</h4>
//         <p style="font-size: 9px; line-height: 5px">${email}</p>
//         <p style="font-size: 9px; line-height: 5px">${phone}</p>
//         <p style="font-size: 9px; line-height: 5px">${address}</p>
//       </div>

//     <div class="status" style="margin-top: -280px">
//         <h1 style="font-size: 12px">${Number(balanceDue) <= 0 ? 'Receipt' : type}</h1>
//         <p style="font-size: 8px; margin-bottom: 10px">${id}</p>
//         <p class="title" style="font-size: 8px">Status</p>
//         <h3 style="font-size: 12px">${status}</h3>
//         <p class="title" style="font-size: 8px">Date</p>
//         <p  style="font-size: 9px" >${moment(date).format('ll')}</p>
//         <p class="title"  style="font-size: 8px">Due Date</p>
//         <p  style="font-size: 9px">${moment(dueDate).format('ll')}</p>
//         <p class="title"  style="font-size: 8px">Amount</p>
//         <h3 style="font-size: 12px">${total}</h3> 
//     </div>
// </section>

// <table>
//   <tr>
//     <th style="font-size: 9px">Course</th>
//     <th style="font-size: 9px"></th>
//     <th style="font-size: 9px">Fees</th>
//     <th style="font-size: 9px">Discount(%)</th>
//     <th style="text-align: right; font-size: 9px">Amount</th>
//   </tr>

//   ${
//    items.map((item) => (
//  `  <tr>
//     <td style="font-size: 9px">${item.itemName}</td>
//     <td style="font-size: 9px">${item.quantity?"":""}</td>
//     <td style="font-size: 9px">${item.unitPrice}</td>
//     <td style="font-size: 9px">${item.discount}</td>
//     <td style="text-align: right; font-size: 9px">${(item.quantity * item.unitPrice) - (item.quantity * item.unitPrice) * item.discount / 100}</td>
//   </tr>`
//    ))
//   }


// </table>

// <section class="summary">
//     <table>
//         <tr>
//           <th style="font-size: 9px">Invoice Summary</th>
//           <th></th>
//         </tr>
//         <tr>
//           <td style="font-size: 9px">Sub Total</td>
//           <td style="text-align: right; font-size: 9px; font-weight: 700">${subTotal}</td>
//         </tr>

//         <tr>
//             <td style="font-size: 10px">VAT</td>
//             <td style="text-align: right; font-size: 9px; font-weight: 700">${vat}</td>
//           </tr>

//         <tr>
//             <td style="font-size: 10px">Total</td>
//             <td style="text-align: right; font-size: 9px; font-weight: 700">${total}</td>
//           </tr>

//         <tr>
//             <td style="font-size: 10px" >Paid</td>
//             <td style="text-align: right; font-size: 9px; font-weight: 700">${totalAmountReceived}</td>
//           </tr>

//           <tr>
//           <td style="font-size: 9px">Balance Due</td>
//           <td style="text-align: right; font-size: 9px; font-weight: 700">${balanceDue}</td>
//         </tr>
        
//       </table>
//   </section>
//   <div>
//       <hr>
//       <h4 style="font-size: 9px">Note</h4>
//       <p style="font-size: 9px">${notes}</p>
//   </div>
// </div>
// </body>
// </html>`
// ;




};