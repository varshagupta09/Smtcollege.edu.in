
    $(document).ready(function() {
        $('.plSlider').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        });
        
        $('.pssSlider').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        });

        $('.slider-for').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.slider-nav'
        });
        $('.slider-nav').not('.slick-initialized').slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: '.slider-for',
            centerMode: true,
            focusOnSelect: true,
            dots: false,
            infinite: true,
            arrows: false,
        });


        $('.talkSlider').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        });

        $('.startUpSlider').not('.slick-initialized').slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow:4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
        });
    });

    const stateCityMap = {
        AP: [
            "Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool",
            "Rajahmundry", "Kakinada", "Tirupati", "Anantapur", "Kadapa",
            "Vizianagaram", "Eluru", "Ongole", "Nandyal", "Chittoor",
            "Machilipatnam", "Adoni", "Tenali", "Proddatur", "Hindupur",
            "Bhimavaram", "Madanapalle", "Guntakal", "Dharmavaram", "Srikakulam",
            "Gudivada", "Narasaraopet", "Tadepalligudem", "Chilakaluripet", "Yemmiganur",
            "Kadiri", "Chirala", "Anakapalle", "Tadpatri", "Amalapuram",
            "Kavali", "Tadepalle", "Palacole", "Kandukur", "Bapatla",
            "Sattenapalle", "Macherla", "Gudur", "Narasapuram", "Peddapuram",
            "Nidadavole", "Nagari", "Vinukonda", "Sullurpeta", "Samalkot",
            "Ponnur", "Salur", "Rayachoti", "Srikalahasti", "Mandapeta",
            "Tuni", "Kovvur", "Jammalamadugu", "Pithapuram", "Mangalagiri",
            "Repalle", "Rayadurg", "Tiruvuru", "Nandikotkur", "Atmakur",
            "Jaggayyapeta", "Nuzvid", "Palasa", "Ichchapuram", "Parvathipuram",
            "Bobbili", "Mandasa", "Vuyyuru", "Kanigiri", "Gooty",
            "Dharmapuri", "Madanapalle", "Nagari", "Markapur", "Vinjamur",
            "Bapatla", "Nellimarla", "Nidadavole", "Kadiri", "Sattenapalle"
        ],
        AR: [
            "Itanagar", "Naharlagun", "Pasighat", "Tawang", "Ziro",
            "Bomdila", "Tezu", "Roing", "Aalo (Along)", "Anini",
            "Yingkiong", "Khonsa", "Daporijo", "Namsai", "Seppa",
            "Jairampur", "Changlang", "Koloriang", "Hawai", "Miao",
            "Longding", "Basar"
        ],
        AS: ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Bongaigaon", "Dhubri", "Goalpara"],
        BR: ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Purnia", "Darbhanga", "Bihar Sharif", "Ara", "Begusarai", "Katihar"],
        CT: ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba", "Rajnandgaon", "Jagdalpur", "Ambikapur", "Raigarh", "Dhamtari"],
        GA: ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Curchorem", "Sanquelim", "Quepem", "Sanguem"],
        HR: ["Chandigarh", "Faridabad", "Gurgaon", "Hisar", "Rohtak", "Panipat", "Karnal", "Yamunanagar", "Sirsa", "Sonipat"],
        HP: ["Shimla", "Dharamshala", "Manali", "Solan", "Mandi", "Hamirpur", "Kullu", "Chamba", "Nahan", "Kangra"],
        JK: ["Srinagar", "Jammu", "Leh", "Anantnag", "Baramulla", "Kathua", "Sopore", "Udhampur", "Pulwama", "Rajouri"],
        JH: ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar", "Hazaribagh", "Giridih", "Ramgarh", "Medininagar", "Phusro"],
        KA: ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi-Dharwad", "Belagavi", "Kalaburagi", "Davangere", "Ballari", "Shivamogga", "Tumakuru"],
        KL: ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kollam", "Thrissur", "Alappuzha", "Palakkad", "Malappuram", "Ponnani", "Kannur"],
        MP: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Ratlam", "Satna", "Rewa", "Murwara"],
        MH: ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Akola"],
        MN: ["Imphal", "Churachandpur", "Thoubal", "Bishnupur", "Ukhrul", "Senapati", "Tamenglong", "Jiribam", "Moreh", "Kakching"],
        ML: ["Shillong", "Tura", "Nongpoh", "Jowai", "Baghmara", "Williamnagar", "Resubelpara", "Nongstoin", "Mairang", "Cherrapunji"],
        MZ: ["Aizawl", "Lunglei", "Champhai", "Kolasib", "Serchhip", "Saiha", "Lawngtlai", "Mamit", "Khazawl", "Hnahthial"],
        NL: ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon", "Kiphire", "Longleng"],
        OR: ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Baripada", "Bhadrak", "Jharsuguda"],
        PB: ["Chandigarh", "Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Hoshiarpur", "Mohali", "Batala", "Pathankot"],
        RJ: ["Jaipur", "Jodhpur", "Udaipur", "Kota", "Ajmer", "Bikaner", "Alwar", "Bharatpur", "Pali", "Sikar"],
        SK: ["Gangtok", "Namchi", "Geyzing", "Mangan", "Rangpo", "Jorethang", "Ravangla", "Soreng", "Yuksom", "Singtam"],
        TN: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Vellore", "Erode", "Thoothukudi"],
        TG: ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"],
        TR: ["Agartala", "Udaipur", "Kailashahar", "Dharmanagar", "Belonia", "Khowai", "Ambassa", "Sabroom", "Sonamura", "Bishalgarh"],
        UT: ["Dehradun", "Nainital", "Haridwar", "Haldwani", "Rudrapur", "Kashipur", "Roorkee", "Rishikesh", "Pithoragarh", "Almora"],
        UP: ["Agra",
            "Aligarh",
            "Allahabad (Prayagraj)","Ambedkar Nagar", "Amroha", "Azamgarh", "Barabanki" , "Bareilly", "Basti", "Bijnor","Bulandshahr" , "Deoria", "Etawah", "Faizabad", "Farrukhabad",
            "Fatehpur", "Firozabad", "Ghaziabad", "Gorakhpur", "Hathras",
            "Hardoi", "Jaunpur", "Jhansi", "Kanpur", "Kasganj",
            "Lakhimpur Kheri", "Lalitpur", "Lucknow", "Mathura", "Meerut",
            "Mirzapur", "Moradabad","Muzaffarnagar",  "Noida", "Rae Bareli", "Sitapur" ,"Sultanpur",  "Unnao", "Varanasi"],
        WB: ["Kolkata", "Howrah", "Darjeeling", "Siliguri", "Durgapur", "Asansol", "Berhampore", "Cooch Behar", "Haldia", "Kharagpur"],
        AN: ["Port Blair"],
        CH: ["Chandigarh"],
        DN: ["Silvassa"],
        DD: ["Daman", "Diu"],
        DL: ["Delhi"],
        LD: ["Kavaratti"],
        PY: ["Puducherry", "Karaikal", "Mahe", "Yanam"]
    };
    
    let stateSelect = document.getElementById("state");

    let citySelect = document.getElementById("city"); 

    function updateCities() {
  

    citySelect.innerHTML = '<option value="">Select City</option>';

    const selectedState = stateSelect.value;

    if (selectedState) {
        const cities = stateCityMap[selectedState];

        cities.forEach(city => {
            const option = document.createElement("option");
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }

    console.log('TEST');
}