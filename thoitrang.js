var man = [
    {
        id:1,
        name: "QUẦN THUN",
        code: "TC102",
        price: "220.000",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT084y0o0fV-LW1AgSapc7Sduj389eT9_XndNegCJU5PDz9RPxOD2OBH-SdaI91w1eOAREkxYowkFis_jlBjbwuHDumMUPpdoUzxmeHZwxp&usqp=CAE"
    },
    {
        id:2,
        name: "BỘ QUẦN ÁO THỂ THAO",
        code: "TC103",
        price: "300.000",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQDCXGn-7M2Gg1Rr1BlBVAafEkJJ8GR1CNhJZPLPIQkNXhdOrCwBzGyxi1ENCZW9kTppQ5lnACB06eCTy8Buj5nEOoLEXqUKpVnUGhJyfg&usqp=CAE"
    },
    {
        id:3,
        name: "QUẦN JEAN NAM",
        code: "TC104",
        price: "170.000",
        image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRHdBc_TLeADdOXq16VBxspCXGmTKiSCZ30nSYfD2V7KcYU7Ldy_DbXF5FaHCvkbS9P2S7ZyLqGNA9yuqxG7-JbY-EIvMEIqTUq2-dMA2w&usqp=CAE"
    },
];
var woment = [
    {
        id:1,
        name: "QUẦN NỮ",
        code: "EC201",
        price: "350.000",
        image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRMhAuU2hSTu_Vx4zI5gySBml2hAfnlX_HrOyMEMFxeiLGnPo_h35cHmIeRomesogJ2GMC416FbbDp1qGlDZx8adXbwi9GVQhaKCgFFWGlfNhIjZ5ctgS9uCw&usqp=CAE"
    },
        {
        id:2,
        name: "ÁO VEST NỮ",
        code: "EC202",
        price: "190.000",
        image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQzOTohyCv1kTK3iEJQkULCHriY6B-yuCHwFWQZOSuGEMB_g1VmX4wykBpje-sOYHDrcRMcNA6wTgZuw40urMQOQo3b33pwf4-jrPkBDD0&usqp=CAE"
    },
    {
        id:3,
        name: "ÁO KHOÁC NỮ",
        code: "EC203",
        price: "400.000",
        image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR4fHmvyvHG7TkCPG7qRHHHGIqzXa3Sree8Y5K75jDp1XjnS89thgScuEXJEhsVC53wzCLvM3U8UYinJ9eeRgHk5mBoz81CC3Y4w4CfGN0&usqp=CAE"
    },
    
];
function listProducts(){
    for(let i = 0; i <= man.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+man[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML += demo;
    }
    
    for(let i = 0; i <= woment.length-1; i++){
        var demo = '<div class = "col-3">';   
        demo += '<div class="card" style="width: 18rem; ">';
        demo += '<img src="'+woment[i].image +'" class = "card-img-top" style="height:400px;">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+woment[i].name+'</h5>';
        demo += '<p class="card-text">'+woment[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("woment").innerHTML += demo;
    }
}