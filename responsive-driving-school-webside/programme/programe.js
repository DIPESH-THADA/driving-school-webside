const programeMenu = document.querySelectorAll('.programe')
const programeDetails = document.querySelector('.programeDetails')

const removeActiveClass = () => {
    programeMenu.forEach(button => {
        button.classList.remove('active-programe')
    })
}

programeMenu.forEach(programe => {
    programe.addEventListener('click', () => {
        removeActiveClass()
        if(programe.classList.contains('express')) {
            programe.classList.add('active-programe')
            programeDetails.innerHTML = `<div class="container programeDetail__container">
            <div class="programeDetail__left">
            <h2>regular package</h2>
                <p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas
                    that have carrots by using the grid-column-start property.
                    For example, grid-column-start: 3; will water the area starting at the 3rd vertical grid line, which
                    is another way of saying the 3rd vertical border from the left in the grid.</p>
                    <div class="programeDetails__images">
                        <img src="../assets/graduate4.jpg" alt="">
                        <img src="../assets/graduate6.jpg" alt="">
                    </div>
                
                <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                </div>

                <div class="programeDetail__right">
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                </div>
                </div>`

        } else if(programe.classList.contains('polishing')){
            programe.classList.add('active-programe')
            programeDetails.innerHTML = `
            <div class="container programeDetail__container">
            <div class="programeDetail__left">
            <h2>regular package</h2>
                <p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas
                    that have carrots by using the grid-column-start property.
                    For example, grid-column-start: 3; will water the area starting at the 3rd vertical grid line, which
                    is another way of saying the 3rd vertical border from the left in the grid.</p>
                    <div class="programeDetails__images">
                        <img src="../assets/candidate5.jpg" alt="">
                        <img src="../assets/graduate8.jpg" alt="">
                    </div>
                
                <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                </div>

                <div class="programeDetail__right">
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                </div>
                </div>`
        } else if(programe.classList.contains('regular')){
            programe.classList.add('active-programe')
            programeDetails.innerHTML = `
        <div class="container programeDetail__container">
            <div class="programeDetail__left">
                <h2>regular package</h2>
                <p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas
                    that have carrots by using the grid-column-start property.
                    For example, grid-column-start: 3; will water the area starting at the 3rd vertical grid line, which
                    is another way of saying the 3rd vertical border from the left in the grid.</p>
                    <div class="programeDetails__images">
                        <img src="../assets/graduate4.jpg" alt="">
                        <img src="../assets/graduate6.jpg" alt="">
                    </div>
                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>theory lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                    <a href="../contact/contact.html" class="btn btn-primary">Get Started</a>
            </div>
            <div class="programeDetail__right">
                <article>
                    <h4>regular without license</h4>
                    <div>
                        <h2>$199</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$250</h2>
                        <p>For  Student</p>
                    </div>
                </article>

                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>

                <article>
                    <h4>regular with primium license</h4>
                    <div>
                        <h2>$400</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$459</h2>
                        <p>For  Student</p>
                    </div>
                    <p>License will be ready in 2 weeks after completion</p>
                </article>
            </div>
        </div>`
        }  else if(programe.classList.contains('license')){
            programe.classList.add('active-programe')
            programeDetails.innerHTML = `
            <div class="container programeDetail__container">
            <div class="programeDetail__left">
            <h2>regular package</h2>
                <p>Welcome to Grid Garden, where you write CSS code to grow your carrot garden! Water only the areas
                    that have carrots by using the grid-column-start property.
                    For example, grid-column-start: 3; will water the area starting at the 3rd vertical grid line, which
                    is another way of saying the 3rd vertical border from the left in the grid.</p>
                    <div class="programeDetails__images">
                        <img src="../assets/candidate7.jpg" alt="">
                        <img src="../assets/graduate3.jpg" alt="">
                    </div>
                
                <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>

                    <h4>included in weekday streams</h4>
                    <p>Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, PostgreSQL, Web3 and DApps</p>
                    <article>
                        <h5>practical lesson</h5>
                        <p>The server is not ready to handle the request. Common causes are a server that is down for maintenance or that is overloaded. Note that together with this response, a user-friendly page explaining the problem should be sent.</p>
                    </article>
                </div>

                <div class="programeDetail__right">
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                <article>
                    <h4>regular with license</h4>
                    <div>
                        <h2>$299</h2>
                        <p>For non Student</p>
                    </div>

                    <div>
                        <h2>$349</h2>
                        <p>For  Student</p>
                    </div>
                </article>
                </div>
                </div>`
        }
    })
})