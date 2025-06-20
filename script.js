// Blog data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt: "Learn how to use React Hooks to manage state and side effects in functional components.",
    content: `
      <h3>Introduction to React Hooks</h3>
      <p>React Hooks revolutionized the way we write React components by allowing us to use state and other React features in functional components. Before hooks, we had to use class components for any stateful logic.</p>
      
      <h3>The useState Hook</h3>
      <p>The useState hook is the most commonly used hook. It allows you to add state to functional components:</p>
      <blockquote>
        "useState returns an array with two elements: the current state value and a function to update it."
      </blockquote>
      
      <h3>The useEffect Hook</h3>
      <p>useEffect lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React classes.</p>
      
      <h3>Best Practices</h3>
      <p>When using hooks, remember to follow the rules of hooks: only call hooks at the top level of your React function, and only call hooks from React functions.</p>
    `,
    author: "Sarah Johnson",
    date: "2024-01-15",
    category: "react",
    image: "/placeholder.svg?height=200&width=350",
    likes: 42,
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "Modern CSS Grid Techniques",
    excerpt: "Explore advanced CSS Grid layouts and learn how to create responsive designs with ease.",
    content: `
      <h3>Understanding CSS Grid</h3>
      <p>CSS Grid is a powerful layout system that allows you to create complex, responsive layouts with ease. Unlike Flexbox, which is one-dimensional, Grid is two-dimensional.</p>
      
      <h3>Grid Container Properties</h3>
      <p>The grid container is the parent element that contains all grid items. Key properties include display: grid, grid-template-columns, and grid-template-rows.</p>
      
      <blockquote>
        "CSS Grid gives you the power to create layouts that were previously impossible or required complex workarounds."
      </blockquote>
      
      <h3>Responsive Grid Layouts</h3>
      <p>Use auto-fit and auto-fill with minmax() to create responsive grids that adapt to different screen sizes without media queries.</p>
      
      <h3>Grid Areas</h3>
      <p>Named grid areas make your layouts more semantic and easier to understand. You can define areas using grid-template-areas and assign items to them.</p>
    `,
    author: "Mike Chen",
    date: "2024-01-12",
    category: "css",
    image: "/placeholder.svg?height=200&width=350",
    likes: 38,
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "JavaScript ES2024 Features",
    excerpt: "Discover the latest JavaScript features and how they can improve your development workflow.",
    content: `
      <h3>What's New in ES2024</h3>
      <p>JavaScript continues to evolve with new features that make development more efficient and code more readable. ES2024 introduces several exciting additions.</p>
      
      <h3>Array Grouping</h3>
      <p>The new Array.prototype.group() method allows you to group array elements based on a callback function, making data manipulation easier.</p>
      
      <h3>Temporal API</h3>
      <p>The Temporal API provides a modern date and time API that addresses many of the issues with the existing Date object.</p>
      
      <blockquote>
        "These new features demonstrate JavaScript's commitment to developer experience and code maintainability."
      </blockquote>
      
      <h3>Pattern Matching</h3>
      <p>Pattern matching brings powerful destructuring capabilities that make complex data manipulation more intuitive and readable.</p>
    `,
    author: "Alex Rodriguez",
    date: "2024-01-10",
    category: "javascript",
    image: "/placeholder.svg?height=200&width=350",
    likes: 56,
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "Building APIs with Node.js",
    excerpt: "Learn how to create robust and scalable APIs using Node.js and Express framework.",
    content: `
      <h3>Setting Up Your Node.js API</h3>
      <p>Node.js provides an excellent platform for building APIs due to its non-blocking I/O and event-driven architecture. Combined with Express, you can create powerful APIs quickly.</p>
      
      <h3>RESTful API Design</h3>
      <p>Following REST principles ensures your API is intuitive and follows web standards. Use appropriate HTTP methods and status codes.</p>
      
      <blockquote>
        "A well-designed API is like a good user interface - it should be intuitive and predictable."
      </blockquote>
      
      <h3>Middleware and Error Handling</h3>
      <p>Express middleware allows you to add functionality to your API pipeline. Proper error handling ensures your API is robust and user-friendly.</p>
      
      <h3>Authentication and Security</h3>
      <p>Implement proper authentication using JWT tokens and ensure your API follows security best practices to protect user data.</p>
    `,
    author: "Emma Wilson",
    date: "2024-01-08",
    category: "nodejs",
    image: "/placeholder.svg?height=200&width=350",
    likes: 34,
    readTime: "8 min read",
  },
  {
    id: 5,
    title: "Advanced React Patterns",
    excerpt: "Master advanced React patterns like render props, higher-order components, and compound components.",
    content: `
      <h3>Render Props Pattern</h3>
      <p>The render props pattern is a technique for sharing code between React components using a prop whose value is a function.</p>
      
      <h3>Higher-Order Components</h3>
      <p>HOCs are functions that take a component and return a new component with additional functionality. They're great for cross-cutting concerns.</p>
      
      <h3>Compound Components</h3>
      <p>This pattern allows you to create components that work together to form a complete UI, giving users flexibility in how they compose the interface.</p>
      
      <blockquote>
        "Advanced patterns help you write more reusable and maintainable React code."
      </blockquote>
      
      <h3>Context API</h3>
      <p>React's Context API provides a way to pass data through the component tree without having to pass props down manually at every level.</p>
    `,
    author: "David Kim",
    date: "2024-01-05",
    category: "react",
    image: "/placeholder.svg?height=200&width=350",
    likes: 67,
    readTime: "10 min read",
  },
  {
    id: 6,
    title: "CSS Animation Masterclass",
    excerpt:
      "Create stunning animations and transitions that enhance user experience without overwhelming the interface.",
    content: `
      <h3>CSS Transitions vs Animations</h3>
      <p>Understanding when to use transitions versus animations is crucial for creating smooth, performant user interfaces.</p>
      
      <h3>Keyframe Animations</h3>
      <p>Keyframes give you precise control over animation sequences, allowing you to create complex motion effects.</p>
      
      <blockquote>
        "Good animation feels natural and enhances the user experience rather than distracting from it."
      </blockquote>
      
      <h3>Performance Considerations</h3>
      <p>Learn which CSS properties are safe to animate and how to use transform and opacity for smooth, hardware-accelerated animations.</p>
      
      <h3>Animation Libraries</h3>
      <p>While CSS animations are powerful, sometimes you need the extra control that JavaScript animation libraries provide.</p>
    `,
    author: "Lisa Park",
    date: "2024-01-03",
    category: "css",
    image: "/placeholder.svg?height=200&width=350",
    likes: 45,
    readTime: "9 min read",
  },
]

