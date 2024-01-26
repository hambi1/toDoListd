let pageImp ={ 
    list :document.querySelector("#to-do-list"),
    addInput :document.querySelector("#add-form input"),
    searchInput :document.querySelector("#search-form input"),
    addBtn :document.querySelector("#add-form button")
}
pageImp.list.addEventListener("click",(e)=>{
    let targetClassName = e.target.className
    let target = e.target
    switch (targetClassName) {
        case "delete-btn":
            target.parentNode.remove();
            if (pageImp.list.children.length==0) {
                let listEmpty = document.createElement("div")
                listEmpty.style.textAlign="center"
                listEmpty.style.color="red"
                listEmpty.innerText="your list is empty"
                listEmpty.id="emtyMsg"
                listEmpty.style.border='none'
                document.querySelector("main").appendChild(listEmpty)
            }
            break;
    }
})

pageImp.addBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(!pageImp.addInput.value){
        return
    }else if(document.querySelector("#emtyMsg")){
        document.querySelector("#emtyMsg").remove()

    }

    pageImp.list.appendChild(creatListItem(pageImp.addInput.value))
    pageImp.addInput.value = ""

})

function creatListItem(itemValue){
    let li = document.createElement("li");
    let spnInpute = document.createElement("span");
    let spndltBtn = document.createElement("span");
    li.className = "to-do-item";
    spnInpute.className = "title"
    spndltBtn.className = "delete-btn"
    spndltBtn.innerText = "delete"
    spnInpute.innerText = itemValue
    li.appendChild(spnInpute);
    li.appendChild(spndltBtn)
    return li;
}

pageImp.searchInput.addEventListener("input",(e)=>{
    Array.from(pageImp.list.children).forEach((element)=> {
        if (document.querySelector("#emtyMsg")){
            return;
        }

        if (element.querySelector(".title").innerText.toLowerCase().includes(e.target.value.toLowerCase())) {
            element.style.display="";
        }else{
            element.style.display = "none";
        }
    })
})