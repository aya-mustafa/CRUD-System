var bookName=document.getElementById("bookName");
var bookCategory=document.getElementById("bookCategory");
var bookPrice=document.getElementById("bookPrice");
var bookAuther=document.getElementById("bookAuther");
var bookDescription=document.getElementById("bookDescription");

var inputs =document.getElementsByClassName("form-control");

var addBtn=document.getElementById("addBtn");

var NameAlert=document.getElementById("NameAlert");
var categoryAlert=document.getElementById("categoryAlert");
var priceAlert=document.getElementById("priceAlert");
var autherAlert=document.getElementById("autherAlert");
var descAlert=document.getElementById("descAlert")

var books=[];
var currentIndex;

//  ______start Validation______
    bookName.addEventListener("keyup",function()
    {
        var rejex=/^[A-Z][a-z]{1,15}([ ][A-Z][a-z]{1,15})*$/;
        if(!rejex.test(bookName.value))
        {
            if(bookName.value=="")
            {
                NameAlert.classList.add("d-none");
                NameAlert.classList.remove("d-flex");
                bookName.classList.remove("is-invalid");
                bookName.classList.remove("is-valid");
                addBtn.disabled="true"
            }
            else
            {
                bookName.classList.add("is-invalid");
                bookName.classList.remove("is-valid");
                NameAlert.classList.add("d-flex");
                NameAlert.classList.remove("d-none");
            }
        }
        else
        {
            bookName.classList.add("is-valid");
            bookName.classList.remove("is-invalid");
            NameAlert.classList.add("d-none");
            NameAlert.classList.remove("d-flex");
            addBtn.removeAttribute("disabled");
        }
    })

    bookCategory.addEventListener("keyup",function()
    {
        var rejex=/^[A-Z][a-z]{2,9}$/;
        if(!rejex.test(bookCategory.value))
        {
            if(bookCategory.value=="")
            {
                categoryAlert.classList.add("d-none");
                categoryAlert.classList.remove("d-flex");
                bookCategory.classList.remove("is-invalid");
                bookCategory.classList.remove("is-valid");
                addBtn.disabled="true"
            }
            else
            {
                bookCategory.classList.add("is-invalid");
                bookCategory.classList.remove("is-valid");
                categoryAlert.classList.add("d-flex");
                categoryAlert.classList.remove("d-none");
            }
        }
        else
        {
            bookCategory.classList.add("is-valid");
            bookCategory.classList.remove("is-invalid");
            categoryAlert.classList.add("d-none");
            categoryAlert.classList.remove("d-flex");
            addBtn.removeAttribute("disabled");
        }
    })

    bookPrice.addEventListener("keyup",function()
    {
        var rejex=/^[1-9][0-9]{1,3}$/;
        if(!rejex.test(bookPrice.value))
        {
            if(bookPrice.value=="")
            {
                priceAlert.classList.add("d-none");
                priceAlert.classList.remove("d-flex");
                bookPrice.classList.remove("is-invalid");
                bookPrice.classList.remove("is-valid");
                addBtn.disabled="true"
            }
            else
            {
                bookPrice.classList.add("is-invalid");
                bookPrice.classList.remove("is-valid");
                priceAlert.classList.add("d-flex");
                priceAlert.classList.remove("d-none");
            }
        }
        else
        {
            bookPrice.classList.add("is-valid");
            bookPrice.classList.remove("is-invalid");
            priceAlert.classList.add("d-none");
            priceAlert.classList.remove("d-flex");
            addBtn.removeAttribute("disabled");
        }
    })

    bookAuther.addEventListener("keyup",function()
    {
        var rejex=/^([A-Z][ ])*[A-Z][a-z]{2,7}([ ][A-Z][a-z]{2,7})?$/;
        if(!rejex.test(bookAuther.value))
        {
            if(bookAuther.value=="")
            {
                autherAlert.classList.add("d-none");
                autherAlert.classList.remove("d-flex");
                bookAuther.classList.remove("is-invalid");
                bookAuther.classList.remove("is-valid");
                addBtn.disabled="true"
            }
            else
            {
                bookAuther.classList.add("is-invalid");
                bookAuther.classList.remove("is-valid");
                autherAlert.classList.add("d-flex");
                autherAlert.classList.remove("d-none");
            }
        }
        else
        {
            bookAuther.classList.add("is-valid");
            bookAuther.classList.remove("is-invalid");
            autherAlert.classList.add("d-none");
            autherAlert.classList.remove("d-flex");
            addBtn.removeAttribute("disabled");
        }
    })

    bookDescription.addEventListener("keyup",function()
    {
        var rejex=/[A-Z][a-z]{2,8}[a-zA-Z]w*/;
        if(!rejex.test(bookDescription.value))
        {
            if(bookDescription.value=="")
            {
                descAlert.classList.add("d-none");
                descAlert.classList.remove("d-flex");
                bookDescription.classList.remove("is-invalid");
                bookDescription.classList.remove("is-valid");
                addBtn.disabled="true"
            }
            else
            {
                bookDescription.classList.add("is-invalid");
                bookDescription.classList.remove("is-valid");
                descAlert.classList.add("d-flex");
                descAlert.classList.remove("d-none");
            }
        }
        else
        {
            bookDescription.classList.add("is-valid");
            bookDescription.classList.remove("is-invalid");
            descAlert.classList.add("d-none");
            descAlert.classList.remove("d-flex");
            addBtn.removeAttribute("disabled");
        }
    })
