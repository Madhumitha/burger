
const render = function ({id, burger, devour}) {
    return `
    <img src="../public/assets/img/burger.jpg" alt="Veggie Burger" >
    <div>
        <text>EAT - DA - BURGER!!!</text>
    </div>

    <div id="left">
        <ul>
            <li>
                ${id} ${burger}

                <button class="devour" data-id= "${id}">Devour it</button>
            </li>
        </ul>
    </div>

    <div id=center> 
        <form class="create-form">
            
        <div class = "form-group"> 
            <input type="text" id="burgerName" name="Bug"> </textarea>
        </div>
        
        <button type="submit" id="submitBtn">Submit</button>
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