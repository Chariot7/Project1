let enter = document.getElementById("enter")

enter.style.display = "block";

let card = document.getElementById("card")

card.style.display = "none";

let birthDate = document.getElementById("birthday")

birthDate.style.display = "block";

let cardName = document.getElementById("cardName")

let orphicSmall = document.getElementById("orphicSmall");

orphicSmall.style.display = "none";

let button = document.getElementById("submit");

let birthMonth = document.getElementById("month").value 

let birthDay = document.getElementById("day").value

let userName = document.getElementById("userName").value


let description = document.getElementById("meaning")

let submit = document.getElementById("submit")

submit.addEventListener('click', inputInfo)

function inputInfo() {
    birthMonth = document.getElementById("month").value ;
    birthDay = document.getElementById("day").value ;
    userName = document.getElementById("userName").value ;
    birthDate.style.display = "none";
    enter.style.display = "none"
    button.style.display = "none"
    console.log(birthDay)
    console.log(birthMonth)
    console.log(userName) 
    if((birthMonth === "September" && birthDay >= 12) || (birthMonth === "October" && birthDay < 13)){
        card.src = minorArcana.swords.cards.Queen.image
        card.style.display = "block"
        orphicSmall.style.display = "inline"
        description.innerText = minorArcana.swords.cards.Queen.description
        cardName.innerText = minorArcana.swords.cards.Queen.name
    }
    if((birthMonth === "October" && birthDay >= 13) || (birthMonth === "November" && birthDay < 13)){
        card.src = minorArcana.cups.cards.Knight.image
        card.style.display = "block"
        orphicSmall.style.display = "inline"
        description.innerText = minorArcana.cups.cards.Knight.description
        cardName.innerText = minorArcana.cups.cards.Knight.name
    }
}


