const regions = document.querySelectorAll(".region");
const regionImgs = document.querySelectorAll(".region img");
const characterSelections = document.querySelectorAll('.character-selection')
const characterCards = document.querySelectorAll(".character-selection-image-container img")
const characterCardsName = document.querySelectorAll(".character-selection-name p")
const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelector(".contents");
const charContainer = document.querySelector(".characters-container");

const regionName = [
    "Mondstadt",
    "Liyue",
    "Inazuma",
    "Sumeru",
];

const regionAssets = [
    [
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/MondstadtSymbol.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/mondstadtHover.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Mondstadt2.png?raw=true",
    ],
    [
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/liyueSymbol.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/liyueHover.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Liyue2.png?raw=true",
    ],
    [
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/inazumaSymbol.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/inazumaHover.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/inazuma2.png?raw=true",
    ],
    [
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/sumeruSymbol.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/sumeruHover.png?raw=true",
        "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Sumeru2.png?raw=true"
    ]
]

const characterElements = [
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Anemo.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Cryo.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Dendro.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Electro.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Geo.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Hydro.png?raw=true",
    "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Element_Pyro.png?raw=true",
]

const assets = [
    [
        {
            characterElement: characterElements[0],
            characterName: "Jean",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Jean(2).png?raw=true",
            characterDesc: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/jeanTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/jeanLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Jean(3).png?raw=true",
        },
        {
            characterElement: characterElements[1],
            characterName: "Kaeya",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Kaeya(2).png?raw=true",
            characterDesc: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems.<br> Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/kaeyaTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/kaeyaLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Kaeya(3).png?raw=true",
        },
        {
            characterElement: characterElements[3],
            characterName: "Lisa",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Lisa(2).png?raw=true",
            characterDesc: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.<br> As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/lisaTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/lisaLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Lisa(3).png?raw=true",
        },
        {
            characterElement: characterElements[5],
            characterName: "Barbara",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Barbara(2).png?raw=true",
            characterDesc: "The Deaconess of the Church of Favonius and a shining idol adored by all.<br> Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.<br> \"I owe everything to the city's spirit of freedom.\" — Barbara, regarding her popularity.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/barbaraTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/barbaraLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Barbara(3).png?raw=true",
        },
        {
            characterElement: characterElements[6],
            characterName: "Amber",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Amber(2).png?raw=true",
            characterDesc: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.<br> Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.<br> As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/amberTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/amberLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Mondstadt/Amber(3).png?raw=true",
        },
    ],
    [
        {
            characterElement: characterElements[3],
            characterName: "Beidou",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Beidou(2).png?raw=true",
            characterDesc: "Captain of the Crux, with quite the reputation in Liyue.<br> There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.<br> For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say—.<br> \"No matter what sea beasts there may be, Beidou will be sure to split them all in two.\"",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/beidouTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/beidouLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Beidou(3).png?raw=true",
        },
        {
            characterElement: characterElements[4],
            characterName: "Ningguang",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Ningguang(2).png?raw=true",
            characterDesc: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.<br> As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/ningguangTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/ningguangLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Ningguang(3).png?raw=true",
        },
        {
            characterElement: characterElements[3],
            characterName: "Keqing",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Keqing(2).png?raw=true",
            characterDesc: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.<br> She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/keqingTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/keqingLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Keqing(3).png?raw=true",
        },
        {
            characterElement: characterElements[6],
            characterName: "Xiangling",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Xiangling(2).png?raw=true",
            characterDesc: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.<br> Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.<br> There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/xianglingTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/xianglingLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Xiangling(3).png?raw=true",
        },
        {
            characterElement: characterElements[0],
            characterName: "Xiao",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Xiao(2).png?raw=true",
            characterDesc: "One of the mighty and illuminated adepti guarding Liyue, also heralded as the \"Vigilant Yaksha.\"<br> Despite his youthful appearance, tales of his exploits have been documented for millennia.<br> He is especially fond of Wangshu Inn's Almond Tofu.<br> This is because it tastes just like the sweet dreams he used to devour.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/xiaoTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/xiaoLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Liyue/Xiao(3).png?raw=true",
        },
    ],
    [
        {
            characterElement: characterElements[0],
            characterName: "Kaedahara Kazuha",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Kaedehara%20Kazuha(2).png?raw=true",
            characterDesc: "A wandering samurai from Inazuma with a modest and gentle personality.<br> Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/kaedeharaKazuhaTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/kaedeharaKazuhaLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Kaedehara%20Kazuha(3).png?raw=true",
        },
        {
            characterElement: characterElements[1],
            characterName: "Kamisato Ayaka",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Kamisato%20Ayaka(2).png?raw=true",
            characterDesc: "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.<br> Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/kamisatoAyakaTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/kamisatoAyakaLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Kamisato%20Ayaka(3).png?raw=true",
        },
        {
            characterElement: characterElements[3],
            characterName: "Raiden Shogun",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Raiden%20Shogun(2).png?raw=true",
            characterDesc: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.<br> With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/raidenShogunTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/raidenShogunLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Raiden%20Shogun(3).png?raw=true",
        },
        {
            characterElement: characterElements[0],
            characterName: "Sayu",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Sayu(2).png?raw=true",
            characterDesc: "Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.<br> She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.<br> Such an extraordinary skillset may have very unexpected uses.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/sayuTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/sayuLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Sayu(3).png?raw=true",
        },
        {
            characterElement: characterElements[6],
            characterName: "Yoimiya",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Yoimiya(2).png?raw=true",
            characterDesc: "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the \"Queen of the Summer Festival.\"<br> A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/yoimiyaTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/yoimiyaLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Inazuma/Yoimiya(3).png?raw=true",
        },
    ],
    [
        {
            characterElement: characterElements[5],
            characterName: "Candace",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Candace(2).png?raw=true",
            characterDesc: "The guardian of Aaru Village who is gentle and benevolent. She will not allow anyone to harm Aaru Village under her watch.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/candaceTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/candaceLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Candace(3).png?raw=true",
        },
        {
            characterElement: characterElements[2],
            characterName: "Collei",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Collei(2).png?raw=true",
            characterDesc: "A Trainee Forest Ranger who is under the tutelage of Tighnari. She started her academic career a little later than her peers, so she is currently working hard to catch up.<br> She hides the other side of her personality deep under the surface of optimism and kindness.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/colleiTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/colleiLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Collei(3).png?raw=true.png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Cyno",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Cyno(2).png?raw=true",
            characterDesc: "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/cynoTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/cynoLine.png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Cyno(3).png?raw=true",
        },
        {
            characterElement: characterElements[2],
            characterName: "Tighnari",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Tighnari(2).png?raw=true",
            characterDesc: "An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/tighnariTrailer.png?raw=true",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/tighnariLine(2).png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Tighnari(3).png?raw=true",
        },
        {
            characterElement: characterElements[3],
            characterName: "Dori",
            characterImage: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Dori(2).png?raw=true",
            characterDesc: "Dori is a merchant in Sumeru who has a fondness for glittering Mora.<br> With her persuasive eloquence, she is able to sell various strange and mysterious products for a very high price.",
            characterTrailer: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/doriTrailer.png?raw=true.png",
            characterLine: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/doriLine(2).png?raw=true",
            characterCard: "https://github.com/fredysunjaya/Jenshin-Impekz/blob/main/assets/Characters%20Sumeru/Dori(3).png?raw=true",
        },
    ],
]

