
// INISIALIZE SWIPER.JS
var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    slidesPreview: 1,
    spaceBetween: 50,
    breakpoints: {
      599: {
        slidesPreview: 3,
      },
    },
  });

  // INISIALIZE ANIMATE ON SCROLL
  






const packageButtons = document.querySelectorAll('.package__buttons button')
const packageTableBody = document.querySelector('.package tbody')

const removeActiveClass = () => {
    packageButtons.forEach(button => {
        button.classList.remove('active')
    })
}

packageButtons.forEach(button => {
    button.addEventListener('click', () => {
        removeActiveClass()
        if(button.classList.contains('student')) {
            button.classList.add('active')
            packageTableBody.innerHTML = `<tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>260</td>
                    </tr>
                    <tr>
                        <td>Regular with primium license</td>
                        <td>6 weeks</td>
                        <td>360</td>
                    </tr>
                    <tr>`

        } else if(button.classList.contains('non-student')){
            button.classList.add('active')
            packageTableBody.innerHTML = `
            <tr>
                        <td>Express without license</td>
                        <td>3 weeks</td>
                        <td>230</td>
                    </tr>
                    <tr>
                        <td>Express with standard license</td>
                        <td>3 weeks</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Express with primium license</td>
                        <td>3 weeks</td>
                        <td>460</td><tr>
                        <th>Packages</th>
                        <th>Duration</th>
                        <th>Price ($)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Regular with standard license</td>
                        <td>6 weeks</td>
                        <td>260</td>
                    </tr>
                    <tr>
                        <td>Regular with primium license</td>
                        <td>6 weeks</td>
                        <td>360</td>
                    </tr>
                    <tr>
                        <td>Express without license</td>
                        <td>3 weeks</td>
                        <td>230</td>
                    </tr>
                    <tr>
                        <td>Express with standard license</td>
                        <td>3 weeks</td>
                        <td>400</td>
                    </tr>
                    <tr>
                        <td>Express with primium license</td>
                        <td>3 weeks</td>
                        <td>460</td>
                    </tr>
                    <tr>
                        <td>Polishing without license</td>
                        <td>2 - 4 weeks</td>
                        <td>160</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>2 - 4 weeks</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Polishing with primium license</td>
                        <td>2 - 4 weeks</td>
                        <td>230</td>
                    </tr>
                    </tr>`
        } else if(button.classList.contains('license')){
            button.classList.add('active')
            packageTableBody.innerHTML = `
        <tr>
                        <td>Polishing without license</td>
                        <td>2 - 4 weeks</td>
                        <td>160</td>
                    </tr>
                    <tr>
                        <td>Polishing with standard license</td>
                        <td>2 - 4 weeks</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>Polishing with primium license</td>
                        <td>2 - 4 weeks</td>
                        <td>230</td>
                    </tr>`
        }  
    })
})