// State management
let currentPosts = [...blogPosts]
let displayedPosts = 3
let currentFilter = "all"
let likedPosts = JSON.parse(localStorage.getItem("likedPosts")) || []

// DOM elements
const navToggle = document.getElementById("nav-toggle")
const navMenu = document.getElementById("nav-menu")
const themeToggle = document.getElementById("theme-toggle")
const searchInput = document.getElementById("search-input")
const blogGrid = document.getElementById("blog-grid")
const loadMoreBtn = document.getElementById("load-more-btn")
const scrollToTopBtn = document.getElementById("scroll-to-top")
const modal = document.getElementById("blog-modal")
const modalBody = document.getElementById("modal-body")
const closeModalBtn = document.getElementById("close-modal")
const contactForm = document.getElementById("contact-form")
const loadingSpinner = document.getElementById("loading-spinner")

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
  initializeTheme()
  renderBlogPosts()
  setupEventListeners()
  setupNavigation()
  setupScrollEffects()
})

// Theme management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "light"
  document.documentElement.setAttribute("data-theme", savedTheme)
  updateThemeIcon(savedTheme)
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme")
  const newTheme = currentTheme === "dark" ? "light" : "dark"

  document.documentElement.setAttribute("data-theme", newTheme)
  localStorage.setItem("theme", newTheme)
  updateThemeIcon(newTheme)
}

function updateThemeIcon(theme) {
  const icon = themeToggle.querySelector("i")
  icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon"
}

