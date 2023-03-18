const regions = document.querySelectorAll(".region");
const regionImgs = document.querySelectorAll(".region img");
const characterSelections = document.querySelectorAll('.character-selection')
const characterCards = document.querySelectorAll(".character-selection-image-container img")
const characterCardsName = document.querySelectorAll(".character-selection-name p")
const arrows = document.querySelectorAll(".arrow");
const contents = document.querySelector(".contents");
const charContainer = document.querySelector(".characters-container");

const regionHoverSymbol = [
    "assets/mondstadtHover.png",
    "assets/liyueHover.png",
    "assets/inazumaHover.png",
    "assets/sumeruHover.png"
];

const regionSymbol = [
    "assets/MondstadtSymbol.png",
    "assets/liyueSymbol.png",
    "assets/inazumaSymbol.png",
    "assets/sumeruSymbol.png"
];

const regionBackground = [
    "assets/Mondstadt2.png",
    "assets/Liyue2.png",
    "assets/inazuma2.png",
    "assets/Sumeru2.png"
]

const regionAssets = [
    [
        "assets/MondstadtSymbol.png",
        "assets/mondstadtHover.png",
        "assets/Mondstadt2.png",
    ],
    [
        "assets/liyueSymbol.png",
        "assets/liyueHover.png",
        "assets/Liyue2.png",
    ],
    [
        "assets/inazumaSymbol.png",
        "assets/inazumaHover.png",
        "assets/inazuma2.png",
    ],
    [
        "assets/sumeruSymbol.png",
        "assets/sumeruHover.png",
        "assets/Sumeru2.png"
    ]
]

const characterElements = [
    "assets/Element_Anemo.png",
    "assets/Element_Cryo.png",
    "assets/Element_Dendro.png",
    "assets/Element_Electro.png",
    "assets/Element_Geo.png",
    "assets/Element_Hydro.png",
    "assets/Element_Pyro.png",
]

