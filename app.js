let warriors = [
    {
        name:"Bob",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Jerry",
        damage:1,
        health:12,
        warrior:true
    },
    {
        name:"Mavis",
        damage:2,
        health:10,
        warrior:true
    },
    {
        name:"Morty",
        damage:4,
        health:10,
        warrior:true
    },
    {
        name:"Shorty",
        damage:10,
        health:3,
        warrior:false
    },
    {
        name:"Porty",
        damage:1,
        health:14,
        warrior:true
    },{
        name:"Perry",
        damage:2,
        health:9,
        warrior:true
    },
    {
        name:"Larry",
        damage:2,
        health:17,
        warrior:false
    }
]

    for (let i = 0; i < warriors.length; i++) {

            let ele = document.createElement("div");
            let nameEle = document.createElement("h1");
            let healthEle = document.createElement("h2");
            let damageEle = document.createElement("h2");
            nameEle.innerHTML = warriors[i].name;
            healthEle.innerHTML = "Health:" + " " + warriors[i].health;
            damageEle.innerHTML = "Damage:" + " " + warriors[i].damage;
            ele.appendChild(nameEle);
            ele.appendChild(damageEle);
            ele.appendChild(healthEle);
            document.body.appendChild(ele);

            if (warriors[i].health < 10 || warriors[i].damage < 2 || warriors[i].warrior === false) {
                nameEle.innerHTML=""
                healthEle.innerHTML=""
                damageEle.innerHTML=""
        }
            else if (warriors[i].name.includes("a")){
                nameEle.innerHTML = warriors[i].name.fontcolor("red")

        }

}