// Blog post rendering
function renderBlogPosts() {
  const postsToShow = currentPosts.slice(0, displayedPosts)

  blogGrid.innerHTML = postsToShow
    .map(
      (post) => `
    <article class="blog-card" data-id="${post.id}">
      <img src="${post.image}" alt="${post.title}" class="blog-card-image">
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-card-category">${post.category}</span>
          <span class="blog-card-date">${formatDate(post.date)}</span>
        </div>
        <h3 class="blog-card-title">${post.title}</h3>
        <p class="blog-card-excerpt">${post.excerpt}</p>
        <div class="blog-card-footer">
          <span class="blog-card-author">By ${post.author}</span>
          <div class="blog-card-likes">
            <button class="like-btn ${likedPosts.includes(post.id) ? "liked" : ""}" data-id="${post.id}">
              <i class="fas fa-heart"></i>
            </button>
            <span class="like-count">${post.likes}</span>
            <span class="read-time">${post.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  `,
    )
    .join("")

  // Show/hide load more button
  loadMoreBtn.style.display = displayedPosts >= currentPosts.length ? "none" : "block"

  // Add click listeners to blog cards
  document.querySelectorAll(".blog-card").forEach((card) => {
    card.addEventListener("click", (e) => {
      if (!e.target.closest(".like-btn")) {
        const postId = Number.parseInt(card.dataset.id)
        openBlogPost(postId)
      }
    })
  })

  // Add click listeners to like buttons
  document.querySelectorAll(".like-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation()
      toggleLike(Number.parseInt(btn.dataset.id))
    })
  })
}

function openBlogPost(postId) {
  const post = blogPosts.find((p) => p.id === postId)
  if (!post) return

  showLoading()

  // Simulate loading delay
  setTimeout(() => {
    modalBody.innerHTML = `
      <div class="modal-header">
        <h1 class="modal-title">${post.title}</h1>
        <div class="modal-meta">
          <span>By ${post.author}</span>
          <span>${formatDate(post.date)}</span>
          <span>${post.readTime}</span>
        </div>
      </div>
      <img src="${post.image}" alt="${post.title}" class="modal-image">
      <div class="modal-content-text">
        ${post.content}
      </div>
      <div class="modal-actions">
        <button class="back-btn" onclick="closeModal()">
          <i class="fas fa-arrow-left"></i> Back to Blog
        </button>
        <div class="blog-card-likes">
          <button class="like-btn ${likedPosts.includes(post.id) ? "liked" : ""}" data-id="${post.id}">
            <i class="fas fa-heart"></i>
          </button>
          <span class="like-count">${post.likes}</span>
        </div>
      </div>
    `

    // Add like button listener
    const likeBtn = modalBody.querySelector(".like-btn")
    if (likeBtn) {
      likeBtn.addEventListener("click", () => toggleLike(post.id))
    }

    hideLoading()
    modal.style.display = "block"
    document.body.style.overflow = "hidden"
  }, 500)
}

function closeModal() {
  modal.style.display = "none"
  document.body.style.overflow = "auto"
}

// Search and filter functionality
function filterPosts() {
  const searchTerm = searchInput.value.toLowerCase()

  currentPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm)

    const matchesCategory = currentFilter === "all" || post.category === currentFilter

    return matchesSearch && matchesCategory
  })

  displayedPosts = 3
  renderBlogPosts()
}

function setFilter(category) {
  currentFilter = category

  // Update active filter button
  document.querySelectorAll(".tag-filter").forEach((btn) => {
    btn.classList.remove("active")
  })
  document.querySelector(`[data-category="${category}"]`).classList.add("active")

  filterPosts()
}

// Like functionality
function toggleLike(postId) {
  const post = blogPosts.find((p) => p.id === postId)
  if (!post) return

  if (likedPosts.includes(postId)) {
    likedPosts = likedPosts.filter((id) => id !== postId)
    post.likes--
  } else {
    likedPosts.push(postId)
    post.likes++
  }

  localStorage.setItem("likedPosts", JSON.stringify(likedPosts))

  // Update UI
  document.querySelectorAll(`[data-id="${postId}"]`).forEach((btn) => {
    if (btn.classList.contains("like-btn")) {
      btn.classList.toggle("liked")
      const likeCount = btn.parentElement.querySelector(".like-count")
      if (likeCount) {
        likeCount.textContent = post.likes
      }
    }
  })
}

