//ÖDEV
// kullanıcı tarafından girilen bir kelimenin
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?


var word = String(prompt("Bir kelime giriniz: ") + "<br>");

document.write(word+"<br>");
document.write("kaç karakterlidir: " +word.length + "<br>");
document.write("boşluklar alınarak kaç karakterlidir?: " +word.trim().length+ "<br>");
document.write("bütün kelimeyi küçük harfle göster: " + word.toLowerCase() + "<br>");
document.write("bütün kelimeyi büyük harfle göster: " + word.toUpperCase() + "<br>");
document.write("ilk harfi nedir?: " + word.charAt(0) + "<br>");
document.write("girdiğiniz kelime java ile başlıyor mu?: " + word.startsWith('java') + "<br>");
document.write("girdiğiniz kelimenin sonuna -ben js öğreniyorum- koymak: " + word.concat(" -ben java öğreniyorum.") + "<br>");
document.write("girdiğiniz kelimenin 0 ile 4 arasındaki index: " + word.substring(0,4) + "<br>");

var newWord = String(prompt("İkinci bir kelime giriniz: ") + " <br>");

document.write("ikinci kelime: " + newWord);
document.write("kullanıcıdan alınan başka bir kelimeyle birinci olan kelimenin yer değişimi sonucu: " + word.substring(0).replace(word, newWord) + "<br>"); 
