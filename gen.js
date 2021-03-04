function General() {
    var d = document.getElementById("do").innerHTML = "";
    var ertek = 0;
    for(var i = 1;i<=61;i++) {
        var vad = document.getElementById(i);
        switch(i) {
            case 1: {
                if(vad.checked == true) {
                    d+="Hangkürt indokolatlan használata: 300$ ";
                    ertek+=300;
                }
                break;
            }
            case 2: {
                if(vad.checked == true) {
                    d+="Záróvonal átlépése: 200$ ";
                    ertek+=200;
                }
                break;
            }
            case 3: {
                if(vad.checked == true) {
                    d+="Szabálytalan megfordulás 400$ ";
                    ertek+=400;
                }
                break;
            }
            case 5: {
                if(vad.checked == true) {
                    d+="Közút rongálása: 300$ ";
                    ertek+=300;
                }
                break;
            }
            case 6: {
                if(vad.checked == true) {
                    d+="Követési távolság be nem tartása: 200$ ";
                    ertek+=200;
                }
                break;
            }
            case 7: {
                if(vad.checked == true) {
                    d+="Tilosban való parkolás: 450$ ";
                    ertek+=450;
                }
                break;
            }
            case 8: {
                if(vad.checked == true) {
                    d+="Tilosban való megállás: 500$ ";
                    ertek+=500;
                }
                break;
            }
            case 9: {
                if(vad.checked == true) {
                    d+="Közlekedési baleset okozása (enyhe): 1000$ ";
                    ertek+=1000;
                }
                break;
            }
            case 10: {
                if(vad.checked == true) {
                    d+="Közlekedési baleset okozása (súlyos): 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 11: {
                if(vad.checked == true) {
                    d+="Elsőbbség meg nem adása: 600$ ";
                    ertek+=600;
                }
                break;
            }
            case 12: {
                if(vad.checked == true) {
                    d+="Piros lámpán való áthaladás: 600$ ";
                    ertek+=600;
                }
                break;
            }
            case 13: {
                if(vad.checked == true) {
                    d+="Veszélyes előzés: 600$ ";
                    ertek+=600;
                }
                break;
            }
            case 14: {
                if(vad.checked == true) {
                    d+="Nem megfelelő műszaki állapot (enyhe): 600$ ";
                    ertek+=600;
                }
                break;
            }
            case 15: {
                if(vad.checked == true) {
                    d+="Nem megfelelő műszaki állapot (súlyos): 1200$ ";
                    ertek+=1200;
                }
                break;
            }
            case 16: {
                if(vad.checked == true) {
                    d+="Vezetői engedély hiánya: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 17: {
                if(vad.checked == true) {
                    d+="Sebességkorlát túllépése +5 - +20 km/h -val: 600$ ";
                    ertek+=600;
                }
                break;
            }
            case 18: {
                if(vad.checked == true) {
                    d+="Sebességkorlát túllépése +20 - +50 km/h -val: 1000$ ";
                    ertek+=1000;
                }
                break;
            }
            case 19: {
                if(vad.checked == true) {
                    d+="Sebességkorlát túllépése több mint 50 km/hval: 1400$ ";
                    ertek+=1400;
                }
                break;
            }
            case 20: {
                if(vad.checked == true) {
                    d+="Forgalommal szemben haladás: 400$ ";
                    ertek+=400;
                }
                break;
            }
            case 21: {
                if(vad.checked == true) {
                    d+="Illuminált állapotban történő vezetés: 1650$ ";
                    ertek+=1650;
                }
                break;
            }
            case 22: {
                if(vad.checked == true) {
                    d+="Rendbontás: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 23: {
                if(vad.checked == true) {
                    d+="Rendőrségi munka akadályozása: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 24: {
                if(vad.checked == true) {
                    d+="Hivatalos személy sértegetése: 2000$ ";
                    ertek+=2000;
                }
                break;
            }
            case 25: {
                if(vad.checked == true) {
                    d+="Polgárok szóbeli fenyegetése/megfélemlítése: 500$ ";
                    ertek+=500;
                }
                break;
            }
            case 26: {
                if(vad.checked == true) {
                    d+="Hamis tanúzás: 700$ ";
                    ertek+=700;
                }
                break;
            }
            case 27: {
                if(vad.checked == true) {
                    d+="Elmenekülés az igazoltatás alól: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 28: {
                if(vad.checked == true) {
                    d+="Korrupciós kísérlet: 5000$ ";
                    ertek+=5000;
                }
                break;
            }
            case 29: {
                if(vad.checked == true) {
                    d+="Cserbenhagyás: 700$ ";
                    ertek+=700;
                }
                break;
            }
            case 30: {
                if(vad.checked == true) {
                    d+="Közelharci fegyverhasználat: 1000$ ";
                    ertek+=1000;
                }
                break;
            }
            case 31: {
                if(vad.checked == true) {
                    d+="Éles lőfegyver használata: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 32: {
                if(vad.checked == true) {
                    d+="Lejárt fegyvertartási engedély: 2500$ ";
                    ertek+=2500;
                }
                break;
            }
            case 33: {
                if(vad.checked == true) {
                    d+="Gépjármű eltulajdonítása: 2500$ ";
                    ertek+=2500;
                }
                break;
            }
            case 34: {
                if(vad.checked == true) {
                    d+="Illegális fegyverbirtoklás 3000$ ";
                    ertek+=3000;
                }
                break;
            }
            case 35: {
                if(vad.checked == true) {
                    d+="Drog birtoklása: 2000$ ";
                    ertek+=2000;
                }
                break;
            }
            case 36: {
                if(vad.checked == true) {
                    d+="Drog kereskedelem: 2700$ ";
                    ertek+=2700;
                }
                break;
            }
            case 37: {
                if(vad.checked == true) {
                    d+="Polgár elrablása: 4000$ ";
                    ertek+=4000;
                }
                break;
            }
            case 38: {
                if(vad.checked == true) {
                    d+="Hivatalos személy elrablása: 6000$ ";
                    ertek+=6000;
                }
                break;
            }
            case 39: {
                if(vad.checked == true) {
                    d+="Polgár kifosztása: 2000$ ";
                    ertek+=2000;
                }
                break;
            }
            case 40: {
                if(vad.checked == true) {
                    d+="Bolt rablás kísérlete: 3500$ ";
                    ertek+=3500;
                }
                break;
            }
            case 41: {
                if(vad.checked == true) {
                    d+="Sikeres boltrablás: 4000$ ";
                    ertek+=4000;
                }
                break;
            }
            case 42: {
                if(vad.checked == true) {
                    d+="Kocsmai rablás kísérlete: 4000$ ";
                    ertek+=1100;
                }
                break;
            }
            case 43: {
                if(vad.checked == true) {
                    d+="Sikeres kocsmai rablás: 4500$ ";
                    ertek+=4500;
                }
                break;
            }
            case 44: {
                if(vad.checked == true) {
                    d+="Bank rablás kísérlete: 5000$ ";
                    ertek+=5000;
                }
                break;
            }
            case 45: {
                if(vad.checked == true) {
                    d+="Sikeres bank rablás: 5500$ ";
                    ertek+=5500;
                }
                break;
            }
            case 46: {
                if(vad.checked == true) {
                    d+="Üzleti átverés: 2500$ ";
                    ertek+=2500;
                }
                break;
            }
            case 47: {
                if(vad.checked == true) {
                    d+="Illegális fegyverkereskedelem: 3200$ ";
                    ertek+=3200;
                }
                break;
            }
            case 48: {
                if(vad.checked == true) {
                    d+="Gondatlanságból elkövetett testi sértés: 1000$ ";
                    ertek+=1000;
                }
                break;
            }
            case 49: {
                if(vad.checked == true) {
                    d+="Gondatlanságból elkövetett emberölés: 1500$ ";
                    ertek+=1500;
                }
                break;
            }
            case 50: {
                if(vad.checked == true) {
                    d+="Közelharci eszközzel elkövetett támadás polgár ellen: 2800$ ";
                    ertek+=2800;
                }
                break;
            }
            case 51: {
                if(vad.checked == true) {
                    d+="Közelharci eszközzel elkövetett támadás hivatali személy ellen 3200$ ";
                    ertek+=3200;
                }
                break;
            }
            case 52: {
                if(vad.checked == true) {
                    d+="Polgár meglövése: 3500$ ";
                    ertek+=3500;
                }
                break;
            }
            case 53: {
                if(vad.checked == true) {
                    d+="Hivatali személy meglövése: 4000$ ";
                    ertek+=4000;
                }
                break;
            }
            case 54: {
                if(vad.checked == true) {
                    d+="Polgár ellen elkövetett emberölési kísérlet: 4500$ ";
                    ertek+=45000;
                }
                break;
            }
            case 55: {
                if(vad.checked == true) {
                    d+="Hivatalos személy ellen elkövetett emberölési kísérlet: 5000$ ";
                    ertek+=5000;
                }
                break;
            }
            case 56: {
                if(vad.checked == true) {
                    d+="Polgár ellen elkövetett emberölés: 20000$ ";
                    ertek+=20000;
                }
                break;
            }
            case 57: {
                if(vad.checked == true) {
                    d+="Hivatalos személy ellen elkövetett emberölés: 40000$ ";
                    ertek+=40000;
                }
                break;
            }
            case 58: {
                if(vad.checked == true) {
                    d+="Hivatalos engedély nélküli fuvarozás: 3000$ "
                    ertek+=3000;
                }
                break;
            }
            case 59: {
                if(vad.checked == true) {
                    d+="ATM kirabolása 2000$ "
                    ertek+=2000;
                }
                break;
            }
            case 60: {
                if(vad.checked == true) {
                    d+="Ékszerboltrablás kísérlete 4500$ "
                    ertek+=4500;
                }
                break;
            }
            case 61: {
                if(vad.checked == true) {
                    d+="Sikeres ékszerboltrablás 5000$ "
                    ertek+=5000;
                }
                break;
            }




        }
    }
    document.getElementById("do").innerHTML = d;
    document.getElementById("ertek").innerHTML = ertek + "$";
    document.getElementById("borton").innerHTML = Math.round(ertek/400) + "hónap";
}

function Reload() {
    location.replace("index.html");
}