/** Hizmet bölgesi: Avrupa Yakası ilçeleri, gruplanmış hâlde */
export type Region = { group: string; note: string; districts: { name: string; places: string }[] };

export const regions: Region[] = [
  {
    group: "Tarihi yarımada ve merkez",
    note: "Otel, lokanta ve turistik işletme yoğunluğunun en yüksek olduğu bölge.",
    districts: [
      { name: "Fatih", places: "Aksaray, Laleli, Sirkeci, Kumkapı, Balat, Vefa" },
      { name: "Beyoğlu", places: "Galata, Karaköy, Cihangir, Taksim, Kasımpaşa" },
      { name: "Zeytinburnu", places: "Kazlıçeşme, Merkezefendi, Seyitnizam, Telsiz" },
      { name: "Bayrampaşa", places: "Kocatepe, Yıldırım, Muratpaşa, Altıntepsi" },
      { name: "Eyüpsultan", places: "Alibeyköy, Göktürk, Kemerburgaz, Rami" },
    ],
  },
  {
    group: "İş merkezleri ve Boğaz hattı",
    note: "Plaza mutfakları, fine dining restoranlar ve otel zincirleri.",
    districts: [
      { name: "Şişli", places: "Mecidiyeköy, Esentepe, Nişantaşı, Bomonti, Kurtuluş" },
      { name: "Beşiktaş", places: "Levent, Etiler, Ortaköy, Bebek, Gayrettepe" },
      { name: "Sarıyer", places: "Maslak, İstinye, Tarabya, Yeniköy, Zekeriyaköy" },
      { name: "Kağıthane", places: "Çağlayan, Seyrantepe, Gültepe, Sanayi" },
    ],
  },
  {
    group: "Merkez batı ve havalimanı çevresi",
    note: "Otel, AVM, hastane ve tekstil bölgesi yemekhaneleri.",
    districts: [
      { name: "Bakırköy", places: "Ataköy, Yeşilköy, Florya, Kartaltepe" },
      { name: "Bahçelievler", places: "Yenibosna, Şirinevler, Siyavuşpaşa, Kocasinan" },
      { name: "Güngören", places: "Merter, Haznedar, Tozkoparan, Gençosman" },
      { name: "Bağcılar", places: "Güneşli, Mahmutbey, Kirazlı, Yenimahalle" },
      { name: "Esenler", places: "Davutpaşa, Atışalanı, Menderes, Oruçreis" },
      { name: "Küçükçekmece", places: "Halkalı, Sefaköy, Atakent, Cennet" },
    ],
  },
  {
    group: "Kuzey ve sanayi bölgeleri",
    note: "Organize sanayi, fabrika yemekhaneleri ve toplu yemek üreticileri.",
    districts: [
      { name: "Başakşehir", places: "İkitelli OSB, Bahçeşehir, Kayabaşı, Altınşehir" },
      { name: "Gaziosmanpaşa", places: "Karadeniz, Yıldıztabya, Küçükköy, Sarıgöl" },
      { name: "Sultangazi", places: "Cebeci, Gazi, Habibler, Esentepe" },
      { name: "Arnavutköy", places: "Hadımköy, Bolluca, Taşoluk, Haraççı" },
    ],
  },
  {
    group: "Batı ve sahil şeridi",
    note: "Yeni yerleşimler, AVM'ler, düğün salonları ve sahil restoranları.",
    districts: [
      { name: "Avcılar", places: "Ambarlı, Firuzköy, Denizköşkler, Gümüşpala" },
      { name: "Esenyurt", places: "Akçaburgaz, Kıraç, Yenikent, Mehterçeşme" },
      { name: "Beylikdüzü", places: "Yakuplu, Kavaklı, Gürpınar, Adnan Kahveci" },
      { name: "Büyükçekmece", places: "Mimarsinan, Kumburgaz, Alkent, Celaliye" },
      { name: "Silivri", places: "Selimpaşa, Değirmenköy, Gümüşyaka, Kavaklı" },
      { name: "Çatalca", places: "Ferhatpaşa, Kaleiçi, Muratbey, Elbasan" },
    ],
  },
];

export const allDistricts = regions.flatMap((r) => r.districts.map((d) => d.name));
