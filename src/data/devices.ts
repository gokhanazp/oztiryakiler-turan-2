export type DeviceIcon =
  | "ocak" | "yerocagi" | "buzdolabi" | "fritoz" | "benmari"
  | "firin" | "pizza" | "makarna" | "izgara" | "bulasik";

export type Symptom = { s: string; cause: string; fix: string };
export type QA = { q: string; a: string };

export type Device = {
  slug: string;
  icon: DeviceIcon;
  name: string; // "Ocak"
  h1: string;
  metaTitle: string;
  metaDescription: string;
  lead: string;
  body: string[];
  symptoms: Symptom[];
  selfCheck: string[];
  scope: string[];
  care: string[];
  qa: QA[];
};

export const devices: Device[] = [
  {
    slug: "oztiryakiler-ocak-servisi",
    icon: "ocak",
    name: "Ocak",
    h1: "Öztiryakiler Ocak Tamiri",
    metaTitle: "Öztiryakiler Ocak Tamiri – Gaz ve Brülör Arızaları",
    metaDescription: "Öztiryakiler endüstriyel ocakta alev sönüyor, gaz ayarı tutmuyor veya plaka ısınmıyorsa yerinde onarım. Avrupa Yakası'nda servis: 0534 748 61 07.",
    lead: "Servis saatinde bir gözün yanmaması bütün hattı yavaşlatır. Gazlı, elektrikli ve indüksiyonlu Öztiryakiler ocaklarda arızanın kaynağını yerinde bulup aynı ziyarette kapatmaya çalışıyoruz.",
    body: [
      "Endüstriyel ocak arızalarının büyük kısmı üç noktada toplanır: alevi emniyete alan termokupl–ventil ikilisi, gazı ayarlayan musluk ve gazla havayı karıştıran brülör. Bu parçalar yağ, taşan sıvı ve yüksek ısı yüzünden zamanla yorulur; belirti çoğu zaman ‘bazen yanıyor, bazen sönüyor’ şeklinde kendini gösterir.",
      "Elektrikli ve indüksiyonlu modellerde ise sorun genelde ısıtıcı elemanda, kumanda anahtarında ya da elektronik kartta çıkar. Teknisyenimiz ölçü aletiyle direnç, gerilim ve kaçak akım değerlerine bakar; tahminle parça değiştirmeyiz.",
    ],
    symptoms: [
      { s: "Düğmeyi bırakınca alev sönüyor", cause: "Termokupl zayıflamış ya da alevin dışında kalmış", fix: "Termokupl konumu düzeltilir veya yenisi takılır, ventil test edilir" },
      { s: "Alev sarı ve is yapıyor", cause: "Brülör delikleri yağla tıkanmış, hava ayarı kaymış", fix: "Brülör sökülüp temizlenir, hava klapesi ayarlanır" },
      { s: "Gaz ayarı kendiliğinden değişiyor", cause: "Musluk içi yağsız kalmış veya aşınmış", fix: "Musluk bakımı yapılır, gerekirse yenilenir" },
      { s: "Çakmak kıvılcım vermiyor", cause: "Buji, kablo ya da piezo arızası", fix: "Ateşleme seti kontrol edilir ve değiştirilir" },
      { s: "Elektrikli plaka geç ısınıyor", cause: "Rezistans devresinden biri kopmuş", fix: "Direnç ölçülür, arızalı rezistans yenilenir" },
    ],
    selfCheck: [
      "Ana gaz vanasının tam açık olduğuna bakın.",
      "Brülör kapağının yerine oturduğundan emin olun; yamuk kapak alevi bozar.",
      "Elektrikli modelde sigorta ve kaçak akım rölesini kontrol edin.",
      "Gaz kokusu varsa hiçbir anahtara dokunmadan vanayı kapatıp ortamı havalandırın.",
    ],
    scope: ["Termokupl ve emniyet ventili", "Gaz musluğu ve meme", "Brülör ve alev dağıtıcı", "Ateşleme bujisi ve piezo", "Rezistans ve kumanda anahtarı", "LPG–doğalgaz dönüşümü"],
    care: [
      "Brülör kapaklarını kapanıştan sonra sıcak suda bekletip fırçalayın.",
      "Taşmaları beklemeden silin; kuruyan yemek delikleri kapatır.",
      "Yılda bir kez gaz hattına sızdırmazlık testi yaptırın.",
    ],
    qa: [
      { q: "Ocak gözlerinden yalnızca biri çalışmıyor, tüm ocağı mı değiştirmek gerekir?", a: "Hayır. Gözler birbirinden bağımsız çalışır; arızalı gözün termokupl, musluk veya brülörü tek başına onarılır." },
      { q: "Doğalgaza geçtik, eski LPG ocağı kullanılabilir mi?", a: "Memeler ve musluk ayarı değiştirilerek kullanılabilir. Dönüşümden sonra alev boyu ve sızdırmazlık mutlaka kontrol edilmelidir." },
      { q: "Ocak tamiri ne kadar sürer?", a: "Termokupl, buji veya brülör temizliği gibi işler çoğunlukla bir saat içinde biter. Parça siparişi gerekiyorsa süreyi önceden söyleriz." },
    ],
  },
  {
    slug: "oztiryakiler-yer-ocagi-servisi",
    icon: "yerocagi",
    name: "Yer Ocağı",
    h1: "Öztiryakiler Yer Ocağı Tamiri",
    metaTitle: "Öztiryakiler Yer Ocağı Tamiri – Kazan Ocağı Servisi",
    metaDescription: "Öztiryakiler yer ocağında alev zayıfsa, sönüyorsa ya da ızgara çöktüyse yerinde tamir. Brülör, musluk ve termokupl işleri. Tel: 0534 748 61 07.",
    lead: "Büyük kazanları taşıyan yer ocakları en ağır çalışan ekipmandır. Alevin zayıflaması, kazanın geç kaynaması ya da ızgaranın çökmesi gibi sorunları toplu yemek mutfağının temposunu bozmadan çözüyoruz.",
    body: [
      "Yer ocağında yüksek debili brülör kullanılır; bu yüzden küçük bir tıkanıklık bile kaynama süresini uzatır ve gaz faturasına yansır. Kazandan taşan su ile yağ, brülör halkalarının arasına dolarak alevi düzensizleştirir.",
      "Ağır kazan yükü zamanla ızgarayı, ayakları ve gövdeyi de yorar. Teknisyenimiz hem yanma tarafını hem de mekanik taşıyıcı parçaları birlikte kontrol eder; eğilen ızgara alevi kazanın dışına taşıdığı için verimi düşürür.",
    ],
    symptoms: [
      { s: "Kazan eskisinden geç kaynıyor", cause: "Brülör halkaları veya meme kısmen tıkalı", fix: "Halkalar sökülüp temizlenir, meme ve gaz basıncı kontrol edilir" },
      { s: "Alev kazanın kenarından taşıyor", cause: "Izgara eğilmiş, kazan yerine oturmuyor", fix: "Izgara düzeltilir veya yenisiyle değiştirilir" },
      { s: "Pilot alev tutmuyor", cause: "Termokupl veya emniyet ventili arızası", fix: "Emniyet grubu test edilir, arızalı parça yenilenir" },
      { s: "Yanarken patlama sesi geliyor", cause: "Hava–gaz oranı bozuk, geç ateşleme", fix: "Hava ayarı yapılır, ateşleme mesafesi düzeltilir" },
    ],
    selfCheck: [
      "Kazanı ızgaranın tam ortasına yerleştirin.",
      "Brülör çevresinde biriken yemek artığını soğukken temizleyin.",
      "Gaz hortumunda ezilme veya çatlak olup olmadığına bakın.",
    ],
    scope: ["Brülör halkası ve meme", "Gaz musluğu", "Termokupl ve pilot", "Ateşleme sistemi", "Kazan ızgarası ve ayaklar", "Gaz tipi dönüşümü"],
    care: [
      "Haftada bir brülörü söküp yıkayın ve tamamen kuruttuktan sonra takın.",
      "Taşan suyun brülöre inmemesi için kazanı ağzına kadar doldurmayın.",
      "Alev sesi değiştiğinde ayar yaptırmayı ertelemeyin.",
    ],
    qa: [
      { q: "Yer ocağının ızgarası ayrı olarak değişir mi?", a: "Evet. Ocağınızın ölçüsüne uygun ızgara temin edilip yerinde değiştirilir; ocağın tamamını yenilemeniz gerekmez." },
      { q: "Yer ocağı neden çok gaz yakıyor?", a: "Tıkalı brülör ve yanlış hava ayarı gazın tam yanmamasına yol açar. Temizlik ve ayardan sonra tüketim genellikle belirgin şekilde düşer." },
      { q: "Çift gözlü yer ocağının bir gözü sönüyorsa ne yapmalıyım?", a: "O gözün termokupl ve ventilini kontrol ettirin. Diğer göz çalışmaya devam edebilir; arızalı göz tek başına onarılır." },
    ],
  },
  {
    slug: "oztiryakiler-buzdolabi-servisi",
    icon: "buzdolabi",
    name: "Buzdolabı",
    h1: "Öztiryakiler Endüstriyel Buzdolabı Tamiri",
    metaTitle: "Öztiryakiler Buzdolabı Tamiri – Soğutma ve Gaz Arızası",
    metaDescription: "Öztiryakiler endüstriyel buzdolabı soğutmuyor, buz yapıyor veya su akıtıyorsa öncelikli servis. Gaz dolumu, kompresör ve fan onarımı. 0534 748 61 07.",
    lead: "Soğutmayan bir dolap, içindeki malzeme kadar para kaybı demektir. Soğutma arızalarını sıraya koymadan önceliklendiriyor, ürünlerinizi korumak için mümkün olan en kısa sürede yanınıza geliyoruz.",
    body: [
      "Ticari buzdolaplarında arızanın yeri çoğu zaman sesinden anlaşılır: kompresör hiç çalışmıyorsa elektrik ya da kalkış tarafına, sürekli çalışıp soğutmuyorsa gaz eksikliğine veya tıkalı kondensere bakarız. Fanın sesi değiştiyse yatak arızası yakındır.",
      "Gaz kaçağı varsa önce kaçağın yeri bulunur ve kapatılır. Ardından sisteme vakum çekilir ve etiketteki miktar kadar soğutucu gaz şarj edilir. Kaçak giderilmeden yapılan ‘gaz takviyesi’ kısa sürede aynı arızayı geri getirir.",
    ],
    symptoms: [
      { s: "Dolap çalışıyor ama içi ılık", cause: "Gaz kaçağı veya tozla kapanmış kondenser", fix: "Kaçak testi, kondenser temizliği, gerekiyorsa vakum ve şarj" },
      { s: "Arka panelde kalın buz tabakası", cause: "Defrost rezistansı ya da zamanlayıcısı arızalı", fix: "Defrost devresi ölçülür, arızalı parça değiştirilir" },
      { s: "Kompresör sık sık durup kalkıyor", cause: "Termostat, kalkış rölesi veya aşırı ısınma", fix: "Röle ve termostat test edilir, havalandırma kontrol edilir" },
      { s: "Dolabın altında su birikiyor", cause: "Drenaj hattı tıkanmış", fix: "Tahliye hattı açılır, tava ve hortum kontrol edilir" },
      { s: "Ekranda sıcaklık uyarısı", cause: "Sensör (prob) veya kontrol kartı hatası", fix: "Prob ölçülür, kart arızası onarılır ya da değiştirilir" },
    ],
    selfCheck: [
      "Dolabın arkasında en az 10 cm boşluk olup olmadığına bakın.",
      "Kapı contasına bir kâğıt sıkıştırıp çekin; kolay çıkıyorsa conta kaçırıyordur.",
      "Fişin ve prizin ısınıp ısınmadığını kontrol edin.",
      "Arıza sürerken kapıyı mümkün olduğunca açmayın.",
    ],
    scope: ["Kaçak tespiti, kaynak, vakum ve gaz şarjı", "Kompresör ve kalkış rölesi", "Kondenser ve evaporatör fanları", "Defrost rezistansı ve zamanlayıcı", "Termostat, prob ve kontrol kartı", "Kapı contası ve menteşe"],
    care: [
      "Kondenser peteğini ayda bir fırçayla tozdan arındırın.",
      "Sıcak tencereyi doğrudan dolaba koymayın; kompresörü yorar.",
      "Rafları sıkıştırmayın, soğuk hava dolaşabilsin.",
    ],
    qa: [
      { q: "Buzdolabına sadece gaz basmak yeterli mi?", a: "Hayır. Gaz kendi kendine eksilmez; eksikse bir yerden kaçıyordur. Kaçak bulunup kapatılmadan yapılan dolum kısa sürede boşa gider." },
      { q: "Kompresör değişmeli mi, yoksa yeni dolap mı almalıyım?", a: "Gövde ve boru tesisatı sağlamsa kompresör değişimi çoğu zaman daha ekonomiktir. İnceleme sonrası iki seçeneğin maliyetini açıkça paylaşırız." },
      { q: "Tezgah tipi ve saladette dolaplara da bakıyor musunuz?", a: "Evet. Dik tip, tezgah tipi, saladette, derin dondurucu ve teşhir dolaplarının tamamına servis veriyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-fritoz-servisi",
    icon: "fritoz",
    name: "Fritöz",
    h1: "Öztiryakiler Fritöz Tamiri",
    metaTitle: "Öztiryakiler Fritöz Tamiri – Isıtmıyor, Emniyet Atıyor",
    metaDescription: "Öztiryakiler fritöz yağı ısıtmıyor, emniyet termostatı atıyor ya da hazne sızdırıyorsa yerinde onarım. Gazlı ve elektrikli modeller. 0534 748 61 07.",
    lead: "Fritöz durunca sipariş kuyruğu birikir. Elektrikli ve gazlı Öztiryakiler fritözlerde ısınma, aşırı ısınma ve sızıntı arızalarını yerinde, çoğunlukla aynı gün gideriyoruz.",
    body: [
      "Fritözde iki termostat birlikte çalışır: biri yağı istediğiniz sıcaklıkta tutar, diğeri yağ tehlikeli seviyeye çıkarsa elektriği keser. Çalışma termostatı bozulduğunda yağ fazla ısınır ve emniyet devreye girer; kullanıcı bunu ‘fritöz kendi kendine kapanıyor’ diye tarif eder.",
      "Isınmama şikâyetinde ise önce rezistans grubuna ve kontaktöre bakarız. Gazlı modellerde aynı belirti tıkalı brülörden ya da pilot alevden kaynaklanabilir. Hazne kaynaklarındaki kılcal çatlaklar da zamanla yağ sızıntısına yol açar.",
    ],
    symptoms: [
      { s: "Fritöz hiç ısınmıyor", cause: "Rezistans kopuk, kontaktör veya termostat arızalı", fix: "Devre ölçülür, arızalı eleman yenilenir" },
      { s: "Kısa süre çalışıp kapanıyor", cause: "Çalışma termostatı sapıyor, emniyet atıyor", fix: "Termostat kalibre edilir veya değiştirilir" },
      { s: "Yağ köpürüyor ve taşıyor", cause: "Aşırı ısınma ya da eskimiş yağ", fix: "Sıcaklık ölçülür, termostat kontrol edilir" },
      { s: "Tahliye musluğundan yağ damlıyor", cause: "Musluk contası aşınmış", fix: "Conta veya musluk değiştirilir" },
      { s: "Gazlı fritözde alev tutmuyor", cause: "Pilot, termokupl veya valf arızası", fix: "Ateşleme ve emniyet grubu onarılır" },
    ],
    selfCheck: [
      "Emniyet termostatının reset düğmesine basmayı deneyin (fritöz soğukken).",
      "Yağ seviyesinin rezistansların üzerinde olduğundan emin olun.",
      "Sigorta ve kaçak akım rölesinin konumuna bakın.",
    ],
    scope: ["Rezistans grubu", "Çalışma ve emniyet termostatı", "Kontaktör ve şalter", "Tahliye musluğu", "Brülör, pilot ve gaz valfi", "Hazne kaynağı"],
    care: [
      "Yağı gün sonunda süzün, köpürmeye başladığında değiştirin.",
      "Hazneyi kaynatarak temizledikten sonra deterjanı iyice durulayın.",
      "Rezistansları sert metal aletlerle kazımayın.",
    ],
    qa: [
      { q: "Fritözün emniyet termostatı neden sürekli atıyor?", a: "Çoğunlukla çalışma termostatı doğru ölçmediği için yağ olması gerekenden fazla ısınır. Emniyetin atması bir koruma; asıl arıza çalışma termostatındadır." },
      { q: "Yağ olmadan fritözü açtık, rezistans yanmış olabilir mi?", a: "Evet, kuru çalıştırma rezistansa ciddi zarar verir. Ölçümle kontrol edip gerekiyorsa rezistans grubunu değiştiriyoruz." },
      { q: "Çift hazneli fritözün bir tarafı çalışıyorsa diğeri onarılır mı?", a: "Evet, iki hazne ayrı devrelerden beslenir ve birbirinden bağımsız onarılır." },
    ],
  },
  {
    slug: "oztiryakiler-benmari-servisi",
    icon: "benmari",
    name: "Benmari",
    h1: "Öztiryakiler Benmari Tamiri",
    metaTitle: "Öztiryakiler Benmari Tamiri – Isıtma ve Sızıntı",
    metaDescription: "Öztiryakiler benmari ısıtmıyor, bölmeler farklı ısınıyor ya da hazne su kaçırıyorsa yerinde servis. Rezistans, termostat ve vana onarımı. 0534 748 61 07.",
    lead: "Benmari yemeği güvenli sıcaklıkta tutamadığında hem lezzet hem gıda güvenliği riske girer. Self-servis hatlarında ve sıcak teşhir ünitelerinde ısıtma ve su kaçağı sorunlarını yerinde çözüyoruz.",
    body: [
      "Sulu benmarilerde ısı, haznedeki suya rezistans üzerinden aktarılır. Sert su kullanılan mutfaklarda rezistansın üstü kireçle kaplanır; ısı suya geçemediği için cihaz daha uzun çalışır, sonunda rezistans yanar.",
      "Kuru benmarilerde ise ısı doğrudan yüzeye verilir ve arıza genellikle enerji regülatörü veya termostattan gelir. Haznedeki küçük bir kaynak çatlağı, suyun elektrik aksamına ulaşmasına ve kaçak akım rölesinin atmasına yol açabilir.",
    ],
    symptoms: [
      { s: "Benmari ısınmıyor", cause: "Rezistans, termostat veya regülatör arızası", fix: "Devre ölçülür, arızalı parça yenilenir" },
      { s: "Bir bölme diğerlerinden soğuk", cause: "O bölmenin rezistansı zayıf veya kireçli", fix: "Kireç sökülür, rezistans kontrol edilir" },
      { s: "Haznenin altından su geliyor", cause: "Tahliye vanası contası veya kaynak çatlağı", fix: "Vana yenilenir ya da paslanmaz kaynak yapılır" },
      { s: "Kaçak akım rölesi atıyor", cause: "Nem almış rezistans veya kablo", fix: "İzolasyon ölçülür, nemli parça değiştirilir" },
    ],
    selfCheck: [
      "Haznede yeterli su olup olmadığını kontrol edin.",
      "Tahliye vanasının tam kapalı olduğuna bakın.",
      "Isıtma düğmesinin doğru kademede olduğundan emin olun.",
    ],
    scope: ["Rezistans", "Termostat ve enerji regülatörü", "Tahliye vanası ve conta", "Hazne kaynağı", "Kireç sökümü", "Aydınlatma ve cam aksam"],
    care: [
      "Suyu her gün değiştirin; mümkünse yumuşatılmış su kullanın.",
      "Ayda bir kireç çözücüyle hazneyi temizleyin.",
      "Benmariyi susuz çalıştırmayın.",
    ],
    qa: [
      { q: "Benmarinin haznesi delindi, yenisini mi almalıyız?", a: "Genellikle gerekmez. Paslanmaz çeliğe uygun kaynakla çatlak kapatılır ve hazne sızdırmazlık testinden geçirilir." },
      { q: "Kireç benmariyi bozar mı?", a: "Doğrudan bozmaz ama rezistansın ömrünü ciddi şekilde kısaltır ve enerji tüketimini artırır." },
      { q: "Sıcak bekletme dolaplarına da servis veriyor musunuz?", a: "Evet. Sıcak dolap, sos benmarisi ve self-servis hattı ünitelerinin tamamına bakıyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-firin-servisi",
    icon: "firin",
    name: "Fırın",
    h1: "Öztiryakiler Fırın Tamiri",
    metaTitle: "Öztiryakiler Fırın Tamiri – Kombi ve Konveksiyonel",
    metaDescription: "Öztiryakiler konveksiyonel ve kombi fırında fan dönmüyor, buhar yok veya hata kodu varsa yerinde onarım. Kart, motor, rezistans. 0534 748 61 07.",
    lead: "Fırın düzensiz pişirmeye başladığında menüdeki her ürün etkilenir. Konveksiyonel, kombi buharlı ve katlı Öztiryakiler fırınlarda fan, ısıtma, buhar ve elektronik arızalarını ölçerek tespit ediyoruz.",
    body: [
      "Konveksiyonel fırının kalbi fan motorudur; sıcak havayı hazne içinde eşit dağıtır. Motor yatağı aşındığında önce ses yapar, sonra yavaşlar. Yavaş dönen fan, tepsilerin bir tarafının yanıp diğer tarafının çiğ kalmasına neden olur.",
      "Kombi fırınlarda buhar jeneratörü işin içine girer. Kireçli suyla çalışan jeneratörde seviye sensörü yanlış ölçer, solenoid valf tıkanır ve fırın buhar üretmez. Ekranda görünen hata kodunu not etmeniz, teknisyenin doğru parçayla gelmesini kolaylaştırır.",
    ],
    symptoms: [
      { s: "Fan dönmüyor ya da ses yapıyor", cause: "Motor yatağı, kondansatör veya sargı arızası", fix: "Motor test edilir, onarılır ya da değiştirilir" },
      { s: "Ürünler bir yandan yanıyor", cause: "Yavaş fan veya zayıf rezistans", fix: "Fan devri ve rezistanslar kontrol edilir" },
      { s: "Kombi fırın buhar vermiyor", cause: "Jeneratörde kireç, valf veya sensör arızası", fix: "Kireç sökülür, valf ve sensör yenilenir" },
      { s: "Ekranda hata kodu", cause: "Prob, sensör veya kontrol kartı", fix: "Kod okunur, ilgili parça ölçülüp onarılır" },
      { s: "Kapıdan ısı kaçıyor", cause: "Conta yıpranmış, menteşe ayarı bozuk", fix: "Conta değiştirilir, kapı ayarlanır" },
    ],
    selfCheck: [
      "Hata kodunu ve hangi programda çıktığını not edin.",
      "Kombi fırında su vanasının açık olduğunu kontrol edin.",
      "Kapı contasında yırtık veya ezilme olup olmadığına bakın.",
    ],
    scope: ["Fan motoru ve kondansatör", "Rezistans ve termostat", "Buhar jeneratörü ve solenoid valf", "Elektronik kart ve ekran", "Gazlı modellerde brülör ve ateşleme", "Kapı contası, cam ve menteşe"],
    care: [
      "Kombi fırında su yumuşatma filtresini zamanında değiştirin.",
      "Fan kapağının arkasında biriken yağı periyodik olarak temizletin.",
      "Hazneyi soğuduktan sonra uygun temizleyiciyle silin.",
    ],
    qa: [
      { q: "Fırın kartı onarılabilir mi, yoksa değişmesi mi gerekir?", a: "Birçok kart arızası parça seviyesinde onarılabilir. Onarım mümkün değilse değişim maliyetini işlem öncesi paylaşırız." },
      { q: "Kombi fırına kireç sökümü ne sıklıkla yapılmalı?", a: "Su sertliğine ve kullanım yoğunluğuna bağlı olarak genellikle üç ila altı ayda bir önerilir." },
      { q: "Katlı pastane fırınlarına bakıyor musunuz?", a: "Evet. Konveksiyonel, kombi, katlı ve döner raflı fırınlara servis veriyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-pizza-firini-servisi",
    icon: "pizza",
    name: "Pizza Fırını",
    h1: "Öztiryakiler Pizza Fırını Tamiri",
    metaTitle: "Öztiryakiler Pizza Fırını Tamiri – Taş ve Rezistans",
    metaDescription: "Öztiryakiler pizza fırını ısıya çıkmıyor, taban taşı çatladı veya konveyör durduysa yerinde onarım. Elektrikli, gazlı, bantlı. 0534 748 61 07.",
    lead: "Pizzada hamurun pişmesi saniyelerle ölçülür; fırın birkaç derece sapınca taban ya yanar ya hamur kalır. Elektrikli, gazlı ve konveyörlü Öztiryakiler pizza fırınlarında sıcaklık, taş ve bant arızalarını gideriyoruz.",
    body: [
      "Katlı pizza fırınlarında alt ve üst ısıtıcılar ayrı termostatlarla kontrol edilir. Bunlardan biri zayıfladığında tabanı pişmiş ama üstü soluk ya da tersi pizzalar çıkar. Bölgesel ölçüm yapmadan doğru parçayı bulmak zordur.",
      "Refrakter taban taşı ise ani sıcaklık değişimine hassastır. Sıcak taşa ıslak bezle dokunmak veya fırını hızlı ısıtmak taşı çatlatır. Konveyörlü fırınlarda bant hızının kayması, pişirme süresini değiştirdiği için ürün kalitesini doğrudan bozar.",
    ],
    symptoms: [
      { s: "Fırın istenen dereceye çıkmıyor", cause: "Rezistans, kontaktör veya termostat", fix: "Bölge bazlı ölçüm, arızalı parçanın değişimi" },
      { s: "Taban pişiyor, üst soluk kalıyor", cause: "Üst ısıtıcı grubunda zayıflama", fix: "Üst rezistans ve termostat yenilenir" },
      { s: "Taban taşında çatlak", cause: "Termal şok veya darbe", fix: "Ölçüye uygun refrakter taş takılır" },
      { s: "Konveyör bant duruyor", cause: "Motor, zincir veya hız kontrol arızası", fix: "Tahrik sistemi onarılır, hız kalibre edilir" },
    ],
    selfCheck: [
      "Fırını kademeli ısıtın; soğuk fırını en yüksek dereceye birden açmayın.",
      "Taşı soğukken ve kuru fırçayla temizleyin.",
      "Konveyörlü modelde bantta sıkışan malzeme olup olmadığına bakın.",
    ],
    scope: ["Alt ve üst rezistans", "Termostat ve kontaktör", "Refrakter taban taşı", "Konveyör motoru ve hız kontrol", "Gazlı modellerde brülör ve valf", "Kapı yayı, cam ve termometre"],
    care: [
      "Taşa ıslak bez, su veya deterjan değdirmeyin.",
      "Un ve kalıntıyı pirinç fırçayla süpürün.",
      "Konveyör zincirini düzenli temizletip yağlatın.",
    ],
    qa: [
      { q: "Çatlamış taban taşıyla çalışmaya devam edebilir miyim?", a: "Kısa süre çalışabilir ama çatlak büyür ve ısı dağılımı bozulur. Taş en kısa sürede ölçüsüne uygun yenisiyle değiştirilmelidir." },
      { q: "Pide ve lahmacun fırınlarına da bakıyor musunuz?", a: "Evet, taş tabanlı pide ve lahmacun fırınları da servis kapsamımızda." },
      { q: "Konveyörlü fırında bant hızı neden değişiyor?", a: "Hız kontrol kartı veya motor yorulduğunda devir dalgalanır. Ölçüm yapıp kartı onarıyor ya da motoru değiştiriyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-makarna-haslama-servisi",
    icon: "makarna",
    name: "Makarna Haşlama",
    h1: "Öztiryakiler Makarna Haşlama Cihazı Tamiri",
    metaTitle: "Öztiryakiler Makarna Haşlama Tamiri – Su ve Isıtma",
    metaDescription: "Öztiryakiler makarna haşlama cihazı su almıyor, geç kaynıyor ya da taşıyorsa yerinde onarım. Solenoid valf, rezistans, brülör. 0534 748 61 07.",
    lead: "Makarna pişiricide suyun kaynama hızı servisin hızıdır. Su almayan, geç kaynayan ya da taşan Öztiryakiler makarna haşlama cihazlarını yerinde onarıyoruz.",
    body: [
      "Makarna haşlama cihazında su, solenoid valf üzerinden otomatik olarak haznede tutulur. Valfin içine kireç ya da tortu girdiğinde ya hiç su almaz ya da kapanamayıp taşırır. Taşma kanalının nişastayla tıkanması da benzer belirti verir.",
      "Kaynama süresinin uzaması genellikle kireç kaplı rezistanstan veya gazlı modellerde kirlenmiş brülörden kaynaklanır. Isıtıcı yüzeyi temizlendiğinde süre çoğu zaman eski hâline döner.",
    ],
    symptoms: [
      { s: "Cihaz su almıyor", cause: "Solenoid valf veya filtre tıkalı", fix: "Valf temizlenir ya da değiştirilir" },
      { s: "Hazne taşıyor", cause: "Valf kapanmıyor veya taşma kanalı tıkalı", fix: "Kanal açılır, valf yenilenir" },
      { s: "Su geç kaynıyor", cause: "Kireçli rezistans veya kirli brülör", fix: "Kireç sökülür, ısıtıcı kontrol edilir" },
      { s: "Tahliye vanası sızdırıyor", cause: "Conta aşınmış", fix: "Conta veya vana değiştirilir" },
    ],
    selfCheck: [
      "Cihazın su vanasının açık olduğunu kontrol edin.",
      "Taşma kanalında nişasta birikintisi olup olmadığına bakın.",
      "Gün sonunda hazneyi boşaltıp durulayın.",
    ],
    scope: ["Solenoid su giriş valfi", "Rezistans ve termostat", "Brülör, termokupl ve gaz valfi", "Tahliye vanası", "Taşma kanalı temizliği", "Hazne kireç sökümü"],
    care: [
      "Nişastalı suyu her gün boşaltın.",
      "Kireçli bölgelerde su yumuşatıcı kullanın.",
      "Cihazı susuz çalıştırmayın.",
    ],
    qa: [
      { q: "Makarna pişirici neden köpükle taşıyor?", a: "Nişasta oranı arttığında köpük oluşur; taşma kanalı tıkalıysa köpük dışarı taşar. Kanalın temizliği ve suyun düzenli değişimi sorunu büyük ölçüde çözer." },
      { q: "Su giriş valfi aynı gün değişir mi?", a: "Yaygın valf tipleri araçlarımızda bulunur; çoğu durumda aynı ziyarette değiştirilir." },
      { q: "Gazlı makarna pişiricilere bakıyor musunuz?", a: "Evet, gazlı ve elektrikli tüm modellere servis veriyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-izgara-servisi",
    icon: "izgara",
    name: "Izgara",
    h1: "Öztiryakiler Izgara Tamiri",
    metaTitle: "Öztiryakiler Izgara Tamiri – Lav Taşlı ve Plaka",
    metaDescription: "Öztiryakiler lav taşlı, gazlı, elektrikli veya kontakt ızgara ısınmıyor ya da alev sönüyorsa yerinde servis. Brülör ve rezistans. 0534 748 61 07.",
    lead: "Izgarada ısının eşit dağılmaması ürünün bir tarafının yanıp diğerinin çiğ kalması demektir. Lav taşlı, gazlı, elektrikli ve kontakt Öztiryakiler ızgaralarda ısıtma ve ateşleme arızalarını yerinde gideriyoruz.",
    body: [
      "Lav taşlı ızgaralarda yağ damlayıp taşlara emilir; taşlar zamanla yağa doyar ve alev patlamalarına yol açar. Brülör delikleri de bu yağla kapanınca ızgaranın bir bölümü soğuk kalır.",
      "Elektrikli plaka ve kontakt ızgaralarda ısı birden fazla rezistans grubuyla sağlanır. Gruplardan biri koptuğunda plakada soğuk bir şerit oluşur. Kontakt ızgaralarda üst kapağın kablosu sürekli hareket ettiği için kopma riski yüksektir.",
    ],
    symptoms: [
      { s: "Plakanın bir bölümü soğuk", cause: "Rezistans grubu veya brülör hattı arızalı", fix: "Bölge ölçümü, rezistans/brülör onarımı" },
      { s: "Lav taşlarında alev patlaması", cause: "Taşlar yağa doymuş", fix: "Taşlar yenilenir, brülör ayarlanır" },
      { s: "Gazlı ızgarada alev sönüyor", cause: "Termokupl veya pilot arızası", fix: "Emniyet grubu yenilenir" },
      { s: "Kontakt ızgara üstten ısıtmıyor", cause: "Üst rezistans veya bağlantı kablosu kopuk", fix: "Rezistans ve kablo değiştirilir" },
    ],
    selfCheck: [
      "Yağ çekmecesinin dolu olmadığından emin olun.",
      "Izgara tellerini sıcakken fırçalayın.",
      "Lav taşlarını ara sıra ters çevirin.",
    ],
    scope: ["Brülör ve gaz musluğu", "Termokupl ve pilot", "Rezistans ve termostat", "Lav taşı yenileme", "Kontakt ızgara menteşe ve yay", "Yağ çekmecesi ve kanal"],
    care: [
      "Yağ çekmecesini her gün boşaltın; yangın riskini azaltır.",
      "Lav taşlarını yağa doyduklarında değiştirin.",
      "Plakayı soğumadan sıyırıcıyla temizleyin.",
    ],
    qa: [
      { q: "Lav taşları ne zaman değişmeli?", a: "Taşlar koyulaşıp yağ kokusu vermeye başladığında ve alev patlamaları sıklaştığında değişim zamanı gelmiştir." },
      { q: "Tost makinesi (kontakt ızgara) tamir ediliyor mu?", a: "Evet. Rezistans, termostat, menteşe ve kablo değişimi yapıyoruz." },
      { q: "Salamander ızgaraya da bakıyor musunuz?", a: "Evet, salamander dahil tüm ızgara tiplerine servis veriyoruz." },
    ],
  },
  {
    slug: "oztiryakiler-bulasik-makinesi-servisi",
    icon: "bulasik",
    name: "Bulaşık Makinesi",
    h1: "Öztiryakiler Bulaşık Makinesi Tamiri",
    metaTitle: "Öztiryakiler Bulaşık Makinesi Tamiri – Pompa ve Boyler",
    metaDescription: "Öztiryakiler endüstriyel bulaşık makinesi yıkamıyor, ısıtmıyor ya da su boşaltmıyorsa yerinde onarım. Giyotin, tezgah altı, konveyörlü. 0534 748 61 07.",
    lead: "Bulaşık makinesi durduğunda tabak, bardak ve tepsi birkaç dakikada birikir. Tezgah altı, giyotin ve konveyörlü Öztiryakiler bulaşık makinelerinde yıkama, ısıtma ve tahliye arızalarını yerinde çözüyoruz.",
    body: [
      "Endüstriyel bulaşık makinesinde iki ısıtıcı vardır: yıkama suyunu ısıtan tank rezistansı ve durulama suyunu daha yüksek sıcaklığa çıkaran boyler. Durulama sıcaklığı düştüğünde bulaşıklar hijyenik olarak temizlenmez ve lekeli çıkar.",
      "Kireç bu makinelerin en büyük düşmanıdır. Yumuşatıcı olmadan çalışan makinede kollar tıkanır, boyler rezistansı kireçle kaplanır ve deterjan dozajı bozulur. Arızayı onardıktan sonra su sertliğini ölçüp dozaj ayarını da yapıyoruz.",
    ],
    symptoms: [
      { s: "Bulaşıklar lekeli çıkıyor", cause: "Tıkalı kollar, düşük durulama ısısı, dozaj hatası", fix: "Kollar açılır, boyler ve dozaj kontrol edilir" },
      { s: "Su ısınmıyor", cause: "Tank veya boyler rezistansı, termostat", fix: "Rezistans ve termostat yenilenir" },
      { s: "Makine su almıyor", cause: "Giriş valfi veya seviye presostatı", fix: "Valf ve presostat değiştirilir" },
      { s: "Su boşaltmıyor", cause: "Tahliye pompası veya hat tıkanıklığı", fix: "Pompa onarılır, hat açılır" },
      { s: "Deterjan çekmiyor", cause: "Dozaj pompası hortumu çatlamış", fix: "Dozaj pompası onarılır, hortum yenilenir" },
    ],
    selfCheck: [
      "Tank filtresini çıkarıp temizleyin.",
      "Deterjan ve parlatıcı bidonlarının boş olmadığından emin olun.",
      "Su girişi musluğunun açık olduğuna bakın.",
    ],
    scope: ["Yıkama ve durulama pompası", "Tank ve boyler rezistansı", "Su giriş valfi ve presostat", "Deterjan ve parlatıcı dozaj pompası", "Tahliye pompası", "Kireç sökümü ve yumuşatıcı kurulumu"],
    care: [
      "Her vardiya sonunda filtreleri temizleyin.",
      "Kolları haftada bir söküp deliklerini açın.",
      "Tankı boşaltıp kapağı açık bırakarak kurumasını sağlayın.",
    ],
    qa: [
      { q: "Bulaşık makinesinde bardaklar neden beyaz lekeli?", a: "Genellikle kireçli su ve yetersiz parlatıcıdan kaynaklanır. Su sertliğini ölçüp yumuşatıcı ve parlatıcı ayarını yapıyoruz." },
      { q: "Konveyörlü (tünel) makinelere servis veriyor musunuz?", a: "Evet. Tahrik sistemi, perdeler, pompalar ve ısıtma grupları dahil tünel tipi makinelere bakıyoruz." },
      { q: "Yumuşatıcı kurmak gerçekten gerekli mi?", a: "İstanbul suyunda kireç oranı yüksektir. Yumuşatıcı olmadan boyler ve kollar kısa sürede kireçlenir; kurulum, arıza sayısını belirgin şekilde azaltır." },
    ],
  },
];

/**
 * Başlıklar hem "servisi" hem "tamiri" aramalarını hedefler:
 * H1: "Öztiryakiler Ocak Servisi ve Tamiri", title ≤60 karakter.
 */
for (const d of devices) {
  const base = `Öztiryakiler ${d.name} Servisi ve Tamiri`;
  d.h1 = base;
  d.metaTitle = base.length + 17 <= 60 ? `${base} | Avrupa Yakası` : base;
  const lname = d.name.toLocaleLowerCase("tr-TR");
  d.metaDescription = `Öztiryakiler ${lname} servisi: ${d.symptoms[0].s.toLocaleLowerCase("tr-TR")}, ${d.symptoms[1].s.toLocaleLowerCase("tr-TR")} gibi arızalarda yerinde tamir. Avrupa Yakası · 0534 748 61 07`;
}

export const getDevice = (slug: string) => devices.find((d) => d.slug === slug);
