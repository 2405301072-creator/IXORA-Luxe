/* ===== IXORA - Luxury Sustainable Fashion ===== */
/* Interactive Script */

// ==================== Product Data ====================
const products = [
  {
    name: 'Serene Wrap Dress',
    tagline: 'Effortless elegance in organic linen',
    price: '₹8,990',
    image: 'images/product1.png',
    fabric: ['🧵 100% Organic Linen', '🌍 Carbon-neutral production', '💧 Low water footprint', '🧼 Machine wash cold, line dry'],
    sustainability: 'This garment saves 2,400L of water vs. conventional fashion',
    reviews: [
      { stars: 5, text: '"Absolutely stunning. The fabric quality is incredible and I love knowing it\'s sustainably made."', author: '— Priya M., Mumbai' },
      { stars: 5, text: '"The fit is perfect. I\'ve received so many compliments."', author: '— Aisha K., Delhi' }
    ]
  },
  {
    name: 'Emerald Flow Gown',
    tagline: 'Flowing luxury in sustainable Tencel™',
    price: '₹12,490',
    image: 'images/product2.png',
    fabric: ['🧵 100% Tencel™ Lyocell', '🌍 Zero-waste pattern cutting', '💧 Closed-loop water system', '🧼 Hand wash recommended'],
    sustainability: 'Made from sustainably sourced eucalyptus wood pulp — 100% biodegradable',
    reviews: [
      { stars: 5, text: '"The colour is even more gorgeous in person. True luxury with a clear conscience."', author: '— Meera S., Bangalore' },
      { stars: 4, text: '"Beautiful drape and feel. The emerald green is divine."', author: '— Rhea D., Pune' }
    ]
  },
  {
    name: 'Ivory Silk Blouse',
    tagline: 'Timeless refinement in peace silk',
    price: '₹5,490',
    image: 'images/pdf_img_p4_1.png',
    fabric: ['🧵 100% Peace Silk (Ahimsa)', '🌍 Hand-woven by artisans', '💧 Natural dye process', '🧼 Dry clean recommended'],
    sustainability: 'Cruelty-free silk that allows the silkworm to complete its lifecycle',
    reviews: [
      { stars: 5, text: '"So soft against the skin. Love the ethical approach to silk."', author: '— Kavya P., Hyderabad' },
      { stars: 5, text: '"Perfect for office and brunch alike. Versatile and elegant."', author: '— Nisha R., Chennai' }
    ]
  },
  {
    name: 'Champagne Kurta Set',
    tagline: 'Heritage craft meets modern silhouettes',
    price: '₹14,990',
    image: 'images/pdf_img_p5_1.png',
    fabric: ['🧵 Organic Cotton Khadi', '🌍 Handloom woven', '💧 Natural earth-tone dyes', '🧼 Machine wash gentle cycle'],
    sustainability: 'Supporting 12 artisan families in Gujarat with fair-trade wages',
    reviews: [
      { stars: 5, text: '"The embroidery detail is exquisite. Everyone asks where I got it."', author: '— Simran T., Jaipur' },
      { stars: 5, text: '"Perfect blend of Indian tradition and modern fashion."', author: '— Aditi L., Ahmedabad' }
    ]
  },
  {
    name: 'Meadow Linen Top',
    tagline: 'Casual luxury in Belgian linen',
    price: '₹4,290',
    image: 'images/pdf_img_p10_1.png',
    fabric: ['🧵 100% Belgian Linen', '🌍 Sustainably farmed flax', '💧 Minimal water usage', '🧼 Machine wash cold'],
    sustainability: 'Linen requires 60% less water than cotton and no pesticides',
    reviews: [
      { stars: 5, text: '"The most comfortable top I own. Gets softer with every wash."', author: '— Riya M., Kolkata' },
      { stars: 4, text: '"Beautiful earth tone. Pairs with everything."', author: '— Zara H., Goa' }
    ]
  },
  {
    name: 'Woven Jute Tote',
    tagline: 'Handcrafted everyday luxury',
    price: '₹2,990',
    image: 'images/pdf_img_p11_1.png',
    fabric: ['🧵 Natural Jute & Organic Cotton', '🌍 Handwoven in Bengal', '💧 100% Biodegradable', '🧼 Spot clean only'],
    sustainability: 'Made from natural jute fibre — the golden thread of Bengal',
    reviews: [
      { stars: 5, text: '"Sturdy, beautiful, and guilt-free. My new everyday bag."', author: '— Pooja K., Mumbai' },
      { stars: 5, text: '"Love the natural texture. Perfect size for daily essentials."', author: '— Tanvi S., Delhi' }
    ]
  },
  // ===== Signature Collection (indices 6-10) =====
  {
    name: 'Emerald Silk Eco Evening Gown',
    tagline: 'Breathtaking luxury in organic silk',
    price: '₹18,999 – ₹24,999',
    image: 'images/pdf_img_p6_1.png',
    fabric: ['🧵 100% Organic Silk', '🌍 Eco-friendly natural dye', '✨ Hand-embroidered gold florals', '🧼 Professional dry clean only'],
    sustainability: 'Organic silk sourced from certified sustainable farms — zero harmful chemicals',
    reviews: [
      { stars: 5, text: '"I wore this to the IXORA gala and felt like royalty. The embroidery is beyond exquisite."', author: '— Zoya A., Mumbai' },
      { stars: 5, text: '"Worth every rupee. The craftsmanship is on par with global luxury houses."', author: '— Ira M., Bangalore' }
    ]
  },
  {
    name: 'Champagne Beige Power Suit',
    tagline: 'Command the room in sustainable linen',
    price: '₹12,999 – ₹16,999',
    image: 'images/pdf_img_p3_1.jpeg',
    fabric: ['🧵 Sustainable Linen Blend', '🌍 Low-impact production', '✨ Gold accent buttons', '🧼 Dry clean recommended'],
    sustainability: 'Made from eco-certified European linen — naturally moth-resistant and biodegradable',
    reviews: [
      { stars: 5, text: '"The tailoring is impeccable. Looks like a ₹50K suit from a luxury label."', author: '— Sneha P., Delhi' },
      { stars: 5, text: '"I get compliments every time I wear it to the office. Powerful and elegant."', author: '— Ananya R., Hyderabad' }
    ]
  },
  {
    name: 'Ivory & Gold Ethnic Fusion Set',
    tagline: 'Modern royalty meets heritage craft',
    price: '₹15,999 – ₹19,999',
    image: 'images/pdf_page_7.png',
    fabric: ['🧵 Premium Organic Silk', '🌍 Hand-woven by artisans', '✨ Gold thread embroidery', '🧼 Dry clean recommended'],
    sustainability: 'Supporting traditional weaving communities — each set employs 3 artisan families',
    reviews: [
      { stars: 5, text: '"Perfect for my sister\'s wedding. The gold embroidery caught every eye."', author: '— Megha V., Jaipur' },
      { stars: 5, text: '"A stunning fusion of Indian tradition and modern design. Felt like a queen."', author: '— Divya K., Ahmedabad' }
    ]
  },
  {
    name: 'Sustainable Casual Luxe Co-ord Set',
    tagline: 'Effortless everyday elegance',
    price: '₹8,999 – ₹11,999',
    image: 'images/pdf_img_p7_1.png',
    fabric: ['🧵 Organic Cotton & Bamboo Blend', '🌍 Sustainably sourced bamboo', '💧 Low water, zero pesticides', '🧼 Machine wash cold'],
    sustainability: 'Bamboo fabric uses 3x less water than conventional cotton and requires no pesticides',
    reviews: [
      { stars: 5, text: '"The softest fabric I\'ve ever worn. It feels like luxury loungewear."', author: '— Nisha T., Pune' },
      { stars: 5, text: '"From brunch to work to dinner — this co-ord does it all. Love the blush tone."', author: '— Radhika S., Chennai' }
    ]
  },
  {
    name: 'Limited Edition Couture Dress',
    tagline: 'One of only 50 in the world',
    price: '₹28,999 – ₹39,999',
    image: 'images/pdf_img_p2_1.jpeg',
    fabric: ['🧵 Sustainable Satin, Eco-Dyed', '🌍 Zero-waste pattern cutting', '✨ 80+ hours of couture craftsmanship', '🧼 Professional care only'],
    sustainability: 'Eco-friendly botanical dyes and zero-waste production — each piece is individually numbered',
    reviews: [
      { stars: 5, text: '"I own piece #17. Knowing only 50 exist makes it feel incredibly special."', author: '— Tara J., Mumbai' },
      { stars: 5, text: '"The draping is architectural. This is art you can wear. An instant family heirloom."', author: '— Sanya L., Delhi' }
    ]
  }
];

