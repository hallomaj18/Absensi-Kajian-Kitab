"use strict";
const DEFAULT_CLASSES = [
  { id: "mts-kelas-vii-a-male", name: "MTs - Kelas VII A (Male)", students: [
    "Ahmad Hati Al Fatih",
    "Ahnaff Arief",
    "Alif Auliya Aflahul Hazim",
    "Aljabar Ilmiyya Rusnandi",
    "Arfan Faishal Ghifari",
    "Arjuna Wirasatya Hendriansyah",
    "Atharasyid Rizqi",
    "Aufa Rizal Ar Raafi",
    "Ayyasy Syafiq Ghaisan",
    "Bintang Ukayla Habibullah",
    "Fathan Athaya",
    "Fatih Ainun Najib",
    "Fauzi Dzaky Musyaffa",
    "Geizka Dimdri Alanza",
    "Hafidz Rafif Dzikri",
    "Izzan Hanif Nurfatih",
    "Kenzio Atalarik Radjawane",
    "Khaleev Bares Tsaqiv",
    "Luqman Abdulmajid",
    "Muhamad Abidzar Al Ghifari",
    "Muhammad Abarozid",
    "Muhammad Adli Nur Amri",
    "Muhammad Akbar Muzaki",
    "Muhammad Azka Ramadhan",
    "Muhammad Faridh Akhmad Siddiq",
    "Muhammad Hanif",
    "Muhammad Raffa Al Qorny Hidayatullah",
    "Muhammad Dzakir Al-Fatih",
    "Muhammad Taufik",
    "Muhammad Zulfan Zein Sholihin",
    "Najwan Azhim Muntazhar",
    "Omar Hafiz Nur’ali",
    "Tubagus Abidzar Alghifari",
    "Wildan Ahza Zuhdi",
    "Yusuf Khalifa Abdulmalik",
  ] },
  { id: "mts-kelas-vii-b-male", name: "MTs - Kelas VII B (Male)", students: [
    "Abdullah Ahnaf Rafi",
    "Abrori Abdul Mannan",
    "Ahmad Wildan Mumtaz Ramdani",
    "Altairadya Udhi Ramadhan",
    "Arshad Praditya Hamizan",
    "Azzam Nashwan Ramdhani",
    "Baihaqi Putra Nugraha",
    "Daffa Kaizen Al Farizi",
    "Darren Hartanta Firmansyah",
    "Farhad Ar Rosyd",
    "Fathan Afzhalurrahman Tsaqif",
    "Fatih Hilmi Nizar",
    "Fauzan Nur Aziz",
    "Ghozi Haziq Al Ghifari",
    "Hadziq Hasan Al - Aisyi",
    "Hafiz Imanulhaq Faqih",
    "Hisyam Nabil Fadhillah",
    "Keven Nijananda Athaya",
    "Khansyah Umar Al Buchori",
    "Khyar Fawzan Ahmad",
    "Muhammad Abarr Muharrom",
    "Muhammad Ahsan Fathurrahman",
    "Muhammad Faalih Ubaidillah",
    "Muhammad Ihsan Pramudya",
    "Muhammad Muazzam Muslim",
    "Muhammad Rafid Maulana",
    "Muhammad Shaquille Alby Al Khwarizmi",
    "Muhammad Syamil Fahim",
    "Muhammad Zafran Al-Fatih",
    "Nadhief Al Azizi Ismail",
    "Omar Asshidqi Firdaus Damanhuri",
    "Rayhan Syafiq Santika",
    "Rayyan Azzam",
    "Syahdan Bintang Wibisono",
    "Zaky Khairul Falah",
  ] },
  { id: "mts-kelas-vii-c-male", name: "MTs - Kelas VII C (Male)", students: [
    "Ahmad Yasin Akio Tama",
    "Ahsan Abdurrohman Sahrial",
    "Akhtar Azzahidi Ramadhan",
    "Al Fatih Emir Ibrahim",
    "Arhab Abqori Mahbub",
    "Ayyasy Azkiya Mumtaza",
    "Azkie Athaillah Ramadhan",
    "Azza Muhammad Firdaus",
    "Fauzan Arsyad Perminanto",
    "Fauzil Alhafizh Asqalani",
    "Gibranzza Adli Kafna",
    "Hafidh Nu'man Rifa'i",
    "Jauhar Alam Rabbani",
    "Mochamad Arka Zhafran",
    "Mochamad Dias Mulyawan",
    "Muhammad Abizar Habiburahman",
    "Muhammad Aflah Jasir",
    "Muhammad Akmal Hisyam",
    "Muhammad Azka Hawnan Al-Asyrof",
    "Muhammad Fathan Affandi",
    "Muhammad Nebih Berri Hasyim",
    "Muhammad Omar Al Fatih",
    "Muhammad Shafwaan Yahya Alhaqi Budianto",
    "Muhammad Zakariya",
    "Nabhan Mifzal Daffaulhaq",
    "Nabil Faeyza Al Ghazi",
    "Qaiser Nabil Fayyadh",
    "Rafid Fadhailillah Ramadhan",
    "Revandra Arkhan Satrio",
    "Rifqi Ahmad",
    "Sholeh Malik",
    "Syafiq Uwais Alqorni",
    "Tsana Zanjabil Yahya",
    "Utsman Abdurrahman",
  ] },
  { id: "mts-kelas-viii-a-male", name: "MTs - Kelas VIII A (Male)", students: [
    "Abdurrahman Fahmiansyah",
    "Abyan Baihaqi Sidqi",
    "Ahmad Mubarak Adam",
    "Alaric Faeyza Virendra",
    "Alfian Alwi Adam Al-Rafi",
    "Arby Nafie Bahriawan",
    "Azzam Muhammad Haniya",
    "Bintang Tsabit Rabbani",
    "Elfvanzi Adhipramana Sudirman",
    "Fakhri Zahran Robbani",
    "Farid Rizki Wildansyah",
    "Firzatullah Syah Munggaran",
    "Hafizh Ali Rahmatullah",
    "Haykal Ahmad Al Farabi",
    "Mochamad Zenal Zaki Rizqulah",
    "Muhammad Abyan Al Ghuiza",
    "Muhammad Alcantara Athailah Mulya",
    "Muhammad Anugrah Sutisna",
    "Muhammad Daffa Nur Ar Rasyid",
    "Muhammad Fadlan Fathurrahman",
    "Muhammad Faiq Al Faiz",
    "Muhammad Hanas Hawanas",
    "Muhammad Rifat Hamizan Gani",
    "Muhammad Syazwan Zahirul Fadhl",
    "Nafil Khairil Hanif",
    "Prasastiyasa Ahmad Jufhar",
    "Qoffan Maher Al-Azka",
    "Raafi Muhammad Alfadhil",
    "Radinka Allam Syakib",
    "Rafiq Asy Syaukani Akbar",
    "Ra'uf Zaki Arkansyah",
    "Sayyid Taufiqurrahman Caryaman",
    "Tubagus Hamzah Alfarizi",
    "Yahya Ayyash El-Fathin",
    "Zahy Afif Madani",
  ] },
  { id: "mts-kelas-viii-b-male", name: "MTs - Kelas VIII B (Male)", students: [
    "Abdullah Kafie El Azzam",
    "Akhmad Adori",
    "Alfat Biyadil Fathir",
    "Ayazyaqzan Mesya",
    "Azzam Ahmad Anshori",
    "Bradley Mohammad Al Fahrezi",
    "Erlangga Hafiz Pramudita",
    "Ervant Maulana Hafidz",
    "Fihrist Isham El-Azzam",
    "Gazza Jiwa Muhammad",
    "Ghazi Muhammad Al Fatih",
    "Ghulam Afkar Faesal",
    "Ibadurrahman Al Haq",
    "M. Faith Alif Fikri Sarjan",
    "Mahendra Adinata",
    "Muhammad Absyar Adrian",
    "Muhammad Adam Setiawan",
    "Muhammad Arfa El Rafif.P",
    "Muhammad Azmi Nur Amin",
    "Muhammad Daffa Raasyid Al Faqih",
    "Muhammad Daris Hikari",
    "Muhammad Eza Ziyahuda",
    "Muhammad Fathin Khayrullah Al-Kamil",
    "Muhammad Hassanul Umam Linggi",
    "Muhammad Hibban Azzam Fawwaz",
    "Muhammad Izwar Muttaqin",
    "Raden Asyam Fariid Husain",
    "Raffi Azmi Sarfan",
    "Rangga Kurniayadi Wijaya",
    "Rifat Luthfi Fadhilah",
    "Syafiq Khairy Nasywan",
    "Umar Fatih Al Bahri",
    "Uwais Azfar Arrasyiid",
    "Zaidan Nur Ilmi",
    "Zidni Ilman",
  ] },
  { id: "mts-kelas-viii-c-male", name: "MTs - Kelas VIII C (Male)", students: [
    "Abdun Nafi Ahsan",
    "Agha Syahmi Hamizan",
    "Akmal Albyaksa Hasan",
    "Arsy Aqil El Sakha",
    "Athatura Nadzmi Irsyad Mulyadi",
    "Bagus Ardi Raharjo",
    "Daffa Hamizan Hardiansyah",
    "Deandra Azka Kayana",
    "Dzaki Dzul Hannan Adji",
    "Fachrial Azmi Hilman",
    "Faith Ghaly Agus",
    "Faqih Khoiri Rahman",
    "Fayyadh Muhammad Assakandariy",
    "Haidar Yusuf Rohmadi",
    "Ibrahim Husein",
    "Kennan Albyandra Herdiansyah",
    "M. Miqdad Al Qossam",
    "Maulana Luthfi Alfarisi",
    "Mu'adz Habiburrohman",
    "Mughits Akbar Sakhi",
    "Muhamad Aizar Muhsin",
    "Muhamad Fairuz Muzzaki",
    "Muhammad Akramurrizal",
    "Muhammad Daffa Aromdhana",
    "Muhammad Daffi Nur Al Latief",
    "Muhammad Nabil Mugara Putra",
    "Muhammad Rusydi Rabbani",
    "Muhammad Tsalits Huwaidi",
    "Raditya Alif Musyaffa Syabil",
    "Rayhan Kainuna Al Yasir",
    "Rijal Sabiq Hutari",
    "Syafiq Akhtarfathani Supriadi",
    "Umar Abdul Aziz",
    "Wafi Muhammad Alfath",
  ] },
  { id: "mts-kelas-ix-a-male", name: "MTs - Kelas IX A (Male)", students: [
    "Abdullah Sahal Fadli",
    "Ahmad Akbar Yasin Sakha",
    "Al Fatih Ananta Sulaiman Latadano",
    "Al Khalifi Ahza Arshaka Rafiandra",
    "Darendra Laksmana",
    "Fata Zaid Faturrahman",
    "Ghozy 'Ammar Zuhairy",
    "Haidar Danish Al Ghazali",
    "Hiroshi Muhammad Althaf",
    "Humam Ghazy Huwaidi",
    "Imad Aqeel",
    "Muhammad Abdi Putra Amanu",
    "Muhammad Adeebsyah Al Arkan",
    "Muhammad Aqil Qowiyyan",
    "Muhammad Azka Hazim Zafhran",
    "Muhammad Defan Atharrayhan Setiawan",
    "Muhammad Hisyam Asshidqi",
    "Muhammad Khairi Ikbar",
    "Muhammad Khairu Tsabit Sharil",
    "Muhammad Latani Rauhillah",
    "Muhammad Miftah Ziyadurrizqi",
    "Muhammad Rafa Muyassar",
    "Muhammad Saif Fawwaz Arrosyad",
    "Nazhiif Muhammad Dafi Al Fayyadh",
    "Nizam Ibrahim",
    "Panglima Rahman Alkindy",
    "Raja Ahfadz Azizi",
    "Rasyid Arifan Atha Astro",
    "Reynard Haidar Renggana",
    "Rezvan Athar D'Putra",
    "Ridwan Kamil Maherdani",
    "Satria Wastu Kencana Wicaksono",
    "Shadad Athara Musyafa",
    "Zhafif Adila Rahman",
    "Zahy Afif Madani",
  ] },
  { id: "mts-kelas-ix-b-male", name: "MTs - Kelas IX B (Male)", students: [
    "Abdurrahman Fakhriansyah",
    "Abid Hanif Gaza Yudhistira",
    "Ahmad Zuhair An Nashir",
    "Al Ghazali Ramadhan Setiyono",
    "Azzam Arif",
    "Daniswara Lintang Qolbu",
    "Dzikra Adriatica",
    "Elfran Muhammad Yalqasa",
    "Fakhrie Zafran Al Khairy",
    "Farid Salim Aldebaran",
    "Fikri Khairul Azam",
    "Ghanim Zaghlul Huda",
    "Hafidz Rifatul Anam",
    "Heghira Maher Dein Gunawan",
    "Hilmi At-taqiy Firdaus",
    "Ibnu Nafis Al Ghifary",
    "Ilyas Faturrahman Hakim",
    "Izzuddin Al Qosam",
    "Muhamad Kaffah Ashodiqie",
    "Muhammad",
    "Muhammad Ahsan Asysyakir",
    "Muhammad Alfarisi Yazid Ilmani",
    "Muhammad Arfa Hanif",
    "Muhammad Fakhri Maulana",
    "Muhammad Hafidz Nur Rosyad",
    "Muhammad Husni Faqih",
    "Muhammad Kanzul Arifin",
    "Muhammad Sahel Fairuzzaman Rahmatulloh",
    "Muhammad Umar Arsyad",
    "Naizar Azka Ramadhan",
    "Sabiq El Fathin Irhamsyah",
    "Syauqi El Badi Muhammad",
    "Yusuf Khairul Azzam",
    "Zuhdi Naufal Salim",
  ] },
  { id: "mts-kelas-ix-c-male", name: "MTs - Kelas IX C (Male)", students: [
    "Abdullah Adnan Firdaus",
    "Abdulrouf Tafazullah Mansur",
    "Achmad Mudrik Rajabi",
    "Akhtar Pramathya Arkaan",
    "Al Ghiffari Ramadyaza",
    "Azzam Naufan Adha",
    "Bariq Aulia Syafiq",
    "Danish Arkan Altamis",
    "Fadhil Hisyam Ibrahim",
    "Fatih Alif Ghassan",
    "Fayyaz Akhtar Fahreza",
    "Fikri Azhar",
    "Fredika Tri Bakhtiar",
    "Hafizh Rifqi Zhaidan",
    "Hasan Abdul Aziz",
    "Hayyan Nailan Syahidan Yusuf",
    "Ibrahim Kholilullah",
    "Khalid Muhammad Hanif",
    "Muhamad Abiya Noor Salman",
    "Muhammad Akmaluz Zuhair Assauqi",
    "Muhammad Fathan Hashifurrahman",
    "Muhammad Fawwaz Aqil Ramadhan",
    "Muhammad Jabbar Adhyastha",
    "Muhammad Raihan Fathan",
    "Muhammad Raqi Firas Adelard",
    "Muhammad Rasyid Ibrahim",
    "Muhammad Salim Abdurrahman",
    "Muhammad Syafiq Mudzaffar",
    "Muhammad Utsman Ridho",
    "Radhika Khalil Ulum",
    "Sayid Sabiq Muhamad Adnan",
    "Zaidan Irfan Muchlis",
    "Zhafran Al Khalifi",
  ] },
  { id: "ma-kelas-x-a", name: "MA - Kelas X A", students: [
    "Abdan Djameel Sulaiman",
    "Abdullah Yusuf Azzam",
    "Arkan Said Khairy",
    "Azka Muhammad Shidqi",
    "Azriel Satria Nugraha",
    "Ezhar Riksa Thufaillah",
    "Faiq Abdul Aziz",
    "Farih Hafizh Afurahno",
    "Faris Satria Bayanaka",
    "Fatih Rakan Priyono",
    "Garda Riffat Muhammad",
    "Hafidz Rizqi Syakurochman",
    "Hamzah Habibullah",
    "Hasan Seno Nismoro",
    "Izzudien Ainulhaq",
    "Kenzie Nawwara Handana",
    "Muhamad Khairul Azzam",
    "Muhammad Adityo Ramadhan",
    "Muhammad Ahza Rizqi Mashudi",
    "Muhammad Faiqul Umam",
    "Muhammad Fathan Mubina",
    "Muhammad Ibrahim Musyarrof",
    "Muhammad Naufal Muzakki",
    "Muhammad Zafran Saputra",
    "Muhammad Ziyad Ilmi",
    "Muhtadi Ihkam Rahadian",
    "Rafi Akmal Aufa",
    "Raihan Muhammad Alfathir",
    "Syamil Fadhlan Nabil",
    "Zahid Dzakwamul Qowwam",
    "Zaki Ali Muhammad",
  ] },
  { id: "ma-kelas-x-b", name: "MA - Kelas X B", students: [
    "Abdan Syakuro",
    "Ahmad Faiz Mubarak",
    "Darril Jiran Andika Najir",
    "Evan Rafif Irawan Adinata",
    "Faiz Zayyad Ilmi",
    "Fajri Mohammad Farhan",
    "Fatih Wiradilaga",
    "Haidar Hanif Abdul Hayyu",
    "Haidar Zakwan El Hariry",
    "Hanandaru Athaya Diyose",
    "Ibnu Sina Ramadhan",
    "Juan Fachri Permadi",
    "Kayyis Muhammad Haidar",
    "Muhammad Affan Ekatama",
    "Muhammad Akmal Firdaus",
    "Muhammad Ayyasy Abdurrafi",
    "Muhammad Fathin Fauzan",
    "Muhammad Hafidz Fathurrahman",
    "Muhammad Haikal Faradz",
    "Muhammad Irsyad Al Fatih",
    "Muhammad Rafi Hijazi",
    "Muhammad Rais Ar Rahmat",
    "Muhammad Zakaria Firmansyah",
    "Musyaffa Asykarillah",
    "Nabigh Akmal Rasyad Bahai Rusiawan",
    "Rafka Asyraf Fikri Al-Khazm",
    "Sholahudin",
    "Sunan Kalimasada",
    "Syarif Azzam Herlambang",
  ] },
  { id: "ma-kelas-x-c", name: "MA - Kelas X C", students: [
    "Abdulloh Abiy Yusa",
    "Abdurrahman Rais Izzuddin",
    "Asfa Arkannail Al Gozy",
    "Atalla Tsany Farid",
    "Azhar Imran Khalid",
    "Fabiyan Azza Al-Kautsar",
    "Fataahakiim San Carwin Noor",
    "Fayyad Askar Shadiq",
    "Gavin Kenta Suryadi",
    "Gibran Nurjati",
    "Hafiz Ahnaf Pratama",
    "Haidhar Aurum Ajrin",
    "Hanif Mushlih Sabiq",
    "Kevin Khairy Nasywan",
    "Kimi Faris Farghani",
    "Mikail Hibrizi Ramadhan",
    "Muhammad Alif Damar Prihantoro",
    "Muhammad Alvaro Attirmidzi",
    "Muhammad Azzam Hanif",
    "Muhammad Danish Almaududi",
    "Muhammad Fathir Ayyasy",
    "Muhammad Haidar",
    "Muhammad Kaysan Navid Sandria Putra",
    "Muhammad Ruslan Falih Al Syamil",
    "Muhammad Zhafran Annazhif",
    "Nadhif Syarif",
    "Nafis Abqary Riadi",
    "Najdan Khoiru Ridhwan",
    "Raiq Shafi Thariq",
    "Syafiq Wafi Arkana",
    "Teuku Muhammad Abiyyu Ramadhan",
  ] },
  { id: "ma-kelas-x-d", name: "MA - Kelas X D", students: [
    "Abdurrahman Yusuf Ansyori",
    "Aghifa Ramdhani Nurdiawan",
    "Azzam Ibadurrohman",
    "Daffa Mikail Abdullah",
    "Fadil Khoerul Azam",
    "Fatir Azhar",
    "Fikry Ardiansyah",
    "Ghozi Ahlazikri Mustofa",
    "Hamdalah Jundi Rabbani",
    "Hasan Al Banna",
    "Hendro Widyatna Putra Subiyanto",
    "Jibril Ibrahimsyah Al-Dhafeen",
    "La Qodri Kenzie Haziq",
    "Laksamana Oceantoro",
    "Muhamad Dziya'ulhaq Zahraani",
    "Muhammad Ariq Azka Pradana",
    "Muhammad Asfa Muwafaqi",
    "Muhammad Darain Al Khibrah",
    "Muhammad Fadhli Yusuf",
    "Muhammad Fawwaz Al Ghifari",
    "Muhammad Haikal Al-Hafidz",
    "Muhammad Kai Sakha",
    "Muhammad Khayru Al Fathan",
    "Muhammad Mikala Tamma",
    "Muhammad Raadhiv Pamuncak",
    "Muhammad Sabiq Layyin Alma",
    "Reyhan Mufid El Falah",
    "Syamil Mumtaz Ilmy",
    "Umar Amrulloh",
    "Yusup Nurul Fadilah",
  ] },
  { id: "ma-kelas-x-e", name: "MA - Kelas X E", students: [
    "Abdurrosyid Faiz Muyassar",
    "Ahmad Faiz Syauqi",
    "Ahmad Ismail Dzulhajj",
    "Alvin Sanni Anshari",
    "Arief Maulana Wildansyah",
    "Danendra Aprilyana Purwanto",
    "Faris Ilmi Tsaqif",
    "Febrian Ismail Abdullah",
    "Haidar Fahmi Asna",
    "Hikmatyarahman Khoirul Azzam",
    "Husain Afkar Robbani",
    "Ilham Mua'Fa Fadhlulrahman",
    "Izyan Arfannawfal Supriadi",
    "Maulana Alvyanto",
    "Muhamad Irsan Ramadani",
    "Muhammad Ayyasy Ahsani Taqwim",
    "Muhammad Azfa Avila Haq",
    "Muhammad Fahri Akbar",
    "Muhammad Ghazi Laudza Faza",
    "Muhammad Hafiyyun 'Anha",
    "Muhammad Hazmi Fawwaz",
    "Muhammad Miftahul Arzaq Jaya M.",
    "Muhammad Taufiqul Hakim",
    "Muhammad Zaidan Ahsan",
    "Nadhif Genta Nandika",
    "Naufal Zaky Az-Zauhari",
    "Rifqy Akram Dzikrullah Lubis",
    "Sulthan Rijalul Ilmi",
    "Syihab Syifa'ul Abdi",
    "Umar Faraz Razi",
    "Muhammad Fathur Rayyan Santoso",
  ] },
  { id: "ma-kelas-x-f", name: "MA - Kelas X F", students: [
    "Ahmad Najwan Nailur Ridho",
    "Ahmad Shoofiy Adliy",
    "Akbar Aisy Naimi Putra",
    "Alfath Imam Ardi Mulyadi",
    "Azmi Fawwaz Khoirullah",
    "Dzaka Athaillah Herdian",
    "Faiq Fadhlur Ramadhan",
    "Fairuz Alma Nadhif",
    "Frediantoro Zhafif Ramadhan",
    "Hilmi Rayyan",
    "Ifham Nabil Al Hakim",
    "Ilyas Tsabit Muzhaffar",
    "Ken Anas Fatih Kafna",
    "Muhamad Irsya Fathan Aqila",
    "Muhammad Azmi Al Banna",
    "Muhammad Baihaqi Romadhon",
    "Muhammad Fajar Siddik Matondang",
    "Muhammad Fatih Abdurrahman",
    "Muhammad Fatih Farhat",
    "Muhammad Hilmy Musyaffa",
    "Muhammad Kaisan Al Habiby Yusuf",
    "Muhammad Krisna Arrasyid Setiaji",
    "Muhammad Nahwan Tsaqib Aqilah",
    "Muhammad Naufal Al Musyaffa",
    "Nibris",
    "Putra Khalifah Ramadhan",
    "Rizki Syahid Abdurrahman",
    "Sabiq Muhammad Badraan Zuhayr",
    "Tristan Thahir Al Madani",
    "Wafi Muhammad Azharul Haq",
  ] },
  { id: "ma-kelas-x-g", name: "MA - Kelas X G", students: [
    "Ahmad Furqon Habiburrahman",
    "Ahmad Toshi Arrazi",
    "Ahnaf Fathi Mushtaq Hammani",
    "Ali Fathurrahman Zein",
    "Ali Imannudin",
    "Dzakwan Nafis Almusoffa",
    "Erland Badriyya Alam",
    "Fikri Muhammad Rasikh Hanafi",
    "Hilmi Zhafirul Hannan",
    "Hisyam Ar Rayyan",
    "Irham Khalifatul Azzam",
    "Mikail Mumtaz Elfata",
    "Muammar Syafiq Khadafi",
    "Muhammad Abdurrafie Rabbani",
    "Muhammad Fahim Haekal",
    "Muhammad Fajri Aulya Nasution",
    "Muhammad Faqih Khairy",
    "Muhammad Haikal Mumtaz",
    "Muhammad Hisyam Harliman",
    "Muhammad Kukuh Munggaran",
    "Muhammad Najib Basuki",
    "Muhammad Nawab Tsaqib",
    "Muhammad Rafan Alfarizqi",
    "Radithya Hardi Zahi",
    "Rakha Hadyan Putera Rachmat",
    "Sayyaf Izzuddin",
    "Wildan Faiz Muzakki",
    "Zahiya Fathurrahman",
  ] },
  { id: "ma-kelas-x-h", name: "MA - Kelas X H", students: [
    "Adam Brian Sulistiyo",
    "Ahmad Zaady Tsabit Imana",
    "Ali Wirawan",
    "Ammar Shadiq Jinan",
    "Amzar Ibadur Rahman",
    "Caesar Alvaro Bani Rachman",
    "Daffa Kholis Azahran",
    "Dzikri Umar Rasyidin",
    "Eijaz Muhammad Haidar Anhari",
    "Farabirazy Albiruni",
    "Farhan Aulia Rahman",
    "Fathan Muhammad Fatih",
    "Fikro Fali Alirzad",
    "Gian Rahmat",
    "Harva Azkiya Wibawayudha",
    "Hilman Faqih",
    "Irsyad Musyaffa",
    "Khoirul Azzam Ramadhan Lubis",
    "M. Fawwaz Haidar Hilmi",
    "Muhammad Azka Hail",
    "Muhammad Fizzi Zulkarnaen",
    "Muhammad Nizam Mu'afa Faiq",
    "Nafis Ilham Arafat",
    "Nashwan Afzaal Ghanim",
    "Naufal Abdillah Sidqi",
    "Rakana Keanu El Ghazy",
    "Syaif Ahmad Jundu Falaah",
    "Umar Muhammad Alatas",
    "Wildan Muhammad Ali Jauhari",
    "Wildan Muhammad 'Ilmi",
  ] },
  { id: "ma-kelas-xi-i", name: "MA - Kelas XI I", students: [
    "Adzka Mutqin Muhammad",
    "Agviandra Ghevaldo",
    "Ahmad Isma'il",
    "Asyam Masyhur Dhiaulhaq",
    "Athhar Syahran Khairi Athallah",
    "Damar Saripambudi",
    "Dzikri Ahmad Mumtaaz",
    "Emir Zain Nurrizal",
    "Erdogan Fayzulhaqq Lubis",
    "Farrasy Grehadhika Al Musavna",
    "Habib Aghnanza Attaqy Robby",
    "Hanif Abdurrahman Al Fatih",
    "Idris Abdurrasyid",
    "Ilyas Iskandar",
    "Jazmi Ammar",
    "Muhammad Caesar Ramadhan",
    "Muhammad Ghifari Ar Rasyid",
    "Muhammad Hafidz Alim",
    "Muhammad Hasan Abdurrahman",
    "Muhammad Rafa'a Fadhlullah",
    "Muhammad Rafka Davian Alghifari",
    "Muhammad Shadam Rizki Abadi",
    "Muhammad Syahid Azizi",
    "Muhammad Syams Izzatulhaqq",
    "Muhammad Wafi Ikram",
    "Muhammad Yafi Al Baihaqi",
    "Muhammad Zaidan Madisha",
    "Rasikh Kambaring Rantissi",
    "Rif'at Basya Mabruri",
    "Yahya Gema Ramadhani",
  ] },
  { id: "ma-kelas-x-j", name: "MA - Kelas X J", students: [
    "Asyam Himly Azzahy",
    "Dinar Hanatama Anthony",
    "Fathi Adzka Mumtaz El Malik",
    "Fatih Fathurrahman",
    "Holtza Khairan Azzami",
    "Ibrahim Akbar Laksana",
    "Kaysan Nawfal Ali Munardana",
    "Muhammad Faqih Usman",
    "Muhammad Hadziq",
    "Muhammad Hilmi Al Fawwaz",
    "Muhammad Ikhsan Rumingkang",
    "Muhammad Ikram Firjatullah",
    "Muhammad Ismail Ahnaf",
    "Muhammad Iyas Adz-Dzakiy",
    "Muhammad Mahir Muaiqly",
    "Muhammad Nuhlan Mauludin",
    "Muhammad Rizqi Mustofa",
    "Muhammad Royyan Nafiz",
    "Muhammad Zhafi Ikram Arrachmat",
    "Musyaffa Akmal Ramadhan",
    "Nadhif Akhtar Dhyaulhaq",
    "Quthbuddien Ahmad Faai'z",
    "Rakha Arkana Syafiq",
    "Ronnan Fairuz",
    "Ruzaini Sabitul Fuada Ashshidiq",
    "Siraj Arrayyan Hartanto",
    "Zaad Alhaqq",
    "Ziyandra Andifa Hamdi",
  ] },
  { id: "ma-kelas-x-k", name: "MA - Kelas X K", students: [
    "Ayyasy Mujahid",
    "Azka Abdul Hadi",
    "Bagas Satria Nugraha",
    "Bagus Andita Rafaeza",
    "Daffa Athaya Hanif",
    "Fabio Khedira Triad Sugista",
    "Fadlan Fatihurrizqi",
    "Fathi Albanna Cahyadi",
    "Ibadurrahman Al-Mubarok",
    "Irfan Maulana",
    "Jundi Ahmad Asy Syauqi",
    "Maqdhiya Hayyin Fayadhurrahman",
    "Muhamad Fathir Fikrul Aziz",
    "Muhamad Fawwaz Nugraha",
    "Muhammad Abiyyu Fattah",
    "Muhammad Addura Haidar",
    "Muhammad Ahnaf Hafidzurahman",
    "Muhammad Ali Pasha",
    "Muhammad Arkaan Fathin",
    "Muhammad Haqi Najmuddin",
    "Muhammad Ikram",
    "Muhammad Rakasyah Harun Arrasyid",
    "Muhammad Zian Pakhira",
    "Rahmat Abdul Aziz Mualo",
    "Sadat Idlan Hakimi",
    "Sultan Asna Khairullah",
    "Syafiq Izza Alfaqih",
    "Umar Salim El Qassam",
    "Zubair Fatih Al Falah",
  ] },
  { id: "ma-kelas-x-l", name: "MA - Kelas X L", students: [
    "Achmad Djiebran Abduh",
    "Akram Faisal Saabiq",
    "Al Qawwam",
    "Azriel Almer Fayyadh",
    "Banyu Pragiwaka",
    "Fadhil Rafa Syauqi Izzudin",
    "Fadhlan Kamil Mushthofa",
    "Fadlan Finanda Hanania",
    "Fairuz Tsabit Nasrullah",
    "Hasan Shafiur Rahman Padang",
    "Iffat Altamis",
    "Izdihar Adzikra Altaf",
    "Jati Sundana",
    "Kent Silvaatmadja Ibrohim",
    "Khaizuran Assdan Alvaro",
    "Luthfi Rahman Mifzal",
    "Mibras Fawwaz Azhary",
    "Miqdad Ahmad Muharrik",
    "Muhammad Abbas Muqoddas",
    "Muhammad Arsyad Zahirul Haq",
    "Muhammad Fahri Rabbani",
    "Muhammad Faris Faizurrahman",
    "Muhammad Farras Hariza",
    "Muhammad Ridwan Faturrahman",
    "Muhammad Riziq Hamizan Fathoni",
    "Rosyad Ilman Azzamy",
    "Syafiq Hatadi",
    "Syihab Zunnurain Saidun Ali",
    "Taqi Faris Mafaza",
    "Wahid Humam Habiebie",
  ] },
  { id: "ma-kelas-x-m", name: "MA - Kelas X M", students: [
    "Altair Bhadrika Helandra",
    "Arkan Muhammad Alfayad",
    "Candra Septian Hadinata",
    "Danish Ashka Setiawan",
    "Dyllan Rasyeed Muharram",
    "Fadillah Abdurrohman Siddiq",
    "Faiz Ahmad Abdusysyakur",
    "Hafizi Hanan",
    "Hidayat Nurwahid",
    "Iflan Ahmad Fazri",
    "Kenzie Alghifari Raissa",
    "Khairul Azmi Haziq",
    "Lutfi Hasan",
    "Milan Abqary Pramono",
    "Mohammad Haytham Bhaday Saimima",
    "Muhammad Farrel Ardyan Alim",
    "Muhammad Furqon",
    "Muhammad Hafidz Firdaus",
    "Muhammad Rafa Robbani",
    "Muhammad Rafizia Rachman",
    "Muhammad Raid Asysyakib",
    "Muhammad Rizki Aditia",
    "Muhammad Shadra Muthohari",
    "Naufal Umar Fadhlullah",
    "Rafa Rifqi Abdillah",
    "Saktiawan Bima Prasetia",
    "Shofwan Ariqul Ulwan",
    "Thesa Nur Alim",
    "Umar Abdulkafi",
    "Zayyan Hamasatul Haq Annurrofiq",
    "Zidan Ahmad Hafidhi",
  ] },
  { id: "ma-kelas-xi-ipa-1", name: "MA - Kelas XI IPA 1", students: [
    "Abdullah Azmi",
    "Arfa Raisya Abdussalam",
    "Azza Saif Fathur F. Jafri",
    "Darrell Akilah Aggie Mukti",
    "Dewangga Aditya Putra",
    "Fadhirahman Attabiq",
    "Fahmi Rizky Nurzaini",
    "Fajar Teja Kusmawan",
    "Furqon Akmal Ramdhany Supriadi",
    "Galuh Raihan Putra Ritonga",
    "Huda Radithya Syakafanaya",
    "Ikhwan Syahputra Abdul Karim",
    "M. Azril Fauzi Rahman",
    "Muhammad Affan Robbani",
    "Muhammad Akif Fahmi",
    "Muhammad Bintang Nararya Rahat",
    "Muhammad Dehan Haidar",
    "Muhammad Faiz Al-Ghozy",
    "Muhammad Fatih Azzami",
    "Muhammad Ghiezza Khalifa Ayatullah",
    "Muhammad Rizqi Fadhlurrahman",
    "Muhammad Tegara Azka Ismail",
    "Muhammad Zaki Al Fathoni",
    "Rafa Alnadhir Abdurahmansyah",
    "Tahsin Nufail Afkar Tahni",
    "Umar Abdul Aziz",
    "Zivara Andromeda",
  ] },
  { id: "ma-kelas-xi-ipa-2", name: "MA - Kelas XI IPA 2", students: [
    "Adzka Rafagyan Prataya",
    "Arkan Faqih Handoyo",
    "Fadhlurrahman Naufal Maulana",
    "Fakhri Ahmad Prasetyo",
    "Farhan Mahmud Fallih",
    "Fathan Rabbani Djalal",
    "Gusti Agna Kanz",
    "Haikal Hasby Hamdani",
    "Ikmal Abdullah Alkatiri",
    "Iqbal Nidaul Azzam",
    "Ivan Ahmad Mudzaki",
    "Kasyifa Rizqi",
    "Muhajir Rabbani Alfaizi",
    "Muhammad Akmal Hasan",
    "Muhammad Azzam Shidqi Al Hafizh",
    "Muhammad Danil Muttaqin",
    "Muhammad Fadjri Firdaus Azzam",
    "Muhammad Irfan Al-Halik",
    "Muhammad Luthfan Aziz",
    "Muhammad Nafish Syauqi Santika",
    "Musyafa Abdillah",
    "Najmi Azhar",
    "Rofiq Robbani",
    "Sholahuddin Al Ayyubi",
    "Syafiq Naufal",
  ] },
  { id: "ma-kelas-xi-ipa-3", name: "MA - Kelas XI IPA 3", students: [
    "Ahdim Nanda Fahrezi",
    "Ahmad Faiz Itsnaini",
    "Ahmad Zaid Ramadhan Fathul Islam Asy Syamsu",
    "Akram Muhammad Hanif",
    "Arya Nadhif Pratama",
    "Bio Royyan Rusnandi",
    "Dilla Fawwaz Arsa Abqory",
    "Dzaky Wijdan Syamil",
    "Fadhiil Muhadzah",
    "Fakhri Hamdani",
    "Firnas Kafie El-Azzam",
    "Galiza Aqsho Madani",
    "Hafidz Arsyad",
    "Hamas Fatihulhaq",
    "Ibrahim Adilla Putra Santosa",
    "Mohammad Al Fahdi",
    "Muhammad Azzam Al Hafidzi",
    "Muhammad Iqbal Musyafa",
    "Muhammad Mufid Mu'tashim",
    "Muhammad Nabil",
    "Muhammad Saqy Jundurrahman",
    "Musyaffa Yusuf Bukhori",
    "Rakean Rashavin Rachman",
    "Riffat Danish Brilliantino",
    "Safwan Rafif Ramadhan",
    "Sofyan Maulana Rizky",
    "Yusuf Fauzan",
    "Zulfikar Asyraf Ghiffari",
  ] },
  { id: "ma-kelas-xi-ipa-4", name: "MA - Kelas XI IPA 4", students: [
    "Abdullah Faiz Muhammad",
    "Ahira Gaza Al-Banna",
    "Ahmad Hadziq Khairul Azzam",
    "Al Azzam Zaidan Maulana Muhammad",
    "Al-Muzzammil Fathu Rochmaan Ahmad",
    "Attaya Rizky Ramadhan",
    "Azril Alfian Husaini",
    "Chandra Agustian Ar Rashed",
    "Dean Aqromulazam Hidayatullah",
    "Dhiadry Syafiq Setiadi",
    "Faiqilham Izdihar Fathuna Atman",
    "Farand Mirza Ukail",
    "Fathin Hawwas El-Sanie",
    "Fatih Dzakwan Arkansyah",
    "Hafidz Rafi Rabbani",
    "Hanif Arinal Haq",
    "Khairul Azzam",
    "Muhammad Abiy Raqilla",
    "Muhammad Athaullah Wasim Al Wafi",
    "Muhammad Dzaki Zhafran K.",
    "Muhammad Faizi Ardinansyah",
    "Muhammad Syahdan Adliansyah",
    "Muhammad Zaki Al Hasbi",
    "Nabhan Sakha Ariyatman",
    "Najib Rasyid Arief",
    "Rakha Rizky Hanannia",
    "Said Shathir Muzaky",
    "Sulthon Mahatsir Al-Khawarizmi",
    "Zulfan Faiz Ridwan Sholeh",
  ] },
  { id: "ma-kelas-xi-ipa-5", name: "MA - Kelas XI IPA 5", students: [
    "Abdullah Azzam",
    "Abdulloh Syafi'I",
    "Ahmad Ahdan As-Tsaqiif",
    "Alauddin Hisyam Ath Thaariq",
    "Althaf Arpannera Junio",
    "Avarrel Salim Rahman",
    "Danish Ar-Rasyid",
    "Faiz Al Qodri",
    "Fasyhad Billah Ziaulhaq",
    "Fawwaz Khairu Al Faqih",
    "Fikri Aulia Hanan",
    "Ghailan Kaisar Nizar",
    "Ghazi Muhammad Misy`al",
    "Hafiz Ahmad Althaf Kertadidjaja",
    "Ismail Ayyasy Abdurrahman Sholeh",
    "Muhammad Adib Fathin Hafidzy",
    "Muhammad Azzam Mustaqim",
    "Muhammad Fachry Fillah Al Fatih",
    "Muhammad Faqih Arfenanda",
    "Muhammad Hisyam Hibatullah",
    "Muhammad Rafah Ghaisan Azkiya",
    "Muhammad Thoriqurrahman",
    "Naufal Imam Fahmi",
    "Raki Rabani Rahman",
    "Rifqi Arzil Alhanan",
    "Sulthan Zaky Nubaid",
    "Syahid Abdurrahman Alharits",
  ] },
  { id: "ma-kelas-xi-ipa-6", name: "MA - Kelas XI IPA 6", students: [
    "Abdurrofi Farid Arifin",
    "Adli Haidar Rizqullah",
    "Alfath Rafialdo",
    "Altaf Udhi Taqiazzaki",
    "Althaf Muhammady Andira",
    "Diara Akbar Abdillah",
    "Faiz Farras Irawan",
    "Fauzan Nayif Dzakiya",
    "Fayyaz Ghazanfar Santoso",
    "Habib Rosikh Fil Ilmi",
    "Izzuddin",
    "Muhammad Ainun Allam Dwi Jaka",
    "Muhammad Daffa'Ashidiq",
    "Muhammad Farrel Al Faridzy",
    "Muhammad Nizam Al Farisy",
    "Muhammad Rafif Rafasya Heldiawan",
    "Muhammad Rizqi Al-Baroqah",
    "Muhammad Zain Adzka",
    "Rayhan Hafiz Kimibarmanto",
    "Syazwan Faiq Ghaida",
    "Varras Habiburrasyid Atsauri",
    "Zahwan Nailun Nabhan",
  ] },
  { id: "ma-kelas-xi-ipa-7", name: "MA - Kelas XI IPA 7", students: [
    "Abdurrahman Kahleef Akbar",
    "Abu Bakar Syam Abbas",
    "Ajmal Ghani Ridwan",
    "Alvalief Putra Erlianto",
    "Aydin Khairuna Umar",
    "Didar Ali Fahruja",
    "Ezra Radithya Arvin",
    "Faiz Haidar Mustofa",
    "Galan Zian Firjatullah",
    "Keanu Annabiyl Reyhadi",
    "M. Dzakki Salamun Al-Fath",
    "Muhamad Zahri Akram",
    "Muhammad Akhla Bintang Almakky",
    "Muhammad Fakhri Abdurrahman",
    "Muhammad Fakhri Albari",
    "Muhammad Habibie Al Rafi Benzema",
    "Muhammad Hafizh Herdiana",
    "Muhammad Rizki Hutabarat",
    "Muhammad Royyan Al-Farizi",
    "Muhammad Shafa Dwiyanto",
    "Muhammad Yusuf Muzakky",
    "Rafael Aidif Putra Santoso",
    "Sakha Aqila Al Ausath",
    "Umar Hafiz Fatani",
    "Yahya Syathir Rahmat",
  ] },
  { id: "ma-kelas-xi-ips-1", name: "MA - Kelas XI IPS 1", students: [
    "Abdullah Azzam Mubarok",
    "Achmad Hadi Hasanudin",
    "Ezra Adly Dimitri",
    "Faris Abbad Ramadhan",
    "Hamdi Harik",
    "Kevin Rava Ardani",
    "Muhammad Asfa As Syaukai",
    "Muhammad Azka Al-Hazmi",
    "Muhammad Faqih Abdurrahman",
    "Muhammad Fathan Al-Ghifari",
    "Muhammad Ghozan Kamal Addin",
    "Muhammad Haidar Rakha Sultana",
    "Muhammad Husnur Rizal",
    "Muhammad Rizqy Muharram",
    "Muhammad Zaki Ardhani",
    "Nu'man Aliy Zain",
    "Nurcholis Supriyadi Ramadhan",
    "Rakha Nurullah",
    "Salman Fathu Muhammad",
    "Zaidan Musyaffa",
  ] },
  { id: "ma-kelas-xi-ips-2", name: "MA - Kelas XI IPS 2", students: [
    "Alvais Roinson Sulider",
    "Alwan Khairy Azzam",
    "Amru Zuhayr Yassar",
    "Azriel Maulana Basit",
    "Faeyza Fakhruddin Fayyadh",
    "Faqih Akram Rayyan",
    "Faqihudin Robbani",
    "Gibraltar Karang Abimanyu",
    "Gibran Al Ghifari",
    "Haidar Ali Muhammad",
    "Hanif Althaf Firdaus",
    "Imam Taufiqurrohman",
    "Jiyad Azka Dhiaulhaq",
    "Khalifah Ibrahim Al-Ayyubi",
    "Maulana Syahdan Prabowo",
    "Mohamad Azzam Shidqi Farkhani",
    "Muhammad Arya Galih Pamungkas",
    "Muhammad Farih Jihady",
    "Muhammad Luthfi Khoiry",
    "Muhammad Najwan Azzahid",
    "Mukarram Ubaid Pasha",
    "Munadzir Dawwas Muhtar",
    "Naufal Fawwaz Dzulhilmimajid",
    "Nizar Hatila Zakwan",
    "Nurfikri Cahya Suhada",
    "Shofyan Saputra",
    "Zahir Ahmad Izzatunnafi Gunadi",
    "Zaid Ahsan Hariri",
  ] },
  { id: "ma-kelas-xi-ips-3", name: "MA - Kelas XI IPS 3", students: [
    "Aiman Al Fathi Dhiya'ur Rahman",
    "Azzamy Syauqi Pratama",
    "Fadhlulloh Rizqi Saputra",
    "Faiq Rasyad Sabilulhaq",
    "Fatih Asyam",
    "Izzuddin Habibie Rosid Manik",
    "Khairu Rabbani Ahta",
    "Muhammad Ali Batubara",
    "Muhammad Harits Hatami",
    "Muhammad Nizarul Daffa",
    "Muhammad Ridho Febrianto",
    "Muhammad Rifqi Hisyam",
    "Muhammad Shiddiq Alghazali",
    "Muhammad Umar Zulfikar",
    "Nashif Akhtar",
    "Nawwal Abiyyu Nugroho",
    "Raffasya Galih Puspito",
    "Syahdan Naffis Safaras",
    "Tazakka Syafiq Sabili Putra Al Fath",
  ] },
  { id: "ma-kelas-xi-ips-4", name: "MA - Kelas XI IPS 4", students: [
    "Ahmad Dzaki Setiyanto",
    "Arizandy Yusuf Al'Athaya",
    "Arkan Abdillah Arksya",
    "Fakhri Assyarif",
    "Fatih Zahid Hawary",
    "Imad Fadillah Husin",
    "Kafi Istaz Alghazi",
    "M. Azmal Dhiyaulhaq",
    "Muammal Nawwafi",
    "Muhamad Dinar Rayhan",
    "Muhammad Ahnaf Athoillah",
    "Muhammad Arkananta Altamadeva",
    "Muhammad Azzam Fayazi",
    "Muhammad Ismail Sikayo",
    "Muhammad Raziq Hanan",
    "Muhammad Widad Kautsar",
    "Muhtadi Azhar Ramadhan",
    "Nabil Putra Alfarizi",
    "Naufal Ardiyanta",
    "Raihan Ulinnuha Alzada",
    "Wafiq Hidayah",
    "Zahir Abdurrahman",
    "Zhafran Ayyasy Prasetyo",
  ] },
  { id: "ma-kelas-xi-pk-1", name: "MA - Kelas XI PK 1", students: [
    "Abdullah Azzam",
    "Ahmad Musyafa Al Hakim",
    "Ahmad Nabil",
    "Akmal Rafif Azzami",
    "Dhia Fakhri Pratama Zanur",
    "Fauzan Ali Abqori",
    "Habiburrahman Alauddin As'Ad",
    "Hanif Syafiq Satiawan",
    "Jaisyullah Annur' Ajaba",
    "M. Farras Iftikhar Winoto",
    "Muammar Syafiq Prasetyo",
    "Muh Zulfikriansyach Sadi",
    "Muhammad Akhyar Abdie",
    "Muhammad Al Ghifari Ali",
    "Muhammad Hafidz Al-Bachtiary",
    "Muhammad Hamzah Al-Fatih",
    "Muhammad Hikam Ziyan",
    "Muhammad Nur Alauddin",
    "Muhammad Patra Rakha Asshidqie",
    "Muhammad Qiyamullail Al-Farisi",
    "Muhammad Raisya Putra Yofa",
    "Muhammad Wafda Rahmani",
    "Rayhan Rizky Kurniawan",
    "Reno Nur Alfiansyah",
    "Shalahuddin Al Hanif",
    "Syamil Achmad Khoiri",
    "Zahid Ahmad Athallah",
  ] },
  { id: "ma-kelas-xi-pk-2", name: "MA - Kelas XI PK 2", students: [
    "Adlie Khairy Nasywan",
    "Afifuddin Nasywan",
    "Ahmed Azzam Dail Ma'ruf",
    "Alfadel Ghiyatse Abbas",
    "Aqila Althafiano",
    "Aslam Yasir",
    "Azzam Baihaqi",
    "Azzam Khairul Insan",
    "Fariz Nabil Siraj",
    "Fathin Muhammad Alfaruq Siroji",
    "Hammam Falih",
    "Hanif Muhammad Nuri",
    "Ikram Bukhari Habibur Rahim",
    "Imaduddin Zanky Al-Ghazi",
    "Izaz Muslim Rabbani",
    "Khalid Aflah Cahyadi",
    "Mohammad Bilal Adiprawira",
    "Muhamad Sayyid Aqil",
    "Muhammad Fatih Farhat",
    "Muhammad Hamas Fathin",
    "Muhammad Malik Ibrahim",
    "Muhammad Syafiq",
    "Muhammad Syamil Taqiyyuddin",
    "Muhammad Tsaqif Faizi",
    "Muhammad Yusuf Fawwaz",
    "Mujahid Jundu Rahman",
    "Razan Dzaki Al Zuhdi",
    "Rifqi Ramadhan",
    "Salim Yusron",
    "Taqy Zaadi Khoiri",
    "Yazid Ghani Ilham",
    "Zidan Ahmad Hafidhi",
  ] },
  { id: "ma-kelas-xii-ipa-a-1", name: "MA - Kelas XII IPA A 1", students: [
    "Abdullah Ammar Rabbani",
    "Abyan Sabiq Al Faqih",
    "Ahmad Hamizan Zahiruddin",
    "Aminto Muhammad Arrumi",
    "Ardhan Naji Rizal Fakhri",
    "Auriga Rafa Aqila",
    "Azzam Ali Syafiq",
    "Azzam Ilman Ramadhan",
    "Bukhari Yusuf Muzzammil",
    "Daris Mustofa Aqil",
    "Farhan Hanif Adnan",
    "Farrel Muhammad Fathurrohman",
    "Fikri Akmal Rozikin",
    "Ghazi Hafizuddin Najib",
    "Hafizh Abdurrahman Hutabarat",
    "Hilman Rosid",
    "Imam Shidqy Al Fatih",
    "Kautsar Mursyid Maherdani",
    "M. Fisabilillah Latrama",
    "Muhamad Rafi Azka Lazuardi",
    "Muhammad Athaya Al Fatih Setiyanto",
    "Muhammad Faruq",
    "Muhammad Rayhan Fais Yardan",
    "Muhammad Syahmy Kamil Robbany",
    "Muhammad Tsaqif Rabbani",
    "Rasendriya Billawal Basuki",
    "Rizky Hamid Ramadhan",
    "Sabiq Darojatun",
    "Sulthan Muhammad Abudh",
    "Ziyad Ezzath Almuttaqin",
  ] },
  { id: "ma-kelas-xii-ipa-a-2", name: "MA - Kelas XII IPA A 2", students: [
    "Abdullah Djibril Atthoriq",
    "Ahmad Umar Alfaruq",
    "Ahmad Zahid Muzayyin",
    "Alif Mifathul Rizky",
    "Arsyad Rifai Al Murtadha",
    "Asy Syaikha Albikhair",
    "Azka Herdianza",
    "Azzam Ibadurrahman",
    "Daffa Adliansyah Rachman",
    "Danish Aulia Rahman",
    "Fakhri Muhammad Fajar",
    "Farras Naufal Kusuma",
    "Faza Nanda Hadiyaka",
    "Gaza Haidar Ali",
    "Hanif Muzakki Indarto",
    "Hilmi Nurhuda Humaidi",
    "Husein Ahmad Yazid",
    "Idham Nailul Huda Alimi",
    "Khairul Azzam",
    "Muhamad Majdi Assydqi",
    "Muhammad Azhar Hakim",
    "Muhammad Azzurea Aghny",
    "Muhammad Farrel Gadi Kayana",
    "Muhammad Hafidzuddin Al Faiz",
    "Muhammad Shiddiq Abdussami`",
    "Razan Muhammad Al Falah",
    "Roisul Amin Mustofa",
    "Syahdan Hafidz Rabbani",
    "Syauqi Zam Zami",
  ] },
  { id: "ma-kelas-xii-ipa-a-3", name: "MA - Kelas XII IPA A 3", students: [
    "Abdullah Yusuf Azzam",
    "Afifo Sri Pradipa",
    "Ahmad Jaisyi Rabbani",
    "Akram Musyaffa Kanindra Putra",
    "Arju Ridhorrohman",
    "Athaya Fikri Phon Ramadhana",
    "Azhar Dzaki Saputra",
    "Dudi Tirta Wiyono",
    "Emir Fakhri Muhammad",
    "Fakhri Abiyyu Novarsena",
    "Faris Ibnu Syuhada Alghaza",
    "Fawwaz Naufal Abdillah",
    "Ghoza Muhammad Hanin",
    "Hanif Habibullah",
    "Hasan Ahmad Yasin",
    "Hisyam Abdullah Faqih",
    "Ibrahim Dimitri",
    "Kevin Rakadita Saputra",
    "Moch. Raihan Putra Misbach",
    "Muhammad Athar Alrafi",
    "Muhammad Daffa Afif",
    "Muhammad Fathan Asraar Rachman",
    "Muhammad Hanif",
    "Muhammad Hasan Albasri",
    "Muhammad Nasrullah Hidayat",
    "Muhammad Rafif Zahid",
    "Muhammad Safaraz Akma Fadhli",
    "Rafif Athallah",
    "Rif`atul Muna",
    "Rigel Isfy Rizkillah",
    "Rizqie Insan Mutaqien",
    "Zayid Fauzan Arkanu",
    "Zidny Taqiyya Albar",
  ] },
  { id: "ma-kelas-xii-ipa-a-4", name: "MA - Kelas XII IPA A 4", students: [
    "Abdurrahman Al Faqih",
    "Ahmad Azril Firdaus",
    "Ahmad Muzzammil Ayyash",
    "Aisy Hafiy Ramadhan",
    "Ammar Haidar Abrisam",
    "Banyu Rizqi Triadi",
    "Fachreyz Triyanu Ghaziyan Fillah",
    "Fadlan Islahudin",
    "Faiz Akmal Altaf Musyaffa",
    "Hamas El Jihadi Yusuf",
    "Harra Adzkiananta Ramadhan",
    "Hilmi Taqiy Robbany",
    "Ibrahim Rizki Tsabat",
    "Keefe Azri Afif",
    "Launa Muhammad Agiel",
    "Mifzal Fatih Salahuddin",
    "Muhamad Najwan Al Jauhari",
    "Muhammad Aqil Gandesraspati",
    "Muhammad Azzam",
    "Muhammad Bima Aulia",
    "Muhammad Farhan Fadlurrahman",
    "Muhammad Fatih Hafizzurahman",
    "Muhammad Hamzah Ayyasy",
    "Muhammad Irfan Yunus",
    "Muhammad Rifky Abqory",
    "Najmu Zaqi Fathul Islam",
    "Regan Hany Rizkillah",
    "Resal Ahmad Fauzan",
    "Rizqi Ihsanurramadhan",
    "Sultansyah Zayyan Al Asyraf",
    "Zaidan Muhammad Lais",
  ] },
  { id: "ma-kelas-xii-ipa-a-5", name: "MA - Kelas XII IPA A 5", students: [
    "Abyan Fauzi",
    "Ahmad Dzaki",
    "Ahmad Hirzi Hadi",
    "Aldiansyah",
    "Arya Paksi Jaladara",
    "Azzam Bachtiar Anhari",
    "Bayu Hemas Prabowo",
    "Devanno Aldansyah Gianezar",
    "Fachri Maulana Yusuf",
    "Fachry Asyam Kurniawan",
    "Faric Najmi Ahmad Wikarta",
    "Fathan Shihab Al Ghifari",
    "Fikri Zahran Muharram",
    "Hanif Aufa Dwiswara",
    "Ismail Mumtaz",
    "Khenza Ghaly Raditya",
    "Mighwar Al Farisi",
    "Muhamad Rafa Reinard Putra",
    "Muhammad Fawwaz Rabbani",
    "Muhammad Lutfan Anfakhri",
    "Muhammad Rausyan Fikri",
    "Muhammad Ravanza Syakur Hertanto",
    "Muharrikul Hammas",
    "Muzaffar Gaza Lubis",
    "Nabhan Arkan Sukmana",
    "Radithya Nafi Zulfadhli",
    "Raihan Khairullah Kamil",
    "Satria Gaza",
    "Satrio Albany Jhoandry",
    "Shidqi Hafidz Mu`awwadz",
    "Thoriq Addien Al Zena",
  ] },
  { id: "ma-kelas-xii-ipa-b-1", name: "MA - Kelas XII IPA B 1", students: [
    "Abdul Hanif Akbar",
    "Adam Ahmad Viyandhika",
    "Affan Al Mahdi",
    "Ahmad Maulana Hasan",
    "Air Damai",
    "Azmi Muhamad Fakhri",
    "Dzakiy Muflih Wicaksono",
    "Faris Fatihin",
    "Fathan Sahlan Syawal",
    "Ghaiyyas Adlan Mikaili",
    "Hammam Athif Andryan",
    "Hanief Mudrik",
    "Hizbullah Haqqi",
    "Ilham Ramdhani",
    "Jayid Muhammad Irsyad",
    "Malik Rafi Ghani",
    "Mirza Fadil Hazim",
    "Muhamad Asep Firmansyah",
    "Muhammad Abdillah",
    "Muhammad Adib Shalahuddin",
    "Muhammad Akhtar Aufa",
    "Muhammad Arham Shidqi",
    "Muhammad Daffa Abdurrahman",
    "Muhammad Fairuzul Wafi",
    "Muhammad Fakhri Khoirurrizqi",
    "Muhammad Ghailan Yahya",
    "Muhammad Ghaisan Rahadatul Aisy",
    "Muhammad Hafidz Rafi Rabbani",
    "Muhammad Hisyam Al Fatih",
    "Muhammad Jibril Ali Rumi",
    "Rayyan Ervan Rabbani",
    "Razqa Binar Wiriadiredja",
    "Salman Akmal Alfian",
    "Zaky Hasan Alghazali",
  ] },
  { id: "ma-kelas-xii-ipa-b-2", name: "MA - Kelas XII IPA B 2", students: [
    "Achyari Nur Reiza Akbar",
    "Akmal Ramadhan",
    "Alviano Hilmy Mubarrok",
    "Ariya Setiyaji",
    "Bintang Ahmad Al Aufi",
    "Dhiaul Azharain",
    "Fadhil Miftah Firdaus",
    "Fadlil Haidar Zahran",
    "Faishol Ahmad Robbani",
    "Gathan Haidar Aqil",
    "Hadi Putra Tanjung",
    "Haikal Miftahul Karim Susanto",
    "Hasif Adhwa Khalaf",
    "Ilham Abdullah Sani",
    "Irham Ahdan",
    "Kenzie Azmi Sugama",
    "M. Afian Ilham Putra",
    "Muhammad Azka Maulana",
    "Muhammad Fathurrahman",
    "Muhammad Fathurrahman Nur Rohmansyah",
    "Muhammad Ghazi Al Faruqie",
    "Muhammad Hilmi Alghifari",
    "Muhammad Jihady Al Ghozali",
    "Muhammad Khalifan Nafiansyah",
    "Muhammad Nabil Arrosyid",
    "Muhammad Rafi Yusuf",
    "Muhammad Yahya Akrami",
    "Mujahid Muda",
    "Nakhlah Badruzzaman Aljena",
    "Rakha Akmal Musyaffa",
    "Sakha Aqila Aushaf",
    "Salman Addawamy",
    "Wildan Fathul Farras",
  ] },
  { id: "ma-kelas-xii-ips-a-1", name: "MA - Kelas XII IPS A 1", students: [
    "Abdullah Hudzaif Muhtar",
    "Abyan Rifqy Ramadhan",
    "Afgan Badru Zaman",
    "Ahmad Hafizh Ihtimam",
    "Akhdan Kenard Razaki",
    "Alif Gian Fahrezy",
    "Ardhan Mulky Adly",
    "Ashif Ramadhan Al-Rafi",
    "Bagas Anindya Budiman",
    "Danang Setianugraha",
    "Fiqrie As Shidieq Yudakusumah",
    "Hafidz Faturrahman",
    "Hilmi Rosid",
    "Ihsan Jati Setiawan",
    "Irsyad Noor Virza Sutansyah",
    "M. Faiq Akifurrahman",
    "Muhammad A`zam Alfauzan",
    "Muhammad Athallah Kamil",
    "Muhammad Fajar Arrizki",
    "Muhammad Fauzan",
    "Muhammad Nabil Laksana",
    "Muhammad Raffy Octaviano Arifin",
    "Rafa Hafiz Ghaisan",
    "Sadullah Azzam Assyahid",
    "Thoriq Dziyab",
    "Zaim Mudzakilhanif",
  ] },
  { id: "ma-kelas-xii-ips-a-2", name: "MA - Kelas XII IPS A 2", students: [
    "Abdullah Muhammad",
    "Ahmad Revithra Hayfa",
    "Ahmad Royhan Dwi Faris",
    "Algani Hilmi Musthafa Arsy",
    "Asyraf Ahza Al Faruqi",
    "Ayasy Abdillah",
    "Faith Dzaka Hafin",
    "Fathan Fadlullah",
    "Haidar Alvis Nirwasita",
    "Harits Uwais Abdurrahman",
    "Ibtisam Jaisyullah Al Jasir",
    "Mu`adz Rosyad",
    "Muhammad Abdul Karim",
    "Muhammad Asif Bachir Baskara",
    "Muhammad Azka Azura",
    "Muhammad Fahri Al Ghifary",
    "Muhammad Jasir Umar Sabili Almaqdisy",
    "Muhammad Luthfi Azzahir",
    "Muhammad Manik Julianto",
    "Muhammad Nizam Afzalurahman",
    "Muhammad Nur Fitriansyah",
    "Muhammad Rayhan Alfario",
    "Padriyanto Rafaeyza Ahmad",
    "Raditya Haidar Tahri",
    "Zulfikar Ali Waliyyuddin Alghazali",
  ] },
  { id: "ma-kelas-xii-ips-a-3", name: "MA - Kelas XII IPS A 3", students: [
    "Abdurrahman Garin Pratama",
    "Abdussyahid Azmi",
    "Ahmad Mubarok",
    "Atabik Tifrij Musykilat",
    "Azzam Husamulhaq Alsaud",
    "Billy Jordan Habibie",
    "Elfath Syauqi Zain",
    "Fakhraldin Ghazi Al-Ayyubi",
    "Fauzil Adzim",
    "Hafiz Tsabit Rabbani",
    "Justin Faris Alhamdi",
    "Khairul Azzam",
    "M. Costa Rozi",
    "Muhammad Abid",
    "Muhammad Azri Azizurrahman",
    "Muhammad Bimo Al Malik",
    "Muhammad Darrel Alvaro",
    "Muhammad Farras",
    "Muhammad Faza Ni`am Akbar",
    "Muhammad Habsyan Najmi Solihin",
    "Muhammad Muharor Muslih Ginting",
    "Muhammad Nazhif Hidayat",
    "Muhammad Tsabit Zaidan",
    "Nabil Fakhri Imami",
    "Panca Legenda",
    "Rafi Abdurrahman",
    "Raihan Algazali Dano Hasan",
    "Syahrul Mubarok",
  ] },
  { id: "ma-kelas-xii-ips-b-1", name: "MA - Kelas XII IPS B 1", students: [
    "Abyan Muhamad Toha",
    "Ahmad Luqmanul Hakim",
    "Ahmad Sayyaf Hibatullah",
    "Akhtar Mawla",
    "Arkan Athalla Fadly",
    "Azam Suryaputra Hidayat",
    "Bramantio Putra Mahkota",
    "Fadhil Ubaydillah Kurniawan",
    "Fathi Farhat",
    "Jaesyun Muhammad Al Haq",
    "Kemal Arbianiz",
    "Langgeng Rizky Mudzoffar",
    "Malik Hakim Sikayo",
    "Maulana Ibrahim Rasyidin",
    "Muhammad Ali Haidar",
    "Muhammad Daffa` Al Qassam",
    "Muhammad Fakhri Albani",
    "Muhammad Fakhri Nabhan",
    "Muhammad Faqih Asyraf Naufal",
    "Muhammad Fauzil Adhim",
    "Muhammad Ghiyaats Ramadhan",
    "Muhammad Mumtaz",
    "Muhammad Muqi Aziz",
    "Muhammad Rafiq Muthohar",
    "Muhammad Salman Madisha",
    "Muhammad Sayyid Faqih",
    "Rafid Zain Nur Iswan",
    "Syafril Nur Muzaqi",
    "Syamil Maulana Firdaus",
    "Syayid Muhammad Fathan Abbas",
    "Ubaidillah Khairul `Azam Salim",
  ] },
  { id: "ma-kelas-xii-pk-1", name: "MA - Kelas XII PK 1", students: [
    "Abdu Akhmad Al Aziz",
    "Ahmad Zarkasyi",
    "Ahnasul Haq",
    "Akhtar Ayyasy Assajjad",
    "Aly Noor Faiz",
    "Azkhan Ihsan Al Hafidz",
    "Darrell Saffah Iommi Hasibuan",
    "Fadli Faidlurrahmaan",
    "Fatih Jundi Rabbani",
    "Habiburrahman Alwafi",
    "Izzaturrahmaan Adz-Dzaki",
    "Kalif Rakha Syahrazy",
    "Khalid Iyhabullah",
    "Marvel Adithya Dinata",
    "Muhamad Zakiy Farizal",
    "Muhammad Arfa Sadin",
    "Muhammad Fathin Auzai",
    "Muhammad Harun Al-Latif",
    "Muhammad Lian Kamaluddin",
    "Muhammad Qais Nashrullah",
    "Muhammad Raihan Ibnu Syakier",
    "Muhammad Rizieq Mubarok",
    "Muhammad Suhaib",
    "Muhammad Zakariyya Fadhlurrohman",
    "Muhammad Zaki Yamani",
    "Naufal Sakhiy Cahya Abdillah",
    "Noor Yahya Ahnafush Shalihin",
    "Nuh Nadjib Helmy",
    "Rahiel Kaysan Nawfal",
    "Rizki Abdul Faqih",
    "Syamil Ilyasa Muhadzib",
  ] },
  { id: "ma-kelas-xii-pk-2", name: "MA - Kelas XII PK 2", students: [
    "Abdulhakim Fursaani",
    "Ahmad Khalish Syarifudin",
    "Al Auzai Muhlasin",
    "Alfandy Assdan Tsaqief",
    "Alim Abdu Yakhsyallah",
    "Ammar Auliaurrahman",
    "Buraidah",
    "Fadlan Abdurrahman",
    "Faiz Muhammad Zain Alma`ruf",
    "Faris Muhammad Azzahrawi",
    "Hayyan Aushaf Putra",
    "Kayyis Naufal Ali",
    "Khairu Ilham Muhammad",
    "Luhung Wiradjati",
    "Mixal Mina Ashabul Kahfi",
    "Muhammad Aghitsna Matin",
    "Muhammad Alfathsi Athalla",
    "Muhammad Arfa Firdaus",
    "Muhammad Arsa Raza Rajendra",
    "Muhammad Azzam Al Mubarrak",
    "Muhammad Fakhry Ash Shiddiqy Nugraha",
    "Muhammad Hafizh Al Aqsha",
    "Muhammad Kays Muzakky",
    "Muhammad Qais",
    "Muhammad Raihan Musyafa",
    "Muhammad Syafiq Safar Rahman",
    "Muhammad Syauqi",
    "Nizar Rayan",
    "Qais",
    "Rabbani Kautsar",
    "Rizki Maulana Akbar",
    "Sabili Izzul Jihad",
    "Wafi Ihsanul Afiq",
  ] },
];
const { useState, useRef, useEffect, useCallback } = React;
const PALETTE = {
    paper: "#F4EEDF",
    paperDark: "#E9E0C9",
    ink: "#2A2118",
    inkSoft: "#6B5F4E",
    green: "#1F4838",
    greenDark: "#153229",
    red: "#B23A2E",
    gold: "#B98B3E",
    line: "#D8CBB0",
};
const MAX_W = 760;
// ---------- icons (inline SVG, no external dependency) ----------
function Icon({ path, size = 16, strokeWidth = 2, viewBox = "0 0 24 24", children }) {
    return (React.createElement("svg", { width: size, height: size, viewBox: viewBox, fill: "none", stroke: "currentColor", strokeWidth: strokeWidth, strokeLinecap: "round", strokeLinejoin: "round" }, children || React.createElement("path", { d: path })));
}
const IconCheck = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M20 6 9 17l-5-5" }));
const IconX = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M18 6 6 18M6 6l12 12" }));
const IconPlus = (p) => React.createElement(Icon, Object.assign({}, p, { path: "M12 5v14M5 12h14" }));
const IconTrash2 = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 6h18" }),
    React.createElement("path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }),
    React.createElement("path", { d: "M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" }),
    React.createElement("line", { x1: "10", y1: "11", x2: "10", y2: "17" }),
    React.createElement("line", { x1: "14", y1: "11", x2: "14", y2: "17" })));
