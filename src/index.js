module.exports = function toReadable (number) {
  let str = String(number);
  let arr = str.split('');
  let numStr = '';
  let ind = 0;
  let index = arr.length;
  arr.forEach((item, i) => {
      if((index - i) == 3) {
        switch(item) {  
            case '1':
                numStr += 'one hundred ';
                break
            case '2':
                numStr += 'two hundred ';
                break
            case '3':
                numStr += 'three hundred ';
                break
            case '4':
                numStr += 'four hundred ';
                break
            case '5':
                numStr += 'five hundred ';
                break
            case '6':
                numStr += 'six hundred ';
                break
            case '7':
                numStr += 'seven hundred ';
                break
            case '8':
                numStr += 'eight hundred ';
                break
            case '9':
                numStr += 'nine hundred ';
                break
        }
      }else if((index - i) == 2) {
        switch(item) {
            case '1':
                ind++;
                break
            case '2':
                numStr += 'twenty ';
                break
            case '3':
                numStr += 'thirty ';
                break
            case '4':
                numStr += 'forty ';
                break
            case '5':
                numStr += 'fifty ';
                break
            case '6':
                numStr += 'sixty ';
                break
            case '7':
                numStr += 'seventy ';
                break
            case '8':
                numStr += 'eighty ';
                break
            case '9':
                numStr += 'ninety ';
                break
        }
      }else if((index - i) == 1) {
        if(ind == 1) {
            switch(item) {
                case '1':
                    numStr += 'eleven';
                    break
                case '2':
                    numStr += 'twelve';
                    break
                case '3':
                    numStr += 'thirteen';
                    break
                case '4':
                    numStr += 'fourteen';
                    break
                case '5':
                    numStr += 'fifteen';
                    break
                case '6':
                    numStr += 'sixteen';
                    break
                case '7':
                    numStr += 'seventeen';
                    break
                case '8':
                    numStr += 'eighteen';
                    break
                case '9':
                    numStr += 'nineteen';
                    break
                case '0':
                    numStr += 'ten';
                    break
            }
        }else if(ind == 0){
            switch(item) {
                case '1':
                    numStr += 'one';
                    break
                case '2':
                    numStr += 'two';
                    break
                case '3':
                    numStr += 'three';
                    break
                case '4':
                    numStr += 'four';
                    break
                case '5':
                    numStr += 'five';
                    break
                case '6':
                    numStr += 'six';
                    break
                case '7':
                    numStr += 'seven';
                    break
                case '8':
                    numStr += 'eight';
                    break
                case '9':
                    numStr += 'nine';
                    break
                case '0':
                    if(numStr.length == 0) {
                        numStr += 'zero';
                    }else {
                        numStr = numStr.slice(0, -1);
                    }
            }
        }
        
      }
      
  });

  return numStr;
}