const assets = [
    [
        {
            characterElement: characterElements[0],
            characterName: "Jean",
            characterImage: "assets/Characters Mondstadt/Jean(2).png",
            characterDesc: "As the Acting Grand Master of the Knights, Jean has always been devoted to her duties and maintaining peace in Mondstadt.<br> She had taken precautions long before the onset of Stormterror's assault, and she will guard Mondstadt with her life as always.",
            characterTrailer: "assets/Characters Mondstadt/jeanTrailer.png",
            characterLine: "assets/Characters Mondstadt/jeanLine.png",
            characterCard: "assets/Characters Mondstadt/Jean(3).png",
        },
        {
            characterElement: characterElements[1],
            characterName: "Kaeya",
            characterImage: "assets/Characters Mondstadt/Kaeya(2).png",
            characterDesc: "In the Knights of Favonius, Kaeya is the most trusted aide for the Acting Grand Master Jean. You can always count on him to solve any intractable problems.<br> Everyone in Mondstadt loves Kaeya, but no one knows what secrets this witty, charming knight has...",
            characterTrailer: "assets/Characters Mondstadt/kaeyaTrailer.png",
            characterLine: "assets/Characters Mondstadt/kaeyaLine.png",
            characterCard: "assets/Characters Mondstadt/Kaeya(3).png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Lisa",
            characterImage: "assets/Characters Mondstadt/Lisa(2).png",
            characterDesc: "She is an intellectual witch who can never get enough naps. As the Librarian of the Knights of Favonius, Lisa is smart in that she always knows exactly what to do with whatever troubles her.<br> As much as she loves her sleep, she still manages to keep everything under control in a calm, composed manner.",
            characterTrailer: "assets/Characters Mondstadt/lisaTrailer.png",
            characterLine: "assets/Characters Mondstadt/lisaLine.png",
            characterCard: "assets/Characters Mondstadt/Lisa(3).png",
        },
        {
            characterElement: characterElements[5],
            characterName: "Barbara",
            characterImage: "assets/Characters Mondstadt/Barbara(2).png",
            characterDesc: "The Deaconess of the Church of Favonius and a shining idol adored by all.<br> Although the concept of an idol is rather novel in a city of bards, the people of Mondstadt love Barbara nonetheless.<br> \"I owe everything to the city's spirit of freedom.\" — Barbara, regarding her popularity.",
            characterTrailer: "assets/Characters Mondstadt/barbaraTrailer.png",
            characterLine: "assets/Characters Mondstadt/barbaraLine.png",
            characterCard: "assets/Characters Mondstadt/Barbara(3).png",
        },
        {
            characterElement: characterElements[6],
            characterName: "Amber",
            characterImage: "assets/Characters Mondstadt/Amber(2).png",
            characterDesc: "A perky, straightforward girl, who is also the only Outrider of the Knights of Favonius.<br> Her amazing mastery of the glider has made her a three-time winner of the Gliding Champion in Mondstadt.<br> As a rising star within the Knights of Favonius, Amber is always ready for any challenging tasks.",
            characterTrailer: "assets/Characters Mondstadt/amberTrailer.png",
            characterLine: "assets/Characters Mondstadt/amberLine.png",
            characterCard: "assets/Characters Mondstadt/Amber(3).png",
        },
    ],
    [
        {
            characterElement: characterElements[3],
            characterName: "Beidou",
            characterImage: "assets/Characters Liyue/Beidou(2).png",
            characterDesc: "Captain of the Crux, with quite the reputation in Liyue.<br> There are those who say she can split mountains and part the sea. Others say she draws lightning through her sword. Some say that even the mightiest of sea beasts are no match for her.<br> For those not from Liyue, it may sound like a hearty joke, but those that have sailed with her will say—.<br> \"No matter what sea beasts there may be, Beidou will be sure to split them all in two.\"",
            characterTrailer: "assets/Characters Liyue/beidouTrailer.png",
            characterLine: "assets/Characters Liyue/beidouLine.png",
            characterCard: "assets/Characters Liyue/Beidou(3).png",
        },
        {
            characterElement: characterElements[4],
            characterName: "Ningguang",
            characterImage: "assets/Characters Liyue/Ningguang(2).png",
            characterDesc: "Owner of the Jade Chamber in the skies above Liyue, there are stories abound about Ningguang, with her elegance and mysterious smile.<br> As the Tianquan of the Liyue Qixing, not only does she embody law and order, she also represents fortune and wit.",
            characterTrailer: "assets/Characters Liyue/ningguangTrailer.png",
            characterLine: "assets/Characters Liyue/ningguangLine.png",
            characterCard: "assets/Characters Liyue/Ningguang(3).png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Keqing",
            characterImage: "assets/Characters Liyue/Keqing(2).png",
            characterDesc: "The Yuheng of the Liyue Qixing. Keqing has much to say about Rex Lapis' unilateral approach to policymaking in Liyue ⁠— but in truth, gods admire skeptics such as her quite a lot.<br> She firmly believes that humanity's future should be determined by humans themselves, and that they can even do better than the archons and adepti have done for them. In order to prove this, she works harder than anyone else.",
            characterTrailer: "assets/Characters Liyue/keqingTrailer.png",
            characterLine: "assets/Characters Liyue/keqingLine.png",
            characterCard: "assets/Characters Liyue/Keqing(3).png",
        },
        {
            characterElement: characterElements[6],
            characterName: "Xiangling",
            characterImage: "assets/Characters Liyue/Xiangling(2).png",
            characterDesc: "The Head Chef at the Wanmin Restaurant and also a waitress there, Xiangling is extremely passionate about cooking and excels at her signature hot and spicy dishes.<br> Though still young, Xiangling is a true master of the culinary arts with all the skills of a kitchen veteran. She enjoys a good reputation among the hearty eaters at Chihu Rock.<br> There's absolutely no need to be nervous if she wants you to sample her latest creation. It will not disappoint. Promise.",
            characterTrailer: "assets/Characters Liyue/xianglingTrailer.png",
            characterLine: "assets/Characters Liyue/xianglingLine.png",
            characterCard: "assets/Characters Liyue/Xiangling(3).png",
        },
        {
            characterElement: characterElements[0],
            characterName: "Xiao",
            characterImage: "assets/Characters Liyue/Xiao(2).png",
            characterDesc: "One of the mighty and illuminated adepti guarding Liyue, also heralded as the \"Vigilant Yaksha.\"<br> Despite his youthful appearance, tales of his exploits have been documented for millennia.<br> He is especially fond of Wangshu Inn's Almond Tofu.<br> This is because it tastes just like the sweet dreams he used to devour.",
            characterTrailer: "assets/Characters Liyue/xiaoTrailer.png",
            characterLine: "assets/Characters Liyue/xiaoLine.png",
            characterCard: "assets/Characters Liyue/Xiao(3).png",
        },
    ],
    [
        {
            characterElement: characterElements[0],
            characterName: "Kaedahara Kazuha",
            characterImage: "assets/Characters Inazuma/Kaedehara Kazuha(2).png",
            characterDesc: "A wandering samurai from Inazuma with a modest and gentle personality.<br> Beneath a youthful and carefree demeanor lies a heart that hides a great many burdens from the past. Seemingly easygoing, Kazuha has his own code of conduct.",
            characterTrailer: "assets/Characters Inazuma/kaedeharaKazuhaTrailer.png",
            characterLine: "assets/Characters Inazuma/kaedeharaKazuhaLine.png",
            characterCard: "assets/Characters Inazuma/Kaedehara Kazuha(3).png",
        },
        {
            characterElement: characterElements[1],
            characterName: "Kamisato Ayaka",
            characterImage: "assets/Characters Inazuma/Kamisato Ayaka(2).png",
            characterDesc: "Daughter of the Yashiro Commission's Kamisato Clan from Inazuma. Dignified and elegant, wise and determined.<br> Sincere and pleasant to others. Universally loved by the Inazuma people, she has earned the title of Shirasagi Himegimi.",
            characterTrailer: "assets/Characters Inazuma/kamisatoAyakaTrailer.png",
            characterLine: "assets/Characters Inazuma/kamisatoAyakaLine.png",
            characterCard: "assets/Characters Inazuma/Kamisato Ayaka(3).png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Raiden Shogun",
            characterImage: "assets/Characters Inazuma/Raiden Shogun(2).png",
            characterDesc: "The Raiden Shogun is the awesome and terrible power of thunder incarnate, the exalted ruler of the Inazuma Shogunate.<br> With the might of lightning at her disposal, she commits herself to the solitary pursuit of eternity.",
            characterTrailer: "assets/Characters Inazuma/raidenShogunTrailer.png",
            characterLine: "assets/Characters Inazuma/raidenShogunLine.png",
            characterCard: "assets/Characters Inazuma/Raiden Shogun(3).png",
        },
        {
            characterElement: characterElements[0],
            characterName: "Sayu",
            characterImage: "assets/Characters Inazuma/Sayu(2).png",
            characterDesc: "Sayu, Shuumatsuban's resident ninja, is obsessed with sleeping and growing taller.<br> She has mastered all kinds of ninjutsu to run away and hide in pursuit of opportunities to laze around and sleep.<br> Such an extraordinary skillset may have very unexpected uses.",
            characterTrailer: "assets/Characters Inazuma/sayuTrailer.png",
            characterLine: "assets/Characters Inazuma/sayuLine.png",
            characterCard: "assets/Characters Inazuma/Sayu(3).png",
        },
        {
            characterElement: characterElements[6],
            characterName: "Yoimiya",
            characterImage: "assets/Characters Inazuma/Yoimiya(2).png",
            characterDesc: "A talented pyrotechnician. The current owner of Naganohara Fireworks known as the \"Queen of the Summer Festival.\"<br> A girl filled with fiery passion. The uncompromising childish innocence and the obsession with craftsmanship intertwine in her to create a spectacular blaze.",
            characterTrailer: "assets/Characters Inazuma/yoimiyaTrailer.png",
            characterLine: "assets/Characters Inazuma/yoimiyaLine.png",
            characterCard: "assets/Characters Inazuma/Yoimiya(3).png",
        },
    ],
    [
        {
            characterElement: characterElements[0],
            characterName: "Candace",
            characterImage: "assets/Characters Sumeru/Candace(2).png",
            characterDesc: "The guardian of Aaru Village who is gentle and benevolent. She will not allow anyone to harm Aaru Village under her watch.",
            characterTrailer: "assets/Characters Sumeru/candaceTrailer.png",
            characterLine: "assets/Characters Sumeru/candaceLine.png",
            characterCard: "assets/Characters Sumeru/Candace(3).png",
        },
        {
            characterElement: characterElements[1],
            characterName: "Collei",
            characterImage: "assets/Characters Sumeru/Collei(2).png",
            characterDesc: "A Trainee Forest Ranger who is under the tutelage of Tighnari. She started her academic career a little later than her peers, so she is currently working hard to catch up.<br> She hides the other side of her personality deep under the surface of optimism and kindness.",
            characterTrailer: "assets/Characters Sumeru/colleiTrailer.png",
            characterLine: "assets/Characters Sumeru/colleiLine.png",
            characterCard: "assets/Characters Sumeru/Collei(3).png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Cyno",
            characterImage: "assets/Characters Sumeru/Cyno(2).png",
            characterDesc: "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.",
            characterTrailer: "assets/Characters Sumeru/cynoTrailer.png",
            characterLine: "assets/Characters Sumeru/cynoLine.png",
            characterCard: "assets/Characters Sumeru/Cyno(3).png",
        },
        {
            characterElement: characterElements[0],
            characterName: "Dori",
            characterImage: "assets/Characters Sumeru/Dori(2).png",
            characterDesc: "Dori is a merchant in Sumeru who has a fondness for glittering Mora.<br> With her persuasive eloquence, she is able to sell various strange and mysterious products for a very high price.",
            characterTrailer: "assets/Characters Sumeru/doriTrailer.png",
            characterLine: "assets/Characters Sumeru/doriLine.png",
            characterCard: "assets/Characters Sumeru/Dori(3).png",
        },
        {
            characterElement: characterElements[6],
            characterName: "Tighnari",
            characterImage: "assets/Characters Sumeru/Tighnari(2).png",
            characterDesc: "An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.",
            characterTrailer: "assets/Characters Sumeru/tighnariTrailer.png",
            characterLine: "assets/Characters Sumeru/tighnariLine.png",
            characterCard: "assets/Characters Sumeru/Tighnari(3).png",
        },
        {
            characterElement: characterElements[0],
            characterName: "Candace",
            characterImage: "assets/Characters Sumeru/Candace(2).png",
            characterDesc: "The guardian of Aaru Village who is gentle and benevolent. She will not allow anyone to harm Aaru Village under her watch.",
            characterTrailer: "assets/Characters Sumeru/candaceTrailer.png",
            characterLine: "assets/Characters Sumeru/candaceLine.png",
            characterCard: "assets/Characters Sumeru/Candace(3).png",
        },
        {
            characterElement: characterElements[1],
            characterName: "Collei",
            characterImage: "assets/Characters Sumeru/Collei(2).png",
            characterDesc: "A Trainee Forest Ranger who is under the tutelage of Tighnari. She started her academic career a little later than her peers, so she is currently working hard to catch up.<br> She hides the other side of her personality deep under the surface of optimism and kindness.",
            characterTrailer: "assets/Characters Sumeru/colleiTrailer.png",
            characterLine: "assets/Characters Sumeru/colleiLine.png",
            characterCard: "assets/Characters Sumeru/Collei(3).png",
        },
        {
            characterElement: characterElements[3],
            characterName: "Cyno",
            characterImage: "assets/Characters Sumeru/Cyno(2).png",
            characterDesc: "The General Mahamatra of the Akademiya, leader of all the Matras. He has a unique sense of humor that never fails to leave a deep impression.",
            characterTrailer: "assets/Characters Sumeru/cynoTrailer.png",
            characterLine: "assets/Characters Sumeru/cynoLine.png",
            characterCard: "assets/Characters Sumeru/Cyno(3).png",
        },
        {
            characterElement: characterElements[0],
            characterName: "Dori",
            characterImage: "assets/Characters Sumeru/Dori(2).png",
            characterDesc: "Dori is a merchant in Sumeru who has a fondness for glittering Mora.<br> With her persuasive eloquence, she is able to sell various strange and mysterious products for a very high price.",
            characterTrailer: "assets/Characters Sumeru/doriTrailer.png",
            characterLine: "assets/Characters Sumeru/doriLine.png",
            characterCard: "assets/Characters Sumeru/Dori(3).png",
        },
        {
            characterElement: characterElements[6],
            characterName: "Tighnari",
            characterImage: "assets/Characters Sumeru/Tighnari(2).png",
            characterDesc: "An Avidya Forest Watcher and botanical scholar who graduated from Amurta. He leads a fruitful life of patrolling the rainforest, protecting the ecology, and lecturing fools every day.",
            characterTrailer: "assets/Characters Sumeru/tighnariTrailer.png",
            characterLine: "assets/Characters Sumeru/tighnariLine.png",
            characterCard: "assets/Characters Sumeru/Tighnari(3).png",
        },
    ],
]