const IconPencil = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M17 3a2.83 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" })));
const IconDownload = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }),
    React.createElement("polyline", { points: "7 10 12 15 17 10" }),
    React.createElement("line", { x1: "12", y1: "15", x2: "12", y2: "3" })));
const IconRotateCcw = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 12a9 9 0 1 0 3-6.7L3 8" }),
    React.createElement("polyline", { points: "3 3 3 8 8 8" })));
const IconUsers = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" }),
    React.createElement("circle", { cx: "9", cy: "7", r: "4" }),
    React.createElement("path", { d: "M23 21v-2a4 4 0 0 0-3-3.87" }),
    React.createElement("path", { d: "M16 3.13a4 4 0 0 1 0 7.75" })));
const IconCamera = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z" }),
    React.createElement("circle", { cx: "12", cy: "13", r: "4" })));
const IconHistory = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("path", { d: "M3 3v5h5" }),
    React.createElement("path", { d: "M3.05 13A9 9 0 1 0 6 5.3L3 8" }),
    React.createElement("polyline", { points: "12 7 12 12 16 14" })));
const IconCircleDot = (p) => (React.createElement(Icon, Object.assign({}, p),
    React.createElement("circle", { cx: "12", cy: "12", r: "10" }),
    React.createElement("circle", { cx: "12", cy: "12", r: "1", fill: "currentColor" })));