//  ______End Validation______


if(JSON.parse(localStorage.getItem("Books"))!=null)
{
    var books=JSON.parse(localStorage.getItem("Books"));
    displayBooks();
}


addBtn.addEventListener("click",function()
{
    if(addBtn.innerHTML=="Add Book")
    {
        if(bookName.value==""||bookCategory.value==""
        ||bookAuther.value==""||bookPrice.value==""
        ||bookDescription.value=="")
        {
            alert("All input is required")
            addBtn.disabled="true"
        }
        else
        {
            addBtn.removeAttribute="disabled";
            addBook();
            displayBooks();
            resetForm()
        }
    }
    else
    {
        if(bookName.value==""||bookCategory.value==""
        ||bookAuther.value==""||bookPrice.value==""
        ||bookDescription.value=="")
        {
            alert("All input is required")
            addBtn.disabled="true"
        }
        else
        {
            addBtn.removeAttribute="disabled";
            upDateBook();
            displayBooks();
            resetForm()
        }
    }
})


function addBook()
{
    var book=
    {
        nameOfBook:bookName.value,
        categoryOfBook:bookCategory.value,
        priceOfBook:bookPrice.value,
        autherOfBook:bookAuther.value,
        descOfBook:bookDescription.value
    }
    books.push(book);
    localStorage.setItem("Books",JSON.stringify(books));
}

function displayBooks()
{
    var container="";
    for (var i = 0; i <books.length; i++) {
        container+=
        `
        <tr>
            <td>${i+1}</td>
            <td>${books[i].nameOfBook}</td>
            <td>${books[i].categoryOfBook}</td>
            <td>${books[i].priceOfBook}</td>
            <td>${books[i].autherOfBook}</td>
            <td>${books[i].descOfBook}</td>
            </td>
            <td>
                <button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
            </td>
            <td>
                <button onclick="getBook(${i})" class="btn btn-warning"><i class="fas fa-pen text-light "></i></button>
            </td>
        </tr>
              
        `
        
    }
    document.getElementById("tableBody").innerHTML=container;
}

function resetForm()
{
    for(var i=0;i<inputs.length;i++)
    {
        inputs[i].value="";
        inputs[i].classList.remove("is-valid")
    }
}

function deleteBook(index)
{
    books.splice(index,1);
    localStorage.setItem("Books",JSON.stringify(books));
    displayBooks();
}



//Start functions for search
search.addEventListener("keyup",function()
{
    var valu =this.value;
    var container="";
    for(var i=0;i<books.length;i++)
    {
        if(books[i].nameOfBook.includes(valu)||
        books[i].categoryOfBook.includes(valu))
        {
            container+=
            `
            <tr>
                <td>${i+1}</td>
                <td>${books[i].nameOfBook}</td>
                <td>${books[i].categoryOfBook}</td>
                <td>${books[i].priceOfBook}</td>
                <td>${books[i].autherOfBook}</td>
                <td>${books[i].descOfBook}</td>
                </td>
                <td>
                    <button onclick="deleteBook(${i})" class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
                </td>
                <td>
                    <button onclick="getBook(${i})" class="btn btn-warning"><i class="fas fa-pen text-light "></i></button>
                </td>
            </tr>
            `
        }
        document.getElementById("tableBody").innerHTML=container;
    }
})
//End functions for search


//Start functions for update
function getBook(index)
{
    bookName.value=books[index].nameOfBook;
    bookCategory.value=books[index].categoryOfBook;
    bookPrice.value=books[index].priceOfBook;
    bookAuther.value=books[index].autherOfBook;
    bookDescription.value=books[index].descOfBook;
    addBtn.innerHTML="Update Book";
    currentIndex=index;
}

function upDateBook()
{
    var bookUpdated =
    {
        nameOfBook:bookName.value,
        categoryOfBook:bookCategory.value,
        priceOfBook:bookPrice.value,
        autherOfBook:bookAuther.value,
        descOfBook:bookDescription.value
    }
    
    books[currentIndex]=bookUpdated;
    localStorage.setItem("Books",JSON.stringify(books));
    addBtn.innerHTML="Add Book";
}
//End functions for update