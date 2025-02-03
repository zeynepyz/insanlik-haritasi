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

// Ülke yemekleri için veri objesi
const countryFoods = {
  "United States": "🍔 Hamburger, Hot Dog, Apple Pie, BBQ Ribs",
  "Canada": "🍁 Poutine, Maple Syrup, Butter Tarts, Bannock",
  "Turkey": "🥙 Kebap, Lahmacun, Mantı, Baklava",
  "Russia": "🥟 Borş Çorbası, Beef Stroganoff, Pelmeni, Caviar",
  "South Korea": "🍜 Kimchi, Bulgogi, Bibimbap, Tteokbokki",
  "Japan": "🍱 Sushi, Ramen, Tempura, Miso Çorbası",
  "Italy": "🍝 Pizza, Pasta, Risotto, Tiramisu",
  "Mexico": "🌮 Taco, Guacamole, Burrito, Enchiladas",
  "India": "🍛 Butter Chicken, Biryani, Samosa, Curry",
  "Brazil": "🥘 Feijoada, Pão de Queijo, Açaí, Brigadeiros",
  "France": "🥐 Croissant, Baguette, Ratatouille, Coq au Vin",
  "China": "🥢 Dim Sum, Pekin Ördeği, Chow Mein, Baozi",
  "Thailand": "🍜 Pad Thai, Tom Yum, Green Curry, Mango Sticky Rice",
  "Spain": "🥘 Paella, Tapas, Gazpacho, Churros",
  "Greece": "🥙 Moussaka, Souvlaki, Tzatziki, Baklava",
  "Vietnam": "🍜 Pho, Banh Mi, Spring Rolls, Bun Cha",
  "Morocco": "🍖 Tajine, Couscous, Pastilla, Mint Tea",
  "Argentina": "🥩 Asado, Empanadas, Dulce de Leche, Mate",
  "Lebanon": "🧆 Hummus, Falafel, Tabbouleh, Shawarma",
  "Germany": "🥨 Bratwurst, Schnitzel, Pretzel, Sauerkraut"
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
      if (countryFoods[country]) {
        path.style.fill = "#9A9CEA"; // Özel ülkeler için renk
        
        // Mouse üzerine geldiğinde
        path.addEventListener("mouseenter", (event) => {
          event.target.style.fill = "#a2b9ee";
          
          // Card içeriğini güncelle
          card.innerHTML = `
            <h3 style="margin-bottom: 10px; color: #567e81;">${country}</h3>
            <p style="margin: 0;">${countryFoods[country]}</p>
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
