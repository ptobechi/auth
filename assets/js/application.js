$("#kt_ecommerce_edit_order_form").submit(function(event){
    alert("Product Uploaded");
});

$("#edit_order_form").submit(function(event){
    event.preventDefault();

    let array = $(this).serializeArray();
    let data = {}

    $.map(array, function(n,i){
        data[n["name"]] = n["value"]
    })

    console.log(data);
    
    let request = {
        "url": `http://localhost:3000/api/product/${data.id}`,
        "method": "PUT",
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Product updated successfully")
    })
});

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        let id = $(this).attr("data-id")

        let request = {
            "url": `http://localhost:3000/api/product/${id}`,
            "method": "DELETE"
        }

        if(confirm("Do you really want to delete this product")){
            $.ajax(request).done(function(response){
                alert("Product deleted successfully");
                location.reload()
            })
        }  
        
    })
}

$("*#box_details").on('click', function(){
    let id = $(this).attr("data-id")

    // console.log(id);
    let request = {
        "url": `http://localhost:3000/api/product?id=${id}`,
        "method": "GET"
    }

    $.ajax(request).done(function(response){
        console.log(response);
        response.items.forEach(item => {
            $("#item_name").text(item);
        })
        // $("#item_name").text(response.box);
        $("#total_sum").text(response.total_sum);
    })
    // alert("Product Uploaded");
})

