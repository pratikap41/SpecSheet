


function toggleSideBarOn()
{   
    let sideBar = document.getElementById("sideBar");
    sideBar.style.left = "0px"; 
    sideBar.style.transition = "all 0.4s linear";
    let hammenu = document.getElementById("hammenu");
    hammenu.style.visibility ="hidden";
    let hammenu2 = document.getElementById("hammenu2");
    hammenu2.style.visibility = "visible";
    let middleBar = document.getElementsById("middleBar");
    
    
}
function toggleSideBarOff(){
    let sideBar = document.getElementById("sideBar");
    sideBar.style.left = "-250px"; 
    let hammenu = document.getElementById("hammenu");
    hammenu.style.visibility ="visible";
    let hammenu2 = document.getElementById("hammenu2");
    hammenu2.style.visibility = "hidden";
     
}

function hiddingUtil(){
    if(window.outerWidth<950){
        let topBar = document.getElementById("topbar-options");
        topBar.style.visibility = 'hidden';
    }
    else
    {
        let topBar = document.getElementById("topbar-options");
        topBar.style.visibility = 'visible';
    }

    console.log(i)
    i++
}
setInterval(hiddingUtil, 1000);
