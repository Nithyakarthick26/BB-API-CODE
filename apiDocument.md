// Page 1

# List of Category
> http://localhost:9860/category

# List of Location
> http://localhost:9860/location

# List of Quick Search
> http://localhost:9860/products


// Page 2
   Listing Page

# Products wrt Category
> http://localhost:9860/products/1


// Page 3

# Details of the Product wrt ObjectId
>http://localhost:9860/details/62e384efb605e3054cfe3b6f


// Page 4

# Order Details
> http://localhost:9860/orders

# Place Order
> (POST)http://localhost:9860/placeorder

// Page 5

# List of Order Placed
> http://localhost:9860/orders

# List of Order wrt Email
> http://localhost:9860/orders?email=riya@gmail.com

# Update Order Details with Payment
> (put) http://localhost:9860/updateOrder/2
{
	"status":"TXN_SUCCESS",
	"bank_name":"SBI",
	"date":"10/07/2022"
}

# Delete Order
> (delete) http://localhost:9860/deleteOrder/62cacbbd1b948d5c06d7fee0