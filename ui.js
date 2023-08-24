function UI(){

}

UI.prototype.addCarToUI = function(newCar){
    /*<!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> -->
  <!-- <tr>
    <td><img src="" class="img-fluid img-thumbnail"></td>
    <td></td>
    <td></td>
    <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
  </tr> -->*/


    const carList=document.getElementById("cars");

    carList.innerHTML += `
    <tr>
        <td><img src="${newCar.url}" class="img-fluid img-thumbnail"></td>
        <td>${newCar.title}</td>
        <td>${newCar.price}</td>
        <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
    </tr>
    `
}

UI.prototype.clearInputs=function(element1,element2,element3){ //3 veri alıyoruz bu nedenle 3 tane,yazdığım fomrda silinmiyor.
    element1.value="";
    element2.value="";
    element3.value="";
}

UI.prototype.displayMessages= function(message,type){
    const cardBody =document.querySelector(".card-body");

    //alert divini oluşturma

    const div= document.createElement("div");

    div.className=`alert alert-${type}`;
    div.textContent=message;
     //çocuk ekleme 

     cardBody.appendChild(div);

     setTimeout(function(){
        //oluşan bu divi belirli bir süre sonra silmesini istiyorum
        div.remove();

     },2000)
}

//2000 saniye sonra gidicek.
UI.prototype.loadAllCars= function(cars){
    const carList= document.getElementById("cars");

    cars.forEach(function(car){
        carList.innerHTML += `
        <tr>
            <td><img src="${car.url}" class="img-fluid img-thumbnail"></td>
            <td>${car.title}</td>
            <td>${car.price}</td>
            <td><a href="#" id = "delete-car" class = "btn btn-danger">Aracı Sil</a></td>
        </tr>
        `
    });
}

UI.prototype.deleteCarFromUI=function(element){
    //butonun kaç üstüne gidicez , ebeveynler nerede,parent önce td sonra tr ye ulaşıyoruz.
    element.parentElement.parentElement.remove();
}
// araçalrı sadece arayüzden sildik, local storage silme de gelecek.

//araçları local storage'dan silerken öncelikle aracın adını almamız gerek, sonra o ada göre fonks. yazıcam.

UI.prototype.clearAllCarsFromUI = function(){
    //araç listesinin tümüne erişmem lazım.bunu seçme yani const ile yapıcam
    const carList=document.getElementById("cars");
    //içini temizlemek için 2 yöntem var, birincisi inner htmlsini "" yapmak,diğeri dom projesi.
    carList.innerHTML="";

    //böyle sildim ama local str da oldukları için sayfa yenilendiğinde geri gelecekler.bunun için gidip stroje.js den silicem.
}
