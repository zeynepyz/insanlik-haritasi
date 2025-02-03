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
      // Varsayılan rengi ayarla
      path.style.fill = "#9A9CEA";
      path.style.stroke = "rgb(255, 255, 255)";
      
      // Mouse üzerine geldiğinde
      path.addEventListener("mouseenter", (event) => {
        event.target.style.fill = "#a2b9ee";

        // Card içeriğini değiştir ve görünür yap
        const country = event.target.getAttribute("title");
        card.textContent = `${country} yemekleri: ...`; // Her ülkeye özel içerik ekle
        card.style.display = "block";
      });
      
      // Mouse hareket ederken
      path.addEventListener("mousemove", (event) => {
        // Card pozisyonunu güncelle
        card.style.left = event.pageX + 10 + "px";
        card.style.top = event.pageY + 10 + "px";
      });
      
      // Mouse ayrıldığında
      path.addEventListener("mouseleave", (event) => {
        event.target.style.fill = "#9A9CEA";
        // Card'ı gizle
        card.style.display = "none";
      });
    });
  });
});
