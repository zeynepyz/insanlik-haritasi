// Dinamik card oluştur
const card = document.createElement("div");
card.style.position = "absolute";
card.style.justifyContent = "center";
card.style.alignItems = "center";
card.style.width = "auto";
card.style.minWidth = "100px";
card.style.maxWidth = "180px";
card.style.padding = "12px";
card.style.backgroundColor = "white";
card.style.borderRadius = "8px";
card.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
card.style.display = "none";
card.style.zIndex = "1000";
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
    name: "Hannah",
    description: "Hannah, Inuit halkının geleneksel bilgilerini genç nesillere aktarmak için çalışmalar yapan bir eğitimci.",
    image: "https://img.freepik.com/premium-photo/woman-hiking-outdoors-women-mountains-young-nature-smile-lifestyle-canada-backpack-freedom-generative-ai_163305-246185.jpg"
  },
  "Turkey": {
    name: "Meryem",
    description: "Meryem, köyündeki kadınların ekonomik özgürlük kazanması için çalışmalar yapan bir girişimci.",
    image: "https://img.freepik.com/premium-photo/radiant-beauty-turkish-women-grace-elegance-personified-ai-generated_744422-1237.jpg"
  },
  "Russia": {
    name: "Dmitry",
    description: "Dmitry, yerli Sibirya halklarının haklarını savunan bir aktivist.",
    image: "https://img.freepik.com/premium-photo/beauty-woman-face-portrait-beautiful-spa-model-girl-with-perfect-fresh-clean-skin-generated-by-ai_911060-3271.jpg"
  },
  "South Korea": {
    name: "Kim Min-jun",
    role: "Şef",
    description: "Seoul'de sokak yemekleri şefi, modern Kore mutfağının öncülerinden.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
  },
  "Japan": {
    name: "Hiroshi",
    description: "Hiroshi, teknoloji ve yapay zeka kullanarak yaşlıların hayatını kolaylaştırmak için projeler geliştiren bir mühendis.",
    image: "https://st3.depositphotos.com/20563840/37073/i/450/depositphotos_370738344-stock-photo-japanese-male-businessman-smiling-wearing.jpg"
  },
  "Italy": {
    name: "Antonio",
    description: "Antonio, göçmen hakları için mücadele eden bir avukat.",
    image: "https://cdn.pixabay.com/photo/2023/02/24/00/41/ai-generated-7809880_640.jpg"
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
    name: "Miquel",
    description: "Miguel, Amazon ormanlarını korumaya çalışan bir aktivist.",
    image: "./assets/images/miquel.jpg"
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
    name: "Anna",
    description: "Anna, iklim değişikliğiyle mücadele eden genç bir bilim insanı.",
    image: "https://cdn.pixabay.com/photo/2023/02/24/00/42/ai-generated-7809882_1280.jpg"
  },
  "Australia": {
    name: "Lily",
    description: "Lily, iklim değişikliğiyle mücadele etmeye çalışan genç bir bilim insanı.",
    image: "https://cdn.pixabay.com/photo/2023/02/24/00/42/ai-generated-7809882_1280.jpg"
  },
  "Kenya": {
    name: "Nanjala",
    description: "Nanjala, kuraklık nedeniyle suya ulaşmakta zorlanan köyü için mücadele eden genç bir kadın.",
    image: "https://img.freepik.com/premium-photo/african-female-teacher-school-generative-ai_446633-129880.jpg"
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
        style="
          width: 150px;
          height: 150px;
          border-radius: 150px;
          object-fit: cover;
          flex-shrink: 0;
        "
      />
      <div>
        <div class="flex items-center gap-2">
          <h3 style="color: #9A9CEA; font-weight: 500;">${person.name}</h3>
          <span style="font-weight: 700; font-size: 0.875rem;">${country}</span>
        </div>
        <p class="text-sm text-gray-700 mt-2">${person.description}</p>
      </div>
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
