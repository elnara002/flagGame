$(document).ready(function() {
  fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data => {
          const random = Math.floor(Math.random() * 15);
          const country = data[random].name.common;
          const flag = document.querySelector("#flagImage");
          flag.setAttribute("src", data[random].flags.png);

          const button = document.querySelector("#buttonAnswer");
          button.addEventListener('click', function() {
              const guess = document.querySelector("#answerInput").value.toLowerCase();
              if (guess === country.toLowerCase()) {
                  toastr.success('Düzgündür');
              } else {
                  toastr.error('Yanlış cavab');
              }
          });
      })
      .catch(error => {
          toastr.error('Xəta baş verdi.');
      });
});

function nextFlag(){
  location. reload();
};









    



