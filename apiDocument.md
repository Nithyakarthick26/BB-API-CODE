// Page 1

# List of Category
> https://bb-api-code.herokuapp.com/category

# List of Location
> https://bb-api-code.herokuapp.com/location

# List of Quick Search
> https://bb-api-code.herokuapp.com/products


// Page 2
   Listing Page

# Products wrt Category
> https://bb-api-code.herokuapp.com/products/7


// Page 3

# Details of the Product wrt ObjectId
> https://bb-api-code.herokuapp.com/details/62e384efb605e3054cfe3b6f


// Page 4

# Order Details
> https://bb-api-code.herokuapp.com/orders

# Place Order
> (POST)https://bb-api-code.herokuapp.com/placeorder

// Page 5

# List of Order Placed
> https://bb-api-code.herokuapp.com/orders

# List of Order wrt Email
> https://bb-api-code.herokuapp.com/orders?email=riya@gmail.com

# Update Order Details with Payment
> (put) https://bb-api-code.herokuapp.com/updateOrder/2
{
	"status":"TXN_SUCCESS",
	"bank_name":"SBI",
	"date":"10/07/2022"
}

# Delete Order
> (delete) https://bb-api-code.herokuapp.com/deleteOrder/62cacbbd1b948d5c06d7fee0