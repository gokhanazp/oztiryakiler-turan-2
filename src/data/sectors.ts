export type Sector = {
  slug: string;
  name: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  context: string[];
  critical: string[]; // device slugs
  risks: { t: string; d: string }[];
  plan: { period: string; items: string[] }[];
};

export const sectors: Sector[] = [
  {
    slug: "restoran",
    name: "Restoranlar",
    h1: "Restoran Mutfakları İçin Öztiryakiler Ekipman Servisi",
    metaTitle: "Restoran Mutfak Ekipmanı Servisi – Öztiryakiler",
    metaDescription: "Restoran mutfaklarındaki Öztiryakiler ocak, fırın, fritöz ve soğutma ekipmanları için arıza onarımı ve planlı bakım. Avrupa Yakası: 0534 748 61 07.",
    lead: "À la carte bir restoranda servis birkaç saate sıkışır. O saatlerde tek bir cihazın durması siparişleri geciktirir, menüden ürün düşürür. Restoran mutfaklarında arızayı hızla kapatmayı ve tekrar etmesini önlemeyi hedefliyoruz.",
    context: [
      "Restoranlarda en yoğun yük ocak, fırın ve fritöz üçlüsündedir. Akşam servisinde ızgara ve salamander da devreye girer. Soğutma tarafında tezgah tipi dolaplar ve saladette hazırlık tezgahları gün boyu açılıp kapanır.",
      "Bu tempoda arızaların çoğu ani değil, birikerek gelir: kireçlenen kombi fırın, tozla kapanan kondenser, yağa doyan brülör. Planlı bakım bu birikimi servis saatleri dışında temizlemenizi sağlar.",
    ],
    critical: ["oztiryakiler-ocak-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-fritoz-servisi", "oztiryakiler-buzdolabi-servisi", "oztiryakiler-izgara-servisi"],
    risks: [
      { t: "Akşam servisinde fırın durması", d: "Kombi fırında kireç kaynaklı buhar arızası en sık karşılaştığımız sorun. Düzenli kireç sökümüyle önlenebilir." },
      { t: "Hazırlık dolabının ısınması", d: "Saladette dolaplar mutfak sıcaklığından en çok etkilenen cihazlardır; kondenser temizliği kritik." },
      { t: "Fritözde emniyetin atması", d: "Termostat sapmaları yoğun saatte fritözü devre dışı bırakır." },
    ],
    plan: [
      { period: "Aylık", items: ["Buzdolabı kondenser temizliği", "Fritöz termostat kontrolü", "Ocak brülör ve alev kontrolü"] },
      { period: "3 ayda bir", items: ["Kombi fırın kireç sökümü", "Bulaşık makinesi kol ve boyler kontrolü"] },
      { period: "Yılda bir", items: ["Tüm gazlı cihazlarda sızdırmazlık testi", "Soğutma gaz basınç kontrolü"] },
    ],
  },
  {
    slug: "otel",
    name: "Oteller",
    h1: "Otel Mutfakları İçin Öztiryakiler Servis ve Bakım",
    metaTitle: "Otel Mutfağı Ekipman Servisi – Öztiryakiler Bakım",
    metaDescription: "Otel mutfaklarında kahvaltı, banket ve à la carte için Öztiryakiler fırın, benmari, bulaşık makinesi ve soğutma ekipmanlarına servis. 0534 748 61 07.",
    lead: "Otel mutfağı günde birkaç farklı servisi aynı ekipmanla karşılar: sabah açık büfe, öğlen restoran, akşam banket. Bu yoğunlukta ekipmanların planlı bakımla takip edilmesi, misafire yansıyan arızaların önüne geçer.",
    context: [
      "Kahvaltı büfesinde benmari ve sıcak teşhir üniteleri, banketlerde kombi fırınlar ve yer ocakları, gün boyu da konveyörlü bulaşık makineleri yoğun çalışır. Arıza bir servisi değil, birden fazla departmanı etkiler.",
      "Otellerle çalışırken teknik departmanla koordineli bir bakım takvimi oluşturuyor, müdahaleleri doluluk ve etkinlik programına göre planlıyoruz.",
    ],
    critical: ["oztiryakiler-benmari-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-bulasik-makinesi-servisi", "oztiryakiler-yer-ocagi-servisi", "oztiryakiler-buzdolabi-servisi"],
    risks: [
      { t: "Kahvaltı büfesinde ılık yemek", d: "Benmari rezistanslarındaki kireç, sabah servisinde yetersiz ısınmaya yol açar." },
      { t: "Banket öncesi fırın arızası", d: "Büyük etkinlik öncesi fırınların kontrol edilmesi risk yönetiminin parçası olmalı." },
      { t: "Bulaşık hattının durması", d: "Konveyörlü makinelerde pompa ve tahrik arızaları tüm servisi yavaşlatır." },
    ],
    plan: [
      { period: "Aylık", items: ["Benmari kireç ve rezistans kontrolü", "Bulaşık makinesi dozaj kalibrasyonu", "Soğuk oda ve dolap sıcaklık kontrolü"] },
      { period: "3 ayda bir", items: ["Kombi fırın kireç sökümü", "Yer ocağı brülör bakımı"] },
      { period: "Sezon öncesi", items: ["Tüm ekipmanın genel kontrolü ve test pişirimi"] },
    ],
  },
  {
    slug: "kurumsal-yemekhane",
    name: "Fabrika ve Kurumsal Yemekhaneler",
    h1: "Fabrika ve Kurumsal Yemekhaneler İçin Ekipman Servisi",
    metaTitle: "Yemekhane Mutfak Ekipmanı Servisi – Öztiryakiler",
    metaDescription: "Fabrika, hastane ve kurumsal yemekhanelerde Öztiryakiler yer ocağı, benmari, kazan ve bulaşık makinesi servisi; planlı bakım. 0534 748 61 07.",
    lead: "Yemekhanede yemek saati ertelenmez. Yüzlerce kişilik öğünün aynı saatte hazır olması gerektiği için yer ocağı, benmari ve bulaşık makinesi gibi yüksek kapasiteli ekipmanların sorunsuz çalışması kritiktir.",
    context: [
      "Toplu yemek mutfaklarında büyük kazanlar yer ocaklarında saatlerce kaynar, pişen yemek self-servis benmarilerde tutulur ve servis sonunda binlerce parça bulaşık kısa sürede yıkanır. Bu üç halkadan biri koptuğunda öğün aksar.",
      "Catering firmaları ve tesis yönetimleriyle çalışırken müdahaleleri öğün saatlerinin dışına planlıyor, acil arızalarda ise önceliklendirme yapıyoruz.",
    ],
    critical: ["oztiryakiler-yer-ocagi-servisi", "oztiryakiler-benmari-servisi", "oztiryakiler-bulasik-makinesi-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-buzdolabi-servisi"],
    risks: [
      { t: "Kazanın yetişmemesi", d: "Tıkalı yer ocağı brülörü kaynama süresini ciddi şekilde uzatır." },
      { t: "Self-serviste soğuk yemek", d: "Benmari arızası hem şikâyet hem gıda güvenliği riski doğurur." },
      { t: "Bulaşık birikmesi", d: "Tünel makinede boyler arızası hijyen standardını düşürür." },
    ],
    plan: [
      { period: "Aylık", items: ["Yer ocağı brülör ve alev kontrolü", "Benmari rezistans ve vana kontrolü", "Bulaşık makinesi sıcaklık ölçümü"] },
      { period: "3 ayda bir", items: ["Gazlı cihazlarda emniyet testi", "Bulaşık makinesi kireç sökümü"] },
      { period: "Yılda bir", items: ["Tüm gaz hattında sızdırmazlık testi"] },
    ],
  },
  {
    slug: "pastane-firin",
    name: "Pastaneler ve Fırınlar",
    h1: "Pastane ve Unlu Mamul Fırınları İçin Ekipman Servisi",
    metaTitle: "Pastane Fırın Servisi – Öztiryakiler Ekipman Bakımı",
    metaDescription: "Pastane ve unlu mamul üreticilerinde Öztiryakiler konveksiyonel, katlı fırın ve soğutma dolapları için arıza onarımı ve bakım. 0534 748 61 07.",
    lead: "Pastanede ürün kalitesi, fırının birkaç derecelik hassasiyetine bağlıdır. Fan devri düşen ya da bir rezistansı zayıflayan fırın, tepsinin bir ucunda yanık, diğer ucunda çiğ ürün demektir.",
    context: [
      "Unlu mamul üretiminde fırınlar sabahın erken saatlerinden itibaren aralıksız çalışır. Teşhir ve pasta dolapları ise hem soğutma hem görünüm açısından satışın parçasıdır.",
      "Pastanelerle çalışırken fırın sıcaklık dağılımını ölçerek kontrol ediyor, fan ve rezistans sorunlarını üretim kaybı yaşanmadan yakalamayı hedefliyoruz.",
    ],
    critical: ["oztiryakiler-firin-servisi", "oztiryakiler-buzdolabi-servisi", "oztiryakiler-pizza-firini-servisi"],
    risks: [
      { t: "Dengesiz pişirme", d: "Fan motoru yatak arızası, ürünlerin farklı renkte çıkmasına neden olur." },
      { t: "Pasta dolabında terleme", d: "Conta ve soğutma sorunları dolap camında buğu ve ürün bozulmasına yol açar." },
    ],
    plan: [
      { period: "Aylık", items: ["Fırın fan ve kapı contası kontrolü", "Teşhir dolabı kondenser temizliği"] },
      { period: "3 ayda bir", items: ["Fırın sıcaklık dağılımı ölçümü", "Rezistans ve termostat testi"] },
    ],
  },
  {
    slug: "fast-food",
    name: "Fast Food ve Kafeler",
    h1: "Fast Food ve Kafeler İçin Hızlı Ekipman Servisi",
    metaTitle: "Fast Food Ekipman Servisi – Öztiryakiler Fritöz, Izgara",
    metaDescription: "Fast food ve kafelerde Öztiryakiler fritöz, ızgara, tost makinesi, pizza fırını ve bulaşık makinesi için aynı gün servis. 0534 748 61 07.",
    lead: "Hızlı serviste ekipman başına düşen ürün sayısı çok yüksektir. Fritöz ve ızgara durduğunda menünün yarısı satılamaz. Bu işletmelerde hız, onarımın kendisi kadar önemlidir.",
    context: [
      "Fritözler gün boyu yüksek sıcaklıkta çalışır, ızgara ve kontakt tost makineleri dakikada birkaç kez açılıp kapanır. Yağ ve ısı, bu cihazlarda termostat, kablo ve rezistans yorgunluğunu hızlandırır.",
      "Fast food işletmelerinde sık değişen parçaları araçlarımızda bulundurarak arızaların çoğunu ilk ziyarette kapatmayı amaçlıyoruz.",
    ],
    critical: ["oztiryakiler-fritoz-servisi", "oztiryakiler-izgara-servisi", "oztiryakiler-pizza-firini-servisi", "oztiryakiler-bulasik-makinesi-servisi"],
    risks: [
      { t: "Fritözde aşırı ısınma", d: "Yağ ömrünü kısaltır ve emniyetin atmasına neden olur." },
      { t: "Kontakt ızgara kablosu", d: "Sürekli hareket eden kablonun kopması üst plakayı devre dışı bırakır." },
    ],
    plan: [
      { period: "Aylık", items: ["Fritöz termostat ölçümü", "Izgara rezistans ve kablo kontrolü"] },
      { period: "3 ayda bir", items: ["Bulaşık makinesi kireç ve dozaj kontrolü", "Pizza fırını taş ve termostat kontrolü"] },
    ],
  },
  {
    slug: "catering",
    name: "Catering ve Organizasyon",
    h1: "Catering ve Organizasyon Mutfakları İçin Ekipman Servisi",
    metaTitle: "Catering Mutfak Ekipmanı Servisi – Öztiryakiler",
    metaDescription: "Catering, düğün salonu ve organizasyon mutfaklarında Öztiryakiler yer ocağı, fırın, benmari ve soğutma servisi; etkinlik öncesi kontrol. 0534 748 61 07.",
    lead: "Organizasyon mutfaklarında iş, belirli günlerde ve büyük hacimlerde yoğunlaşır. Ekipmanın tam da etkinlik günü arıza vermesi en büyük risktir; bu yüzden etkinlik öncesi kontrol, onarım kadar değerlidir.",
    context: [
      "Düğün salonları ve catering firmaları yer ocaklarını, büyük kapasiteli fırınları ve benmarileri yüzlerce kişilik servislerde kullanır. Bazı ekipmanlar haftalarca kullanılmadan bekleyip bir anda tam kapasite çalıştırılır.",
      "Uzun süre kullanılmayan gazlı cihazlarda termokupl ve musluk sorunları, soğutma dolaplarında ise kalkış arızaları sık görülür. Yoğun dönem öncesi genel kontrol öneriyoruz.",
    ],
    critical: ["oztiryakiler-yer-ocagi-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-benmari-servisi", "oztiryakiler-buzdolabi-servisi"],
    risks: [
      { t: "Etkinlik günü arıza", d: "Uzun süre beklemiş ekipmanlar ilk yoğun kullanımda arıza verebilir." },
      { t: "Kapasite yetersizliği", d: "Verimi düşmüş yer ocakları büyük kazanları zamanında kaynatamaz." },
    ],
    plan: [
      { period: "Yoğun dönem öncesi", items: ["Tüm gazlı cihazlarda emniyet ve alev kontrolü", "Soğutma dolaplarında test çalıştırması", "Benmari ve sıcak dolap kontrolü"] },
      { period: "Yılda bir", items: ["Gaz hattı sızdırmazlık testi", "Fırın genel bakımı"] },
    ],
  },
  {
    slug: "gemi-mutfaklari",
    name: "Gemi Mutfakları",
    h1: "Gemi Mutfakları İçin Öztiryakiler Ekipman Servisi",
    metaTitle: "Gemi Mutfağı Ekipman Servisi – Öztiryakiler",
    metaDescription: "Limanda veya tersanede bulunan gemilerin kuzinelerindeki Öztiryakiler ocak, fırın, fritöz ve soğutma cihazlarına yerinde onarım ve sefer öncesi bakım.",
    lead: "Bir gemi kuzinesinde arızalı cihazın yedeği çoğu zaman yoktur ve sefer başladıktan sonra teknisyen çağırmak mümkün değildir. Bu yüzden gemi mutfaklarında asıl iş, gemi limandayken arızayı kapatmak ve sefere hazır hale getirmektir.",
    context: [
      "Gemi mutfaklarında cihazlar dar bir alana sabitlenmiş, sürekli titreşime ve tuzlu, nemli havaya maruz kalır. Bu koşullar kara mutfaklarına göre bağlantı noktalarında gevşemeye, elektrik terminallerinde oksitlenmeye ve paslanmaz yüzeylerde korozyona daha hızlı yol açar.",
      "Ambarlı Limanı, Karaköy ve Sarayburnu rıhtımları, Haliç tersaneleri ve Avrupa Yakası marinalarında bağlı duran gemilere, kaptanlık ya da acente üzerinden alınan izinle yerinde servis veriyoruz. Liman giriş prosedürü için teknisyen bilgilerini önceden iletiyoruz.",
    ],
    critical: ["oztiryakiler-ocak-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-buzdolabi-servisi", "oztiryakiler-fritoz-servisi", "oztiryakiler-bulasik-makinesi-servisi"],
    risks: [
      { t: "Titreşimle gevşeyen bağlantılar", d: "Ocak ve fırınlarda gaz, elektrik ve su bağlantıları titreşimle gevşeyebilir; sefer öncesi sıkılık kontrolü şart." },
      { t: "Tuz ve nemden kaynaklı korozyon", d: "Elektrik terminalleri, termostat kontakları ve fan motorları kara mutfaklarına göre daha hızlı yıpranır." },
      { t: "Seferde soğutma kaybı", d: "Kumanya dolabının seferde arızalanması tüm erzağı riske atar; kompresör ve fan kontrolü limanda yapılmalı." },
    ],
    plan: [
      { period: "Her sefer öncesi", items: ["Bağlantı ve sabitleme kontrolü", "Soğutma sıcaklık ve fan testi", "Ocak ateşleme ve emniyet kontrolü"] },
      { period: "3 ayda bir", items: ["Elektrik terminali temizliği ve sıkılığı", "Fırın contası ve fan kontrolü", "Bulaşık makinesi kireç sökümü"] },
      { period: "Tersane / havuz dönemi", items: ["Genel ekipman revizyonu", "Yıpranan parça değişimi", "Soğutma gaz basınç kontrolü"] },
    ],
  },
  {
    slug: "askeri-mutfaklar",
    name: "Askeri Kurum Mutfakları",
    h1: "Askeri Kurum Mutfakları İçin Öztiryakiler Ekipman Servisi",
    metaTitle: "Askeri Mutfak Ekipman Servisi – Öztiryakiler",
    metaDescription: "Askeri birlik ve kurum mutfaklarındaki Öztiryakiler yer ocağı, kazan, fırın ve soğutma ekipmanlarına kurum prosedürüne uygun yerinde servis ve bakım.",
    lead: "Askeri kurum mutfakları günde üç öğün, yüzlerce hatta binlerce kişiye aynı saatte yemek çıkarır. Yemek saati ertelenemediği için arızaya hızlı müdahale kadar, arızayı önleyen düzenli bakım da önemlidir.",
    context: [
      "Bu mutfaklarda yük, büyük hacimli pişirmede toplanır: yer ocakları ve kazanlar, çok gözlü ocaklar, büyük fırınlar ve tabak devri yüksek bulaşık makineleri. Soğuk depolar ve buzdolapları ise toplu erzak saklandığı için sürekli tam kapasite çalışır.",
      "Kurum içine giriş izinli olduğu için teknisyen kimlik bilgilerini ve araç bilgisini önceden iletiyor, belirlenen saatte ve refakatle çalışıyoruz. Her ziyaret sonunda yapılan işlemleri, değişen parçaları ve önerileri içeren yazılı servis formu bırakıyor, faturalı çalışıyoruz.",
    ],
    critical: ["oztiryakiler-yer-ocagi-servisi", "oztiryakiler-ocak-servisi", "oztiryakiler-firin-servisi", "oztiryakiler-bulasik-makinesi-servisi", "oztiryakiler-buzdolabi-servisi"],
    risks: [
      { t: "Yemek saatinde kazan arızası", d: "Yer ocağı brülörü ya da gaz vanası arızası tüm öğünü etkiler; brülör temizliği ve vana kontrolü düzenli yapılmalı." },
      { t: "Bulaşık hattının durması", d: "Yüksek tabak devrinde boyler ve pompa arızası hattı kilitler; kireç sökümü ihmal edilmemeli." },
      { t: "Toplu erzakta soğutma kaybı", d: "Büyük hacimli dolaplarda kapasite düşüşü fark edilmeden ilerleyebilir; sıcaklık kaydı tutulmalı." },
    ],
    plan: [
      { period: "Aylık", items: ["Yer ocağı ve ocak brülör temizliği", "Soğutma sıcaklık ve kondenser kontrolü", "Bulaşık makinesi pompa ve rezistans kontrolü"] },
      { period: "3 ayda bir", items: ["Gaz hattı sızdırmazlık testi", "Fırın termostat ve fan kontrolü", "Kireç sökümü"] },
      { period: "Yılda bir", items: ["Tüm ekipmanın genel revizyonu", "Yıpranan parçaların planlı değişimi", "Yazılı durum raporu"] },
    ],
  },
  {
    slug: "okul-kantinleri",
    name: "Okul Kantinleri ve Yemekhaneleri",
    h1: "Okul Kantinleri İçin Öztiryakiler Ekipman Servisi",
    metaTitle: "Okul Kantini Ekipman Servisi – Öztiryakiler",
    metaDescription: "Okul kantini ve yemekhanelerindeki Öztiryakiler ocak, fritöz, benmari, tost ve soğutma cihazlarına yerinde onarım, tatil döneminde planlı bakım.",
    lead: "Okul kantininde yoğunluk teneffüslere ve öğle arasına sıkışır; 10–15 dakikalık bir arada yüzlerce öğrenciye servis verilir. Bu yüzden bir dolabın ya da benmarinin durması o günün satışını ve öğrencilerin öğle yemeğini doğrudan etkiler.",
    context: [
      "Kantinlerde en çok kullanılan cihazlar tezgah tipi buzdolapları ve içecek dolapları, sıcak yiyecek benmarileri, ızgara ve fritözdür. Yemekhanesi olan okullarda ise ocak, fırın, makarna haşlama ve bulaşık makinesi devreye girer.",
      "Okul mutfaklarında öğrenci güvenliği nedeniyle onarımları ders saatleri dışında ya da öğrencilerin mutfağa erişemediği zamanlarda yapıyoruz. Yarıyıl ve yaz tatillerini, cihazların kapsamlı bakımı ve yeni döneme hazırlanması için en uygun zaman olarak öneriyoruz.",
    ],
    critical: ["oztiryakiler-buzdolabi-servisi", "oztiryakiler-benmari-servisi", "oztiryakiler-fritoz-servisi", "oztiryakiler-izgara-servisi", "oztiryakiler-makarna-haslama-servisi"],
    risks: [
      { t: "Teneffüste soğutma arızası", d: "İçecek ve sandviç dolaplarının ısınması hem satış kaybı hem gıda güvenliği riski demektir." },
      { t: "Benmaride sıcaklık düşmesi", d: "Öğle servisinde yemeklerin yeterli sıcaklıkta tutulamaması; rezistans ve termostat kontrolü gerekir." },
      { t: "Uzun tatil sonrası çalışmayan cihaz", d: "Aylarca kapalı kalan cihazlarda conta kuruması, kireç ve toz birikimi açılışta arıza çıkarır." },
    ],
    plan: [
      { period: "Dönem başı", items: ["Tüm cihazların açılış kontrolü", "Soğutma sıcaklık testi", "Gaz ve elektrik bağlantı kontrolü"] },
      { period: "Dönem ortası", items: ["Kondenser temizliği", "Fritöz ve ızgara termostat kontrolü", "Benmari rezistans kontrolü"] },
      { period: "Yaz tatili", items: ["Genel bakım ve kireç sökümü", "Yıpranan conta ve parçaların değişimi", "Kapatma öncesi koruma işlemleri"] },
    ],
  },
];

export const getSector = (slug: string) => sectors.find((s) => s.slug === slug);
