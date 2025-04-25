console.log("Products frontend javascript file");

$(function () {
  $(".product-collection").on("change", () => {
    const selectedValue = $(".product-collection").val();
    if (selectedValue === "DRINK") {
      $("#product-collection").hide();
      $("#product-volume").show();
    } else {
      $("#product-volume").hide();
      $("#product-collection").show();
    }
  });

 

  $(".new-product-status").on("change", async function (e) {
    const id = e.target.id;
    // console.log("e", e);
    // console.log("target", e.target);
    // console.log("id", e.target.id);
    const productStatus = $(`#${id}.new-product-status`).val();
    // console.log("id", id);
    // console.log("productStatus", productStatus);

    try {
      const response = await axios.post(`/admin/product/${id}`, {
        productStatus: productStatus,
      });
      console.log("response", response);
      const result = await response.data;

      if (result.data) {
        console.log("Product status updated successfully");
        $(".new-product-status").blur();
      } else alert("Product Update Failed");
    } catch (err) {
      console.log("Error, productStatus", err);
      alert("Product update failed");
    }
  });
});

function validateForm() {
  const productName = $(".product-name").val();
  const productPrice = $(".product-price").val();
  const productLeftCount = $(".product-left-count").val();
  const productCollection = $(".product-collection").val();
  const productDesc = $(".product-desc").val();
  const productStatus = $(".product-status").val();

  if (
    productName === "" ||
    productPrice === "" ||
    productLeftCount === "" ||
    productCollection === "" ||
    productDesc === "" ||
    productStatus === ""
  ) {
    alert("Please insert all required inputs");
    return false;
  } else return true;
}

function previewFileHandler(input, order) {
  // console.log("input.className", input.className); //classname ni consoleda log qilsak class ni qiymatini chiqaryaoti lkn inputni ozini ichida classname degan attribut yoq
  const imgClassName = input.className;
  // console.log("input", input);

  const file = $(`.${imgClassName}`).get(0).files[0]; //jequery ni methodi state propertysi emas bu yerdagi 0 bu index emas aynan uni ichida 0 degan narsa bor va uni ichida name size type ga uxshagan narsalar bor
  console.log("${imgClassName}", `.${imgClassName}`);
  console.log("file", file); //file qilinayotgan narsani consoleda log qilsak
  const fileType = file["type"];
  const validImageType = ["image/jpg", "image/jpeg", "image/png"];

  if (!validImageType.includes(fileType)) {
    alert("Please upload only jpeg, jpg and png image formats");
  } else {
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        $(`#image-section-${order}`).attr("src", reader.result);
      };
      reader.readAsDataURL(file);
    }
  }
}


  // Pagination configuration
  const ITEMS_PER_PAGE = 10; // Number of products per page
  let currentPage = 1;
  let totalPages = 1;

  document.addEventListener('DOMContentLoaded', function() {
    // Get all product rows and calculate total pages
    const productRows = document.querySelectorAll('.table tbody');
    totalPages = Math.ceil(productRows.length / ITEMS_PER_PAGE);
    
    // Create pagination controls
    createPaginationControls();
    
    // Show the first page by default
    showPage(currentPage);
    
    // Set up product type change handler
    const productCollection = document.querySelector('.product-collection');
    if (productCollection) {
      productCollection.addEventListener('change', function() {
        const productCollectionDiv = document.getElementById('product-collection');
        const productVolumeDiv = document.getElementById('product-volume');
        
        if (this.value === 'DRINK') {
          productCollectionDiv.style.display = 'none';
          productVolumeDiv.style.display = 'flex';
        } else {
          productCollectionDiv.style.display = 'flex';
          productVolumeDiv.style.display = 'none';
        }
      });
    }
    
    // Set up status change handlers
    document.querySelectorAll('.new-product-status').forEach(select => {
      select.addEventListener('change', function() {
        const productId = this.id;
        const newStatus = this.value;
        
        // Here you would normally have AJAX to update the status
        console.log(`Updating product ${productId} status to ${newStatus}`);
        // Example AJAX call (commented out):
        /*
        fetch('/admin/product/update-status', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productId: productId,
            productStatus: newStatus
          })
        })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            console.log('Status updated successfully');
          } else {
            console.error('Failed to update status');
          }
        });
        */
      });
    });
  });

  // Function to create pagination controls
  function createPaginationControls() {
    // Create pagination container
    const paginationContainer = document.createElement('div');
    paginationContainer.className = 'pagination-container';
    
    // Create previous button
    const prevButton = document.createElement('button');
    prevButton.className = 'btn pagination-btn';
    prevButton.innerHTML = '<i class="fas fa-chevron-left"></i> Previous';
    prevButton.addEventListener('click', function() {
      if (currentPage > 1) {
        showPage(currentPage - 1);
      }
    });
    
    // Create page number buttons container
    const pageNumbersContainer = document.createElement('div');
    pageNumbersContainer.className = 'page-numbers';
    pageNumbersContainer.style.display = 'flex';
    
    // Create page number buttons
    for (let i = 1; i <= totalPages; i++) {
      const pageButton = document.createElement('button');
      pageButton.className = 'page-btn';
      pageButton.innerHTML = i;
      pageButton.dataset.page = i;
      pageButton.addEventListener('click', function() {
        showPage(parseInt(this.dataset.page));
      });
      pageNumbersContainer.appendChild(pageButton);
    }
    
    // Create next button
    const nextButton = document.createElement('button');
    nextButton.className = 'btn pagination-btn';
    nextButton.innerHTML = 'Next <i class="fas fa-chevron-right"></i>';
    nextButton.addEventListener('click', function() {
      if (currentPage < totalPages) {
        showPage(currentPage + 1);
      }
    });
    
    // Add all elements to pagination container
    paginationContainer.appendChild(prevButton);
    paginationContainer.appendChild(pageNumbersContainer);
    paginationContainer.appendChild(nextButton);
    
    // Add pagination container after the table
    const table = document.querySelector('.table');
    table.parentNode.insertBefore(paginationContainer, table.nextSibling);
  }

  // Function to show a specific page
  function showPage(pageNumber) {
    // Update current page
    currentPage = pageNumber;
    
    // Get all product rows
    const productRows = document.querySelectorAll('.table tbody');
    
    // Hide all rows
    productRows.forEach(row => {
      row.style.display = 'none';
    });
    
    // Calculate start and end index for current page
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, productRows.length);
    
    // Show rows for current page
    for (let i = startIndex; i < endIndex; i++) {
      productRows[i].style.display = 'table-row-group';
    }
    
    // Update active state of page buttons
    const pageButtons = document.querySelectorAll('.page-btn');
    pageButtons.forEach(button => {
      if (parseInt(button.dataset.page) === currentPage) {
        button.classList.add('btn-primary');
      } else {
        button.classList.remove('btn-primary');
      }
    });
    
    // Update state of prev/next buttons
    const prevButton = document.querySelector('.pagination-btn:first-child');
    const nextButton = document.querySelector('.pagination-btn:last-child');
    
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  // Function to preview uploaded images
  function previewFileHandler(input, num) {
    const file = input.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById(`image-section-${num}`).src = e.target.result;
      }
      reader.readAsDataURL(file);
    }
  }

  // Function to validate the form before submission
  function validateForm() {
    const productName = document.querySelector('.product-name').value;
    const productPrice = document.querySelector('.product-price').value;
    const productLeftCount = document.querySelector('.product-left-count').value;
    
    if (!productName) {
      alert('Please enter a product name');
      return false;
    }
    
    if (!productPrice || productPrice <= 0) {
      alert('Please enter a valid product price');
      return false;
    }
    
    if (!productLeftCount || productLeftCount < 0) {
      alert('Please enter a valid quantity');
      return false;
    }
    
    return true;
  }