// Navigation
function setupNavigation() {
  // Smooth scrolling for navigation links
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      scrollToSection(targetId)

      // Close mobile menu
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    })
  })

  // Update active navigation link on scroll
  window.addEventListener("scroll", updateActiveNavLink)
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    const offsetTop = section.offsetTop - 70 // Account for fixed navbar
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    })
  }
}

function updateActiveNavLink() {
  const sections = document.querySelectorAll("section[id]")
  const scrollPos = window.scrollY + 100

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute("id")

    if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active")
      })
      document.querySelector(`[href="#${sectionId}"]`)?.classList.add("active")
    }
  })
}

// Scroll effects
function setupScrollEffects() {
  window.addEventListener("scroll", () => {
    const scrollTop = window.pageYOffset

    // Show/hide scroll to top button
    if (scrollTop > 300) {
      scrollToTopBtn.classList.add("visible")
    } else {
      scrollToTopBtn.classList.remove("visible")
    }

    // Navbar background opacity
    const navbar = document.getElementById("navbar")
    if (scrollTop > 50) {
      navbar.style.background = "rgba(255, 255, 255, 0.98)"
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        navbar.style.background = "rgba(17, 24, 39, 0.98)"
      }
    } else {
      navbar.style.background = "rgba(255, 255, 255, 0.95)"
      if (document.documentElement.getAttribute("data-theme") === "dark") {
        navbar.style.background = "rgba(17, 24, 39, 0.95)"
      }
    }
  })
}

// Form validation
function validateForm() {
  const name = document.getElementById("name").value.trim()
  const email = document.getElementById("email").value.trim()
  const message = document.getElementById("message").value.trim()

  let isValid = true

  // Clear previous errors
  document.querySelectorAll(".error-message").forEach((error) => {
    error.textContent = ""
  })

  // Validate name
  if (name.length < 2) {
    document.getElementById("name-error").textContent = "Name must be at least 2 characters long"
    isValid = false
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    document.getElementById("email-error").textContent = "Please enter a valid email address"
    isValid = false
  }

  // Validate message
  if (message.length < 10) {
    document.getElementById("message-error").textContent = "Message must be at least 10 characters long"
    isValid = false
  }

  return isValid
}

// Utility functions
function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" }
  return new Date(dateString).toLocaleDateString("en-US", options)
}

function showLoading() {
  loadingSpinner.style.display = "flex"
}

function hideLoading() {
  loadingSpinner.style.display = "none"
}

// Event listeners
function setupEventListeners() {
  // Navigation toggle
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active")
    navToggle.classList.toggle("active")
  })

  // Theme toggle
  themeToggle.addEventListener("click", toggleTheme)

  // Search input
  searchInput.addEventListener("input", filterPosts)

  // Filter buttons
  document.querySelectorAll(".tag-filter").forEach((btn) => {
    btn.addEventListener("click", () => {
      setFilter(btn.dataset.category)
    })
  })

  // Load more button
  loadMoreBtn.addEventListener("click", () => {
    displayedPosts += 3
    renderBlogPosts()
  })

  // Scroll to top button
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  })

  // Modal close
  closeModalBtn.addEventListener("click", closeModal)

  // Close modal when clicking outside
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  // Contact form
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    if (validateForm()) {
      showLoading()

      // Simulate form submission
      setTimeout(() => {
        hideLoading()
        alert("Thank you for your message! We'll get back to you soon.")
        contactForm.reset()
      }, 2000)
    }
  })

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "block") {
      closeModal()
    }
  })

  // Close mobile menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
      navMenu.classList.remove("active")
      navToggle.classList.remove("active")
    }
  })
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".blog-card, .about-content, .contact-content")
  animateElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })
})

// Service Worker registration (for PWA capabilities)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/sw.js")
      .then((registration) => {
        console.log("SW registered: ", registration)
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError)
      })
  })
}

// Performance monitoring
window.addEventListener("load", () => {
  if ("performance" in window) {
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
    console.log(`Page load time: ${loadTime}ms`)
  }
})

// Error handling
window.addEventListener("error", (e) => {
  console.error("Global error:", e.error)
  // You could send this to an error reporting service
})

// Unhandled promise rejection handling
window.addEventListener("unhandledrejection", (e) => {
  console.error("Unhandled promise rejection:", e.reason)
  e.preventDefault()
})
