document.addEventListener("DOMContentLoaded", function() {


    
    // Define products
    const products = [
        {
            id: 1,
            name: "Rose",
            type: "rose",
            image: "./images/rouse_1.png",
            price: 10,
            description: "A beautiful red rose perfect for expressing love and passion."
        },
        {
            id: 2,
            name: "Tulip",
            type: "tulip",
            image: "./images/tulip_2.png",
            price: 12,
            description: "Elegant tulip flowers available in various colors. Symbolizes grace and elegance."
        },
        {
            id: 3,
            name: "Lily",
            type: "lily",
            image: "./images/lily_1.png",
            price: 8,
            description: "Fragrant lilies available in white, pink, and yellow. Represents purity and devotion."
        },
        {
            id: 4,
            name: "Rose",
            type: "rose",
            image: "./images/rouse_1.png",
            price: 10,
            description: "Another beautiful red rose perfect for expressing love and passion."
        },
        {
            id: 5,
            name: "Tulip",
            type: "tulip",
            image: "./images/tulip_1.png",
            price: 12,
            description: "Gorgeous tulips available in a variety of colors. Perfect for adding vibrancy to any space."
        },
        {
            id: 6,
            name: "Rose",
            type: "rose",
            image: "./images/rouse_2.png",
            price: 10,
            description: "Vibrant red rose symbolizing deep love and affection. The perfect gift for your loved ones."
        },
        {
            id: 7,
            name: "Lily",
            type: "lily",
            image: "./images/lily_2.png",
            price: 8,
            description: "Exquisite lilies known for their elegant appearance and enchanting fragrance. Available in various colors."
        },
        {
            id: 8,
            name: "Rose",
            type: "rose",
            image: "./images/rouse_3.png",
            price: 10,
            description: "Beautiful rose bouquet perfect for weddings, anniversaries, and special occasions."
        },
        {
            id: 9,
            name: "Lily",
            type: "lily",
            image: "./images/lily_3.png",
            price: 8,
            description: "Graceful lily arrangement perfect for decorating your home or office space. Adds a touch of elegance to any environment."
        },
        {
            id: 10,
            name: "Chrysanthemum",
            type: "chrysanthemum",
            image: "./images/chrysanthemums_1.png",
            price: 12,
            description: "Colorful chrysanthemums available in various hues. Represents happiness, joy, and optimism."
        },
        {
            id: 11,
            name: "Tulip",
            type: "tulip",
            image: "./images/tulip_2.png",
            price: 12,
            description: "Stunning tulip bouquet perfect for brightening up any room. Adds a pop of color to your space."
        },
        {
            id: 12,
            name: "Lily",
            type: "lily",
            image: "./images/lily_3.png",
            price: 8,
            description: "Fresh lilies arranged beautifully in a vase. A delightful gift for any occasion."
        },
        {
            id: 13,
            name: "Chrysanthemum",
            type: "chrysanthemum",
            image: "./images/chrysanthemums_1.png",
            price: 12,
            description: "Vibrant chrysanthemum bouquet symbolizing longevity and happiness. Makes a thoughtful gift for your loved ones."
        }
    ];
    
    
    

    FilterButtons = [
        {
            id: "0",
            name: "All",
            filterType: "all"
        },
        {
            id: "1",
            name: "Lily",
            filterType: "lily"
        },
        {
            id: "2",
            name: "Rose",
            filterType: "rose"
        },
        {
            id: "3",
            name: "Chrysanthemum",
            filterType: "chrysanthemum"
        },
        {
            id: "4",
            name: "Tulip",
            filterType: "tulip"
        }
    ]

    const productRow = document.getElementById("productRow");
    const loadMoreBtn = document.getElementById("loadMoreBtn");
    const filterbutton = document.getElementById("FilterButon");
    let startIndex = 0;
    const productsToShow = 3;
    let buttonToShow = FilterButtons.length;
    let filteredProducts = []; // Array to hold filtered products

    //add filter button
    function addFilterbutton(startIndex, endIndex, buttonsList){
        for (let i = startIndex; i < endIndex; i++){
            const button = buttonsList[i];
                let filterHTML = `
                    <button class="btn btn-outline-danger filter-btn" data-filter="${button.filterType}">${button.name}</button>
                `
               console.log(filterHTML);
                filterbutton.innerHTML += filterHTML;
        }
    }addFilterbutton(startIndex, buttonToShow, FilterButtons );

    // Function to add products to the page
    function addProducts(startIndex, endIndex, productList) {
        
        for (let i = startIndex; i < endIndex; i++) {
            if (i >= productList.length) {
                loadMoreBtn.style.display = "none";
                break;
            }
            const product = productList[i];
            const productHTML = `
            
            <div class="col-md-4 mb-4 ${product.type}">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">Price: ${product.price}$</p>
                    <button class="btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${product.id}" aria-expanded="false" aria-controls="collapse${product.id}">
                        Show Description
                    </button>
                    <!-- Add to Cart button -->
                    <button id = "add-Btn" class="btn btn-outline-warning add-to-cart-btn" type="button" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                    <!-- Description Collapse -->
                    <div class="collapse" id="collapse${product.id}" data-bs-parent="#productRow">
                        <div class="card card-body">
                            ${product.description}
                        </div>
                    </div>
                </div>
            </div>

            `;
            productRow.innerHTML += productHTML;
        }
    }

    // Function to filter products by type
    function filterProducts(type) {
        if (type === 'all') {
            filteredProducts = []; // Empty the filtered products array
            loadMoreBtn.style.display = "block";
            productRow.innerHTML = ''; // Clear previous products
            addProducts(startIndex, startIndex + productsToShow, products);
            addAddToCartListeners(); // Додати обробники подій для нових кнопок "Add to Cart"
            updateCartUI();
        } else {
            filteredProducts = products.filter(product => product.type === type);
            productRow.innerHTML = ''; // Clear previous products
            startIndex = 0;
            loadMoreBtn.style.display = "block";
            addProducts(startIndex, productsToShow, filteredProducts);
            addAddToCartListeners(); // Додати обробники подій для нових кнопок "Add to Cart"
            updateCartUI();
        }
    }

    // Add initial products
    addProducts(startIndex, startIndex + productsToShow, products);

    // Event listener for load more button
    loadMoreBtn.addEventListener("click", function() {
        startIndex += productsToShow;
        addProducts(startIndex, startIndex + productsToShow, filteredProducts.length ? filteredProducts : products);
    });

    // Filter Buttons Event Listeners
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            filterProducts(filterValue);
        });
    });
    
