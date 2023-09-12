const basicInfo = document.getElementById("basic-info");
const shopifyInfo = document.getElementById("shopify-info");
const advancedInfo = document.getElementById('advanced-info');

function displayBasic() {
    basicInfo.style.display = 'block';
    shopifyInfo.style.display = 'none';
    advancedInfo.style.display = 'none';
}

function displayShopify() {
    basicInfo.style.display = 'none';
    shopifyInfo.style.display = 'block';
    advancedInfo.style.display = 'none';
}

function displayAdvanced() {
    basicInfo.style.display = 'none';
    shopifyInfo.style.display = 'none';
    advancedInfo.style.display = 'block';

}