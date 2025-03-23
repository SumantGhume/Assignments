let Products = [
  {
    id: 1,
    name: "Laptop",
    price: 1000,
    category: "Electronics",
    stock: 5,
  },
  {
    id: 2,
    name: "HeadPhones",
    price: 1000,
    category: "Electronics",
    stock: 15,
  },
  {
    id: 3,
    name: "T-Sgirt",
    price: 1000,
    category: "Apparel",
    stock: 50,
  },
];

function setToLocal(p) {
  localStorage.setItem("Procucts", JSON.stringify(p));
}
setToLocal(Products);

getFromLocal = () => JSON.parse(localStorage.getItem("Procucts"));

function renderproduct(filterProducts) {
    
  document.getElementById("display_products").innerHTML = filterProducts
    .map(
      (product, index) =>
        `
      
                   <div class="list-group-item">
                    <h5 class="card-title mt-2 " id="product_name">${product.name}</h5>
                    <p class="card-text">Category: <span class='text-danger'>${product.category}</span></p>
                    <p class="card-text">Price:<span class='text-danger'> ${product.price}</span></p>
                    

                    <p class="card-text " style="display:inline-block">Stock: </p>
                    <p class="card-text ${res = (product.stock > 10) ? "text-success" : "text-danger"} mr-5" style="display:inline-block; padding-right:30px">${product.stock}
                    ${res = (product.stock > 10) ? "" : "<p class='text-danger'>Hurry up only product.stock</p>"}
                    </p>
                    <div class=" d-flex float-right ">
                    <button onclick="deleteproduct(${index})" class="btn btn-primary mr-3" >Delete</button>
                    <button class="btn btn-primary" onclick='editProd(${product.id})'  data-toggle="modal" data-target="#exampleModal">Edit</button>
                    
                    </div>

                    </div>  
                    

    `
    )
    .join("");
}
function addproduct() {
  P_Name = document.getElementById("Product_name").value;
  P_price = document.getElementById("Product_price").value;
  P_category = document.getElementById("Product_category").value;
  P_stock = document.getElementById("Product_stock").value;

  let new_product = {
    id: Date.now(),
    name: P_Name,
    price: P_price,
    category: P_category,
    stock: P_stock,
  };
  ProductFromLocal.push(new_product);
  setToLocal(ProductFromLocal);
  renderproduct(getFromLocal());
}

function deleteproduct(i) {
  ProductFromLocal.splice(i, 1);
  setToLocal(ProductFromLocal);
  renderproduct(getFromLocal());
}

filterProducts = () => {
  key = document.getElementById("filterKey").value;
  result = ProductFromLocal.filter((p) => key == p.name);
  console.log(result);
  renderproduct(result);
};
filterProducts = () => {
  key = document.getElementById("filterKey").value;
  result = ProductFromLocal.filter((p) => key == p.category);
  console.log(result);
  renderproduct(result);
};

function editProd(ID) {
  forUpdate = ProductFromLocal.find((p) => p.id == ID);
  console.log(forUpdate);
  document.getElementById(
    "updateProd"
  ).innerHTML = `<div class="modal-content" >
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <div class="form-group">
              <label for="name">Product Name</label>
              
              <input type="text" class="form-control" id="updatedName" value=${forUpdate.name} disabled>
            </div>
            <div class="form-group">
                <label for="name">Product Price</label>
                <input type="text" class="form-control" id="updatedPrice" value=${forUpdate.price}>
            </div>
            <div class="form-group">
                <label for="name">Product Category</label>
                <input type="text" class="form-control" id="updatedCategory" value=${forUpdate.category} disabled>
            </div>
            <div class="form-group">
                <label for="name">Product Stock</label>
                <input type="number" class="form-control" id="updatedStock" value=${forUpdate.stock}>
            </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onclick='updateProduct(${forUpdate.id})' data-dismiss="modal">Update changes</button>
      </div>
    </div>`;
}

updateProduct = (ID) => {
  newPrice = document.getElementById("updatedPrice").value;
  newStock = document.getElementById("updatedStock").value;

  console.log(newPrice, newStock);
  indexForUpdate = ProductFromLocal.findIndex((p) => p.id == ID);
  if (indexForUpdate == -1) {
    alert("product Not Found");
  } else {
    console.log(ProductFromLocal[indexForUpdate]);
    ProductFromLocal[indexForUpdate].price = newPrice;
    ProductFromLocal[indexForUpdate].stock = newStock;
    setToLocal(ProductFromLocal);

    productsFromLocal1 = getFromLocal();

    renderproduct(productsFromLocal1);
  }
};

ProductFromLocal = getFromLocal();
setToLocal(ProductFromLocal);

renderproduct(ProductFromLocal);
