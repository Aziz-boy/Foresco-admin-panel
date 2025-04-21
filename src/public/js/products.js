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

  $("#process-btn").on("click", () => {
    $(".dish-container").slideToggle(500);
    $("#process-btn").css("display", "none");
  });

  $("#cancel-btn").on("click", () => {
    $(".dish-container").slideToggle(100);
    $("#process-btn").css("display", "flex");
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