const majorArcana = {

    'The Fool': {
        description: "With light step, as if earth and its trammels had little power to restrain him, a young man in gorgeous vestments pauses at the brink of a precipice among the great heights of the world; he surveys the blue distance before him-its expanse of sky rather than the prospect below. His act of eager walking is still indicated, though he is stationary at the given moment; his dog is still bounding. The edge which opens on the depth has no terror; it is as if angels were waiting to uphold him, if it came about that he leaped from the height. His countenance is full of intelligence and expectant dream. He has a rose in one hand and in the other a costly wand, from which depends over his right shoulder a wallet curiously embroidered. He is a prince of the other world on his travels through this one-all amidst the morning glory, in the keen air. The sun, which shines behind him, knows whence he came, whither he is going, and how he will return by another path after many days. He is the spirit in search of experience. Many symbols of the Instituted Mysteries are summarized in this card, which reverses, under high warrants, all the confusions that have preceded it.",
        hebrewLetter: 'Aleph',
        numericalValue: 0,
        attribution: 'Air',
        alternativeNames: 'The Spirit of Ether',
        divinitoryMeaning: "Folly, mania, extravagance, intoxication, delirium, frenzy, bewrayment.",
        reversed: "Negligence, absence, distribution, carelessness, apathy, nullity, vanity",

    },
    'The Magician': {
        description: "A youthful figure in the robe of a magician, having the countenance of divine Apollo, with smile of confidence and shining eyes. Above his head is the mysterious sign of the Holy Spirit, the sign of life, like an endless cord, forming the figure 8 in a horizontal position . About his waist is a serpent-cincture, the serpent appearing to devour its own tail. This is familiar to most as a conventional symbol of eternity, but here it indicates more especially the eternity of attainment in the spirit. In the Magician's right hand is a wand raised towards heaven, while the left hand is pointing to the earth. This dual sign is known in very high grades of the Instituted Mysteries; it shews the descent of grace, virtue and light, drawn from things above and derived to things below. The suggestion throughout is therefore the possession and communication of the Powers and Gifts of the Spirit. On the table in front of the Magician are the symbols of the four Tarot suits, signifying the elements of natural life, which lie like counters before the adept, and he adapts them as he wills. Beneath are roses and lilies, the flos campi and lilium convallium, changed into garden flowers, to shew the culture of aspiration. This card signifies the divine motive in man, reflecting God, the will in the liberation of its union with that which is above. It is also the unity of individual being on all planes, and in a very high sense it is thought, in the fixation thereof. With further reference to what I have called the sign of life and its connexion with the number 8, it may be remembered that Christian Gnosticism speaks of rebirth in Christ as a change 'unto the Ogdoad.' The mystic number is termed Jerusalem above, the Land flowing with Milk and Honey, the Holy Spirit and the Land of the Lord. According to Martinism, 8 is the number of Christ.",
        hebrewLetter: 'Bet',
        numericalValue: 1,
        attribution: 'Mercury',
        alternativeNames: 'The Magus of Power',
        divinitoryMeaning: "Skill, diplomacy, address, subtlety; sickness, pain, loss, disaster, snares of enemies; self-confidence, will; the Querent, if male.",
        reversed: "Physician, Magus, mental disease, disgrace, disquiet.",
    },
    'The High Priestess': {
        description: "She has the lunar crescent at her feet, a horned diadem on her head, with a globe in the middle place, and a large solar cross on her breast. The scroll in her hands is inscribed with the word Tora, signifying the Greater Law, the Secret Law and the second sense of the Word. It is partly covered by her mantle, to shew that some things are implied and some spoken. She is seated between the white and black pillars--J. and B.--of the mystic Temple, and the veil of the Temple is behind her: it is embroidered with palms and pomegranates. The vestments are flowing and gauzy, and the mantle suggests light--a shimmering radiance. She has been called occult Science on the threshold of the Sanctuary of Isis, but she is really the Secret Church, the House which is of God and man. She represents also the Second Marriage of the Prince who is no longer of this world; she is the spiritual Bride and Mother, the daughter of the stars and the Higher Garden of Eden. She is, in fine, the Queen of the borrowed light, but this is the light of all. She is the Moon nourished by the milk of the Supernal Mother.In a manner, she is also the Supernal Mother herself--that is to say, she is the bright reflection. It is in this sense of reflection that her truest and highest name in bolism is Shekinah--the co-habiting glory. According to Kabalism, there is a Shekinah both above and below. In the superior world it is called Binah, the Supernal Understanding which reflects to the emanations that are beneath. In the lower world it is MaIkuth--that world being, for this purpose, understood as a blessed Kingdom that with which it is made blessed being the Indwelling Glory. Mystically speaking, the Shekinah is the Spiritual Bride of the just man, and when he reads the Law she gives the Divine meaning. There are some respects in which this card is the highest and holiest of the Greater Arcana.",
        hebrewLetter: 'Gimel',
        numericalValue: 2,
        attribution: 'Luna',
        alternativeNames: 'The Priestess of The Silver Star',
        divinitoryMeaning: "Secrets, mystery, the future as yet unrevealed; the woman who interests the Querent, if male; the Querent herself, if female; silence, tenacity; mystery, wisdom, science.",
        reversed: "Passion, moral or physical ardour, conceit, surface knowledge.",
    },
    'The Empress': {
        description: "A stately figure, seated, having rich vestments and royal aspect, as of a daughter of heaven and earth. Her diadem is of twelve stars, gathered in a cluster. The symbol of Venus is on the shield which rests near her. A field of corn is ripening in front of her, and beyond there is a fall of water. The sceptre which she bears is surmounted by the globe of this world. She is the inferior Garden of Eden, the Earthly Paradise, all that is symbolized by the visible house of man. She is not Regina coeli, but she is still refugium peccatorum, the fruitful mother of thousands. There are also certain aspects in which she has been correctly described as desire and the wings thereof, as the woman clothed with the sun, as Gloria Mundi and the veil of the Sanctum Sanctorum; but she is not, I may add, the soul that has attained wings, unless all the symbolism is counted up another and unusual way. She is above all things universal fecundity and the outer sense of the Word. This is obvious, because there is no direct message which has been given to man like that which is borne by woman; but she does not herself carry its interpretation.In another order of ideas, the card of the Empress signifies the door or gate by which an entrance is obtained into this life, as into the Garden of Venus; and then the way which leads out therefrom, into that which is beyond, is the secret known to the High Priestess: it is communicated by her to the elect. Most old attributions of this card are completely wrong on the symbolism--as, for example, its identification with the Word, Divine Nature, the Triad, and so forth.",
        hebrewLetter: 'Daleth',
        numericalValue: 3,
        attribution: 'Venus',
        alternativeNames: "The Daughter of the Mighty One's",
        divinitoryMeaning: "Fruitfulness, action, initiative, length of days; the unknown, clandestine; also difficulty, doubt, ignorance.",
        reversed: "Light, truth, the unravelling of involved matters, public rejoicings; according to another reading, vacillation.",
    },
    'The Emperor': {
        description: "He has a form of the Crux ansata for his sceptre and a globe in his left hand. He is a crowned monarch--commanding, stately, seated on a throne, the arms of which axe fronted by rams' heads. He is executive and realization, the power of this world, here clothed with the highest of its natural attributes. He is occasionally represented as seated on a cubic stone, which, however, confuses some of the issues. He is the virile power, to which the Empress responds, and in this sense is he who seeks to remove the Veil of Isis; yet she remains virgo intacta.It should be understood that this card and that of the Empress do not precisely represent the condition of married life, though this state is implied. On the surface, as I have indicated, they stand for mundane royalty, uplifted on the seats of the mighty; but above this there is the suggestion of another presence. They signify also--and the male figure especially--the higher kingship, occupying the intellectual throne. Hereof is the lordship of thought rather than of the animal world. Both personalities, after their own manner, are 'full of strange experience,' but theirs is not consciously the wisdom which draws from a higher world. The Emperor has been described as (a) will in its embodied form, but this is only one of its applications, and (b) as an expression of virtualities contained in the Absolute Being--but this is fantasy.",
        hebrewLetter: 'Tzaddi',
        numericalValue: 4,
        attribution: 'Aries',
        alternativeNames: "Son of the Morning",
        divinitoryMeaning: "Stability, power, protection, realization; a great person; aid, reason, conviction; also authority and will.",
        reversed: "Benevolence, compassion, credit; also confusion to enemies, obstruction, immaturity.",
        dateRange: 'March 21 - April 19',
    },
    'The Hierophant': {
        description: "He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.He is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression.",
        hebrewLetter: 'Vau',
        numericalValue: 5,
        attribution: 'Taurus',
        alternativeNames: "Magus of the Eternal God's",
        divinitoryMeaning: "Marriage, alliance, captivity, servitude; by another account, mercy and goodness; inspiration; the man to whom the Querent has recourse.",
        reversed: "Society, good understanding, concord, overkindness, weakness.",
        dateRange: 'April 20 - May 20',
    },
    'The Lovers': {
        description: "The sun shines in the zenith, and beneath is a great winged figure with arms extended, pouring down influences. In the foreground are two human figures, male and female, unveiled before each other, as if Adam and Eve when they first occupied the paradise of the earthly body. Behind the man is the Tree of Life, bearing twelve fruits, and the Tree of the Knowledge of Good and Evil is behind the woman; the serpent is twining round it. The figures suggest youth, virginity, innocence and love before it is contaminated by gross material desire. This is in all simplicity the card of human love, here exhibited as part of the way, the truth and the life. It replaces, by recourse to first principles, the old card of marriage, which I have described previously, and the later follies which depicted man between vice and virtue. In a very high sense, the card is a mystery of the Covenant and Sabbath.The suggestion in respect of the woman is that she signifies that attraction towards the sensitive life which carries within it the idea of the Fall of Man, but she is rather the working of a Secret Law of Providence than a willing and conscious temptress. It is through her imputed lapse that man shall arise ultimately, and only by her can he complete himself. The card is therefore in its way another intimation concerning the great mystery of womanhood. The old meanings fall to pieces of necessity with the old pictures, but even as interpretations of the latter, some of them were of the order of commonplace and others were false in symbolism.",
        hebrewLetter: 'Zayin',
        numericalValue: 6,
        attribution: 'Gemini',
        alternativeNames: "Children of the Voice Divine",
        divinitoryMeaning: "Attraction, love, beauty, trials overcome.",
        reversed: "Failure, foolish designs. Another account speaks of marriage frustrated and contrarieties of all kinds.",
        dateRange: 'May 21 - June 20',
    },
    'The Chariot': {
        description: "He wears the triple crown and is seated between two pillars, but they are not those of the Temple which is guarded by the High Priestess. In his left hand he holds a sceptre terminating in the triple cross, and with his right hand he gives the well-known ecclesiastical sign which is called that of esotericism, distinguishing between the manifest and concealed part of doctrine. It is noticeable in this connexion that the High Priestess makes no sign. At his feet are the crossed keys, and two priestly ministers in albs kneel before him. He has been usually called the Pope, which is a particular application of the more general office that he symbolizes. He is the ruling power of external religion, as the High Priestess is the prevailing genius of the esoteric, withdrawn power. The proper meanings of this card have suffered woeful admixture from nearly all hands. Grand Orient says truly that the Hierophant is the power of the keys, exoteric orthodox doctrine, and the outer side of the life which leads to the doctrine; but he is certainly not the prince of occult doctrine, as another commentator has suggested.He is rather the summa totius theologiæ, when it has passed into the utmost rigidity of expression; but he symbolizes also all things that are righteous and sacred on the manifest side. As such, he is the channel of grace belonging to the world of institution as distinct from that of Nature, and he is the leader of salvation for the human race at large. He is the order and the head of the recognized hierarchy, which is the reflection of another and greater hierarchic order; but it may so happen that the pontiff forgets the significance of this his symbolic state and acts as if he contained within his proper measures all that his sign signifies or his symbol seeks to shew forth. He is not, as it has been thought, philosophy-except on the theological side; he is not inspiration; and he is not religion, although he is a mode of its expression.",
        hebrewLetter: 'Cheth',
        numericalValue: 7,
        attribution: 'Cancer',
        alternativeNames: "Lord of The Triumph of Light",
        divinitoryMeaning: "Succour, providence also war, triumph, presumption, vengeance, trouble.",
        reversed: "Riot, quarrel, dispute, litigation, defeat.",
        dateRange: 'June 21 - July 22',
    },

    'Strength': {
        description: "A woman, over whose head there broods the same symbol of life which we have seen in the card of the Magician, is closing the jaws of a lion. The only point in which this design differs from the conventional presentations is that her beneficent fortitude has already subdued the lion, which is being led by a chain of flowers. For reasons which satisfy myself, this card has been interchanged with that of justice, which is usually numbered eight. As the variation carries nothing with it which will signify to the reader, there is no cause for explanation. Fortitude, in one of its most exalted aspects, is connected with the Divine Mystery of Union; the virtue, of course, operates in all planes, and hence draws on all in its symbolism. It connects also with innocentia inviolata, and with the strength which resides in contemplation.These higher meanings are, however, matters of inference, and I do not suggest that they are transparent on the surface of the card. They are intimated in a concealed manner by the chain of flowers, which signifies, among many other things, the sweet yoke and the light burden of Divine Law, when it has been taken into the heart of hearts. The card has nothing to do with self-confidence in the ordinary sense, though this has been suggested--but it concerns the confidence of those whose strength is God, who have found their refuge in Him. There is one aspect in which the lion signifies the passions, and she who is called Strength is the higher nature in its liberation. It has walked upon the asp and the basilisk and has trodden down the lion and the dragon.",
        hebrewLetter: 'Teth',
        numericalValue: 8,
        attribution: 'Leo',
        alternativeNames: "Daughter of The Flaming Sword",
        divinitoryMeaning: "Power, energy, action, courage, magnanimity; also complete success and honours.",
        reversed: "Despotism, abuse if power, weakness, discord, sometimes even disgrace.",
        dateRange: 'July 23 - Augut 22',
    },
    'The Hermit': {
        description: "The variation from the conventional models in this card is only that the lamp is not enveloped partially in the mantle of its bearer, who blends the idea of the Ancient of Days with the Light of the World It is a star which shines in the lantern. I have said that this is a card of attainment, and to extend this conception the figure is seen holding up his beacon on an eminence. Therefore the Hermit is not, as Court de Gebelin explained, a wise man in search of truth and justice; nor is he, as a later explanation proposes, an especial example of experience. His beacon intimates that 'where I am, you also may be.' It is further a card which is understood quite incorrectly when it is connected with the idea of occult isolation, as the protection of personal magnetism against admixture. This is one of the frivolous renderings which we owe to Éliphas Lévi. It has been adopted by the French Order of Martinism and some of us have heard a great deal of the Silent and Unknown Philosophy enveloped by his mantle from the knowledge of the profane. In true Martinism, the significance of the term Philosophe inconnu was of another order. It did not refer to the intended concealment of the Instituted Mysteries, much less of their substitutes, but--like the card itself--to the truth that the Divine Mysteries secure their own protection from those who are unprepared.",
        hebrewLetter: 'Yod',
        numericalValue: 9,
        attribution: 'Virgo',
        alternativeNames: "Magus of the Voice of Light",
        divinitoryMeaning: "Prudence, circumspection; also and especially treason, dissimulation, roguery, corruption.",
        reversed: " Concealment, disguise, policy, fear, unreasoned caution.",
        dateRange: 'August 23 - September 22',
    },
    'Wheel of Fortune': {
        description: "In this symbol I have again followed the reconstruction of Éliphas Lévi, who has furnished several variants. It is legitimate--as I have intimated--to use Egyptian symbolism when this serves our purpose, provided that no theory of origin is implied therein. I have, however, presented Typhon in his serpent form. The symbolism is, of course, not exclusively Egyptian, as the four Living Creatures of Ezekiel occupy the angles of the card, and the wheel itself follows other indications of Lévi in respect of Ezekiel's vision, as illustrative of the particular Tarot Key. With the French occultist, and in the design itself, the symbolic picture stands for the perpetual motion of a fluidic universe and for the flux of human life. The Sphinx is the equilibrium therein. The transliteration of Taro as Rota is inscribed on the wheel, counterchanged with the letters of the Divine Name--to shew that Providence is imphed through all. But this is the Divine intention within, and the similar intention without is exemplified by the four Living Creatures. Sometimes the sphinx is represented couchant on a pedestal above, which defrauds the symbolism by stultifying the essential idea of stability amidst movement. Behind the general notion expressed in the symbol there lies the denial of chance and the fatality which is implied therein. It may be added that, from the days of Lévi onward, the occult explanations of this card are--even for occultism itself--of a singularly fatuous kind. It has been said to mean principle, fecundity, virile honour, ruling authority, etc. The findings of common fortune-telling are better than this on their own plane.",
        hebrewLetter: 'Kaph',
        numericalValue: 10,
        attribution: 'Jupiter',
        alternativeNames: "Lord of the Forces of Life",
        divinitoryMeaning: "Destiny, fortune, success, elevation, luck, felicity.",
        reversed: "Increase, abundance, superfluity.",

    },
    'Justice': {
        description: "As this card follows the traditional symbolism and carries above all its obvious meanings, there is little to say regarding it outside the few considerations collected in the first part, to which the reader is referred.It will be seen, however, that the figure is seated between pillars, like the High Priestess, and on this account it seems desirable to indicate that the moral principle which deals unto every man according to his works--while, of course, it is in strict analogy with higher things;--differs in its essence from the spiritual justice which is involved in the idea of election. The latter belongs to a mysterious order of Providence, in virtue of which it is possible for certain men to conceive the idea of dedication to the highest things. The operation of this is like the breathing of the Spirit where it wills, and we have no canon of criticism or ground of explanation concerning it. It is analogous to the possession of the fairy gifts and the high gifts and the gracious gifts of the poet: we have them or have not, and their presence is as much a mystery as their absence. The law of Justice is not however involved by either alternative. In conclusion, the pillars of Justice open into one world and the pillars of the High Priestess into another.",
        hebrewLetter: 'Lamed',
        numericalValue: 11,
        attribution: 'Libra',
        alternativeNames: "Daughter of the Lord of Truth",
        divinitoryMeaning: "Equity, rightness, probity, executive; triumph of the deserving side in law.",
        reversed: "Law in all its departments, legal complications, bigotry, bias, excessive severity.",
        dateRange: 'September 23 - October 22',
    },
    'The Hanged Man': {
        description: "The gallows from which he is suspended forms a Tau cross, while the figure--from the position of the legs--forms a fylfot cross. There is a nimbus about the head of the seeming martyr. It should be noted (1) that the tree of sacrifice is living wood, with leaves thereon; (2) that the face expresses deep entrancement, not suffering; (3) that the figure, as a whole, suggests life in suspension, but life and not death. It is a card of profound significance, but all the significance is veiled. One of his editors suggests that Éliphas Lévi did not know the meaning, which is unquestionable nor did the editor himself. It has been called falsely a card of martyrdom, a card a of prudence, a card of the Great Work, a card of duty; but we may exhaust all published interpretations and find only vanity. I will say very simply on my own part that it expresses the relation, in one of its aspects, between the Divine and the Universe. He who can understand that the story of his higher nature is imbedded in this symbolism will receive intimations concerning a great awakening that is possible, and will know that after the sacred Mystery of Death there is a glorious Mystery of Resurrection.",
        hebrewLetter: 'Mem',
        numericalValue: 12,
        attribution: 'Water',
        alternativeNames: "Spirit of the Mighty Waters",
        divinitoryMeaning: "Wisdom, circumspection, discernment, trials, sacrifice, intuition, divination, prophecy.",
        reversed: "Selfishness, the crowd, body politic.",

    },
    'Death': {
        description: "The veil or mask of life is perpetuated in change, transformation and passage from lower to higher, and this is more fitly represented in the rectified Tarot by one of the apocalyptic visions than by the crude notion of the reaping skeleton. Behind it lies the whole world of ascent in the spirit. The mysterious horseman moves slowly, bearing a black banner emblazoned with the Mystic Rose, which signifies life. Between two pillars on the verge of the horizon there shines the sun of immortality. The horseman carries no visible weapon, but king and child and maiden fall before him, while a prelate with clasped hands awaits his end.There should be no need to point out that the suggestion of death which I have made in connection with the previous card is, of course, to be understood mystically, but this is not the case in the present instance. The natural transit of man to the next stage of his being either is or may be one form of his progress, but the exotic and almost unknown entrance, while still in this life, into the state of mystical death is a change in the form of consciousness and the passage into a state to which ordinary death is neither the path nor gate. The existing occult explanations of the 13th card are, on the whole, better than usual, rebirth, creation, destination, renewal, and the rest.",
        hebrewLetter: 'Nun',
        numericalValue: 13,
        attribution: 'Scorpio',
        alternativeNames: "Child of the Great Transformers",
        divinitoryMeaning: "-End, mortality, destruction, corruption also, for a man, the loss of a benefactor for a woman, many contrarieties; for a maid, failure of marriage projects.",
        reversed: "Inertia, sleep, lethargy, petrifaction, somnambulism; hope destroyed",
        dateRange: 'October 23 - November 21',
    },
    'Temperance': {
        description: "A winged angel, with the sign of the sun upon his forehead and on his breast the square and triangle of the septenary. I speak of him in the masculine sense, but the figure is neither male nor female. It is held to be pouring the essences of life from chalice to chalice. It has one foot upon the earth and one upon waters, thus illustrating the nature of the essences. A direct path goes up to certain heights on the verge of the horizon, and above there is a great light, through which a crown is seen vaguely. Hereof is some part of the Secret of Eternal Life, as it is possible to man in his incarnation. All the conventional emblems are renounced herein. So also are the conventional meanings, which refer to changes in the seasons, perpetual movement of life and even the combination of ideas. It is, moreover, untrue to say that the figure symbolizes the genius of the sun, though it is the analogy of solar light, realized in the third part of our human triplicity. It is called Temperance fantastically, because, when the rule of it obtains in our consciousness, it tempers, combines and harmonises the psychic and material natures. Under that rule we know in our rational part something of whence we came and whither we are going.",
        hebrewLetter: 'Samekh',
        numericalValue: 14,
        attribution: 'Sagittarius',
        alternativeNames: "Daughter of the Reconcilers",
        divinitoryMeaning: "Economy, moderation, frugality, management, accommodation. ",
        reversed: "Things connected with churches, religions, sects, the priesthood, sometimes even the priest who will marry the Querent; also disunion, unfortunate combinations, competing interests.",
        dateRange: "November 22 - December 21",
    },
    'The Devil': {
        description: "The design is an accommodation, mean or harmony, between several motives mentioned in the first part. The Horned Goat of Mendes, with wings like those of a bat, is standing on an altar. At the pit of the stomach there is the sign of Mercury. The right hand is upraised and extended, being the reverse of that benediction which is given by the Hierophant in the fifth card. In the left hand there is a great flaming torch, inverted towards the earth. A reversed pentagram is on the forehead. There is a ring in front of the altar, from which two chains are carried to the necks of two figures, male and female. These are analogous with those of the fifth card, as if Adam and Eve after the Fall. Hereof is the chain and fatality of the material life. The figures are tailed, to signify the animal nature, but there is human intelligence in the faces, and he who is exalted above them is not to be their master for ever. Even now, he is also a bondsman, sustained by the evil that is in him and blind to the liberty of service. With more than his usual derision for the arts which he pretended to respect and interpret as a master therein, Éliphas Lévi affirms that the Baphometic figure is occult science and magic. Another commentator says that in the Divine world it signifies predestination, but there is no correspondence in that world with the things which below are of the brute. What it does signify is the Dweller on the Threshold without the Mystical Garden when those are driven forth therefrom who have eaten the forbidden fruit.",
        hebrewLetter: 'Ayin',
        numericalValue: 15,
        attribution: 'Capricorn',
        alternativeNames: "Lord of the Gates of Matter",
        divinitoryMeaning: "Ravage, violence, vehemence, extraordinary efforts, force, fatality; that which is predestined but is not for this reason evil.",
        reversed: "Evil fatality, weakness, pettiness, blindness.",
        dateRange: "December 22 - January 19",
    },
    'The Tower': {
        description: "Occult explanations attached to this card are meagre and mostly disconcerting. It is idle to indicate that it depicts min in all its aspects, because it bears this evidence on the surface. It is said further that it contains the first allusion to a material building, but I do not conceive that the Tower is more or less material than the pillars which we have met with in three previous cases. I see nothing to warrant Papus in supposing that it is literally the fall of Adam, but there is more in favour of his alternative--that it signifies the materialization of the spiritual word. The bibliographer Christian imagines that it is the downfall of the mind, seeking to penetrate the mystery of God. I agree rather with Grand Orient that it is the ruin of the House of We, when evil has prevailed therein, and above all that it is the rending of a House of Doctrine. I understand that the reference is, however, to a House of Falsehood. It illustrates also in the most comprehensive way the old truth that 'except the Lord build the house, they labour in vain that build it.' There is a sense in which the catastrophe is a reflection from the previous card, but not on the side of the symbolism which I have tried to indicate therein. It is more correctly a question of analogy; one is concerned with the fall into the material and animal state, while the other signifies destruction on the intellectual side. The Tower has been spoken of as the chastisement of pride and the intellect overwhelmed in the attempt to penetrate the Mystery of God; but in neither case do these explanations account for the two persons who are the living sufferers. The one is the literal word made void and the other its false interpretation. In yet a deeper sense, it may signify also the end of a dispensation, but there is no possibility here for the consideration of this involved question.",
        hebrewLetter: 'Pe',
        numericalValue: 16,
        attribution: 'Mars',
        alternativeNames: "Lord of the Host of the Mighty",
        divinitoryMeaning: "Misery, distress, indigence, adversity, calamity, disgrace, deception, ruin. It is a card in particular of unforeseen catastrophe.",
        reversed: "According to one account, the same in a lesser degree also oppression, imprisonment, tyranny.",
    },
    'The Star': {
        description: "A great, radiant star of eight rays, surrounded by seven lesser stars--also of eight rays. The female figure in the foreground is entirely naked. Her left knee is on the land and her right foot upon the water. She pours Water of Life from two great ewers, irrigating sea and land. Behind her is rising ground and on the right a shrub or tree, whereon a bird alights. The figure expresses eternal youth and beauty. The star is l'étoile flamboyante, which appears in Masonic symbolism, but has been confused therein. That which the figure communicates to the living scene is the substance of the heavens and the elements. It has been said truly that the mottoes of this card are 'Waters of Life freely' and 'Gifts of the Spirit.'The summary of several tawdry explanations says that it is a card of hope. On other planes it has been certified as immortality and interior light. For the majority of prepared minds, the figure will appear as the type of Truth unveiled, glorious in undying beauty, pouring on the waters of the soul some part and measure of her priceless possession. But she is in reality the Great Mother in the Kabalistic Sephira Binah, which is supernal Understanding, who communicates to the Sephiroth that are below in the measure that they can receive her influx.",
        hebrewLetter: 'He',
        numericalValue: 17,
        attribution: 'Aquarius',
        alternativeNames: "Daughter of the Firmament",
        divinitoryMeaning: "Loss, theft, privation, abandonment; another reading says-hope and bright prospects,",
        reversed: "Arrogance, haughtiness, impotence.",
        dateRange: "January 20 - February 18",
    },

    'The Moon': {
        description: "The distinction between this card and some of the conventional types is that the moon is increasing on what is called the side of mercy, to the right of the observer. It has sixteen chief and sixteen secondary rays. The card represents life of the imagination apart from life of the spirit. The path between the towers is the issue into the unknown. The dog and wolf are the fears of the natural mind in the presence of that place of exit, when there is only reflected light to guide it.The last reference is a key to another form of symbolism. The intellectual light is a reflection and beyond it is the unknown mystery which it cannot shew forth. It illuminates our animal nature, types of which are represented below--the dog, the wolf and that which comes up out of the deeps, the nameless and hideous tendency which is lower than the savage beast. It strives to attain manifestation, symbolized by crawling from the abyss of water to the land, but as a rule it sinks back whence it came. The face of the mind directs a calm gaze upon the unrest below; the dew of thought falls; the message is: Peace, be still; and it may be that there shall come a calm upon the animal nature, while the abyss beneath shall cease from giving up a form.",
        hebrewLetter: 'Qoop',
        numericalValue: 18,
        attribution: 'Pisces',
        alternativeNames: "Ruler of Flux and Reflux",
        divinitoryMeaning: "Hidden enemies, danger, calumny, darkness, terror, deception, occult forces, error.",
        reversed: "Instability, inconstancy, silence, lesser degrees of deception and error.",
        dateRange: "February 19 - March 20",
    },

    'The Sun': {
        description: "The naked child mounted on a white horse and displaying a red standard has been mentioned already as the better symbolism connected with this card. It is the destiny of the Supernatural East and the great and holy light which goes before the endless procession of humanity, coming out from the walled garden of the sensitive life and passing on the journey home. The card signifies, therefore, the transit from the manifest light of this world, represented by the glorious sun of earth, to the light of the world to come, which goes before aspiration and is typified by the heart of a child. But the last allusion is again the key to a different form or aspect of the symbolism. The sun is that of consciousness in the spirit - the direct as the antithesis of the reflected light. The characteristic type of humanity has become a little child therein--a child in the sense of simplicity and innocence in the sense of wisdom. In that simplicity, he bears the seal of Nature and of Art; in that innocence, he signifies the restored world. When the self-knowing spirit has dawned in the consciousness above the natural mind, that mind in its renewal leads forth the animal nature in a state of perfect conformity.",
        hebrewLetter: 'Resh',
        numericalValue: 19,
        attribution: 'Sun',
        alternativeNames: "Lord of the Fire of the World",
        divinitoryMeaning: "Material happiness, fortunate marriage, contentment.",
        reversed: "The same in a lesser sense.",
    },

    'The Last Judgement': {
        description: "I have said that this symbol is essentially invariable in all Tarot sets, or at least the variations do not alter its character. The great angel is here encompassed by clouds, but he blows his bannered trumpet, and the cross as usual is displayed on the banner. The dead are rising from their tombs--a woman on the right, a man on the left hand, and between them their child, whose back is turned. But in this card there are more than three who are restored, and it has been thought worth while to make this variation as illustrating the insufficiency of current explanations. It should be noted that all the figures are as one in the wonder, adoration and ecstacy expressed by their attitudes. It is the card which registers the accomplishment of the great work of transformation in answer to the summons of the Supernal--which summons is heard and answered from within. Herein is the intimation of a significance which cannot well be carried further in the present place. What is that within us which does sound a trumpet and all that is lower in our nature rises in response--almost in a moment, almost in the twinkling of an eye? Let the card continue to depict, for those who can see no further, the Last judgment and the resurrection in the natural body; but let those who have inward eyes look and discover therewith. They will understand that it has been called truly in the past a card of eternal life, and for this reason it may be compared with that which passes under the name of Temperance.",
        hebrewLetter: 'Shin',
        numericalValue: 20,
        attribution: 'Fire',
        alternativeNames: "Spirt of the Primal Fire",
        divinitoryMeaning: "Change of position, renewal, outcome. Another account specifies total loss though lawsuit.",
        reversed: "Weakness, pusillanimity, simplicity; also deliberation, decision, sentence.",
    },

    'The World': {
        description: "As this final message of the Major Trumps is unchanged--and indeed unchangeable--in respect of its design, it has been partly described already regarding its deeper sense. It represents also the perfection and end of the Cosmos, the secret which is within it, the rapture of the universe when it understands itself in God. It is further the state of the soul in the consciousness of Divine Vision, reflected from the self-knowing spirit. But these meanings are without prejudice to that which I have said concerning it on the material side. It has more than one message on the macrocosmic side and is, for example, the state of the restored world when the law of manifestation shall have been carried to the highest degree of natural perfection. But it is perhaps more especially a story of the past, referring to that day when all was declared to be good, when the morning stars sang together and all the Sons of God shouted for joy. One of the worst explanations concerning it is that the figure symbolizes the Magus when he has reached the highest degree of initiation; another account says that it represents the absolute, which is ridiculous. The figure has been said to stand for Truth, which is, however, more properly allocated to the seventeenth card. Lastly, it has been called the Crown of the Magi.",
        hebrewLetter: 'Tau',
        numericalValue: 21,
        attribution: 'Saturn',
        alternativeNames: "The Great One of the Night of Time",
        divinitoryMeaning: "Assured success, recompense, voyage, route, emigration, flight, change of place.",
        reversed: "Inertia, fixity, stagnation, permanence.",
    },

}

