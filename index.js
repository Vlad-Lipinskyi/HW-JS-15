// 1 Завдання

const peoples = [
	{
		name: "Vlad",
		balance: 120,
		skills: "karate",
		friends: ["Stas", "Vlad", "Slavik", "Fillip"],
	},
	{
		name: "Andriy",
		balance: 100,
		skills: "box",
		friends: ["Bogdan", "Max"],
	},
	{
		name: "Sasha",
		balance: 110,
		skills: "soccer",
		friends: ["Stas", "Sergiy", "Yura"],
	},
	{
		name: "Vadim",
		balance: 90,
		skills: "skiing",
		friends: ["Artur"]
	}
]

const totalBalance = peoples.reduce((acc, person) => acc + person.balance, 0);
console.log(totalBalance);


// 2 Завдання

const peoplesWithFriendStas = peoples.filter(people => people.friends.includes("Stas")).map(people => people.name); 
console.log(peoplesWithFriendStas); 


// 3 Завдання

const sortedNamesNumberFriends = peoples.sort((a, b) => a.friends.length - b.friends.length)
console.log(sortedNamesNumberFriends); 


// 4 Завдання

const sortedSkills = peoples.map(person => person.skills).sort(); 
console.log(sortedSkills);