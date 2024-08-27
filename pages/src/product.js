import { useState } from 'react';

export default function Product() {
    const [product, setProduct] = useState(""); // Added setProduct function

    async function postApi() {
        let data = {
            "product": product,
        };
        let res = await fetch("https://api.restful-api.dev/objects", {
            "method": "POST",
            body: JSON.stringify(data),
            headers: { "content-type": "application/json" }
        });
        let userdata = await res.json();
        console.log(userdata);
    }

    return (
        <div>
            <p>Product</p>
            <input type="text" onChange={(e) => setProduct(e.target.value)} // Updated to use setProduct
            />
            <br />
            <button onClick={postApi}>Submit</button>
        </div>
    );
}