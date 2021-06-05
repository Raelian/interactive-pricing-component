/* Input slider color bar */
const slider = document.querySelector(".main__input-slider");
const min = slider.min;
const max = slider.max;
const value = slider.value;

/* Slider default on pageloading */
slider.style.background = 
    `linear-gradient(to right, 
    #A5F3EB 0%, #A5F3EB ${(value-min)/(max-min)*100}%, 
    #EAEEFB ${(value-min)/(max-min)*100}%, #EAEEFB 100%)`;

/* Pageviews, price & month/year output */
const viewsOutput = document.querySelector(".main__pageviews-number");
const priceOutput = document.querySelector(".main__price-number");
const monthOutput = document.querySelector(".main__price--month");
const yearOutput = document.querySelector(".main__price--year");


/* Discount switch & label */
const discountSwitch = document.querySelector(".main__billing-switch");
const discountLabel = document.querySelector(".main__billing-label"); 

/* Discount switch function */
discountSwitch.addEventListener('change', function() {
    if (this.checked) {
        discountSwitch.style.left = '22px';
        discountLabel.style.backgroundColor = 'hsl(174, 77%, 80%)';
    } else {
        discountSwitch.style.left = '4px';
        discountLabel.style.backgroundColor = 'hsl(223, 50%, 87%)';
    }
    slider.oninput();
});

/* Slider function */
slider.oninput = function() {
    /* Slider bar color change */
    this.style.background = 
    `linear-gradient(to right, 
    #A5F3EB 0%, #A5F3EB ${(this.value-this.min)/(this.max-this.min)*100}%, 
    #EAEEFB ${(this.value-this.min)/(this.max-this.min)*100}%, #EAEEFB 100%)`;

    /* Pageviews & monthly price output */
    const array = [
        {
            pageviews: '10K',
            price: 8.00
        },
        {
            pageviews: '50K',
            price: 12.00
        },
        {
            pageviews: '100K',
            price: 16.00
        },
        {
            pageviews: '500K',
            price: 24.00
        },
        {
            pageviews: '1M',
            price: 36.00
        }
    ];
    
    const updatePrice = array[this.value].price;
    viewsOutput.value = array[this.value].pageviews;

    /* Discount check & month/year switch*/
    if (discountSwitch.checked === false ) {
        priceOutput.value = '$' + updatePrice.toFixed(2);
        slider.setAttribute("aria-valuetext", priceOutput.value + " dollars a month for " + viewsOutput.value + " pageviews");
        console.log(slider.attributes);
        monthOutput.style.display = 'block';
        yearOutput.style.display = 'none';
    } else if (discountSwitch.checked === true) {
        priceOutput.value = '$' + ((updatePrice - (25 / 100) * updatePrice) * 12).toFixed(2);
        slider.setAttribute("aria-valuetext", priceOutput.value + " dollars a year for " + viewsOutput.value + " pageviews");
        monthOutput.style.display = 'none';
        yearOutput.style.display = 'block';
    }
};