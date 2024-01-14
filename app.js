
const slider = document.getElementById('range');
const pageViews = document.getElementById('pageviews');
const price = document.getElementById('price');
const checkbox = document.getElementById('billing-checkbox');
const duration =document.getElementById("duration")


const min = slider.min
const max = slider.max
const value = slider.value

slider.style.background = `linear-gradient(to right, #A4F3EB 0%, #A4F3EB ${(value-min)/(max-min)*100}%, #ECF0FB ${(value-min)/(max-min)*100}%, #ECF0FB 100%)`

slider.oninput = function() {
  this.style.background = `linear-gradient(to right, #A4F3EB  0%, #A4F3EB ${(this.value-this.min)/(this.max-this.min)*100}%, #ECF0FB ${(this.value-this.min)/(this.max-this.min)*100}%, #ECF0FB 100%)`
};


const prices = {
  0: { pageViews: '10K PAGEVIEWS', price: 8 },
  25: { pageViews: '50K PAGEVIEWS', price: 12 },
  50: { pageViews: '100K PAGEVIEWS', price: 16 },
  75: { pageViews: '500K PAGEVIEWS', price: 24 },
  100: { pageViews: '1M PAGEVIEWS', price: 36 },
};

const updatePageViewsAndPrice = (value) => {
  const { pageViews: updatedPageViews, price: updatedPrice } = prices[value];
  pageViews.textContent = updatedPageViews;
  price.textContent = '$' + updatedPrice;
};

const applyDiscount = () => {
  const value = parseInt(slider.value);
  const discountedPrice = prices[value].price * 0.75;
  price.textContent = discountedPrice
};

const updatePrice = () => {
  const value = parseInt(slider.value);
  updatePageViewsAndPrice(value);
  if (checkbox.checked) {
    duration.textContent ="/year"
    applyDiscount();
  }else{
    duration.textContent ="/month"
  }
};

updatePrice();

slider.addEventListener('input', updatePrice);

checkbox.addEventListener('change', updatePrice);