const characterImage = document.querySelector("#character-display-image")
const characterName = document.querySelector(".character-name h1");
const characterElement = document.querySelector(".character-name img");
const characterBackstory = document.querySelector(".character-backstory");
const characterTrailer = document.querySelector("#trailer-image");
const characterLine = document.querySelector("#character-line");

let charIndex = 0;
let charActive = 0;

characterSelections.forEach((characterSelection, index) => {
    characterSelection.addEventListener("click", () => {
        characterSelections[charActive].classList.remove("active");
        characterSelection.classList.add("active");
        charContainer.classList.remove("characters-container-active");
        characterImage.classList.remove("active");

        setTimeout(() =>{
            characterImage.src = assets[regionIndex][index + charIndex].characterImage;
            characterName.innerHTML = assets[regionIndex][index + charIndex].characterName;
            characterElement.src = assets[regionIndex][index + charIndex].characterElement;
            characterBackstory.innerHTML = assets[regionIndex][index + charIndex].characterDesc;
            characterTrailer.src = assets[regionIndex][index + charIndex].characterTrailer;
            characterLine.src = assets[regionIndex][index + charIndex].characterLine;

            charContainer.classList.add("characters-container-active");
            characterImage.classList.add("active");
        }, 480);
        
        charActive = index;
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
                characterCards[j].src = assets[regionIndex][i + 1].characterCard;
                characterCardsName[j].innerHTML = assets[regionIndex][i + 1].characterName;
            }

            characterSelections[charActive].classList.remove("active");
           
            charIndex++;
        }
    })
});

let regionIndex = 0;

regions.forEach((region, index) => {
    region.addEventListener("click", () => {
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


const allImage = document.querySelectorAll("img");
allImage.forEach((image1) => {
    image1.setAttribute('draggable', false);
})