// ---------- storage helpers (localStorage, fully offline) ----------
const STORE_PREFIX = "absensi-kitab:";
async function safeGet(key) {
    try {
        const raw = localStorage.getItem(STORE_PREFIX + key);
        return raw ? JSON.parse(raw) : null;
    }
    catch (_a) {
        return null;
    }
}
async function safeSet(key, value) {
    try {
        localStorage.setItem(STORE_PREFIX + key, JSON.stringify(value));
        return true;
    }
    catch (_a) {
        return false;
    }
}
async function safeDelete(key) {
    try {
        localStorage.removeItem(STORE_PREFIX + key);
    }
    catch (_a) { }
}
// ---------- red-blob detection ----------
function detectRedBlobs(data, width, height) {
    const visited = new Uint8Array(width * height);
    const isRed = (idx) => {
        const r = data[idx * 4], g = data[idx * 4 + 1], b = data[idx * 4 + 2];
        return r > 110 && r - g > 35 && r - b > 35;
    };
    const blobs = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const idx = y * width + x;
            if (visited[idx])
                continue;
            visited[idx] = 1;
            if (!isRed(idx))
                continue;
            const stack = [[x, y]];
            let minX = x, maxX = x, minY = y, maxY = y, count = 0;
            while (stack.length) {
                const [cx, cy] = stack.pop();
                count++;
                if (cx < minX)
                    minX = cx;
                if (cx > maxX)
                    maxX = cx;
                if (cy < minY)
                    minY = cy;
                if (cy > maxY)
                    maxY = cy;
                const neighbors = [[cx + 1, cy], [cx - 1, cy], [cx, cy + 1], [cx, cy - 1]];
                for (const [nx, ny] of neighbors) {
                    if (nx < 0 || ny < 0 || nx >= width || ny >= height)
                        continue;
                    const nidx = ny * width + nx;
                    if (visited[nidx])
                        continue;
                    visited[nidx] = 1;
                    if (isRed(nidx))
                        stack.push([nx, ny]);
                }
            }
            const bw = maxX - minX, bh = maxY - minY;
            if (count > 12 && bw < width * 0.25 && bh < height * 0.12) {
                blobs.push({ x: (minX + maxX) / 2, y: (minY + maxY) / 2, count });
            }
        }
    }
    return blobs;
}
function clamp(n, lo, hi) {
    return Math.max(lo, Math.min(hi, n));
}
// ================= Class Manager =================
function ClassManager({ classes, setClasses }) {
    const [editing, setEditing] = useState(null);
    const [name, setName] = useState("");
    const [namesText, setNamesText] = useState("");
    const startNew = () => { setEditing("new"); setName(""); setNamesText(""); };
    const startEdit = (c) => { setEditing(c.id); setName(c.name); setNamesText(c.students.join("\n")); };
    const cancel = () => setEditing(null);
    const save = async () => {
        const students = namesText.split("\n").map((s) => s.trim()).filter(Boolean);
        if (!name.trim() || students.length === 0)
            return;
        let next;
        if (editing === "new") {
            next = [...classes, { id: `k_${Date.now()}`, name: name.trim(), students }];
        }
        else {
            next = classes.map((c) => (c.id === editing ? Object.assign(Object.assign({}, c), { name: name.trim(), students }) : c));
        }
        setClasses(next);
        await safeSet("classes", next);
        setEditing(null);
    };
    const remove = async (id) => {
        const next = classes.filter((c) => c.id !== id);
        setClasses(next);
        await safeSet("classes", next);
    };
    return (React.createElement("div", null,
        React.createElement("div", { className: "flex items-center justify-between mb-4" },
            React.createElement("h2", { className: "text-lg font-semibold", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Daftar Kelas"),
            editing === null && (React.createElement("button", { onClick: startNew, className: "flex items-center gap-1.5 px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.green, color: PALETTE.paper } },
                React.createElement(IconPlus, { size: 16 }),
                " Tambah Kelas"))),
        editing !== null && (React.createElement("div", { className: "mb-5 p-4 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Nama Kelas"),
            React.createElement("input", { value: name, onChange: (e) => setName(e.target.value), placeholder: "Kelas XII IPS B1", className: "w-full mb-3 px-3 py-2 rounded border text-sm outline-none", style: { borderColor: PALETTE.line } }),
            React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Daftar Nama Santri (satu nama per baris, sesuai urutan No. di absensi)"),
            React.createElement("textarea", { value: namesText, onChange: (e) => setNamesText(e.target.value), rows: 8, placeholder: "Abyan Muhamad Toha\nAhmad Luqmanul Hakim\nAhmad Sayyaf Hibatullah\n...", className: "w-full px-3 py-2 rounded border text-sm outline-none font-mono", style: { borderColor: PALETTE.line } }),
            React.createElement("div", { className: "flex gap-2 mt-3" },
                React.createElement("button", { onClick: save, className: "px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.green, color: PALETTE.paper } }, "Simpan"),
                React.createElement("button", { onClick: cancel, className: "px-3 py-2 rounded text-sm font-medium border", style: { borderColor: PALETTE.line, color: PALETTE.inkSoft } }, "Batal")))),
        classes.length === 0 && editing === null && (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Belum ada kelas. Tambahkan kelas dan daftar nama santri terlebih dahulu.")),
        React.createElement("div", { className: "grid gap-2" }, classes.map((c) => (React.createElement("div", { key: c.id, className: "flex items-center justify-between px-4 py-3 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("div", null,
                React.createElement("div", { className: "font-medium text-sm", style: { color: PALETTE.ink } }, c.name),
                React.createElement("div", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    c.students.length,
                    " santri")),
            React.createElement("div", { className: "flex gap-1" },
                React.createElement("button", { onClick: () => startEdit(c), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.green } },
                    React.createElement(IconPencil, { size: 16 })),
                React.createElement("button", { onClick: () => remove(c.id), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.red } },
                    React.createElement(IconTrash2, { size: 16 })))))))));
}
// ================= Rekap Flow =================
function RekapFlow({ classes, onSaved }) {
    var _a;
    const [classId, setClassId] = useState(((_a = classes[0]) === null || _a === void 0 ? void 0 : _a.id) || "");
    const [date, setDate] = useState(() => new Date().toISOString().slice(0, 10));
    const [canvasSize, setCanvasSize] = useState(null);
    const [calibStep, setCalibStep] = useState(0);
    const [yFirst, setYFirst] = useState(null);
    const [yLast, setYLast] = useState(null);
    const [rows, setRows] = useState([]);
    const [detected, setDetected] = useState(false);
    const [processing, setProcessing] = useState(false);
    const [saveMsg, setSaveMsg] = useState("");
    const rawCanvasRef = useRef(null);
    const viewCanvasRef = useRef(null);
    const imgRef = useRef(null);
    const fileInputRef = useRef(null);
    const selectedClass = classes.find((c) => c.id === classId) || null;
    const N = selectedClass ? selectedClass.students.length : 0;
    useEffect(() => {
        if (selectedClass)
            setRows(selectedClass.students.map((name, i) => ({ no: i + 1, name, status: false })));
    }, [classId]);
    const resetPhoto = () => {
        setCanvasSize(null);
        setCalibStep(0);
        setYFirst(null);
        setYLast(null);
        setDetected(false);
        setSaveMsg("");
        if (selectedClass)
            setRows(selectedClass.students.map((name, i) => ({ no: i + 1, name, status: false })));
        imgRef.current = null;
    };
    const handleFile = (file) => {
        if (!file)
            return;
        resetPhoto();
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const scale = Math.min(1, MAX_W / img.width);
                const w = Math.round(img.width * scale);
                const h = Math.round(img.height * scale);
                imgRef.current = img;
                setCanvasSize({ w, h });
                setCalibStep(1);
            };
            img.src = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    useEffect(() => {
        if (!canvasSize || !imgRef.current)
            return;
        const raw = rawCanvasRef.current;
        raw.width = canvasSize.w;
        raw.height = canvasSize.h;
        raw.getContext("2d").drawImage(imgRef.current, 0, 0, canvasSize.w, canvasSize.h);
    }, [canvasSize]);
    const runDetection = useCallback(() => {
        if (!rawCanvasRef.current || yFirst == null || yLast == null || N === 0)
            return;
        setProcessing(true);
        setTimeout(() => {
            const ctx = rawCanvasRef.current.getContext("2d");
            const { width, height } = rawCanvasRef.current;
            const imageData = ctx.getImageData(0, 0, width, height);
            const blobs = detectRedBlobs(imageData.data, width, height);
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            const hadir = new Set();
            blobs.forEach((b) => {
                const rowNum = clamp(Math.round((b.y - yFirst) / rowHeight) + 1, 1, N);
                hadir.add(rowNum);
            });
            setRows((prev) => prev.map((r) => (Object.assign(Object.assign({}, r), { status: hadir.has(r.no) }))));
            setDetected(true);
            setProcessing(false);
        }, 30);
    }, [yFirst, yLast, N]);
    useEffect(() => { if (calibStep === 3 && !detected)
        runDetection(); }, [calibStep, detected, runDetection]);
    useEffect(() => {
        const canvas = viewCanvasRef.current;
        if (!canvas || !canvasSize || !imgRef.current)
            return;
        canvas.width = canvasSize.w;
        canvas.height = canvasSize.h;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(imgRef.current, 0, 0, canvasSize.w, canvasSize.h);
        const drawGuide = (y, label) => {
            ctx.strokeStyle = PALETTE.green;
            ctx.lineWidth = 1.5;
            ctx.setLineDash([5, 4]);
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvasSize.w, y);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = PALETTE.green;
            ctx.font = "bold 12px sans-serif";
            ctx.fillText(label, 6, y - 4);
        };
        if (yFirst != null)
            drawGuide(yFirst, "No. 1");
        if (yLast != null)
            drawGuide(yLast, `No. ${N}`);
        if (calibStep === 3 && yFirst != null && yLast != null && N > 0) {
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            rows.forEach((r, i) => {
                if (!r.status)
                    return;
                const y = yFirst + i * rowHeight;
                ctx.beginPath();
                ctx.arc(34, y, 13, 0, Math.PI * 2);
                ctx.strokeStyle = PALETTE.red;
                ctx.lineWidth = 3;
                ctx.stroke();
            });
        }
    }, [canvasSize, yFirst, yLast, rows, calibStep, N]);
    const handleCanvasClick = (e) => {
        const canvas = viewCanvasRef.current;
        if (!canvas)
            return;
        const rect = canvas.getBoundingClientRect();
        const scaleY = canvas.height / rect.height;
        const y = (e.clientY - rect.top) * scaleY;
        if (calibStep === 1) {
            setYFirst(y);
            setCalibStep(2);
        }
        else if (calibStep === 2) {
            setYLast(y);
            setCalibStep(3);
        }
        else if (calibStep === 3 && yFirst != null && yLast != null && N > 0) {
            const rowHeight = (yLast - yFirst) / Math.max(1, N - 1);
            const rowNum = clamp(Math.round((y - yFirst) / rowHeight) + 1, 1, N);
            setRows((prev) => prev.map((r) => (r.no === rowNum ? Object.assign(Object.assign({}, r), { status: !r.status }) : r)));
        }
    };
    const toggleRow = (no) => setRows((prev) => prev.map((r) => (r.no === no ? Object.assign(Object.assign({}, r), { status: !r.status }) : r)));
    const hadirCount = rows.filter((r) => r.status).length;
    const exportExcel = async () => {
        if (!selectedClass)
            return;
        const wsData = [
            [`Rekap Absensi Kajian Kitab — ${selectedClass.name}`],
            [`Tanggal: ${date}`],
            [],
            ["No", "Nama", "Status"],
            ...rows.map((r) => [r.no, r.name, r.status ? "Hadir" : "Tidak Hadir"]),
            [],
            ["Total Hadir", hadirCount, `dari ${rows.length}`],
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        ws["!cols"] = [{ wch: 6 }, { wch: 32 }, { wch: 14 }];
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Rekap");
        const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([out], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Absensi_${selectedClass.name.replace(/\s+/g, "_")}_${date}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
        const id = `r_${Date.now()}`;
        const record = { id, classId: selectedClass.id, className: selectedClass.name, date, rows, savedAt: Date.now() };
        const ok1 = await safeSet(`recap:${id}`, record);
        const idx = (await safeGet("history-index")) || [];
        const nextIdx = [{ id, className: selectedClass.name, date, hadir: hadirCount, total: rows.length, savedAt: record.savedAt }, ...idx];
        const ok2 = await safeSet("history-index", nextIdx);
        setSaveMsg(ok1 && ok2 ? "Tersimpan ke riwayat & file Excel diunduh." : "Excel diunduh (gagal menyimpan riwayat).");
        onSaved && onSaved();
    };
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-lg font-semibold mb-4", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Rekap dari Foto"),
        classes.length === 0 ? (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Tambahkan kelas terlebih dahulu di tab \"Kelola Kelas\".")) : (React.createElement(React.Fragment, null,
            React.createElement("div", { className: "grid sm:grid-cols-2 gap-3 mb-4" },
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Kelas"),
                    React.createElement("select", { value: classId, onChange: (e) => setClassId(e.target.value), className: "w-full px-3 py-2 rounded border text-sm outline-none bg-white", style: { borderColor: PALETTE.line } }, classes.map((c) => React.createElement("option", { key: c.id, value: c.id },
                        c.name,
                        " (",
                        c.students.length,
                        " santri)")))),
                React.createElement("div", null,
                    React.createElement("label", { className: "block text-xs font-medium mb-1", style: { color: PALETTE.inkSoft } }, "Tanggal"),
                    React.createElement("input", { type: "date", value: date, onChange: (e) => setDate(e.target.value), className: "w-full px-3 py-2 rounded border text-sm outline-none bg-white", style: { borderColor: PALETTE.line } }))),
            React.createElement("div", { className: "mb-4" },
                React.createElement("input", { ref: fileInputRef, type: "file", accept: "image/*", className: "hidden", onChange: (e) => { var _a; return handleFile((_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0]); } }),
                React.createElement("button", { onClick: () => { var _a; return (_a = fileInputRef.current) === null || _a === void 0 ? void 0 : _a.click(); }, className: "flex items-center gap-2 px-3 py-2 rounded text-sm font-medium", style: { background: PALETTE.gold, color: "#fff" } },
                    React.createElement(IconCamera, { size: 16 }),
                    " ",
                    canvasSize ? "Ganti Foto" : "Upload Foto Absensi")),
            canvasSize && (React.createElement("div", { className: "mb-2 text-xs px-3 py-2 rounded", style: { background: PALETTE.paperDark, color: PALETTE.inkSoft } },
                calibStep === 1 && "Langkah 1/2: klik pada baris nomor 1 (garis akan muncul di titik yang diklik).",
                calibStep === 2 && `Langkah 2/2: klik pada baris nomor terakhir (No. ${N}).`,
                calibStep === 3 && "Kalibrasi selesai. Lingkaran merah menandai santri yang terdeteksi hadir — klik pada foto atau centang di tabel untuk koreksi.")),
            canvasSize && (React.createElement("div", { className: "mb-4 rounded-lg overflow-hidden border", style: { borderColor: PALETTE.line } },
                React.createElement("canvas", { ref: viewCanvasRef, onClick: handleCanvasClick, style: { width: "100%", display: "block", cursor: "crosshair" } }))),
            React.createElement("canvas", { ref: rawCanvasRef, style: { display: "none" } }),
            processing && React.createElement("div", { className: "text-sm mb-3", style: { color: PALETTE.inkSoft } }, "Mendeteksi tanda merah\u2026"),
            calibStep === 3 && (React.createElement("div", { className: "flex items-center gap-2 mb-3" },
                React.createElement("button", { onClick: () => { setCalibStep(1); setYFirst(null); setYLast(null); setDetected(false); }, className: "flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium border", style: { borderColor: PALETTE.line, color: PALETTE.inkSoft } },
                    React.createElement(IconRotateCcw, { size: 14 }),
                    " Ulangi Kalibrasi"),
                React.createElement("span", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    "Terdeteksi hadir: ",
                    React.createElement("b", { style: { color: PALETTE.green } }, hadirCount),
                    " / ",
                    rows.length))),
            rows.length > 0 && (React.createElement("div", { className: "mb-4 rounded-lg overflow-hidden", style: { border: `1px solid ${PALETTE.line}` } },
                React.createElement("div", { className: "grid grid-cols-[40px_1fr_90px] text-xs font-semibold px-3 py-2", style: { background: PALETTE.green, color: PALETTE.paper } },
                    React.createElement("div", null, "No"),
                    React.createElement("div", null, "Nama"),
                    React.createElement("div", null, "Status")),
                React.createElement("div", { style: { maxHeight: 340, overflowY: "auto" } }, rows.map((r) => (React.createElement("div", { key: r.no, className: "grid grid-cols-[40px_1fr_90px] items-center px-3 py-1.5 text-sm", style: { borderTop: `1px solid ${PALETTE.line}`, background: r.status ? "#FBF3EC" : "#fff" } },
                    React.createElement("div", { style: { color: PALETTE.inkSoft } }, r.no),
                    React.createElement("div", { style: { color: PALETTE.ink } }, r.name),
                    React.createElement("button", { onClick: () => toggleRow(r.no), className: "flex items-center gap-1 justify-self-start px-2 py-1 rounded text-xs font-medium", style: { background: r.status ? PALETTE.red : PALETTE.paperDark, color: r.status ? "#fff" : PALETTE.inkSoft } },
                        r.status ? React.createElement(IconCheck, { size: 12 }) : React.createElement(IconX, { size: 12 }),
                        r.status ? "Hadir" : "Tidak"))))))),
            rows.length > 0 && calibStep === 3 && (React.createElement("button", { onClick: exportExcel, className: "flex items-center gap-2 px-4 py-2.5 rounded text-sm font-semibold", style: { background: PALETTE.green, color: PALETTE.paper } },
                React.createElement(IconDownload, { size: 16 }),
                " Simpan & Unduh Excel")),
            saveMsg && React.createElement("div", { className: "mt-2 text-xs", style: { color: PALETTE.green } }, saveMsg)))));
}
// ================= History =================
function HistoryTab({ history, refresh }) {
    const redownload = async (item) => {
        const record = await safeGet(`recap:${item.id}`);
        if (!record)
            return;
        const wsData = [
            [`Rekap Absensi Kajian Kitab — ${record.className}`],
            [`Tanggal: ${record.date}`],
            [],
            ["No", "Nama", "Status"],
            ...record.rows.map((r) => [r.no, r.name, r.status ? "Hadir" : "Tidak Hadir"]),
        ];
        const ws = XLSX.utils.aoa_to_sheet(wsData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "Rekap");
        const out = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const blob = new Blob([out], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `Absensi_${record.className.replace(/\s+/g, "_")}_${record.date}.xlsx`;
        a.click();
        URL.revokeObjectURL(url);
    };
    const remove = async (item) => {
        await safeDelete(`recap:${item.id}`);
        const idx = (await safeGet("history-index")) || [];
        await safeSet("history-index", idx.filter((h) => h.id !== item.id));
        refresh();
    };
    return (React.createElement("div", null,
        React.createElement("h2", { className: "text-lg font-semibold mb-4", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Riwayat Rekap"),
        history.length === 0 ? (React.createElement("div", { className: "text-sm text-center py-10 rounded-lg", style: { color: PALETTE.inkSoft, background: "#fff", border: `1px dashed ${PALETTE.line}` } }, "Belum ada rekap tersimpan.")) : (React.createElement("div", { className: "grid gap-2" }, history.map((h) => (React.createElement("div", { key: h.id, className: "flex items-center justify-between px-4 py-3 rounded-lg", style: { background: "#fff", border: `1px solid ${PALETTE.line}` } },
            React.createElement("div", null,
                React.createElement("div", { className: "font-medium text-sm", style: { color: PALETTE.ink } }, h.className),
                React.createElement("div", { className: "text-xs", style: { color: PALETTE.inkSoft } },
                    h.date,
                    " \u00B7 Hadir ",
                    h.hadir,
                    "/",
                    h.total)),
            React.createElement("div", { className: "flex gap-1" },
                React.createElement("button", { onClick: () => redownload(h), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.green } },
                    React.createElement(IconDownload, { size: 16 })),
                React.createElement("button", { onClick: () => remove(h), className: "p-2 rounded hover:opacity-70", style: { color: PALETTE.red } },
                    React.createElement(IconTrash2, { size: 16 }))))))))));
}
// ================= App =================
function AbsensiApp() {
    const [tab, setTab] = useState("rekap");
    const [classes, setClasses] = useState([]);
    const [history, setHistory] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const loadAll = async () => {
        let c = await safeGet("classes");
        if (c === null) {
            // belum pernah ada data tersimpan -> isi otomatis dari daftar bawaan
            c = DEFAULT_CLASSES;
            await safeSet("classes", c);
        }
        const h = await safeGet("history-index");
        setClasses(c || []);
        setHistory(h || []);
        setLoaded(true);
    };
    useEffect(() => { loadAll(); }, []);
    const tabs = [
        { id: "rekap", label: "Rekap Absensi", icon: IconCamera },
        { id: "kelas", label: "Kelola Kelas", icon: IconUsers },
        { id: "riwayat", label: "Riwayat", icon: IconHistory },
    ];
    return (React.createElement("div", { className: "absensi-app", style: { background: PALETTE.paper, minHeight: "100vh", fontFamily: "var(--font-body)" } },
        React.createElement("div", { className: "max-w-2xl mx-auto px-4 py-6" },
            React.createElement("div", { className: "mb-5 pb-4", style: { borderBottom: `2px solid ${PALETTE.green}` } },
                React.createElement("div", { className: "flex items-center gap-2" },
                    React.createElement(IconCircleDot, { size: 22, style: { color: PALETTE.red } }),
                    React.createElement("h1", { className: "text-xl font-bold", style: { color: PALETTE.green, fontFamily: "var(--font-display)" } }, "Rekap Absensi Kajian Kitab")),
                React.createElement("p", { className: "text-xs mt-1", style: { color: PALETTE.inkSoft } }, "Unggah foto absensi, sistem mendeteksi tanda lingkaran merah secara otomatis. (Versi offline \u2014 data tersimpan di HP ini saja)")),
            React.createElement("div", { className: "flex gap-1 mb-5 p-1 rounded-lg", style: { background: PALETTE.paperDark } }, tabs.map((t) => {
                const Icon = t.icon;
                const active = tab === t.id;
                return (React.createElement("button", { key: t.id, onClick: () => setTab(t.id), className: "flex-1 flex items-center justify-center gap-1.5 py-2 rounded-md text-xs font-medium transition", style: active ? { background: PALETTE.green, color: PALETTE.paper } : { color: PALETTE.inkSoft } },
                    React.createElement(Icon, { size: 14 }),
                    " ",
                    t.label));
            })),
            !loaded ? (React.createElement("div", { className: "text-sm text-center py-10", style: { color: PALETTE.inkSoft } }, "Memuat data\u2026")) : (React.createElement(React.Fragment, null,
                tab === "rekap" && React.createElement(RekapFlow, { classes: classes, onSaved: loadAll }),
                tab === "kelas" && React.createElement(ClassManager, { classes: classes, setClasses: setClasses }),
                tab === "riwayat" && React.createElement(HistoryTab, { history: history, refresh: loadAll }))))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(AbsensiApp, null));