//===============================================================================================================================================
    const subscriptionWindow = document.getElementById("subscriptionWindow");
    const acceptButton = document.getElementById("acceptButton");
    const rejectButton = document.getElementById("rejectButton");
    const storageKey = "subscriptionAccepted";

    // Check if subscription was already accepted
    const isSubscriptionAccepted = localStorage.getItem(storageKey);

    // Function to show the subscription window
    function showSubscriptionWindow() {
        subscriptionWindow.classList.remove("hidden");
    }

    // Function to hide the subscription window
    function hideSubscriptionWindow() {
        subscriptionWindow.classList.add("hidden");
    }

    // Function to handle subscription acceptance
    function acceptSubscription() {
        localStorage.setItem(storageKey, "true");
        hideSubscriptionWindow();
        // Show a thank you message or perform other actions
        alert("Thank you for subscribing!");
    }

    // Function to handle subscription rejection
    function rejectSubscription() {
        hideSubscriptionWindow();
    }

    // Show the subscription window after a delay if subscription was not already accepted
    if (!isSubscriptionAccepted) {
        setTimeout(showSubscriptionWindow, 5000); // Adjust delay time as needed
    }

    // Event listeners for accept and reject buttons
    acceptButton.addEventListener("click", acceptSubscription);
    rejectButton.addEventListener("click", rejectSubscription);

    //localStorage.clear(); //for show how to accept

   //===================================================================================================================================

   const modal = document.getElementById("myModal");
   const countdownElement = document.getElementById("countdown");
   const cross = document.getElementById("cross");
   let countdownValue = 15;
 
   // Function to display the modal window
   function showModal() {
     modal.style.display = "block";
     startCountdown();
   }
 
   // Function to close the modal window
   function closeModal() {
     modal.style.display = "none";
     clearInterval(countdownInterval);
   }

   function showcross(){
    cross.style.display = "block";
   }

   function hidecross(){
    cross.style.display = "none";
   }
 
   // Function to start the countdown timer
   function startCountdown() {
     countdownElement.textContent = countdownValue;
     countdownInterval = setInterval(updateCountdown, 1000);
   }
 
   // Function to update the countdown timer
   function updateCountdown() {
     countdownValue--;
     countdownElement.textContent = countdownValue;
     if (countdownValue === 0) {
       clearInterval(countdownInterval);
       countdownElement.style.display = "none"
       showcross();
       countdownValue = 15;
     }
    }
 
   //Show the modal window after scrolling down the site