// Toggle form visibility and handle form interactions
document.addEventListener('DOMContentLoaded', function() {
const processBtnEl = document.getElementById('process-btn');
const cancelBtnEl = document.getElementById('cancel-btn');
const dishContainerEl = document.querySelector('.dish-container');
const productForm = document.querySelector('.dish-container');

// Hide the form initially
dishContainerEl.style.display = 'none';

// New Service button click handler - consolidated single handler
processBtnEl.addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  // Store the current page before showing form
  localStorage.setItem('currentProductPage', currentPage);
  
  // Show form and scroll to it
  dishContainerEl.style.display = 'flex';
  dishContainerEl.scrollIntoView({ behavior: 'smooth' });
});

// Cancel button click handler
cancelBtnEl.addEventListener('click', function(e) {
  e.preventDefault();
  e.stopPropagation();
  
  // Hide form
  dishContainerEl.style.display = 'none';
  
  // Reset form fields
  resetForm();
});

// Form submission handler
productForm.addEventListener('submit', function(e) {
  if (!validateForm()) {
    e.preventDefault();
  }
  // On successful validation, form will submit normally
});

// Helper function to reset form
function resetForm() {
  productForm.reset();
  // Reset image previews
  for (let i = 1; i <= 5; i++) {
    const imgElement = document.getElementById(`image-section-${i}`);
    if (imgElement) {
      imgElement.src = '/img/upload.svg';
    }
  }
}
});

// Restore pagination state after page load
window.addEventListener('load', function() {
const savedPage = localStorage.getItem('currentProductPage');
if (savedPage) {
  currentPage = parseInt(savedPage);
  localStorage.removeItem('currentProductPage');
  
  // Wait briefly for DOM to be fully ready
  setTimeout(() => {
    if (typeof showPage === 'function') {
      showPage(currentPage);
    }
  }, 100);
}
});



// Get current page URL
const currentLocation = window.location.pathname;

// Select all nav links
const navLinks = document.querySelectorAll(".nav-link");

// Loop through links and set active class
navLinks.forEach((link) => {
  if (link.getAttribute("href") === currentLocation) {
    link.classList.add("active");
  } else {
    link.classList.remove("active");
  }
});
