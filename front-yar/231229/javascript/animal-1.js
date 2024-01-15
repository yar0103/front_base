let animals =[
 "Albatross",
 "Aardvark", 
 "Alligator",
 "Alpaca",
 "Ant",
 "Ape",
 "Armadillo",
 "Donkey",
 "Baboon",
 "Badger",
 "Barracuda",
 "Bat",
 "Bear",
 "Beaver",
 "Bee",
 "Bison",
 "Cat",
 "Caterpillar",
 "Cattle",
 "Chamois",
 "Cheetah",
 "Chicken",
 "Chimpanzee",
 "Chinchilla",
 "Chough",
 "Clam",
 "Cobra",
 "Cockroach",
 "Cod",
 "Cormorant",
 "Dugong",
 "Dunlin",
 "Eagle",
 "Echidna",
 "Eel",
 "Eland",
 "Elephant",
 "Elk",
 "Emu",
 "Falcon",
 "Ferret",
 "Finch",
 "Fish",
 "Flamingo",
 "Fly",
 "Fox",
 "Frog",
 "Gaur", 
 "Gazelle",
 "Gerbil",
 "Giraffe",
 "Grasshopper",
 "Heron",
 "Herring",
 "Hippopotamus",
 "Hornet",
 "Horse",
 "Kangaroo",
 "Kingfisher",
 "Koala",
 "Kookabura",
 "Moose",
 "Narwhal",
 "Newt",
 "Nightingale",
 "Octopus",
 "Okapi",
 "Opossum", 
 "Quail",
 "Quelea",
 "Quetzal",
 "Rabbit", 
 "Raccoon",
 "Rail",
 "Ram",
 "Rat",
 "Raven",
 "Red deer",
 "Sandpiper",
 "Sardine",
 "Sparrow",
 "Spider",
 "Spoonbill",
 "Squid",
 "Squirrel",
 "Starling",
 "Stingray",
 "Tiger",
 "Toad",
 "Whale",
 "Wildcat",
 "Wolf",
 "Worm",
 "Wren",
 "Yak",
 "Zebra"
]


//push, pop, includes, indexOf, slice, splice

//1 마지막 아이템 제거
animals.pop();

//2 Dog 추가
animals.push("Dog");

//3 Mosquito, Mouse, Mull 추가
animals.push("Mosquito","Mouse","Mull");

//4 Human 체크
animals.includes("Human") //false

//5 Cat 체크
animals.includes("Cat") //true

//indexOf 사용
//6 Red deer을 Deer로 변경
let d = animals.indexOf("Red deer")
animals[d] = "Deer"

//7 Spider 부터 3개의 아이템 제거
let s = animals.indexOf("Spider")
animals.splice(s, 3)

//8 Tiger 이후 값 제거
let t = animals.indexOf("Tiger")
animals.splice(t, 3)

//9 B로 시작되는 Baboon~Bison까지 새로저장
let x1 = animals.indexOf('Baboon')
let x2 = animals.indexOf('Bison')

let result = animals.splice(x1, x2-x1 +1)
console.log(result)
console.log(animals)