//    window.addEventListener('scroll', function() {
//      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
//        showModal();
//        countdownElement.style.display = "block"
//      }
//    });
 
   // Close the modal window when the close button is clicked
   const closeButton = document.getElementsByClassName("close")[0];
   closeButton.onclick = function() {
     closeModal();
     hidecross();
     countdownValue = 15;
   }
 
   // Close the modal window when clicking outside the modal
   window.onclick = function(event) {
     if (event.target == modal) {
       closeModal();
     }
   }

   //=======================================================================================
    // JavaScript code for showing/hiding shopping cart window
    const cartButton = document.getElementById('cart-icon');
    const shoppingCart = document.getElementById('shopping-cart');
    const closeButtonCart = document.getElementById('close-cart');

    // Показати вікно корзини після натискання кнопки "Cart"
    cartButton.addEventListener('click', function() {
        shoppingCart.style.display = 'block';
    });

    // Приховати вікно корзини після натискання на хрестик
    closeButtonCart.addEventListener('click', function() {
        shoppingCart.style.display = 'none';
    });
    //================================================
    
    let cartItems = [];
    let cartItemTypes = {}; // Об'єкт для відстеження кількості та типів товарів у корзині

    // Обробник подій для кнопок "Add to Cart"
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    // Оновлення функції додавання товарів до кошика для відстеження кількості та типів товарів
    function updateCart(item) {
        if (!cartItemTypes[item.type]) {
            cartItemTypes[item.type] = 1;
        } else {
            cartItemTypes[item.type]++;
        }
        //console.log(cartItemTypes);
    }

    // Функція для додавання обробників подій для кнопок "Add to Cart"
    function addAddToCartListeners() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
        addToCartButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product-id')); // Отримати ID товару
                const productToAdd = products.find(product => product.id === productId); // Знайти товар за ID
                updateCartUI();
                if (productToAdd) {
                    // Перевірка, чи вже є такий товар в кошику
                    const existingItemIndex = cartItems.findIndex(item => item.id === productId);
                    if (existingItemIndex !== -1) {
                        // Якщо товар вже є в кошику, збільшити його кількість та підсумкову ціну
                        cartItems[existingItemIndex].quantity++;
                        cartItems[existingItemIndex].totalPrice += productToAdd.price;
                    } else if (productToAdd.hasOwnProperty('image')) {
                        // Додаємо товар до кошика зі шляхом до зображення
                        cartItems.push({
                            id: productId,
                            name: productToAdd.name,
                            type: productToAdd.type,
                            price: productToAdd.price,
                            quantity: 1,
                            totalPrice: productToAdd.price,
                            image: productToAdd.image // Використовуємо шлях до зображення товару
                        });
                    } else {
                        // Якщо властивість image відсутня, можна задати за замовчуванням
                        const defaultImagePath = './images/LOGO-on-page.jpg';
                        cartItems.push({
                            id: productId,
                            name: productToAdd.name,
                            type: productToAdd.type,
                            price: productToAdd.price,
                            quantity: 1,
                            totalPrice: productToAdd.price,
                            image: defaultImagePath // Використовуємо шлях до зображення за замовчуванням
                        });
                    }
                    updateCartUI(); // Оновити інтерфейс кошика
                    shoppingCart.style.display = 'block';
                }
            });
        });
    }

    // Додамо обробник події для зміни сортування при виборі нового параметру
    document.getElementById('sort-by').addEventListener('change', updateCartUI);

    // Додаємо обробник події для кнопки "Load More"
    loadMoreBtn.addEventListener("click", function() {
        startIndex += productsToShow;
        addProducts(startIndex, startIndex + productsToShow, filteredProducts.length ? filteredProducts : products);
        addAddToCartListeners(); // Додати обробники подій для нових кнопок "Add to Cart"
        updateCartUI();
    });

    // Додаємо обробники подій для кнопок "Add to Cart" на початковому завантаженні сторінки
    addAddToCartListeners();

    

    // Функція для оновлення інтерфейсу кошика
    function updateCartUI() {
        const cartItemsContainer = document.getElementById('cart-items');
        const totalPriceElement = document.getElementById('total-price');
        const sortCriteria = document.getElementById('sort-by').value; // Отримати критерій сортування
        let totalPrice = 0;

        // Сортувати cartItems відповідно до вибраного критерію
        if (sortCriteria === 'name') {
            cartItems.sort((a, b) => (a.name > b.name) ? 1 : -1);
        } else if (sortCriteria === 'priceAsc') {
            cartItems.sort((a, b) => a.price - b.price);
        } else if (sortCriteria === 'priceDesc') {
            cartItems.sort((a, b) => b.price - a.price);
        }

        // Очищаємо об'єкт для відстеження кількості та типів товарів перед оновленням
        cartItemTypes = {};   
         

        cartItemsContainer.innerHTML = ''; // Очистити контейнер кошика

        cartItems.forEach(function(item, index) {
            updateCart(item); // Оновлення об'єкта для відстеження кількості та типів товарів
            // Створити HTML-код для кожного товару в кошику
            const itemHTML = `
            <div class="container mt-5">
                    <div class="row" id="productRow">
                        <div class="col-md-8 mb-4 ${item.type}">
                            <img src="${item.image}" class="card-img-top" alt="${item.name}">
                            <div class="card-body">
                                <h5 class="card-title">${item.name}</h5>
                                <p class="card-text">Price: ${item.price}</p>
                                <div class="d-flex">
                                    <button class="btn btn-outline-secondary flex-fill decrease-btn" type="button" data-index="${index}" data-product-id="${item.id}">
                                        <i class="fa-solid fa-minus"></i>
                                    </button>
                                    <input type="text" class="form-control col-auto quantity-input flex-fill" placeholder="#" value="${item.quantity}" >
                                    <button class="btn btn-outline-secondary flex-fill increase-btn" type="button" data-index="${index}" data-product-id="${item.id}">
                                        <i class="fa-solid fa-plus"></i>
                                    </button>
                                    <button class="btn btn-outline-danger ms-2 flex-fill remove-item-btn" type="button" data-product-id="${item.id}">
                                        <i class="fa-solid fa-skull-crossbones fa-fade"></i>Remove
                                    </button>
                                </div>
                                <p class="card-text fw-bold">Total Price: ${item.totalPrice}</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            cartItemsContainer.innerHTML += itemHTML; // Додати товар до контейнера кошика

            // Додати вартість цього товару до загальної вартості
            totalPrice += item.totalPrice;
        });

        

        // mothod for width of input field
        // Отримання всіх елементів input
        const quantityInputs = document.querySelectorAll('.quantity-input');
        
        // Проходження через кожен елемент input і налаштування його ширини відповідно до довжини значення
        quantityInputs.forEach(input => {
            input.addEventListener('input', function() {
                // Отримання довжини значення в полі вводу
                const length = this.value.length;
                // На основі довжини встановлюємо ширину поля вводу
                this.style.width = (length + 1) * 8 + 'px'; // Можете налаштувати коефіцієнт відповідно до ваших потреб
            });

            
        });


        // Оновити відображення загальної вартості
        totalPriceElement.textContent = `Total Price: $${totalPrice}`;

        // Додати обробник подій для кнопок зміни кількості
        const decreaseButtons = document.querySelectorAll('.decrease-btn');
        const increaseButtons = document.querySelectorAll('.increase-btn');

        decreaseButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                if (cartItems[index].quantity === 1) {
                    cartItems.splice(index, 1);
                } else {
                    cartItems[index].quantity--;
                    cartItems[index].totalPrice -= cartItems[index].price;
                }
                updateCartUI();
            });
        });

        increaseButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                cartItems[index].quantity++;
                cartItems[index].totalPrice += cartItems[index].price;
                updateCartUI();
            });
        });


        // Додати обробник події для кнопок "Remove"
        const removeItemButtons = document.querySelectorAll('.remove-item-btn');
        removeItemButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                const productId = parseInt(this.getAttribute('data-product-id'));

                // Знаходимо індекс товару за його ID
                const index = cartItems.findIndex(item => item.id === productId);
                
                if (index !== -1) {
                    // Видаляємо товар з масиву корзини за індексом
                    cartItems.splice(index, 1);
                    
                    // Оновлюємо інтерфейс корзини
                    updateCartUI();
                }
            });
        });

        //console.log(cartItems);

    }

    // Додамо обробник події для зміни сортування при виборі нового параметру
    document.getElementById('sort-by').addEventListener('change', updateCartUI);


    
    //=================================================================================================================================
    
    // Додати обробник події для кнопки "Показати статистику"
    const showStatisticsButton = document.getElementById('show-statistics-btn');
    showStatisticsButton.addEventListener('click', function() {
        // Показати три кнопки для вибору типу діаграми
        const diagramTypeButtons = document.querySelectorAll('.diagram-type-btn');
        diagramTypeButtons.forEach(button => {
            button.style.display = 'inline-block'; // Показати кнопку
            button.addEventListener('click', function() {
                // Приховати усі кнопки для вибору типу діаграми
                diagramTypeButtons.forEach(btn => {
                    btn.style.display = 'none';
                });
                const diagramType = this.getAttribute('data-diagram-type');
                clearDiagramContainer(); // Очистити контейнер перед побудовою нової діаграми
                // Виклик функції для побудови відповідної діаграми
                switch(diagramType) {
                    case 'pie':
                        renderPieChart();
                        break;
                    case 'bar':
                        renderBarChart();
                        break;
                    case 'line':
                        renderLineChart();
                        break;
                    default:
                        console.error('Invalid diagram type');
                }
            });
        });
    });

    // Функція для очищення контейнера діаграм
    function clearDiagramContainer() {
        const diagramContainer = document.getElementById('diagram-container');
        // Отримати посилання на Chart.js instance, якщо вона існує
        const existingChartInstance = Chart.getChart(diagramContainer);
        if (existingChartInstance) {
            existingChartInstance.destroy(); // Знищити попередню діаграму
        }
        diagramContainer.innerHTML = ''; // Очистити HTML контейнера
    }


    // Функція для групування елементів за полем type
    function groupItemsByType(items) {
        const groupedItems = {};
        items.forEach(item => {
            if (groupedItems[item.type]) {
                groupedItems[item.type].quantity += item.quantity;
            } else {
                groupedItems[item.type] = {
                    type: item.type,
                    quantity: item.quantity
                };
            }
        });
        // Перетворюємо об'єкт у масив
        return Object.values(groupedItems);
    }

    // Групування товарів за типом
    
    console.log(groupedItems);


    // Функція для побудови кругової діаграми
    function renderPieChart() {
        const groupedItems = groupItemsByType(cartItems);
        const pieChartContainer = document.getElementById('diagram-container');
        const typeNames = groupedItems.map(item => item.type);
        const typeCounts = groupedItems.map(item => item.quantity);
        const pieData = {
            labels: typeNames,
            datasets: [{
                data: typeCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        };
        const pieChart = new Chart(pieChartContainer, {
            type: 'pie',
            data: pieData
        });
    }

    // Функція для побудови гістограми (стовпчикової діаграми)
    function renderBarChart() {
        const groupedItems = groupItemsByType(cartItems);
        const barChartContainer = document.getElementById('diagram-container');
        const typeNames = groupedItems.map(item => item.type);
        const typeCounts = groupedItems.map(item => item.quantity);
        const barData = {
            labels: typeNames,
            datasets: [{
                label: 'Кількість товарів',
                data: typeCounts,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)'
                ]
            }]
        };
        const barChart = new Chart(barChartContainer, {
            type: 'bar',
            data: barData
        });
    }

    // Функція для побудови графіку
    function renderLineChart() {
        const groupedItems = groupItemsByType(cartItems);
        const lineChartContainer = document.getElementById('diagram-container');
        const typeNames = groupedItems.map(item => item.type);
        const typeCounts = groupedItems.map(item => item.quantity);
        const lineData = {
            labels: typeNames,
            datasets: [{
                label: 'Кількість товарів',
                data: typeCounts,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        };
        const lineChart = new Chart(lineChartContainer, {
            type: 'line',
            data: lineData
        });
    }





    //=================================================================================================================================
    let scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Показати або приховати кнопку навігації вгору при прокручуванні
    window.addEventListener('scroll', function() {
        if (window.scrollY > (2 / 3) * window.innerHeight) {
            scrollToTopBtn.classList.remove('d-none');
        } else {
            scrollToTopBtn.classList.add('d-none');
        }
    });

    // Прокрутити сторінку вгору при кліку на кнопку
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Плавна прокрутка
        });
    });

});



