
const render = function ({id, burger, devour}) {
    return `
    <img src="https://cookieandkate.com/images/2013/05/sweet-potato-black-bean-veggie-burgers-1.jpg" alt="Veggie Burger" >
    <div>
        <text>EAT - DA - BURGER!!!</text>
    </div>

    /* TODO: add the loop here */
    <div class="form-group">
        <ul>
            <li>
                <p> <span class"label"> </span> ${id}</p>
                <p> <span class="label"> </span> ${burger}</p>
                
                <button class="devour">Devour it</button>
            </li>
        </ul>
    </div>

<div id=center> 
    <form id="form"> 
        <input type="text" id="burgerName" rows="4" cols="50"> </textarea>
                <button type="button" id="submitBtn" onclick="myFunction()">Submit</button>
                <p> Enter a burger you want to eat Click the "Submit" button</p>
    </form>
</div>

<div id= right>
    /* TODO : add loop */
    <p>${id} . ${burger}<p>
</div>
`
}

exports.render = render;