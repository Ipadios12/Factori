window.onload = function () {
  document.getElementById("calcular").addEventListener("click", function () {
    let n = document.getElementById("number").value;
    n = Math.abs(parseInt(n));
    if (isNaN(n) || n > 100) {
      return;
    }
    f = factorial(n);
    salida = n.toString() + "! = " + f;
    document.getElementById("exit").innerHTML = salida;
  });
};
function factorial(n) {
//  ########################################
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// ##########################################
//console.log(5, factorial(5));
//console.log(8, factorial(8));
//console.log(12, factorial(12));
