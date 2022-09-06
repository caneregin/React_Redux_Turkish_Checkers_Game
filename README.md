# React Redux Turkish Checkers Game

## Yayınlandı: https://jovial-crisp-5a51bd.netlify.app/

## Açılış ekranı
![turkishcheckers](https://user-images.githubusercontent.com/36435160/188718188-22aa52c1-f38d-4353-8191-357f0ec94e40.png)

## data useSelector ile çekilmektedir. data verisinde tüm dama taşlarının konumları ve dama olma durumlarını, taş renkleri bilgileri yer alır. ilk tıklama ve ikinci tıklama state olarak tanımlanmıştır. ilk tıklanan dama taşının rengi ve counter state olarak tanımlanmıştır. firstClick boş ise firstClick içerisine dama taşı bilgisi yazılır ve ilk taşın rengi yazılır. firstClick boş değilse secondClick içerisine taş bilgisi yazılır. firstClick güncellendiğinde useEffect dispatch updateRock1 reducer aracılığıyla firstClick bilgisi karşılanır. İlk taşın rengi updateimgColor reducer ile karşılanır. secondClick güncellendiğinde updateRock2 reducer ile secondClick bilgisi karşılanır. Aynı zamanda secondClick güncellendiğinde updateRock reducer çalıştırılır böylece oyun kurallarına göre dama taşları hareket etmiş veya edememiş olur.
![turkishcheckers1](https://user-images.githubusercontent.com/36435160/188721748-e53573e3-7b82-4083-90cf-03ca7051ad08.png)

## secondClick güncellendikten sonra counter artırılır ve counter güncellendiğinde firstClick bilgisi null olarak güncellenir. data içerisindeki veriler map aracılığıyla button ve içerisinde img ile listelenir.
![turkishcheckers2](https://user-images.githubusercontent.com/36435160/188721928-b587cb5c-b5f4-4afc-a171-5c795670671b.png)

## data içerisindeki veriler 64 tanedir. Her bir kutunun id, taş rengi, arkaplan rengi ve dama taşı olma durumu burada yer almaktadır.
![turkishcheckers3](https://user-images.githubusercontent.com/36435160/188722076-9ca4d15d-e39e-4eb3-8c16-a7a939f35d55.png)

## initial değerler tanımlanmıştır. items data tüm taşların konumları bilgileri yer almaktadır. tempRock1 geçici ilk tıklanan taş bilgileridir. tempRock2 geçici ikinci tıklanan taş bilgileridir. tempColor geçici ilk tıklanan taşın rengidir.
![turkishcheckers4](https://user-images.githubusercontent.com/36435160/188722327-cc0793a1-4353-41b3-9f46-ccdca6ff1e35.png)

## Taşların konumları, taşların gidebileceği kutucuklar, taşın başka bir taşı yeme durumu konumu ve hesaplamaları burada tanımlanmıştır.
![turkishcheckers5](https://user-images.githubusercontent.com/36435160/188722483-219c2cbd-5fbe-4d66-a7c6-e6f9c48d0a39.png)

## Taşların ileri sağa ve sola 1 konum hareket etmesi durumu buradadır. Eğer tıklanan taş siyah ise ve gidilmek istenen konum boş ise izin verilen 1 sol 1 sağ veya 1 aşağı konuma taş ilerleyebilir. Eğer tıklanan taş beyaz ise ve gidilmek istenen konum boş ise izin verilen 1 sol 1 sağ veya 1 yukarı konuma taş ilerleyebilir. Her iki durumda da ilerlenen taraftaki kutucuğa taşın rengi verilir. İlk tıklanan durumdaki taş rengi boş renk olarak geçer. Bu yüzden geçici ilk taş rengi tutulur.
![turkishcheckers6](https://user-images.githubusercontent.com/36435160/188723046-be77da78-0e5a-4614-9488-5f22bf6b9647.png)

## Siyah taşın beyaz taşı yeme durumu buradadır. Eğer taş siyah ise gidilmek istenen konum 2 kutucuk sağ sol veya aşağıdayse aynı zamanda boş ise, gideceği 2 konum ilerinin 1 gerisinin rengi beyaz ise taş ilerler. ilk taşın konumu ve yenilen taşın konumunun rengi boş renk olarak değiştirilir. Gidilen konumun rengi ilk konumun rengi olarak değişir.
![turkishcheckers7](https://user-images.githubusercontent.com/36435160/188723463-deab4688-2070-4bd8-9145-dc805d6aa0c8.png)

## Beyaz taşın siyah taşı yeme durumu buradadır. Eğer taş beyaz ise gidilmek istenen konum 2 kutucuk sağ sol veya yukarıdaysa aynı zamanda boş ise, gideceği 2 konum ilerinin 1 gerisinin rengi siyah ise taş ilerler. ilk taşın konumu ve yenilen taşın konumunun rengi boş renk olarak değiştirilir. Gidilen konumun rengi ilk konumun rengi olarak değişir.
![turkishcheckers8](https://user-images.githubusercontent.com/36435160/188723586-aed9bf37-2485-4b31-8937-24794b847e33.png)

## Dama taşı olma durumu buradadır. ilk ve son satıra gelen taşlar dama olarak belirlenir. O taşların bilgilerinde dama olma durumu olan isCheck true olarak değiştirilir.
![turkishcheckers9](https://user-images.githubusercontent.com/36435160/188723780-8da60ba7-f728-4bbc-b937-05febf271636.png)

## Dama taşının hareket etme durumudur. Dama taşının gidebileceği izin verilen tüm konumlar burada belirtilmiştir. Gideceği konum boş ise dama taşı hareket eder.
![turkishcheckers10](https://user-images.githubusercontent.com/36435160/188724166-1301e730-de0d-4c25-861e-1ee496b481d3.png)

## Dama taşının diğer taşları aynı satır içerisinde yeme durumudur. Dama taşı üzerinden geçen taşları yer. Dama taşının geçtiği tüm konumlar for kullanılarak alınır ve hepsinin renk durumu boş renk olarak belirlenir. İlk dama taşı rengi boş renk olarak değiştirilir ve gittiği konum ilk taş rengi olarak değiştirilir.
![turkishcheckers11](https://user-images.githubusercontent.com/36435160/188724553-2f55452a-ec59-4d06-a04f-2e082279c413.png)

## Dama taşının diğer taşları aynı sütun içerisinde yeme durumudur. Dama taşı üzerinden geçen taşları yer. Dama taşının geçtiği tüm konumlar for kullanılarak alınır ve hepsinin renk durumu boş renk olarak belirlenir. İlk dama taşı rengi boş renk olarak değiştirilir ve gittiği konum ilk taş rengi olarak değiştirilir.
![turkishcheckers12](https://user-images.githubusercontent.com/36435160/188724674-0bb97eb3-8a47-4661-a95b-0fe7d920ac31.png)

## Redux store
![turkishcheckers13](https://user-images.githubusercontent.com/36435160/188724713-73ceb82a-7912-4ae0-bb33-41c274e90612.png)
