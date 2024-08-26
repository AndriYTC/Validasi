// Toggle clas active
const navbarNav = document.querySelector 
('.navbar-nav');
// Ketika Hamburger Menu Di Klik
document.querySelector('#hamburger-menu').
onclick = ( ) => {
    navbarNav.classList.toggle('active')
};

// Klik Di Luar Sidebar Untuk Menghilangkan Nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) &&  !navbarNav.contains (e.target)){
    navbarNav.classList.remove('active');
    }
});

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
}

function validasi() {
    // Validasi nama
    var nama = document.forms["formku"]["nama"].value;
    if (!/^[a-zA-Z\s]+$/.test(nama)) {
        alert("Nama harus berupa huruf dan spasi.");
        document.getElementById("nama").focus();
        document.formku.nama.value = "";
        return false;    
    }

    var email = document.forms["formku"]["email"].value;
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        alert("Email harus berupa huruf,angka,dan @");
        document.getElementById("email").focus();
        document.formku.nama.value = "";
        return false;    
    }

    // Validasi nomor
    var nomor = document.forms["formku"]["nomor"].value;
    if (!/^\d+$/.test(nomor)) {
        alert("Nomor harus berupa angka.");
        document.getElementById("nomor").focus();
        document.formku.nomor.value = "";
        return false;    
    }
  
    alert("Pendaftaran telah terkirim");
    
    return true; // Mengembalikan true jika semua validasi lolos

}

