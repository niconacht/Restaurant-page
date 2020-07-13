function loadMenu() {
    console.log("works");
    const html = 
    `
    <table class="menu">
    <tr class="menu-heading">
    <td class="menu-title" colspan="2">Beers</td>
    </tr>
    <tr>
    <td class="dish">  
        Indian Pale Ale
    </td>
    <td class="price">
        3.00
    </td>
    </tr>
    <tr>
    <td class="dish">
        German Pale Ale 
    </td>
    <td class="price">
        3.20
    </td>
    </tr>
    <tr>
    <td class="dish">
        Water 
    </td>
    <td class="price">
        2.20
    </td>
    </tr>
    <tr>
    <td class="dish">
        Coke 
    </td>
    <td class="price">
        2.20
    </td>
    </tr>
    <tr class="menu-heading">
    <td class="menu-title" colspan="2">Dishes</td>
    </tr>
    <tr>
    <td class="dish">  
        Bread Salad 
    </td>
    <td class="price">
        7.00
    </td>
    </tr>
    <tr>
    <td class="dish">
        Mixed Pickles with Bread   
    </td>
    <td class="price">
        8.50
    </td>
    </tr>
    <tr>
    <td class="dish">
        Vegetarian Bread Plate 
    </td>
    <td class="price">
    7.50
    </td>
    </tr>
    <tr>
    <td class="dish">
        Rustic Bread Plate 
    </td>
    <td class="price">
        8.20
    </td>
    </tr>
    </table>
    `

    const main = document.getElementById("main-container");

    main.innerHTML = html;
}

export {loadMenu};