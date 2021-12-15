function compare(){
				var text1 = document.getElementById("tab1");
				var text2 = document.getElementById("tab2");
				var wynik = document.getElementById("wynik");
				console.log(text1.value);
				console.log(text2.value);
				tab1=text1.value.split(",");
				tab2=text2.value.split(",");
				
				for(var i=0;i<tab1.length;i++){
					for(var j=0;j<tab2.length;j++){
						if(tab1[i]===tab2[j]){
							tab1.splice(i,1);
							i--;
						}
					}
				}
				wynik.innerHTML=tab1;
			}