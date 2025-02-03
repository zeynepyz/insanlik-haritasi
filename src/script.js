// Dinamik card oluştur
const card = document.createElement("div");
card.style.position = "absolute";
card.style.padding = "10px";
card.style.backgroundColor = "white";
card.style.border = "1px solid black";
card.style.borderRadius = "8px";
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
card.style.display = "none";
document.body.appendChild(card);

// Ülke kişileri için veri objesi
const countryPeople = {
  "United States": {
    name: "John Smith",
    role: "Yazılım Mühendisi",
    description: "Silicon Valley'de çalışıyor ve yeni startup'ı için çabalıyor.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  "Canada": {
    name: "Emma Thompson",
    role: "Şef",
    description: "Montreal'de kendi restoranını işletiyor, akçaağaç şuruplu tarifleriyle ünlü.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
  },
  "Turkey": {
    name: "Mehmet Yılmaz",
    role: "Çiftçi",
    description: "Kapadokya'da organik tarım yapıyor, yerel restoranlara ürün tedarik ediyor.",
    image: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop"
  },
  "Russia": {
    name: "Natalia Petrova",
    role: "Sanatçı",
    description: "St. Petersburg'da sanat galerisi sahibi, geleneksel Rus sanatını yaşatıyor.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&h=150&fit=crop"
  },
  "South Korea": {
    name: "Kim Min-jun",
    role: "Şef",
    description: "Seoul'de sokak yemekleri şefi, modern Kore mutfağının öncülerinden.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  "Japan": {
    name: "Yuki Tanaka",
    role: "Öğretmen",
    description: "Kyoto'da çay seremonisi ustası, geleneksel Japon kültürünü öğretiyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Italy": {
    name: "Marco Rossi",
    role: "Şef",
    description: "Toskana'da şarap üreticisi, aileden gelen tarifleriyle şarap yapıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Mexico": {
    name: "Isabella Garcia",
    role: "Çiftçi",
    description: "Oaxaca'da geleneksel mutfak teknikleri eğitmeni, yerli tarifler üzerine uzman.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "India": {
    name: "Raj Patel",
    role: "Baharat Dükkanı Sahibi",
    description: "Mumbai'de baharat dükkanı işletiyor, aile reçetelerini yeni nesile aktarıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Brazil": {
    name: "Ana Silva",
    role: "Organik Tarım Projesi Yöneticisi",
    description: "Amazon'da sürdürülebilir tarım projesi yürütüyor, yerel toplulukları destekliyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "France": {
    name: "Pierre Dubois",
    role: "Michelin Yıldızlı Şef",
    description: "Paris'te Michelin yıldızlı şef, modern Fransız mutfağını yeniden yorumluyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "China": {
    name: "Li Wei",
    role: "Dim Sum Ustası",
    description: "Chengdu'da dim sum ustası, geleneksel tarifleri modernize ediyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Thailand": {
    name: "Somchai Suk",
    role: "Organik Pirinç Çiftçisi",
    description: "Bangkok'ta organik pirinç çiftçisi, sokak yemekleri festivali organizatörü.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Spain": {
    name: "Carmen Rodriguez",
    role: "Tapas Barı Sahibi",
    description: "Barcelona'da tapas barı sahibi, yerel malzemelerle özgün tarifler yaratıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Greece": {
    name: "Andreas Papadopoulos",
    role: "Zeytin Üreticisi",
    description: "Girit'te zeytin üreticisi, geleneksel Yunan mutfağını tanıtıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Vietnam": {
    name: "Nguyen Thi Mai",
    role: "Sokak Yemekleri Turu Rehberi",
    description: "Hanoi'de sokak yemekleri turu rehberi, geleneksel tarifleri paylaşıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Morocco": {
    name: "Hassan El Amrani",
    role: "Baharat Pazarı Esnafı",
    description: "Marakeş'te baharat pazarı esnafı, geleneksel Fas mutfağı uzmanı.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Argentina": {
    name: "Lucia Martinez",
    role: "Çiftlik Sahibi",
    description: "Pampa'da çiftlik sahibi, geleneksel asado ustası.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Lebanon": {
    name: "Karim Abboud",
    role: "Şef",
    description: "Beyrut'ta şef, Akdeniz mutfağı üzerine workshop'lar düzenliyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  },
  "Germany": {
    name: "Hannah Weber",
    role: "Bira Bahçesi İşletmecisi",
    description: "Münih'te bira bahçesi işletmecisi, geleneksel Bavyera mutfağını yaşatıyor.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=150&h=150&fit=crop"
  }
};

// SVG yüklendikten sonra çalışacak kod
document.addEventListener("DOMContentLoaded", () => {
  // SVG nesnesini yüklendikten sonra işlem yapabilmek için
  const worldmap = document.getElementById("worldmap");
  
  worldmap.addEventListener("load", () => {
    // SVG dökümanına erişim
    const svgDoc = worldmap.contentDocument;
    
    // Tüm path'leri seç
    const paths = svgDoc.querySelectorAll("path");
    
    paths.forEach(path => {
      const country = path.getAttribute("title");
      // Varsayılan stil
      path.style.fill = "#9A9CEA"; // Varsayılan renk (açık gri)
      path.style.stroke = "rgb(255, 255, 255)";
      
      // Eğer ülke bizim listemizdeyse
      if (countryPeople[country]) {
        path.style.fill = "#9A9CEA"; // Özel ülkeler için renk
        
        // Mouse üzerine geldiğinde
        path.addEventListener("mouseenter", (event) => {
          event.target.style.fill = "#a2b9ee";
          
          // Card içeriğini güncelle
          const person = countryPeople[country];
              card.innerHTML = `
                <div class="flex gap-4">
                  <img 
                    src="${person.image}" 
                    alt="${person.name}"
                    class="w-16 h-16 rounded-full object-cover"
                  />
                  <div class="flex-1">
                    <h3 class="font-semibold text-gray-900">${person.name}</h3>
                    <p class="text-sm text-gray-600 mb-2">${country}</p>
                  </div>
                  <p class="text-sm text-gray-700">${person.description}</p>
                </div>
              `;
              card.style.display = "block";
            });
        
        // Mouse hareket ederken
        path.addEventListener("mousemove", (event) => {
          card.style.left = event.pageX + 10 + "px";
          card.style.top = event.pageY + 10 + "px";
        });
        
        // Mouse ayrıldığında
        path.addEventListener("mouseleave", (event) => {
          event.target.style.fill = "#9A9CEA";
          card.style.display = "none";
        });
      }
    });
  });
});
