import React from "react";
import "../Orders/Orders.css"
import backimg from "../../images/2.png";


const Orders = () => {
  return (
    <div className="main_sell">
      <div className="sell_left">
        <h1>Sell Your Product</h1>
        <h3>
          Have unused products gathering dust at home? It's time to turn them
          into credits ! Simply fill in the details of your items, and our
          dedicated support team will reach out to you within 48 hours. Whether
          it's clothing, electronics, or household items in good condition,
          there's someone out there eager to buy. Don't let your valuables go to
          waste – sell them hassle-free today!
        </h3>
        <div className="custom_support">
          <h2>Proffesional Assisstance</h2>
          <h1>📞+9172XXXXXXXX</h1>
        </div>
      </div>
      <div className="sell_right">
        <div className="category">
          <h3>Product Category</h3>
          <input type="text"></input>
        </div>
        <div className="category">
          <h3>Name Of Product</h3>
          <input type="text"></input>
        </div>
        <div className="category">
          <h3>Purchase Date</h3>
          <input type="date"></input>
        </div>
        <div className="category">
          <h3>Product ID</h3>
          <input placeholder="If product have a ID" type="number"></input>
        </div>
        <div className="category">
          <h3>Description in Detail</h3>
          <textarea rows="6 " cols="50"></textarea>
        </div>
        <div className="category">
          <h3>Upload Pictures 🖼️</h3>
          <input type="file" accept="image/*" />
        </div>
        <button type="submit">Submit</button>
      </div>
    </div>
  );
};

export default Orders;
