let boutton_code_bar = document.getElementById('boutton_code_bar');
let text = document.getElementById('text');
let box = document.getElementById('box');
let pdf_box = document.getElementById('pdf_box');

boutton_code_bar.onclick = function(){
    if(text.value.length > 0){
        if(text.value.length < 50){
            box.innerHTML = "<svg id='barcode'></svg>"
            JsBarcode("#barcode", text.value);
            box.style.border = "1px solid #999"
            text.value = ""
            pdf_box.innerHTML = "<button onclick='generatePDF()' class='mt-4 ml-4 w-11/12 py-2 flex items-center justify-center bg-green-700 text-white outline-none transition-all duration-300 hover:bg-green-900'>Download the Bar Code</button>"
        }else{

            box.style.border = "0"
            box.innerHTML = "<p class='w-full py-2 flex items-center justify-center bg-red-700 text-white'>The text is too long !</p>"
            pdf_box.style.display = "none"
            text.value = ""
        }
    }else{
        box.style.border = "0"
        box.innerHTML = "<p class='w-full py-2 flex items-center justify-center bg-red-700 text-white'>Remplissez le champ !</p>"
        pdf_box.style.display = "none"
        text.value = ""
    }
}
let generatePDF =()=>{
    var opt = {
      margin:       1,
      filename:     `${text.value}.pdf`,
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a6', orientation: 'l' }
    };
    
    // New Promise-based usage:
    html2pdf().set(opt).from(box).save();
    
    // Old monolithic-style usage:
    html2pdf(box, opt);
}