-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
SELECT 
	p.ProductName, 
	c.CategoryName 
FROM Product as p
JOIN Category as c
	ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT 
	o.id, 
	s.CompanyName
FROM [order] as o
JOIN Shipper as s
	ON o.ShipVia = s.Id
WHERE o.OrderDate <= '2012-08-09';

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT 
	od.OrderId,
	p.ProductName, 
	od.quantity
FROM OrderDetail as od
JOIN Product as p
	ON p.id = od.ProductId
WHERE OrderId = 10251;

-- Display the OrderID, Customer's Company Name and the employee's LastName
-- for every order. All columns should be labeled clearly. Displays 16,789
-- records.
SELECT 
	o.id as OrderId, 
	c.CompanyName, 
	e.LastName as EmployeeLastName
FROM [Order] as o
JOIN Customer as c
	ON c.id = o.CustomerId
JOIN Employee as e
	ON e.id = o.EmployeeId;