const characterImage = document.querySelector("#character-display-image")
const characterName = document.querySelector(".character-name h1");
const characterElement = document.querySelector(".character-name img");
const characterBackstory = document.querySelector(".character-backstory");
const characterTrailer = document.querySelector("#trailer-image");
const characterLine = document.querySelector("#character-line");
const dropdownBtn = document.querySelector(".dropBtn-container");
const dropdownMenuContainer = document.querySelector(".regions-dropdown");
const dropdowns = document.querySelectorAll(".dropdown");

let charIndex = 0;
let charActive = 0;

characterSelections.forEach((characterSelection, index) => {
    characterSelection.addEventListener("click", () => {
        characterSelections[charActive].classList.remove("active");
        characterSelection.classList.add("active");
        charContainer.classList.remove("characters-container-active");
        characterImage.classList.remove("active");

        setTimeout(() =>{
            characterImage.src = "";
            characterImage.src = assets[regionIndex][index + charIndex].characterImage;
            characterName.innerHTML = assets[regionIndex][index + charIndex].characterName;
            characterElement.src = "";
            characterElement.src = assets[regionIndex][index + charIndex].characterElement;
            characterBackstory.innerHTML = assets[regionIndex][index + charIndex].characterDesc;
            characterTrailer.src = "";
            characterTrailer.src = assets[regionIndex][index + charIndex].characterTrailer;
            characterLine.src = "";
            characterLine.src = assets[regionIndex][index + charIndex].characterLine;

            charContainer.classList.add("characters-container-active");
            characterImage.classList.add("active");
        }, 200);
        
        charActive = index;
        dropdownMenuContainer.classList.remove("regions-dropdown-active");
    })
});

