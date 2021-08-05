var count = 0;
var order = [];
var adds = document.getElementById("addMilk");
var Bread = document.getElementById("addBread");
var Yogurt = document.getElementById("addYogurt");
var Watermelon = document.getElementById("addWatermelon");
var Orange = document.getElementById("addOrange");
var Pineapple = document.getElementById("addPineapple");



var countCar = document.getElementById("count");
countCar.innerText = count;
adds.onclick = addCount;
Bread.onclick = addCount;
Yogurt.onclick = addCount;
Watermelon.onclick = addCount;
Orange.onclick = addCount;
Pineapple.onclick = addCount;



function addCount() {
    let idButtoun = this.id;
    count += parseInt(document.getElementById('cous6').value);
    countCar.innerText = count
    switch (idButtoun) {
        case 'addMilk':
            let item = document.getElementById('item1').innerHTML;
            let priceFiled = document.getElementById("price6").innerHTML;
            let arrPric = priceFiled.split(':');
            let coun = parseInt(document.getElementById('count1').value);
            let priceite = parseInt(arrPric[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item,
                    price: priceite,
                    count: coun,
                }
            );
            localStorage.setItem('order', order);
            console.log(order);
            break;


        case 'addBread':
            alert("Ss")
            let item2 = document.getElementById('item1').innerHTML;
            let priceFiled2 = document.getElementById("price1").innerHTML;
            let arrPric2 = priceFiled2.split(':');
            let coun2 = parseInt(document.getElementById('count1').value);
            let priceite2 = parseInt(arrPric2[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item2,
                    price: priceite2,
                    count: coun2,
                }
            );

            console.log(order);

            break;
        case 'addYogurt':
            let item3 = document.getElementById('item1').innerHTML;
            let priceFiled3 = document.getElementById("price3").innerHTML;
            let arrPric3 = priceFiled3.split(':');
            let coun3 = parseInt(document.getElementById('count1').value);
            let priceite3 = parseInt(arrPric3[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item3,
                    price: priceite3,
                    count: coun3,
                }
            );

            console.log(order);

            break;
        case 'addWatermelon':
            let item4 = document.getElementById('item1').innerHTML;
            let priceFiled4 = document.getElementById("price15").innerHTML;
            let arrPric4 = priceFiled4.split(':');
            let coun4 = parseInt(document.getElementById('count1').value);
            let priceite4 = parseInt(arrPric4[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item4,
                    price: priceite4,
                    count: coun4,
                }
            );

            console.log(order);

            break;
        case 'addOrange':
            let item7 = document.getElementById('item10').innerHTML;
            let priceFiled7 = document.getElementById("price10").innerHTML;
            let arrPric7 = priceFiled7.split(':');
            let coun7 = parseInt(document.getElementById('count1').value);
            let priceite7 = parseInt(arrPric7[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item7,
                    price: priceite7,
                    count: coun7,
                }
            );

            console.log(order);

            break;
        case 'addPineapple':
            let item8 = document.getElementById('item1').innerHTML;
            let priceFiled8 = document.getElementById("price10").innerHTML;
            let arrPric8 = priceFiled8.split(':');
            let coun8 = parseInt(document.getElementById('count1').value);
            let priceite8 = parseInt(arrPric8[1]);
            //let total=coun*priceite;
            order.push(
                {
                    itemName: item8,
                    price: priceite8,
                    count: coun8,
                }
            );

            console.log(order);

            break;
      
    }
    let orders = [];
    order.forEach(item => {
        let c = JSON.stringify(item);
        let b = JSON.parse(c);
        console.log("ss " + b.price);
        orders.push(b.itemName + "-" + b.count + "-" + b.price);
    })
    console.log(orders);
    localStorage.setItem("orders", JSON.stringify(orders));


}