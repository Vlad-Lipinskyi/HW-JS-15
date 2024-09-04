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

let friendName = "Stas";

const includesFriendName = peoples.reduce((acc, person) => {
	if (person.friends.includes(friendName)) {
		acc.push(person.name);
	}
	return acc;
}, []);

console.log(includesFriendName); 


// 3 Завдання

const sortedNamesNumberFriends = peoples.sort((a, b) => a.friends.length - b.friends.length)
console.log(sortedNamesNumberFriends); 


// 4 Завдання

const sortPeopleSkills = [...peoples].sort((a, b) => a.skills + b.skills).map(people => people.skills)
console.log(sortPeopleSkills)