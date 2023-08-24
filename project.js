//ana js dosyam.

//öncelikle formu seçmem lazım

const form=document.getElementById("car-form");
const titleElement=document.querySelector("#title");
const priceElement=document.querySelector("#price");
const urlElement=document.querySelector("#url");

//araçları alt tarafa eklemek için başka bir yapı lazım.ui da.
//ui objesi başlamalı

const ui= new UI();
//TÜM EVENTLERİ YÜKLİYCEM
//BUNUN İÇİN LİSTENER GEREKLİ

eventListeners();

function eventListeners(){
    //submit olayı var.
    form.adddEventListener("submit",addCar);
}
function addCar(e){
    //seçtiğim elementlerin değerlerini almam lazım
    const title = titleElement.value;
    const price=priceElement.value;
    const url=urlElement.value;

    //bir veya birden fazla boş alan kaldıysa hatar versin!
    if(title==="" || price==="" || url===""){
        //hata verecek.
    }
    else{ //yeni araç oluşturulacak.
        const newCar=new Car(title,price,url)
        ui.addCarToUI(newCar); //arayüze araç ekleme

    }
    ui.clearInputs(titleElement,urlElement,priceElement);


    e.preventDefault(); /* aracın eklenmesini sağlıyor*/ /*ikinci aracı eklediğimizde bir önceki gitmesin diye.
}