// ==================== Loading Screen ====================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1800);

  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// ==================== Navbar Scroll Effect ====================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll > 80) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// ==================== Mobile Navigation ====================
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ==================== Active Nav Link ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  const scrollY = window.pageYOffset + 200;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.querySelectorAll('a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
});

// ==================== Scroll Reveal Animations ====================
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => revealObserver.observe(el));

// ==================== Shop Filters ====================
const filterBtns = document.querySelectorAll('.filter-btn');
const productCards = document.querySelectorAll('.product-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
        card.style.animation = 'heroFadeIn 0.5s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// ==================== Product Modal ====================
const modal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalImage = document.getElementById('modalImage');
const modalProductImg = document.getElementById('modalProductImg');
const modalName = document.getElementById('modalName');
const modalTagline = document.getElementById('modalTagline');
const modalPrice = document.getElementById('modalPrice');
const modalFabric = document.getElementById('modalFabric');

function openProductModal(index) {
  const product = products[index];
  if (!product) return;

  modalName.textContent = product.name;
  modalTagline.textContent = product.tagline;
  modalPrice.textContent = product.price;

  // Update image
  if (product.image) {
    modalProductImg.src = product.image;
    modalProductImg.alt = product.name;
    modalProductImg.style.display = 'block';
  } else {
    modalProductImg.style.display = 'none';
  }

  // Update fabric info
  modalFabric.innerHTML = product.fabric.map(f => `<span>${f}</span>`).join('');

  // Update sustainability text
  const sustainabilitySpan = modal.querySelector('.modal-sustainability span');
  if (sustainabilitySpan) {
    sustainabilitySpan.textContent = `Sustainability Certified — ${product.sustainability}`;
  }

  // Update reviews
  const reviewsContainer = modal.querySelector('.modal-reviews');
  if (reviewsContainer) {
    reviewsContainer.innerHTML = '<h4>Customer Reviews</h4>' +
      product.reviews.map(r => `
        <div class="review-item">
          <div class="review-stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
          <p class="review-text">${r.text}</p>
          <p class="review-author">${r.author}</p>
        </div>
      `).join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  modal.classList.remove('active');
  document.body.style.overflow = '';
  modalImage.classList.remove('zoomed');
}

modalClose.addEventListener('click', closeProductModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeProductModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeProductModal();
});

// ==================== Image Zoom ====================
modalImage.addEventListener('click', (e) => {
  if (e.target === modalProductImg) {
    modalImage.classList.toggle('zoomed');
  }
});

// ==================== Size Button Selection ====================
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('size-btn')) {
    document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
  }
});

// ==================== Contact Form ====================
function handleFormSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('.btn-primary span');
  const originalText = btn.textContent;

  btn.textContent = 'Sending...';

  setTimeout(() => {
    btn.textContent = 'Message Sent ✓';
    form.reset();

    setTimeout(() => {
      btn.textContent = originalText;
    }, 3000);
  }, 1500);
}

// ==================== Smooth Scroll for Anchor Links ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = navbar.offsetHeight;
      const targetPosition = target.offsetTop - navHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// ==================== Parallax Effect on Hero ====================
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero-bg img');
  if (hero) {
    const scrolled = window.pageYOffset;
    if (scrolled < window.innerHeight) {
      hero.style.transform = `translateY(${scrolled * 0.3}px) scale(1.05)`;
    }
  }
});

// ==================== Add to Cart Animation ====================
document.querySelector('.add-to-cart-btn')?.addEventListener('click', function () {
  const originalText = this.textContent;
  this.textContent = 'Added to Cart ✓';
  this.style.background = '#2D7A50';

  setTimeout(() => {
    this.textContent = originalText;
    this.style.background = '';
  }, 2500);
});
