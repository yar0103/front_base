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

//1 마지막 아이템 제거
animals.pop();

//2 Dog 추가
animals.push('Dog')

//3 Mosquito, Mouse, Mull 추가
animals.push('Mosquito', 'Mouse', 'Mull')

//4 Human 체크
animals.includes('Human')

//5 Cat 체크
console.log(animals.includes('Cat'))

//6 Red deer을 Deer로 변경


//7 Spider 부터 3개의 아이템 제거
animals.indexOf('Spider')
animals.splice(81,3)
animals.includes('Spider')

//8 Tiger 이후 값 제거
tiger_i = animals.indexOf('Tiger')
animals.splice(tiger_i)

//9 B로 시작되는 Baboon~Bison까지 새로저장
x = animals.indexOf('Baboon')
y = animals.indexOf('Bison')

arr2 = animals.slice(x,y+1)

console.log(arr2)
console.log(animals)

//slice (시작인덱스, 종료인덱스)
//splice (시작인덱스, 갯수)