arrows.forEach((arrow, index) => {
    arrow.addEventListener("click", () => {
        if(index == 0) {
            if(charIndex <= 0) {
                console.log('return');
                return;
            }

            for(let i = charIndex + characterSelections.length - 1, j = characterSelections.length - 1; j >= 0; i--, j--) {
                characterCards[j].src = "";
                characterCards[j].src = assets[regionIndex][i - 1].characterCard;
                characterCardsName[j].innerHTML = assets[regionIndex][i - 1].characterName;
            } 

            characterSelections[charActive].classList.remove("active");
            
            charIndex--;
        } else if (index == 1) {
            if(charIndex + characterSelections.length >= assets[regionIndex].length) {
                console.log('return');
                return;
            }

            for(let i = charIndex, j = 0; j < characterSelections.length; i++, j++) {
                characterCards[j].src = "";
                characterCards[j].src = assets[regionIndex][i + 1].characterCard;
                characterCardsName[j].innerHTML = assets[regionIndex][i + 1].characterName;
            }

            characterSelections[charActive].classList.remove("active");
           
            charIndex++;
            dropdownMenuContainer.classList.remove("regions-dropdown-active");
        }
    })
});

let regionIndex = 0;

// dropdown region
dropdownBtn.addEventListener("click", () => {
    dropdownMenuContainer.classList.add("regions-dropdown-active");

    dropdowns.forEach((region, index) => {
        region.addEventListener("click", () => {
            changeRegion(region, index);

            dropdownMenuContainer.classList.remove("regions-dropdown-active");
            document.querySelector(".dropBtn-container .dropdown-region").src = regionAssets[regionIndex][0];
            document.querySelector(".dropBtn-container p").innerHTML = regionName[regionIndex];
        });
    });
});

// region selection
regions.forEach((region, index) => {
    region.addEventListener("click", () => {
        changeRegion(region, index);
    });

    region.addEventListener("mouseenter", () => {
        if(regionIndex == index) {
            return;
        }
        regionImgs[index].src = regionAssets[index][1];
        regionImgs[index].classList.add("regionHoverImage");
    });

    region.addEventListener("mouseleave", () => {
        regionImgs[index].src = regionAssets[index][0];
        regionImgs[index].classList.remove("regionHoverImage");
    })
});

function changeRegion(region, index) {
    charIndex = 0;
            
    regionImgs[index].src = regionAssets[index][1];
    regions[regionIndex].classList.remove("active");
    regionIndex = index;
    region.classList.add("active");
    contents.style.backgroundImage = "url(" + regionAssets[index][2] + ")"

    characterImage.src = assets[regionIndex][0].characterImage;
    characterName.innerHTML = assets[regionIndex][0].characterName;
    characterElement.src = assets[regionIndex][0].characterElement;
    characterBackstory.innerHTML = assets[regionIndex][0].characterDesc;
    characterTrailer.src = assets[regionIndex][0].characterTrailer;
    characterLine.src = assets[regionIndex][0].characterLine;
    
    for(let i = 0; i < characterSelections.length; i++) {
        characterCards[i].src = assets[regionIndex][i].characterCard;
        characterCardsName[i].innerHTML = assets[regionIndex][i].characterName; 
    }

    characterSelections[charActive].classList.remove("active");
    characterSelections[0].classList.add("active");
    
    charActive = 0;
}


const allImage = document.querySelectorAll("img");
allImage.forEach((image1) => {
    image1.setAttribute('draggable', false);
})


// sidebar button
const menuBtn = document.querySelector("#menu-btn");
const sidebar = document.querySelector(".sidebar")

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("sidebar-show");
});

document.querySelector(".contents").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});

document.querySelector(".footer").addEventListener("click", () => {
    sidebar.classList.remove("sidebar-show");
});
