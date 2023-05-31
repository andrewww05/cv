let convert = {
    toRom(){
        let MC = 0,
            CC = 0,
            XC = 0,
            IC = 0,
            thousands, hundreds,
            dozens, units,
            timevariable=(+document.getElementById("intValue").value);

        if (timevariable>3999) timevariable = 3999;
            
        document.getElementById("intValue").innerHTML = timevariable;

        if (timevariable==0) {
            document.getElementById("total").style.display = "table";
            document.getElementById("total").innerHTML = 0;
        }
        else {
            //Count of thousands, hundres, dozens and units in intValue
            MC = Math.floor(timevariable/1000);
            CC = Math.floor((timevariable-MC*1000)/100);
            XC = Math.floor(((timevariable-MC*1000)-CC*100)/10);
            IC = Math.floor((((timevariable-MC*1000)-CC*100)-XC*10));

            //thousands
            if (!MC) thousands = '';
            else thousands = (convert.duplicate("M", MC));
            
            //hundreds
            if (!CC) hundreds = '';
            if (CC < 4) hundreds = convert.duplicate("C", CC); 
            else if (CC == 4) hundreds = "CD";
            else if (CC == 5) hundreds = "D";
            else if (CC > 5 && CC < 9) hundreds = "D"+(convert.duplicate("C", (CC-5)));
            else if (CC == 9) hundreds = "CM";

            //dozens
            if (!XC) dozens = '';
            if (XC < 4) dozens = convert.duplicate("X", XC); 
            else if (XC == 4) dozens = "XL";
            else if (XC == 5) dozens = "L";
            else if (XC > 5 && XC < 9) dozens = "L"+(convert.duplicate("X", (XC-5)));
            else if (XC == 9) dozens = "XC";

            //units
            if (!IC) units = '';
            if (IC < 4) units = convert.duplicate("I", IC); 
            else if (IC == 4) units = "IV";
            else if (IC == 5) units = "V";
            else if (IC > 5 && IC < 9) units = "V"+(convert.duplicate("I", (IC-5)));
            else if (IC == 9) units = "IX";

            document.getElementById("FIRST-RESULT").style.display = "block";
            document.getElementById("total-rom").style.display = "block";
            document.getElementById("total-rom").innerHTML = `${thousands}${hundreds}${dozens}${units}`;
        }
    },

    toInt(){
        let RomNum = (String(document.getElementById("strValue").value));
        if (RomNum.length>21) RomNum = "XD"; 

        function romanConv(checked){
            //Converting string into number
            switch(checked){
              case "I":
                  return 1;
              case "V":
                  return 5;
              case "X":
                  return 10;
              case "L":
                  return 50;
              case "C":
                  return 100;
              case "D":
                  return 500;
              case "M":
                  return 1000;
            }
          }

          document.getElementById("SECOND-RESULT").style.display = "block";

          //Validation input value
          if (convert.checkStringForRoman(RomNum)){
            
            //Calculating final result
            let summary = 0;
 
            for (let i = 0; i<RomNum.length; i++){
                if (i!=0 && romanConv(RomNum[i])>romanConv(RomNum[i-1]) && RomNum[i]!=[i-1]){
                summary=(summary-romanConv(RomNum[i-1]))+(romanConv(RomNum[i])-romanConv(RomNum[i-1]));
                } else {
                summary+=romanConv(RomNum[i]);
                }
            }
            
            document.getElementById("totalInt").style.display = "block";
            document.getElementById("totalInt").innerHTML = summary;
            
            if (RomNum != convert.intToRoman(summary)){
				document.getElementById("T9").innerHTML = `Можливо, ви мали на увазі ${convert.intToRoman(summary)}`;
			}
            else document.getElementById("T9").innerHTML = RomNum;
          } 
          else {
            document.getElementById("totalInt").style.display = "block";
            document.getElementById("totalInt").innerHTML = "Помилка";
            document.getElementById("T9").innerHTML = "Помилка";
          }
    },
    
    
    //#################################  HELPFULL FUNCTIONS  ###############################################

    //duplicate(Hello, 3) -> "HelloHelloHello"
    duplicate(strvalue, cooficient){
        let total = "";
        
        for (let i = 0; i<cooficient; i++){
          total+=String(strvalue);
        }
        
        return total;
    },

    checkStringForRoman(str){
        function check(str){
          if (str.includes("I")||str.includes("V")||str.includes("X")||str.includes("X")
          ||str.includes("L")||str.includes("C")||str.includes("D")||str.includes("M")) return true; 
          else return false;
        }
        for (let i = 0; i<str.length; i++){
          if (!check(str[i])) return false;
        } 
        return true;
      },

      isMistake(str){
        // Regex to check valid
        // ROMAN NUMERAL
        let regex = new RegExp(/^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/);
    
        // str
        // is empty return false
        if (str == null) {
            return "false";
        }
    
        // Return true if the str
        // matched the ReGex
        if (regex.test(str) == true) {
            return "true";
        }
        else {
            return "false";
        }
    },

    intToRoman(intValue){
        let MC = 0,
            CC = 0,
            XC = 0,
            IC = 0,
            timevariable = intValue;
      
        MC = Math.floor(timevariable/1000);
        CC = Math.floor((timevariable-MC*1000)/100);
        XC = Math.floor(((timevariable-MC*1000)-CC*100)/10);
        IC = Math.floor((((timevariable-MC*1000)-CC*100)-XC*10));
      
        let thousands,
            hundreds,
            dozens,
            units;
      
        //thousands
        if (!MC) thousands = '';
        else thousands = (convert.duplicate("M", MC));
        
        //hundreds
        if (!CC) hundreds = '';
        if (CC < 4) hundreds = convert.duplicate("C", CC); 
        else if (CC == 4) hundreds = "CD";
        else if (CC == 5) hundreds = "D";
        else if (CC > 5 && CC < 9) hundreds = "D"+(convert.duplicate("C", (CC-5)));
        else if (CC == 9) hundreds = "CM";
      
        //dozens
        if (!XC) dozens = '';
        if (XC < 4) dozens = convert.duplicate("X", XC); 
        else if (XC == 4) dozens = "XL";
        else if (XC == 5) dozens = "L";
        else if (XC > 5 && XC < 9) dozens = "L"+(convert.duplicate("X", (XC-5)));
        else if (XC == 9) dozens = "XC";
      
        //units
        if (!IC) units = '';
        if (IC < 4) units = convert.duplicate("I", IC); 
        else if (IC == 4) units = "IV";
        else if (IC == 5) units = "V";
        else if (IC > 5 && IC < 9) units = "V"+(convert.duplicate("I", (IC-5)));
        else if (IC == 9) units = "IX";
      
        return `${thousands}${hundreds}${dozens}${units}`;
      }
};

