/** Öncelikli ilçe sayfaları: her biri özgün içerikle yazıldı (şablon kopyası değil). */
export type Area = {
  slug: string; // url parçası
  name: string;
  loc: string; // bulunma eki: Esenyurt'ta
  places: string[];
  lead: string;
  profile: string[];
  businesses: string[];
  devices: { slug: string; note: string }[];
  route: string;
  qa: { q: string; a: string }[];
};

export const AREA_SUFFIX = "-oztiryakiler-servisi";
export const areaPath = (a: Area) => `/bolge/${a.slug}${AREA_SUFFIX}`;

export const areas: Area[] = [
  {
    slug: "bayrampasa",
    name: "Bayrampaşa",
    loc: "Bayrampaşa'da",
    places: ["Vatan", "Kocatepe", "Yıldırım", "Muratpaşa", "Altıntepsi", "Kartaltepe", "Terazidere"],
    lead: "Merkezimiz Bayrampaşa Vatan Mahallesi'nde. İlçe içindeki çağrılarda ekip ve yedek parça aynı noktadan çıktığı için en kısa sürede ulaştığımız bölge burası.",
    profile: [
      "Bayrampaşa'da ticari mutfakların önemli kısmı Esenler Caddesi, Abdi İpekçi Caddesi ve Forum İstanbul çevresinde toplanıyor. AVM yemek katlarındaki fast food mutfakları, cadde üzerindeki lokantalar ve sanayi sitelerinin yemekhaneleri ilçenin tipik müşteri profilini oluşturuyor.",
      "Atölyemiz ilçede olduğu için yerinde çözülemeyen parçaları (termostat gövdesi, brülör seti, fan motoru gibi) aynı gün atölyeye alıp tezgahta test edebiliyoruz. Bu da cihazın işletmede kapalı kaldığı süreyi kısaltıyor.",
    ],
    businesses: ["AVM yemek katı mutfakları", "Esnaf lokantaları", "Sanayi sitesi yemekhaneleri", "Pide ve lahmacun fırınları", "Kafeler"],
    devices: [
      { slug: "oztiryakiler-fritoz-servisi", note: "Yemek katlarında fritöz gün boyu çalıştığı için termostat ve emniyet arızaları sık." },
      { slug: "oztiryakiler-pizza-firini-servisi", note: "Pide ve pizza fırınlarında rezistans ve taban taşı kontrolleri." },
      { slug: "oztiryakiler-buzdolabi-servisi", note: "Dar mutfaklarda ısınan kondenserler soğutma kaybının başlıca nedeni." },
    ],
    route: "Ekip Vatan Mahallesi'ndeki merkezden çıkıyor; Bayrampaşa içindeki adreslere çoğunlukla aynı gün, çoğu zaman birkaç saat içinde ulaşıyoruz.",
    qa: [
      { q: "Cihazımı atölyenize kendim getirebilir miyim?", a: "Taşınabilir küçük cihazlar (tezgah üstü fritöz, benmari gibi) için önceden arayarak Vatan Mah. Kanaat Sok. No:53 Kat:1 adresimize getirebilirsiniz. Büyük ekipmanlarda yerinde servis daha pratik." },
      { q: "Forum İstanbul içindeki işletmelere geliyor musunuz?", a: "Evet. AVM yönetiminin çalışma saatleri ve giriş kurallarına uyarak, gerekirse mağaza kapanış sonrasına randevu veriyoruz." },
      { q: "Bayrampaşa'da servis ücreti farklı mı?", a: "Yol mesafesi kısa olduğundan ulaşım maliyeti düşük. Kesin ücret arızanın tespitinden sonra, onarıma başlamadan önce bildirilir." },
    ],
  },
  {
    slug: "esenler",
    name: "Esenler",
    loc: "Esenler'de",
    places: ["Davutpaşa", "Atışalanı", "Menderes", "Oruçreis", "Turgutreis", "Fevzi Çakmak", "Kemer"],
    lead: "Esenler, merkezimizin hemen yanındaki ilçe. Bayrampaşa sınırındaki otogar çevresinin yoğun lokanta trafiği ve Davutpaşa tarafındaki üniversite ile sanayi mutfakları burada en çok gittiğimiz yerler.",
    profile: [
      "Esenler–Bayrampaşa sınırındaki Büyük İstanbul Otogarı çevresinde bulunan lokanta ve kafeteryalar neredeyse 24 saat açık çalışır. Bu tempoda ocak ve benmari gibi cihazlar hiç soğumadan kullanıldığı için conta, vana ve termostat yıpranması diğer bölgelere göre daha hızlı ilerliyor.",
      "Davutpaşa ve Atışalanı tarafında öğrenci yurtları, kampüs kafeteryaları ve atölyelerin yemekhaneleri var. Bu mutfaklarda toplu pişirme yapıldığından kazan, yer ocağı ve büyük hacimli bulaşık makineleri öne çıkıyor.",
    ],
    businesses: ["Otogar lokantaları ve kafeteryaları", "Kampüs ve yurt mutfakları", "Atölye yemekhaneleri", "Kebap ve ızgara salonları"],
    devices: [
      { slug: "oztiryakiler-benmari-servisi", note: "Kesintisiz sıcak servis yapan lokantalarda rezistans ve su seviyesi sorunları." },
      { slug: "oztiryakiler-yer-ocagi-servisi", note: "Toplu pişirmede büyük kazan altındaki brülör ve pilot alev arızaları." },
      { slug: "oztiryakiler-izgara-servisi", note: "Izgara salonlarında yağ birikmesine bağlı ısı dengesizliği." },
    ],
    route: "Bayrampaşa'dan Esenler Caddesi üzerinden doğrudan ulaşıyoruz; ilçe merkezimize en yakın bölgelerden biri.",
    qa: [
      { q: "Gece çalışan otogar lokantaları için servis var mı?", a: "Gece onarım standart hizmetimiz değil, ancak gaz ve soğutma gibi acil arızalarda dönüş yapıyor, en erken saate randevu planlıyoruz." },
      { q: "Yurt mutfağımız için bakım anlaşması yapabilir miyiz?", a: "Evet. Dönem başı ve dönem ortası kontrolleriyle akademik takvime göre bir bakım planı hazırlayabiliriz." },
      { q: "Esenler'de aynı gün geliyor musunuz?", a: "Merkezimize yakın olduğu için Esenler'deki çağrıların çoğuna aynı gün gidiyoruz; yoğunluğa göre saat aralığını telefonda netleştiriyoruz." },
    ],
  },
  {
    slug: "kucukcekmece",
    name: "Küçükçekmece",
    loc: "Küçükçekmece'de",
    places: ["Halkalı", "Sefaköy", "Atakent", "Cennet", "Kanarya", "Tevfikbey", "Yarımburgaz"],
    lead: "Küçükçekmece geniş bir ilçe: Halkalı'daki yeni projelerden Sefaköy'ün yoğun cadde lokantalarına, göl kıyısındaki restoranlardan hastane mutfaklarına kadar farklı tipte mutfaklara servis veriyoruz.",
    profile: [
      "Sefaköy ve Cennet tarafında E-5'e yakın cadde lokantaları, dönerciler ve pastaneler yoğun. Bu işletmelerde mutfak alanı genelde dar; cihazlar birbirine yakın durduğu için fırın ve ocağın yaydığı ısı buzdolabı ile saladette dolapları zorluyor.",
      "Halkalı ve Atakent'te ise yeni yapılan site ve iş merkezlerinin içindeki restoranlar, hastane ve okul mutfakları öne çıkıyor. Buralarda ekipman genelde yeni; arızalardan çok kurulum sonrası ayar, gaz basıncı ve periyodik bakım talepleri geliyor. Göl kıyısındaki balık restoranlarında ise ızgara ve fritöz yükü yüksek.",
    ],
    businesses: ["Cadde lokantaları ve dönerciler", "Göl kıyısı balık restoranları", "Hastane ve okul mutfakları", "Site içi restoran ve kafeler", "Pastaneler"],
    devices: [
      { slug: "oztiryakiler-buzdolabi-servisi", note: "Dar mutfaklarda ısıya maruz kalan dolaplarda kompresör ve kondenser sorunları." },
      { slug: "oztiryakiler-izgara-servisi", note: "Balık restoranlarında ızgara plakası ve brülör kontrolleri." },
      { slug: "oztiryakiler-firin-servisi", note: "Pastane ve hastane mutfaklarında fırın fanı ve buhar sistemi arızaları." },
    ],
    route: "Bayrampaşa'dan TEM ya da E-5 bağlantısıyla geliyoruz. Halkalı ve Atakent tarafı için TEM, Sefaköy ve Cennet için E-5 güzergahını kullanıyoruz.",
    qa: [
      { q: "Halkalı'ya da geliyor musunuz?", a: "Evet. Halkalı, Atakent, Sefaköy, Cennet ve Kanarya dahil Küçükçekmece'nin tamamına yerinde servis veriyoruz." },
      { q: "Yeni açılan restoranımızın cihaz kurulum kontrolünü yapar mısınız?", a: "Evet. Gazlı cihazlarda bağlantı ve sızdırmazlık, elektrikli cihazlarda besleme kontrolü yapıp ilk ayarları gözden geçiriyoruz." },
      { q: "Küçükçekmece'ye ne zaman ulaşırsınız?", a: "Trafik ve günün yoğunluğuna göre değişir; çoğu çağrıda aynı gün geliyoruz. Aradığınızda yaklaşık saat aralığını söylüyoruz." },
    ],
  },
  {
    slug: "bagcilar",
    name: "Bağcılar",
    loc: "Bağcılar'da",
    places: ["Güneşli", "Mahmutbey", "Kirazlı", "Yenimahalle", "Demirkapı", "Göztepe", "Evren"],
    lead: "Bağcılar'da iş yoğunluğumuz Güneşli ve Mahmutbey'deki matbaa, tekstil ve lojistik firmalarının yemekhanelerinde; ilçe içindeki kalabalık caddelerde ise lokanta ve pastaneler öne çıkıyor.",
    profile: [
      "Güneşli ve Mahmutbey'deki iş merkezlerinin çoğunda vardiyalı çalışan personel için kendi mutfağını işleten yemekhaneler bulunuyor. Bu mutfaklarda öğle saatine yetişmek kritik; bir kazanın ya da bulaşık makinesinin durması doğrudan yüzlerce kişilik servisi etkiliyor.",
      "İlçenin iç kesimlerinde (Kirazlı, Yenimahalle, Demirkapı) mahalle lokantaları, pideciler ve pastaneler yoğun. Bu işletmeler genelde tek fırın ve tek ocakla çalıştığı için yedeği olmayan cihazda hızlı onarım beklentisi yüksek.",
    ],
    businesses: ["Fabrika ve iş merkezi yemekhaneleri", "Matbaa ve lojistik firması mutfakları", "Mahalle lokantaları", "Pide ve lahmacun salonları", "Pastaneler"],
    devices: [
      { slug: "oztiryakiler-bulasik-makinesi-servisi", note: "Yemekhanelerde yoğun kullanımdan kaynaklanan boyler, pompa ve kireç sorunları." },
      { slug: "oztiryakiler-yer-ocagi-servisi", note: "Toplu yemek kazanlarında brülör ve gaz vanası arızaları." },
      { slug: "oztiryakiler-pizza-firini-servisi", note: "Pide salonlarında taban ısısı ve rezistans kontrolleri." },
    ],
    route: "Bayrampaşa'dan TEM üzerinden Mahmutbey bağlantısıyla kısa sürede ulaşıyoruz; Güneşli tarafı için Basın Ekspres yolunu kullanıyoruz.",
    qa: [
      { q: "Yemekhanemizde öğle servisinden önce gelebilir misiniz?", a: "Sabah erken saatler için randevu planlayabiliyoruz. Bakım işlerini de mümkün olduğunca servis saatleri dışına koyuyoruz." },
      { q: "Vardiyalı çalışan tesisler için periyodik bakım yapıyor musunuz?", a: "Evet. Ekipman listenize göre aylık ve üç aylık kontrol planı çıkarıp tutanakla raporluyoruz." },
      { q: "Bağcılar'ın hangi bölgelerine geliyorsunuz?", a: "Güneşli, Mahmutbey, Kirazlı, Yenimahalle, Demirkapı, Göztepe ve Evren dahil ilçenin tamamına geliyoruz." },
    ],
  },
  {
    slug: "basaksehir",
    name: "Başakşehir",
    loc: "Başakşehir'de",
    places: ["İkitelli OSB", "Bahçeşehir", "Kayabaşı", "Altınşehir", "Ziya Gökalp", "Güvercintepe", "Şahintepe"],
    lead: "Başakşehir'de iki farklı profil var: İkitelli Organize Sanayi'deki büyük yemekhaneler ve Bahçeşehir ile Kayabaşı'ndaki site içi restoran, kafe ve okul mutfakları.",
    profile: [
      "İkitelli OSB, Avrupa Yakası'nın en büyük sanayi bölgelerinden biri. Buradaki tesis yemekhaneleri yüksek kapasiteli ekipman kullanıyor: büyük kazanlar, çok gözlü ocaklar, konveyörlü bulaşık makineleri ve geniş soğuk odalar. Bu tip mutfaklarda arızadan çok planlı bakım ve parça ömrü takibi belirleyici oluyor.",
      "Bahçeşehir, Kayabaşı ve Başakşehir merkezdeki yeni yerleşim alanlarında ise kafe, restoran ve özel okul mutfakları çoğunlukta. Şehir Hastanesi çevresindeki yeme içme işletmeleri de son yıllarda belirgin şekilde arttı.",
    ],
    businesses: ["OSB fabrika yemekhaneleri", "Toplu yemek üreticileri", "Özel okul mutfakları", "Site içi kafe ve restoranlar", "Hastane çevresi lokantalar"],
    devices: [
      { slug: "oztiryakiler-bulasik-makinesi-servisi", note: "Konveyörlü ve giyotin tip makinelerde pompa, rezistans ve deterjan dozaj sorunları." },
      { slug: "oztiryakiler-makarna-haslama-servisi", note: "Okul ve yemekhane mutfaklarında haşlama ünitelerinde rezistans ve tahliye arızaları." },
      { slug: "oztiryakiler-ocak-servisi", note: "Çok gözlü ocaklarda brülör tıkanması ve termokupl arızaları." },
    ],
    route: "Bayrampaşa'dan TEM ile İkitelli bağlantısına çıkıyoruz; Bahçeşehir ve Kayabaşı için Başakşehir içinden devam ediyoruz.",
    qa: [
      { q: "İkitelli OSB'deki tesisimize düzenli bakım yapar mısınız?", a: "Evet. Cihaz envanterinize göre bakım takvimi hazırlayıp her ziyaret sonrası yapılan işleri ve değişen parçaları raporluyoruz." },
      { q: "Bahçeşehir'e de geliyor musunuz?", a: "Evet, Bahçeşehir ve Kayabaşı dahil Başakşehir'in tüm mahallelerine yerinde servis veriyoruz." },
      { q: "Yüksek kapasiteli cihazlar için parça bulabiliyor musunuz?", a: "Sık kullanılan sarf ve elektrik parçalarını stokta tutuyoruz; stokta olmayan parçalar için tedarik süresini onarım öncesinde bildiriyoruz." },
    ],
  },
  {
    slug: "esenyurt",
    name: "Esenyurt",
    loc: "Esenyurt'ta",
    places: ["Akçaburgaz", "Kıraç", "Yenikent", "Mehterçeşme", "Saadetdere", "Pınar", "Fatih Mah."],
    lead: "Esenyurt, Avrupa Yakası'nın en kalabalık ilçesi. Ana caddelerdeki fast food ve lokanta yoğunluğu, Akçaburgaz ve Kıraç'taki sanayi yemekhaneleriyle birlikte en çok çağrı aldığımız bölgelerden biri.",
    profile: [
      "Cumhuriyet Caddesi ve Doğan Araslı Bulvarı gibi ana arterlerde döner, burger, pide ve tantuni gibi hızlı servis işletmeleri yoğun. Bu mutfaklarda ızgara, fritöz ve tezgah tipi soğutucular uzun saatler boyunca tam kapasite çalışıyor.",
      "Akçaburgaz ve Kıraç tarafındaki sanayi bölgelerinde ise fabrika yemekhaneleri ve toplu yemek firmaları bulunuyor. Bu işletmelerde özellikle yaz aylarında soğuk oda ve buzdolabı arızaları, kışın ise yer ocağı ve kazan arızaları öne çıkıyor.",
    ],
    businesses: ["Döner, burger ve fast food işletmeleri", "Sanayi yemekhaneleri", "Toplu yemek firmaları", "Düğün salonu mutfakları", "Pastane ve fırınlar"],
    devices: [
      { slug: "oztiryakiler-fritoz-servisi", note: "Hızlı servis mutfaklarında yağ sıcaklığı sapması ve emniyet termostatı arızaları." },
      { slug: "oztiryakiler-izgara-servisi", note: "Uzun süreli kullanımda plaka ısısının dengesizleşmesi ve brülör tıkanması." },
      { slug: "oztiryakiler-buzdolabi-servisi", note: "Yaz aylarında soğutma kapasitesinin düşmesi ve gaz kaçağı kontrolleri." },
    ],
    route: "Bayrampaşa'dan TEM ya da E-5 ile geliyoruz. Kıraç ve Akçaburgaz için TEM, ilçe merkezi ve Saadetdere için E-5 tarafını kullanıyoruz.",
    qa: [
      { q: "Esenyurt'a aynı gün geliyor musunuz?", a: "Çoğu çağrıda evet. Esenyurt'taki işleri bölge planlamasıyla gün içinde birleştirdiğimiz için yaklaşık saati aradığınızda söylüyoruz." },
      { q: "Düğün salonumuzun mutfağı için sezon öncesi kontrol yapar mısınız?", a: "Evet. Sezon başlamadan ocak, fırın, benmari ve soğutma ekipmanlarının genel kontrolünü yapıp eksikleri raporluyoruz." },
      { q: "Kıraç tarafındaki fabrikalara da geliyor musunuz?", a: "Evet, Kıraç ve Akçaburgaz sanayi bölgeleri dahil Esenyurt'un tamamına servis veriyoruz." },
    ],
  },
  {
    slug: "sisli",
    name: "Şişli",
    loc: "Şişli'de",
    places: ["Mecidiyeköy", "Esentepe", "Nişantaşı", "Bomonti", "Kurtuluş", "Feriköy", "Fulya"],
    lead: "Şişli'de plaza mutfakları, otel restoranları ve Nişantaşı'ndaki butik restoranlar ağırlıkta. Bu işletmelerde servis aksaması doğrudan müşteri deneyimine yansıdığı için hızlı ve temiz çalışma bekleniyor.",
    profile: [
      "Mecidiyeköy, Esentepe ve Fulya'daki plazalarda çalışan yemekhaneleri ve kurumsal kafeteryalar, öğle saatinde birkaç yüz kişiye servis veriyor. Bu mutfaklarda benmari, bulaşık makinesi ve kombi fırınlar kritik ekipmanlar.",
      "Nişantaşı, Bomonti ve Kurtuluş tarafında ise butik restoranlar, pastaneler ve otel mutfakları var. Bu işletmelerde cihazlar genelde açık mutfakta, müşterinin gözü önünde; bu yüzden onarımları mümkün olduğunca servis dışı saatlere planlıyor ve çalışma alanını temiz bırakıyoruz.",
    ],
    businesses: ["Plaza ve kurumsal yemekhaneler", "Otel restoranları", "Butik ve fine dining restoranlar", "Pastaneler", "Kafeler"],
    devices: [
      { slug: "oztiryakiler-benmari-servisi", note: "Kafeterya hatlarında sıcak servis ünitelerinde rezistans ve termostat arızaları." },
      { slug: "oztiryakiler-firin-servisi", note: "Otel ve restoran mutfaklarında kombi fırın buhar ve fan sorunları." },
      { slug: "oztiryakiler-bulasik-makinesi-servisi", note: "Yüksek tabak devrinde durulama sıcaklığı ve kireç problemleri." },
    ],
    route: "Bayrampaşa'dan TEM otoyoluyla Mecidiyeköy ve Esentepe'ye doğrudan bağlanıyoruz; Nişantaşı ve Kurtuluş için şehir içinden devam ediyoruz.",
    qa: [
      { q: "Plazadaki mutfağımız için bina giriş prosedürüne uyuyor musunuz?", a: "Evet. Teknisyen bilgilerini önceden iletiyor, bina güvenliği ve yükleme saatlerine göre randevu planlıyoruz." },
      { q: "Açık mutfakta servis saatinde çalışmak zorunda kalır mısınız?", a: "Mümkün olduğunca servis öncesi veya sonrası saatleri tercih ediyoruz. Acil durumda çalışma alanını sınırlı tutup temiz bırakıyoruz." },
      { q: "Şişli'de hangi semtlere geliyorsunuz?", a: "Mecidiyeköy, Esentepe, Nişantaşı, Bomonti, Kurtuluş, Feriköy ve Fulya dahil ilçenin tamamına geliyoruz." },
    ],
  },
  {
    slug: "fatih",
    name: "Fatih",
    loc: "Fatih'te",
    places: ["Aksaray", "Laleli", "Sirkeci", "Kumkapı", "Balat", "Vefa", "Çapa", "Topkapı"],
    lead: "Fatih, tarihi yarımadanın otel, lokanta ve turistik işletme yoğunluğunu barındırıyor. Merkezimizden Vatan Caddesi üzerinden kısa sürede ulaştığımız ilçelerden biri.",
    profile: [
      "Laleli, Aksaray ve Sirkeci'deki otellerin kahvaltı ve restoran mutfakları sabah saatlerinde en yoğun dönemini yaşıyor. Benmari, kahvaltı ocakları ve bulaşık makineleri bu saatlerde aksamamalı. Kumkapı'daki balık restoranlarında ise akşamları ızgara ve fritöz yükü artıyor.",
      "Tarihi binalardaki mutfaklar genelde dar, havalandırması sınırlı ve elektrik altyapısı eski. Bu da cihazlarda aşırı ısınma ve elektrik kaynaklı arızaları artırıyor. Onarım sırasında cihazın kendisi kadar besleme hattını ve havalandırma koşullarını da kontrol ediyoruz.",
    ],
    businesses: ["Otel kahvaltı ve restoran mutfakları", "Esnaf lokantaları", "Kumkapı balık restoranları", "Tarihi çarşı çevresi kafeler", "Hastane ve öğrenci mutfakları"],
    devices: [
      { slug: "oztiryakiler-benmari-servisi", note: "Otel kahvaltı büfelerinde sıcak tutma ünitelerinin rezistans ve termostat arızaları." },
      { slug: "oztiryakiler-izgara-servisi", note: "Balık restoranlarında yoğun akşam servisinde ızgara ısı kaybı." },
      { slug: "oztiryakiler-buzdolabi-servisi", note: "Havalandırması zayıf dar mutfaklarda kondenser ısınması." },
    ],
    route: "Bayrampaşa'daki merkezimizden Vatan Caddesi ve Topkapı üzerinden doğrudan Fatih'e ulaşıyoruz.",
    qa: [
      { q: "Otelimizin kahvaltı servisi öncesinde gelebilir misiniz?", a: "Acil arızalarda sabah erken saat için randevu planlamaya çalışıyoruz; planlı bakımları ise kahvaltı ve akşam servisleri arasına koyuyoruz." },
      { q: "Tarihi binada araçla ulaşım zorsa ne yapıyorsunuz?", a: "Parça ve aletleri taşınabilir çantalarla getiriyoruz; büyük parça gerekiyorsa teslimatı uygun bir saate planlıyoruz." },
      { q: "Fatih'in hangi semtlerine geliyorsunuz?", a: "Aksaray, Laleli, Sirkeci, Kumkapı, Balat, Vefa, Çapa ve Topkapı dahil ilçenin tamamına geliyoruz." },
    ],
  },
  {
    slug: "bakirkoy",
    name: "Bakırköy",
    loc: "Bakırköy'de",
    places: ["Ataköy", "Yeşilköy", "Florya", "Kartaltepe", "Zuhuratbaba", "Osmaniye", "Şenlikköy"],
    lead: "Bakırköy'de sahil restoranları, Ataköy ve Yeşilköy'deki otel mutfakları, hastaneler ve çarşı içindeki köklü lokantalar ağırlıkta.",
    profile: [
      "Yeşilköy ve Florya'daki havalimanı çevresi otelleri ile sahil şeridi restoranları gün boyu açık çalışıyor. Ataköy'deki AVM ve marina çevresindeki işletmelerde ise hafta sonu yoğunluğu belirgin; bu günlerde arızalanan bir cihaz kaybı büyütüyor.",
      "Bakırköy çarşısı ve İncirli tarafındaki lokantalar, pastaneler ve hastane mutfakları da düzenli çağrı aldığımız yerler. Deniz kenarındaki işletmelerde nemli ve tuzlu hava, cihazların elektrik bağlantılarında ve metal aksamında korozyonu hızlandırıyor; bakımda bunu ayrıca kontrol ediyoruz.",
    ],
    businesses: ["Otel mutfakları", "Sahil restoranları", "AVM ve marina işletmeleri", "Hastane mutfakları", "Çarşı lokantaları ve pastaneler"],
    devices: [
      { slug: "oztiryakiler-firin-servisi", note: "Otel ve pastane mutfaklarında fırın fanı, kapı contası ve termostat arızaları." },
      { slug: "oztiryakiler-fritoz-servisi", note: "Sahil restoranlarında yoğun sezonda fritöz rezistans ve emniyet arızaları." },
      { slug: "oztiryakiler-ocak-servisi", note: "Nemli ortamda ateşleme ve termokupl bağlantılarında korozyon." },
    ],
    route: "Bayrampaşa'dan Merter üzerinden E-5 ile Bakırköy'e iniyoruz; Yeşilköy ve Florya için sahil yolu tarafına devam ediyoruz.",
    qa: [
      { q: "Hafta sonu sahil restoranımızda arıza olursa?", a: "Cumartesi tam gün çalışıyoruz. Pazar günü soğutma ve gaz gibi acil arızalarda dönüş yapıp en erken randevuyu planlıyoruz." },
      { q: "Deniz kenarındaki cihazlarda ekstra bakım gerekir mi?", a: "Nem ve tuz nedeniyle elektrik bağlantıları ve metal aksam daha hızlı yıpranır; bu yüzden bakım aralığını biraz sık tutmanızı öneriyoruz." },
      { q: "Ataköy ve Yeşilköy'e geliyor musunuz?", a: "Evet, Ataköy, Yeşilköy, Florya ve Kartaltepe dahil Bakırköy'ün tamamına yerinde servis veriyoruz." },
    ],
  },
  {
    slug: "beylikduzu",
    name: "Beylikdüzü",
    loc: "Beylikdüzü'nde",
    places: ["Yakuplu", "Kavaklı", "Gürpınar", "Adnan Kahveci", "Cumhuriyet", "Barış", "Marmara"],
    lead: "Beylikdüzü'nde AVM yemek katları, sahil kafe ve restoranları, düğün salonları ve Yakuplu tarafındaki sanayi mutfakları başlıca müşteri grubumuz.",
    profile: [
      "İlçedeki büyük AVM'lerin yemek katlarında aynı alanda çok sayıda fast food mutfağı yan yana çalışıyor. Bu mutfaklarda fritöz, ızgara ve tezgah altı soğutucular küçük alana sıkışmış durumda; havalandırma yetersiz kaldığında soğutma cihazları ilk etkilenenler oluyor.",
      "Gürpınar ve Kavaklı sahilindeki restoranlar yaz sezonunda kapasitesinin üzerinde çalışıyor. Yakuplu sanayi bölgesindeki tesis yemekhaneleri ile çevredeki düğün ve davet salonları ise toplu pişirme ekipmanlarıyla öne çıkıyor.",
    ],
    businesses: ["AVM yemek katı mutfakları", "Sahil kafe ve restoranları", "Düğün ve davet salonları", "Yakuplu sanayi yemekhaneleri", "Site içi kafeler"],
    devices: [
      { slug: "oztiryakiler-buzdolabi-servisi", note: "Havalandırması kısıtlı yemek katlarında tezgah altı dolapların soğutma kaybı." },
      { slug: "oztiryakiler-makarna-haslama-servisi", note: "Yoğun servis yapan işletmelerde haşlama ünitesi rezistans ve su seviye arızaları." },
      { slug: "oztiryakiler-yer-ocagi-servisi", note: "Düğün salonu mutfaklarında büyük kazan brülörlerinin bakımı." },
    ],
    route: "Bayrampaşa'dan E-5 ya da TEM ile batıya ilerliyoruz. Beylikdüzü'ndeki işleri aynı gün Esenyurt ve Avcılar çağrılarıyla birleştirerek planlıyoruz.",
    qa: [
      { q: "AVM içindeki işletmemize ne zaman gelebilirsiniz?", a: "AVM yönetiminin teknik servis saatlerine uyuyoruz; genelde açılış öncesi ya da kapanış sonrasına randevu veriyoruz." },
      { q: "Yaz sezonu öncesi sahil restoranımız için kontrol yapar mısınız?", a: "Evet. Sezon öncesi soğutma, fritöz, ızgara ve ocak kontrollerini yapıp gereken parçaları önceden belirliyoruz." },
      { q: "Beylikdüzü uzak, ek ücret alıyor musunuz?", a: "Ücret arıza tespitinden sonra, onarıma başlamadan önce net olarak bildirilir. Mesafe varsa bunu telefonda baştan söylüyoruz." },
    ],
  },
];

export const getArea = (pageSlug: string) => areas.find((a) => `${a.slug}${AREA_SUFFIX}` === pageSlug);
