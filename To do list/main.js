let items_container = document.getElementById("items");
let intem_template = document.getElementById("itemTemplate");
let add_button = document.getElementById("add-el");
let items = [];


function getItems(){
    let value = localStorage.getItem("todo-demo");

    return JSON.parse(value);
 

}

function setItems(items){
    const itemsJson = JSON.stringify(items)

    localStorage.setItem("todo-demo", itemsJson) 
}

function addItem(){
        items.unshift({
        description: "",
        complated: false
    });

    setItems(items);
    refreshList();
}
function updateItem(item, key, value){

    item[key] = value;
    setItems(items);
    refreshList();

}

function refreshList(){

    items_container.innerHTML = "";

    for(let item of items){
        let itemElement = items_container.cloneNode(true);
        let descriptionInput = itemElement.querySelector(".item-description");
        let complatedInput = itemElement.querySelector(".item-completed");

        descriptionInput.value = items.description;
        complatedInput.checked = items.completed;

        descriptionInput.addEventListener("change", () =>{

            updateItem(item, "description", descriptionInput.value);


        })
        completedInput.addEventListener("change", () =>{

            updateItem(item, "completed", completedInput.checked);


        })

        items_container.append(itemElement);
    }
}
add_button.addEventListener("click", ()=>{

    addItem();
})

refreshList();