const minorArcana = {

    wands: {
        attribution: 'Fire',
        qualities: 'Energy, Passion, Will Power, Action, Birth',
        cards: {
            'Ace': {
                alternativeNames: 'The Root of the Powers of Fire',
                attribution: 'Kether',
                description: 'A hand issuing from a cloud grasps a stout wand or club.',
                divinitoryMeaning: 'This card represents the essence of the element of Fire in its inception. It is a solar-phallic outburst of flame from which spring lightnings in every direction. It is the primordial Energy of the Divine manifesting in Matter, at so early a stage that it is not yet definitely formulated as Will.',
                divinitoryMeaningWaite: 'Creation, invention, enterprise, the powers which result in these; principle, beginning, source; birth, family, origin, and in a sense the virility which is behind them; the starting point of enterprises; according to another account, money, fortune, inheritance.',
                reversed: '',
                dateRange: '',
            },
            '2': {
                alternativeNames: 'Dominion',
                attribution: 'Chokmah',
                description: ' A tall man looks from a battlemented roof over sea and shore; he holds a globe in his right hand, while a staff in his left rests on the battlement; another is fixed in a ring. The Rose and Cross and Lily should be noticed on the left side.',
                divinitoryMeaning: 'Represents Energy initiating a current of force, represents the Will in its most exalted form. It is an ideal Will, independent of any given object."For pure will, unassuaged of purpose, delivered from the lust of result, is every way perfect." AL. 1. 44. More, that is, in its earlier rather than its later form. For destruction may be regarded as the first step in the creative process. The virgin ovum must be broken in order to fertilize it. Fear and repulsion are therefore the primary reaction to the assault. Then, with understanding of the complete plan, willing surrender rejoices to co-operate. Six flames issue from the centre. This indicates the influence of the Sun, who is exalted in Aries. This is the creative Will.',
                reversed: '',
                dateRange: '',
            },
            '3': {
                attribution: 'Binah',
                alternativeNames: 'Virtue',
                description: "A calm, stately personage, with his back turned, looking from a cliff's edge at ships passing over the sea. Three staves are planted in the ground, and he leans slightly on one of them.",
                divinitoryMeaning: 'This card refers to Binah in the suit of Fire, and so represents the establishment of primeval Energy. The Will has been trans mitted to the Mother, who conceives, prepares, and gives birth to, its manifestation. It refers to the Sun in Aries, the Sign in which he is exalted. The meaning is harmonious, for this is the beginning of Spring. For this reason one sees the wand taking the form of the Lotus in blossom. The Sun has enkindled the Great Mother.',
                divinitoryMeaningWaite: 'He symbolizes established strength, enterprise, effort, trade, commerce, discovery; those are his ships, bearing his merchandise, which are sailing over the sea. The card also signifies able co-operation in business, as if the successful merchant prince were looking from his side towards yours with a view to help you',
                reversed: '',
                dateRange: '',
                goodOrBad: 1,
            },
            '4': {
                attribution: 'Chesed',
                alternativeNames: 'Completion',
                description: 'From the four great staves planted in the foreground there is a great garland suspended; two female figures uplift nosegays; at their side is a bridge over a moat, leading to an old manorial house.',
                description2: "In the symbol, the ends of the wands touch a circle, showing the completion and limitation of the original work. It is within this circle that the flames (four double, as if to assert the balance) of the Energy are seen to play, and there is no intention to increase the scope of the original Will. But this limitation bears in itself the seeds of disorder.",
                divinitoryMeaning: "indicates that one cannot establish one's work without tact and gentleness.",
                divinitoryMeaningWaite: 'They are for once almost on the surface--country life, haven of refuge, a species of domestic harvest-home, repose, concord, harmony, prosperity, peace, and the perfected work of these',
                keyWords: 'Perfected Work',
                reversed: '',
                dateRange: '',
            },
            '5': {
                attribution: 'Geburah',
                alternativeNames: 'Strife',
                description: 'A posse of youths, who are brandishing staves, as if in sport or strife. It is mimic warfare',
                divinitoryMeaning: 'Purely active Force, struggle',
                reversed: '',
                dateRange: '',
            },
            '6': {
                attribution: 'Tiphareth',
                alternativeNames: 'Victory',
                description: 'A laurelled horseman bears one staff adorned with a laurel crown; footmen with staves are at his side.',
                divinitoryMeaning: "This shows Energy in completely balanced manifestation, it is a victor triumphing, but it is also great news, such as might be carried in state by the King's courier; it is expectation crowned with its own desire, the crown of hope, and so forth",
                reversed: '',
                dateRange: '',
            },
            '7': {
                alternativeNames: 'Valour',
                attribution: 'Netzach',
                description: "The army has been thrown into disorder; if victory is to be won, it will be by dint of individual valour-a 'soldiers' battle'.The flames are dispersed, and seem to attack in all directions without systematic purpose .",
                divinitoryMeaning: 'Loss of balance, Loss of confidence, departure from equilibrium',
                divinitoryMeaningWaite: 'It is a card of valour, for, on the surface, six are attacking one, who has, however, the vantage position. On the intellectual plane, it signifies discussion, wordy strife; in business--negotiations, war of trade, barter, competition. It is further a card of success, for the combatant is on the top and his enemies may be unable to reach him. ',
                reversed: null,
                dateRange: '',
            },
            '8': {
                alternativeNames: 'Swiftness',
                attribution: 'Hod',
                description: 'The card represents motion through the immovable-a flight of wands through an open country; but they draw to the term of their course. That which they signify is at hand; it may be even on the threshold.',
                divinitoryMeaning: 'This card, represents energy of high velocity, such as furnishes the master-key to modern mathematical physics',
                divinitoryMeaningWaite: 'Activity in undertakings, the path of such activity, swiftness, as that of an express messenger; great haste, great hope, speed towards an end which promises assured felicity; generally, that which is on the move; also the arrows of love.',
                reversed: null,
                dateRange: '',

            },
            '9': {
                alternativeNames: 'Strength',
                attribution: 'Yesod',
                description: 'The figure leans upon his staff and has an expectant look, as if awaiting an enemy. Behind are eight other staves--erect, in orderly disposition, like a palisade',
                divinitoryMeaning: 'The card signifies strength in opposition. If attacked, the person will meet an onslaught boldly; and his build shews, that he may prove a formidable antagonist. With this main significance there are all its possible adjuncts--delay, suspension, adjournment',
                reversed: null,
                dateRange: '',

            },
            '10': {
                alternativeNames: 'Oppression',
                attribution: 'Malkuth',
                description: 'The whole picture suggests Oppression and repression. It is a stupid and obstinate cruelty from which there is no escape. It is a Will which has not understood anything beyond its du]l purpose,its "lust of result", and will devour itself in the conflagrations it has evoked.',
                divinitoryMeaning: ' Fire in its most destructive aspect.',
                divinitoryMeaningWaite: 'The chief meaning is oppression simply, but it is also fortune, gain, any kind of success, and then it is the oppression of these things. It is also a card of false-seeming, disguise, perfidy. The place which the figure is approaching may suffer from the rods that he carries. Success is stultified if the Nine of Swords follows, and if it is a question of a lawsuit, there will be certain loss',
                reversed: null,
                dateRange: '',

            },
            'Page': {
                alternativeNames: 'Princess of the Shining Flame',
                attribution: 'Earth of Fire',
                description: 'In a scene similar to the former, a young man stands in the act of proclamation. He is unknown but faithful, and his tidings are strange.',
                divinitoryMeaning: 'Beside a man, he will bear favourable testimony concerning him. A dangerous rival, if followed by the Page of Cups. Has the chief qualities of his suit. He may signify family intelligence.',
                keyWords: 'Brilliant, Daring, Individual, Irrational, All-Consuming',
                reversed: '',
                dateRange: '',
                conditional: 1,
            },
            'Knight': {
                alternativeNames: 'Lord of the Flame and Lightning',
                attribution: 'Air of Fire',
                description: 'He is shewn as if upon a journey, armed with a short wand, and although mailed is not on a warlike errand. He is passing mounds or pyramids. The motion of the horse is a key to the character of its rider, and suggests the precipitate mood, or things connected therewith',
                divinitoryMeaning: 'Change of Residence',
                keyWords: ' Departure, Absence, Flight',
                reversed: '',
                dateRange: '',

            },
            'Queen': {
                alternativeNames: 'Queen of the Thrones of Flame',
                attribution: 'Water of Fire',
                description: "The Wands throughout this suit are always in leaf, as it is a suit of life and animation. Emotionally and otherwise, the Queen's personality corresponds to that of the King, but is more magnetic.",
                divinitoryMeaning: 'countrywoman, friendly, chaste, loving, honourable. If the card beside her signifies a man, she is well disposed towards him; if a woman, she is interested in the Querent. Also, love of money, or a certain success in business. ',
                reversed: '',
                dateRange: '',
            },
            'King': {
                alternativeNames: 'Prince of the Chariot of Fire',
                attribution: 'Fire of Fire',
                description: 'The physical and emotional nature to which this card is attributed is dark, ardent, lithe, animated, impassioned, noble. The King uplifts a flowering wand, and wears, like his three correspondences in the remaining suits, what is called a cap of maintenance beneath his crown. He connects with the symbol of the lion, which is emblazoned on the back of his throne. ',
                divinitoryMeaning: 'The card always signifies honesty, and may mean news concerning an unexpected heritage to fall in before very long. ',
                reversed: '',
                dateRange: '',
            },
        }
    },
    cups: {
        attribution: 'Water',
        qualities: 'Emotions, Feelings, Imagination, Dreams, Empathy',
        cards: {
            'Ace': {
                alternativeNames: ' The Root of the Powers of Water',
                attribution: 'Kether',
                description: 'The waters are beneath, and thereon are water-lilies; the hand issues from the cloud, holding in its palm the cup, from which four streams are pouring; a dove, bearing in its bill a cross-marked Host, descends to place the Wafer in the Cup; the dew of water is falling on all sides. It is an intimation of that which may lie behind the Lesser Arcana.',
                divinitoryMeaning: 'House of the true heart, joy, content, abode, nourishment, abundance, fertility; Holy Table, felicity hereof',
                reversed: '',
                dateRange: '',
            },
            '2': {
                alternativeNames: 'Love',
                attribution: 'Chokmah',
                description: "A youth and maiden are pledging one another, and above their cups rises the Caduceus of Hermes, between the great wings of which there appears a lion's head. It is a variant of a sign which is found in a few old examples of this card. Some curious emblematical meanings are attached to it, but they do not concern us in this place.",
                description2: 'It shows the harmony of the  male and the female: inter preted in the largest sense. It is perfect and placid harmony, radiat ing an intensity of joy and ecstasy.',
                divinitoryMeaning: 'Refers to Love, which recovers unity from dividuality by mutual annihilation.',
                divinitoryMeaningWaite: 'Love, passion, friendship, affinity, union, concord, sympathy, the interrelation of the sexes, and--as a suggestion apart from all offices of divination--that desire which is not in Nature, but by which Nature is sanctified.',
                reversed: '',
                dateRange: '',
            },
            '3': {
                alternativeNames: 'Abundance',
                attribution: 'Binah',
                description: "Maidens in a garden-ground with cups uplifted, as if pledging one another.",
                description2: 'This card requires great subtlety of interpretation. The pomegranate was the fruit which Persephone ate in the realms of Pluto, thereby enabling him to hold her in the lower world, even after the most powerful influence had been brought to bear. The lesson seems to be that the good things of life, although enjoyed,should be distrusted.',
                divinitoryMeanin: ' There is here the fulifi ment of the Will of Love in abounding joy. It is the spiritual basis of fertility.',
                divinitoryMeaningWaite: 'The conclusion of any matter in plenty, perfection and merriment; happy issue, victory, fulfilment, solace, healing',
                reversed: '',
                dateRange: '',
            },
            '4': {
                alternativeNames: 'Luxury',
                attribution: 'Chesed',
                description: 'A young man is seated under a tree and contemplates three cups set on the grass before him; an arm issuing from a cloud offers him another cup. His expression notwithstanding is one of discontent with his environment.',
                divinitoryMeaning: 'the energy of this element, although ordered, balanced and (for the moment)stabilized, has lost the original purity of the conception.',
                divinitoryMeaningWaite: 'Weariness, disgust, aversion, imaginary vexations, as if the wine of this world had caused satiety only; another wine, as if a fairy gift, is now offered the wastrel, but he sees no consolation therein. This is also a card of blended pleasure',
                reversed: '',
                dateRange: '',
            },
            '5': {
                alternativeNames: 'Disappointment',
                attribution: 'Geburah',
                description: 'A dark, cloaked figure, looking sideways at three prone cups two others stand upright behind him; a bridge is in the background, leading to a small keep or holding.',
                divinitoryMeaningWaite: ' It is a card of loss, but something remains over; three have been taken, but two are left; it is a card of inheritance, patrimony, transmission, but not corresponding to expectations; with some interpreters it is a card of marriage, but not without bitterness or frustration',
                keyWords: ' Loss of Pleasure ',
                reversed: '',
                dateRange: '',
            },
            '6': {
                alternativeNames: 'Pleasure',
                attribution: 'Tiphareth',
                description: 'Children in an old garden, their cups filled with flowers',
                description2: 'Pleasure, in the title of this card, must be understood in its highest sense: it implies well-being, harmony of natural forces without effort or strain, ease, satisfaction.',
                divinitoryMeaningWaite: 'A card of the past and of memories, looking back, as--for example--on childhood; happiness, enjoyment, but coming rather from the past; things that have vanished. Another reading reverses this, giving new relations, new knowledge, new environment, and then the children are disporting in an unfamiliar precinct',
                reversed: 'Inheritance to fall in quickly.',
                dateRange: '',
            },
            '7': {
                alternativeNames: 'Debauch',
                attribution: 'Netzach',
                description: 'Strange chalices of vision, but the images are more especially those of the fantastic spirit.',
                divinitoryMeaningWaite: 'Fairy favours, images of reflection, sentiment, imagination, things seen in the glass of contemplation; some attainment in these degrees, but nothing permanent or substantial is suggested.',
                keyWords: "Options, Illusions",
                reversed: '',
                dateRange: '',

            },
            '8': {
                alternativeNames: 'Indolence',
                attribution: 'Hod',
                description: 'A man of dejected aspect is deserting the cups of his felicity, enterprise, undertaking or previous concern',
                divinitoryMeaning: 'Move away from emotional attachments',
                keyWords: 'Abandoned Sucess',
                reversed: '',
                dateRange: '',
            },
            '9': {
                alternativeNames: 'Happiness',
                attribution: 'Yesod',
                description: "A goodly personage has feasted to his heart's content, and abundant refreshment of wine is on the arched counter behind him, seeming to indicate that the future is also assured. The picture offers the material side only, but there are other aspects",
                divinitoryMeaning: 'Concord, contentment, physical bien-être; also victory, success, advantage; satisfaction for the Querent or person for whom the consultation is made.',
                reversed: '',
                dateRange: '',
            },
            '10': {
                alternativeNames: 'Satiety',
                attribution: 'Malkuth',
                description: 'Appearance of Cups in a rainbow; it is contemplated in wonder and ecstacy by a man and woman below, evidently husband and wife. His right arm is about her; his left is raised upward; she raises her right arm. The two children dancing near them have not observed the prodigy but are happy after their own manner. There is a home-scene beyond.',
                divinitoryMeaning: "Contentment, repose of the entire heart; the perfection of that state; also perfection of human love and friendship; if with several picture-cards, a person who is taking charge of the Querent's interests; also the town, village or country inhabited by the Querent.",
                keyWords: 'Perfected Success',
                reversed: '',
                dateRange: '',
            },
            'Page': {
                alternativeNames: 'Princess of the Palace of the Floods',
                attribution: 'Earth of Fire',
                description: 'A fair, pleasing, somewhat effeminate page, of studious and intent aspect, contemplates a fish rising from a cup to look at him. It is the pictures of the mind taking form.',
                divinitoryMeaning: 'Fair young man, one impelled to render service and with whom the Querent will be connected; a studious youth; news, message; application, reflection, meditation; also these things directed to business',
                reversed: '',
                dateRange: '',
            },
            'Knight': {
                name: 'Knight of Cups',
                alternativeNames: 'Lord of Waves and Waters',
                attribution: 'Air of Water',
                description: 'Graceful, but not warlike; riding quietly, wearing a winged helmet, referring to those higher graces of the imagination which sometimes characterize this card. He too is a dreamer, but the images of the side of sense haunt him in his vision.',
                divinitoryMeaning: 'Arrival, approach--sometimes that of a messenger; advances, proposition, demeanour, invitation, incitement.',
                reversed: '',
                dateRange: '',
                image: "Images/RiderWaite/Cups/knight.jpg"
            },
            'Queen': {
                alternativeNames: 'Queen of the Thrones of Water',
                attribution: 'Water of Water',
                description: 'Beautiful, fair, dreamy--as one who sees visions in a cup. This is, however, only one of her aspects; she sees, but she also acts, and her activity feeds her dream.',
                divinitoryMeaning: 'Good, fair woman; honest, devoted woman, who will do service to the Querent; loving intelligence, and hence the gift of vision; success, happiness, pleasure; also wisdom, virtue; a perfect spouse and a good mother.',
                reversed: '',
                dateRange: '',
            },
            'King': {
                alternativeNames: 'Prince of the Chariot of Waters',
                attribution: 'Fire of Water',
                description: 'He holds a short sceptre in his left hand and a great cup in his right; his throne is set upon the sea; on one side a ship is riding and on the other a dolphin is leaping. The implicit is that the Sign of the Cup naturally refers to water, which appears in all the court cards.',
                divinitoryMeaning: 'Fair man, man of business, law, or divinity; responsible, disposed to oblige the Querent; also equity, art and science, including those who profess science, law and art; creative intelligence.',
                reversed: '',
                dateRange: '',
            },
        }
    },
    pentacles: {
        attribution: 'Earth',
        qualities: 'Body, Physical World, Money, Discipline, Responsibility, Tradition, Form',
        cards: {
            'Ace': {
                attribution: 'Kether',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '2': {
                attribution: 'Chokmah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '3': {
                attribution: 'Binah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '4': {
                attribution: 'Chesed',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '5': {
                attribution: 'Geburah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '6': {
                attribution: 'Tiphareth',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '7': {
                attribution: 'Netzach',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '8': {
                attribution: 'Hod',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '9': {
                attribution: 'Yesod',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '10': {
                attribution: 'Malkuth',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Page': {
                attribution: 'Earth of Fire',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Knight': {
                attribution: 'Air of Fire',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Queen': {
                attribution: 'Water of Fire',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'King': {
                attribution: 'Fire of Fire',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
        }
    },
    swords: {
        attribution: 'Air',
        qualities: 'Ideas, Clarity, Sharpness, Communication, Intelligence',
        cards: {
            'Ace': {
                attribution: 'Kether',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '2': {
                attribution: 'Chokmah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '3': {
                attribution: 'Binah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '4': {
                attribution: 'Chesed',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '5': {
                attribution: 'Geburah',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '6': {
                attribution: 'Tiphareth',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '7': {
                attribution: 'Netzach',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '8': {
                attribution: 'Hod',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '9': {
                attribution: 'Yesod',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            '10': {
                attribution: 'Malkuth',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Page': {
                name: 'Page of Swords',
                attribution: 'Earth of Air',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Knight': {
                attribution: 'Air of Air',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
            'Queen': {
                name: 'Queen of Swords',
                attribution: 'Water of Air',
                description: 'The person symbolized by this card should be intensely per ceptive, a keen observer, a subtle interpreter, an intense individualist, swift and accurate at recording ideas; in action confident, in spirit gracious and just. Her movements will be graceful, and her ability in dancing and balancing exceptional.',
                divinitoryMeaning: "",
                reversed: '',
                dateRange: '',
                image: 'Images/RiderWaite/Swords/queen.jpg'
            },
            'King': {
                attribution: 'Fire of Air',
                description: '',
                divinitoryMeaning: '',
                reversed: '',
                dateRange: '',
            },
        }
    },

}

// const allCards = { ...minorArcana, ...majorArcana}
let cardsArray = []
for (let k in minorArcana) {
    // if(k == 'cards'){
    for (let j in minorArcana[k]) {
        if (j == 'cards') {

            // console.log('hit')
            for (let l in minorArcana[k][j]) {
                // console.log("CARD INFO: ", minorArcana[k][j][l])
                cardsArray.push(minorArcana[k][j][l])
                
            }
        }
    }
    // let card = {}
    // card.attribution = minorArcana[k].attribution
    // card.value = minorArcana
};

for(let b in majorArcana) {
    cardsArray.push(majorArcana[b])
}
console.log(cardsArray);

// console.log(allCards)

// winning combinations 

// ---An abundance of trumps may indicate a destiny moment or period in the clients life; a grand, karmic moment over which they have little or no AbortController.---

//--- An abundance of small cards points to a momet of perios of time in the clients life over which thye have much control. their behavior and decisions can change lots of things ---

//--- An abundace of court cards might suggest other people involved are key factors. they might be identified by the birth dates the card represents. 

//--- An abundance of Wands  might suggest the clients life purpose, will, career, or business is a key factor.

//---- An abundance of Cups might suggest issues such as love, art ,creativity, or sex are key factors

//--- An abundance of Swords might suggest conflict, anxiety or health is a key

//--- An abundance of Disks might suggest that money is a key factor