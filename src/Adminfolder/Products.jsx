import React from "react";
import { useReducer } from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  setProducts,
  priceincrement,
} from "../actions/productAction";
const Products = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const getItems = async () => {
    const response = await fetch("http://localhost:5000/displayitems/", {
      method: "GET",

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const actualData = await response.json();
    dispatch(setProducts(actualData));
  };
  useEffect(() => {
    getItems();
  }, []);
  const deleteitem = async (product) => {
    console.log(product);

    const res=await fetch("http://localhost:5000/deleteitems/",{
      method:"POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json",

      },
      body: JSON.stringify({name:product.name}),
    }).then(
      alert("Item deleted successfully"),
      window.location.reload()
      );
  };

  console.log(products);
  const quantitychange = (item, e) => {
    dispatch(increment(item, e));
  };
  const pricechange = (item, e) => {
    dispatch(priceincrement(item, e));
  };
  const updatedatabase = async () => {
    const res = await fetch("http://localhost:5000/updatedata/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(products),
    });
  };

  return (
    <>
      {Array.from(products).map((product, key) => {
        const { _id, name, price, company, stock } = product;
        console.log(name);
        // setitemname(items.name)
        // setitemprice(items.price)
        return (
          <>
            {
              <div>
                <li>
                  <h1>Name:{product.name}</h1>
                  {/* <h1> Price:{product.price}</h1> */}
                  <h2>Quantity:</h2>
                  <input
                    type="number"
                    min="1"
                    value={product.stock}
                    onChange={(e) => quantitychange(product, e.target.value)}
                  />
                  <h2>Price:</h2>
                  <input
                    type="number"
                    min="1"
                    value={product.price}
                    onChange={(e) => pricechange(product, e.target.value)}
                  />
                  <button
                    style={{ margin: "5px", padding: "5px" }}
                    onClick={() => deleteitem(product)}
                  >
                    Delete this product
                  </button>
                </li>
              </div>
            }
          </>
        );
      })}

      <button onClick={() => updatedatabase()}>Update to database</button>
    </>
  );
};

export default Products;
