function calc_sum(){
    const first_num = document.querySelector('#first_num').value;
    const second_num = document.querySelector('#second_num').value;
    const sum_elem = document.querySelector('#sum');
    const sum_val = parseInt(first_num) + parseInt(second_num);
    console.log(sum_val);
    sum_elem.value = sum_val.toString();
}
