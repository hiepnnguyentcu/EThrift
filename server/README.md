<a name="top"></a>
# EThrift API Documentation v0.0.0

API Documentation for EThrift

# Table of contents

- [Order](#Order)
  - [Create Order](#Create-Order)
  - [Delete Order](#Delete-Order)
  - [Get Orders Related to User Role and ID](#Get-Orders-Related-to-User-Role-and-ID)
- [Product](#Product)
  - [Add New Product](#Add-New-Product)
  - [Delete Product](#Delete-Product)
  - [Get All Product](#Get-All-Product)
  - [Get Specific Product](#Get-Specific-Product)
- [ProductCategory](#ProductCategory)
  - [Add Product Category](#Add-Product-Category)
  - [Delete Product Category](#Delete-Product-Category)
  - [Edit Product Category](#Edit-Product-Category)
  - [Get All Product Categories](#Get-All-Product-Categories)
- [User](#User)
  - [Get All Users Data](#Get-All-Users-Data)
  - [Get User Access Token](#Get-User-Access-Token)
  - [Get User Data](#Get-User-Data)
  - [Sign In](#Sign-In)
  - [Sign Up Admin](#Sign-Up-Admin)
  - [Sign Up User](#Sign-Up-User)
- [UserAddress](#UserAddress)
  - [Add User Address](#Add-User-Address)
  - [Edit User Address](#Edit-User-Address)
  - [Get User Addresses](#Get-User-Addresses)

___


# <a name='Order'></a> Order

## <a name='Create-Order'></a> Create Order
[Back to top](#top)

```
POST /order
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Buyer Access Token</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| seller | `String` | <p>Handle of Seller</p> |
| addressID | `String` | <p>Address ID of User</p> |
| products | `Object[]` | <p>List of Products</p> |
| products.productID | `String` | <p>ID of Product</p> |
| products.size | `String` | <p>Size of Product</p> |
| products.variation | `String` | <p>Variation of Product</p> |
| products.quantity | `String` | <p>Quantity of Product</p> |
| products.note | `String` | <p>Note for Product</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| order | `Object` | <p>New Order Data</p> |

## <a name='Delete-Order'></a> Delete Order
[Back to top](#top)

```
DELETE /order/:orderID
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Seller or Admin Access Token</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| orderID | `String` | <p>ID of Order</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| order | `Object` | <p>Deleted Order Data</p> |

## <a name='Get-Orders-Related-to-User-Role-and-ID'></a> Get Orders Related to User Role and ID
[Back to top](#top)

```
GET /orders
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User Access Token</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| orders | `Object[]` | <p>All Orders Related to User</p> |

# <a name='Product'></a> Product

## <a name='Add-New-Product'></a> Add New Product
[Back to top](#top)

```
POST /product
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Seller Access Token</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>Name of Product</p> |
| brief | `String` | <p>Briefing of Product</p> |
| description | `String` | <p>Product Description</p> |
| price | `Number` | <p>Price of Product</p> |
| image | `String` | <p>Image URL of Product</p> |
| categories | `String[]` | <p>Product Categories ID</p> |
| sizes | `String[]` | <p>Sizes of Product</p> |
| variations | `String[]` | <p>Variations of Product</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| product | `Object` | <p>New Product Data</p> |

## <a name='Delete-Product'></a> Delete Product
[Back to top](#top)

```
DELETE /product/:id
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Seller or Admin Access Token</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>ID of Product</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| message | `String` | <p>Successful Message</p> |

## <a name='Get-All-Product'></a> Get All Product
[Back to top](#top)

```
GET /products
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| products | `Object[]` | <p>List of Product</p> |

## <a name='Get-Specific-Product'></a> Get Specific Product
[Back to top](#top)

```
GET /product/:productID
```

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| productID | `String` | <p>ID of Product</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| product | `Object` | <p>Product Data</p> |

# <a name='ProductCategory'></a> ProductCategory

## <a name='Add-Product-Category'></a> Add Product Category
[Back to top](#top)

```
POST /category/
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Admin Access Token</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | <p>Name of Category</p> |
| image | `String` | <p>Image URL of Category</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| category | `Object` | <p>New Category</p> |

## <a name='Delete-Product-Category'></a> Delete Product Category
[Back to top](#top)

```
DELETE /category/:id
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Admin Access Token</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Id of Product Category</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| message | `String` | <p>Successful Message</p> |

## <a name='Edit-Product-Category'></a> Edit Product Category
[Back to top](#top)

```
PATCH /category/:id
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Admin Access Token</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `String` | <p>Id of Product Category</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| name | `String` | **optional** <p>Name of Category</p> |
| image | `String` | **optional** <p>Image URL of Category</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| category | `Object` | <p>New Category</p> |

## <a name='Get-All-Product-Categories'></a> Get All Product Categories
[Back to top](#top)

```
GET /categories
```
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| categories | `Object[]` | <p>List of Product Categories</p> |

# <a name='User'></a> User

## <a name='Get-All-Users-Data'></a> Get All Users Data
[Back to top](#top)

```
GET /users
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Admin Access Token.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| users | `Object[]` | <p>List of Users</p> |
| users.userData | `Object` | <p>User Data</p> |
| users.tokens | `Object` | <p>List of User tokens</p> |

## <a name='Get-User-Access-Token'></a> Get User Access Token
[Back to top](#top)

```
GET /user/access-token
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User Refresh Token.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| accessToken | `Object` | <p>USer AccessToken</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
       "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGxlckBnbWFpbC5jb20iLCJyb2xlIjozLCJoYW5kbGUiOiJzZWxsZXIiLCJ0eXBlIjoiQUNDRVNTIiwiZXhwIjoxNjYyNzAzNzA4LCJpYXQiOjE2NjI2MTczMDd9.leghrA7XW0Xji8h-elSqB_mtuZOa-sJ_2FildsOiDE8"
      }
```

## <a name='Get-User-Data'></a> Get User Data
[Back to top](#top)

```
GET /user/:userHandle
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User or Admin Access Token.</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userHandle |  | <p>User Handle</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userData | `Object` | <p>User Data</p> |
| tokens | `Object` | <p>List of Tokens</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
        "userData": {
            "email": "seller@gmail.com",
            "role": 3,
            "handle": "seller",
            "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
            "createdAt": 1657877554,
            "modifiedAt": 1657877554
        },
        "tokens": {
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNlbGxlckBnbWFpbC5jb20iLCJyb2xlIjozLCJoYW5kbGUiOiJzZWxsZXIiLCJ0eXBlIjoiUkVGUkVTSCIsImV4cCI6MTY2NTgyNjM1NCwiaWF0IjoxNjU3ODc3NTU0fQ.HtbEo8HiB2PryCiZ-LEz93py3y-OcsBDhaumpeiWIIc"
        }
      }
```

## <a name='Sign-In'></a> Sign In
[Back to top](#top)

```
POST /signin
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>Users email.</p> |
| password | `String` | <p>Users password.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userData | `Object` | <p>All User Data.</p> |
| tokens | `Object` | <p>List of User Token.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
        "userData": {
            "email": "1@gmail.com",
            "role": 2,
            "handle": "binbeo",
            "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
            "createdAt": 1662616955,
            "modifiedAt": 1662616955
        },
        "tokens": {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
        }
      }
```

## <a name='Sign-Up-Admin'></a> Sign Up Admin
[Back to top](#top)

```
POST /admin/signup
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>Admin Access Token.</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>Users email.</p> |
| password | `String` | <p>Users password.</p> |
| role | `Number` | <p>Users Role</p> |
| handle | `String` | <p>Username.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userData | `Object` | <p>All User Data.</p> |
| tokens | `Object` | <p>List of User Token.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
        "userData": {
            "email": "1@gmail.com",
            "role": 1,
            "handle": "binbeo",
            "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
            "createdAt": 1662616955,
            "modifiedAt": 1662616955
        },
        "tokens": {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
        }
      }
```

## <a name='Sign-Up-User'></a> Sign Up User
[Back to top](#top)

```
POST /signup
```

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| email | `String` | <p>Users email.</p> |
| password | `String` | <p>Users password.</p> |
| role | `Number` | <p>Users Role</p> |
| handle | `String` | <p>Username.</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| userData | `Object` | <p>All User Data.</p> |
| tokens | `Object` | <p>List of User Token.</p> |

### Success response example

#### Success response example - `Success-Response:`

```json
HTTP/1.1 200 OK
{
        "userData": {
            "email": "1@gmail.com",
            "role": 2,
            "handle": "binbeo",
            "avatarImage": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/271deea8-e28c-41a3-aaf5-2913f5f48be6/de7834s-6515bd40-8b2c-4dc6-a843-5ac1a95a8b55.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzI3MWRlZWE4LWUyOGMtNDFhMy1hYWY1LTI5MTNmNWY0OGJlNlwvZGU3ODM0cy02NTE1YmQ0MC04YjJjLTRkYzYtYTg0My01YWMxYTk1YThiNTUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BopkDn1ptIwbmcKHdAOlYHyAOOACXW0Zfgbs0-6BY-E",
            "createdAt": 1662616955,
            "modifiedAt": 1662616955
        },
        "tokens": {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IkFDQ0VTUyIsImV4cCI6MTY2MjcwMzM1NSwiaWF0IjoxNjYyNjE2OTU0fQ.XQAxmuibE9ltXF5BnBkowRKIFZRWGJOoA7I_r9qc8Jk",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IjFAZ21haWwuY29tIiwicm9sZSI6MiwiaGFuZGxlIjoiYmluYmVvIiwidHlwZSI6IlJFRlJFU0giLCJleHAiOjE2NzA1NjU3NTUsImlhdCI6MTY2MjYxNjk1NH0.38Ez78YEJoKV4WSs5UtCreC2TYvmt4MaS_bHWisLyW0"
        }
      }
```

# <a name='UserAddress'></a> UserAddress

## <a name='Add-User-Address'></a> Add User Address
[Back to top](#top)

```
POST /address/
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User Access Token</p> |

### Request Body

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| address | `String` | <p>User Address</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| address | `Object` | <p>Added Address</p> |

## <a name='Edit-User-Address'></a> Edit User Address
[Back to top](#top)

```
PATCH /address/:id
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User Access Token</p> |

### Parameters - `Parameter`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| id | `Number` | <p>Id of Address</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| address | `Object` | <p>New Address</p> |

## <a name='Get-User-Addresses'></a> Get User Addresses
[Back to top](#top)

```
GET /address
```

### Headers - `Header`

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| authorization | `String` | <p>User Access Token</p> |
### Success response

#### Success response - `Success 200`

| Name     | Type       | Description                           |
|----------|------------|---------------------------------------|
| address | `Object[]` | <p>List of Addresses</p> |

