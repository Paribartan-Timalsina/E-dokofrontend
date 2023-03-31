import React, { useState } from "react";

const AddProduct = () => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [company, setCompany] = useState();
  const [category, setCategory] = useState();
  const [stock, setQuantity] = useState();
  const [description, setDescription] = useState();
  const [featured, setFeatured] = useState();
  const [colors, setColors] = useState();
  const [stars, setStars] = useState();
  const [id, setId] = useState();
  const [reviews, setReviews] = useState();
  const [img, setimg] = useState("");
  const pushing = async () => {
    const formdata = new FormData();
    formdata.append("name", name);
    formdata.append("price", price);
    formdata.append("company", company);
    formdata.append("category", category);
    formdata.append("stock", stock);
    formdata.append("featured", featured);
    formdata.append("colors", colors);
    formdata.append("description", description);
    formdata.append("stars", stars);
    formdata.append("reviews", reviews);
    formdata.append("id", id);
    formdata.append("myimage", img);
    try {
      const res = await fetch("http://localhost:5000/items/", {
        method: "POST",

        // headers: {
        //   'Content-Type': 'application/json',
        //   Accept: "application/json",

        // },
        body: formdata,
      });
      const data = await res.json();
      if(res){
        window.alert("Item added successfully")
      }
      return data;
      
    } catch (err) {
      console.log(err);
    }
  };
  const onsubmeet = (e) => {
    e.preventDefault();

    pushing();

    setName("");
    setPrice("");
    setCategory("");
    setQuantity("");
    setimg("");
    setId("");
    setReviews("");
    setStars("");
    setDescription("");
    setColors("");
    setFeatured("");
    setCompany("");
  };

  return (
    <>
      <form
        method="POST"
        id="formelem"
        className="add-form"
        onSubmit={onsubmeet}
      >
        <div className="form-control">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>ID:</label>
          <input
            type="number"
            value={id}
            name="id"
            onChange={(e) => setId(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Quantity:</label>
          <input
            type="number"
            value={stock}
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Category:</label>
          <input
            type="text"
            value={category}
            name="category"
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Company:</label>
          <input
            type="text"
            value={company}
            name="category"
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Stars:</label>
          <input
            type="number"
            value={stars}
            name="stars"
            onChange={(e) => setStars(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Featured:</label>
          <input
            type="boolean"
            value={featured}
            name="featured"
            onChange={(e) => setFeatured(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Colors:</label>
          <input
            type="text"
            value={colors}
            name="colors"
            onChange={(e) => setColors(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label>Description:</label>
          <input
            type="text"
            value={description}
            name="description"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label>Image:</label>
          <input
            type="file"
            name="myimage"
            onChange={(e) => setimg(e.target.files[0])}
          />
        </div>
        <div className="form-control">
          <label>Reviews:</label>
          <input
            type="text"
            value={reviews}
            name="reviews"
            onChange={(e) => setReviews(e.target.value)}
          />
        </div>
        <input type="submit" value="Add Product" className="btn btn-block" />
      </form>
    </>
  );
};

export default AddProduct;
