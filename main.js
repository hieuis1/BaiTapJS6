
//bai 1




document.getElementById('bai1').addEventListener('click',() =>{
    let value = document.getElementById('mang').value
    let s = value.split(" ");
    let input = document.querySelector('input[name="selected"]:checked').value;
    let result = document.getElementById('result')

    if(input === '6'){

    }
    switch(input){
        case '1':
            let sum = 0;
            s.forEach(element => {
                sum += +element   
            });
            result.innerText = `Output: ${sum}`
            break;
        case '2':
            let count = 0;
            s.forEach(e => {
                if(+e > 0){
                    count++;
                }
            })
            result.innerText = `Output: ${count}`
            break;
        case '3':
            let min = 99999999;
            s.forEach(e => {
                if(+e < min){
                    min = +e;
                }
            })
            result.innerText= `Output: ${min}`
            break;

        case '4':
            let min2 = 9999999;
            s.forEach(e =>{
                if(+e < min2 && +e > 0){
                    min2 = +e;
                }
            })
            result.innerText= `Output: ${min2}`
            break;
        case '5':
            let even 
            s.forEach(e => {
                if(+e % 2 == 0){
                    even = e
                }
            })
            result.innerText= `Output: ${even}`
            break;
        case '6':
            let value1 = +document.getElementById('value1').value
            let value2 = +document.getElementById('value2').value
            if(value1 >= 0 && value2 < s.length){
                let tmp = s[value1];
                s[value1] = s[value2];
                s[value2] = tmp;
                result.innerText = `Output: ${s.join(" ")}`
            }
            else{
                result.innerText = "Vị trí bạn nhập bị sai hoặc không tồn tại rồi"
            }
            break;
        case '7':
            s.sort((a,b)=>{
                return (+a) - (+b);
            })
            result.innerText = `Output: ${s.join(" ")}`
        case '8':
            let prime = -1;
            for(let i=0; i<s.length;i++){
                let so = +s[i];
                if(check(so)){
                    prime = so;
                    break;
                }
            }
            if(prime == -1){
                result.innerText = `Output: Không tìm thấy số nguyên tố`
            }
            else{
                result.innerText = `Output: ${prime}`
            }
            break;
        case '10':
            let evenCount = 0;
            let oddCount =0;
            s.forEach((e) => {
                if(+e % 2 == 0){
                    evenCount++;
                }
                else{
                    oddCount++;
                }
            })
            console.log(evenCount , oddCount);
            if(evenCount > oddCount){
                result.innerText = `Output: số chẵn nhiều hơn số lẻ`
            }
            else{
                result.innerText = `Output: số lẻ nhiều hơn số chẵn`
            }
            break;
        default:
            result.innerText = `Output: bạn chưa chọn chức năng`


        
            


    }
})

function handleChange() {
    let input = document.getElementById('c6');
    input.classList.toggle('hide');
    input.classList.toggle('show')
}

function check(e){
    if(e < 2){
        return false
    }
    else{
        for(let i=2; i<e;i++){
            if(e%i==0){
                return false
            }
        }
    }
    return true;
}


