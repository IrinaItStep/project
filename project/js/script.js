var word1 = prompt('Введите первое слово для проверки:');
var word2 = prompt('Введите второе слово для проверки:');
var arr1 = word1.split('');
var arr2 = word2.split(''); 

//1.
if (arr1.length == arr2.length){
    for(var i = 0; i<arr1.length; i++){
        for(var j = 0; j<arr2.length; j++){
            if(arr1[i]!==arr2[j]) break
            else {
                for(var i = 0; i<arr1.length; i++){
                    for(var j = 0; j<arr2.length; j++){
                        if(arr1[i]==arr2[j]) arr2.splice(j, 1);
                    }
                }
                if(arr2.length == 0) alert('Да, это слова-анаграммы!')
                else alert('Эти слова не подходят :( Попробуйте еще раз');                
            }
        }
    }
} else alert('Эти слова не подходят :( Попробуйте еще раз');

//ИЛИ
//2.
//var arr3 = [];
//if (arr1.length == arr2.length){
//    arr3 = arr2.filter(function(elem, i){
//        return elem !== arr1[i];
//    });
//    if(arr3.length == 0) alert('Да, это слова-анаграммы!')
//    else alert('Эти слова не подходят :( Попробуйте еще раз');
//} else alert('Эти слова не подходят :( Попробуйте еще раз');