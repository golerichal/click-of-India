// ========================================
// INTRO SCREEN
// ========================================

const introScreen = document.querySelector(".intro-screen");

if (introScreen) {

    setTimeout(function () {

        introScreen.style.opacity = "0";

        setTimeout(function () {
            introScreen.style.display = "none";
        }, 1000);

    }, 5000);
}


// ========================================
// MAHARASHTRA - SEASON SELECTION
// ========================================

function showSeason(season) {

    const content = document.getElementById("season-content");

    if (season === "summer") {

        content.innerHTML = `
            <h2>☀️ Maharashtra in Summer</h2>

            <p class="season-intro">
                Escape the summer heat with Maharashtra's beautiful hill stations.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/mahabaleshwar.jpg" alt="Mahabaleshwar">
                    <h3>Mahabaleshwar</h3>
                    <p>
                        Enjoy cool mountain views, beautiful valleys,
                        viewpoints and the famous strawberries.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/panchgani.jpg" alt="Panchgani">
                    <h3>Panchgani</h3>
                    <p>
                        Relax among green hills, scenic viewpoints
                        and peaceful mountain landscapes.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Matheran.jpg" alt="Matheran">
                    <h3>Matheran</h3>
                    <p>
                        Explore a peaceful hill station surrounded by
                        forests, viewpoints and fresh mountain air.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "monsoon") {

        content.innerHTML = `
            <h2>🌧️ Maharashtra in Monsoon</h2>

            <p class="season-intro">
                Experience Maharashtra's green hills, waterfalls
                and refreshing monsoon beauty.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Lonavala.jpg" alt="Lonavala">
                    <h3>Lonavala</h3>
                    <p>
                        Enjoy misty mountains, waterfalls, lush green
                        valleys and refreshing monsoon views.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Bhimashankar.jpg" alt="Bhimashankar">
                    <h3>Bhimashankar</h3>
                    <p>
                        Explore beautiful forests, waterfalls and
                        peaceful natural surroundings during the monsoon.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Malshejghat.jpg" alt="Malshej Ghat">
                    <h3>Malshej Ghat</h3>
                    <p>
                        Discover misty mountains, waterfalls and
                        spectacular green landscapes during the rainy season.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "winter") {

        content.innerHTML = `
            <h2>❄️ Maharashtra in Winter</h2>

            <p class="season-intro">
                Enjoy pleasant weather and discover Maharashtra's
                historic, scenic and wildlife destinations.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Pune.jpg" alt="Pune">
                    <h3>Pune</h3>
                    <p>
                        Explore historic landmarks, vibrant culture
                        and pleasant winter weather in the city of Pune.
                    </p>
                </div>

                                <div class="destination-card">
                    <img src="images/Nashik.jpg" alt="Nashik">
                    <h3>Nashik</h3>
                    <p>
                        Discover beautiful vineyards, scenic surroundings
                        and peaceful winter experiences.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Tadoba.jpg" alt="Tadoba">
                    <h3>Tadoba</h3>
                    <p>
                        Experience Maharashtra's wildlife, forests and
                        exciting safari adventures during winter.
                    </p>
                </div>

            </div>
        `;

    }
}


// ========================================
// RAJASTHAN - SEASON SELECTION
// ========================================

function showRajasthanSeason(season) {

    const content =
        document.getElementById("rajasthan-season-content");

    if (season === "summer") {

        content.innerHTML = `
            <h2>☀️ Rajasthan in Summer</h2>

            <p class="season-intro">
                Escape the heat and discover Rajasthan's beautiful
                hill stations, forts and royal landscapes.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Mountabu.jpg" alt="Mount Abu">
                    <h3>Mount Abu</h3>
                    <p>
                        Enjoy cooler weather, beautiful lakes,
                        scenic viewpoints and peaceful mountain landscapes.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/kumbhalgarh.jpg" alt="Kumbhalgarh">
                    <h3>Kumbhalgarh</h3>
                    <p>
                        Explore the magnificent Kumbhalgarh Fort,
                        historic architecture and the surrounding Aravalli hills.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/ranakpur.jpg" alt="Ranakpur">
                    <h3>Ranakpur</h3>
                    <p>
                        Discover the beautiful Ranakpur Jain Temple,
                        peaceful surroundings and scenic Aravalli hills.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "monsoon") {

        content.innerHTML = `
            <h2>🌧️ Rajasthan in Monsoon</h2>

            <p class="season-intro">
                Experience Rajasthan's greener and refreshing side.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/udaipur.jpg" alt="Udaipur">
                    <h3>Udaipur</h3>
                    <p>
                        Enjoy beautiful lakes, green surroundings
                        and the romantic atmosphere of Udaipur.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/bundi.jpg" alt="Bundi">
                    <h3>Bundi</h3>
                    <p>
                        Discover historic forts, palaces and beautiful
                        green landscapes during the monsoon.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Jhalawar.jpg" alt="Jhalawar">
                    <h3>Jhalawar</h3>
                    <p>
                        Explore greener landscapes, waterfalls and
                        peaceful natural surroundings.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "winter") {

        content.innerHTML = `
            <h2>❄️ Rajasthan in Winter</h2>

            <p class="season-intro">
                Explore Rajasthan's forts, deserts, palaces and
                colorful culture in pleasant winter weather.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Jaisalmer.jpg" alt="Jaisalmer">
                    <h3>Jaisalmer</h3>
                    <p>
                        Experience the golden Thar Desert, magnificent
                        forts, sand dunes and exciting desert adventures.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Jaipur.jpg" alt="Jaipur">
                    <h3>Jaipur</h3>
                    <p>
                        Explore magnificent forts, royal palaces
                        and the famous Pink City.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Jodhpur.jpg" alt="Jodhpur">
                    <h3>Jodhpur</h3>
                    <p>
                        Discover the magnificent Mehrangarh Fort
                        and the beautiful Blue City.
                    </p>
                </div>

            </div>
        `;
    }
}

// ========================================
// KERALA - SEASON SELECTION
// ========================================

function showKeralaSeason(season) {

    const content =
        document.getElementById("kerala-season-content");

    if (season === "summer") {

        content.innerHTML = `
            <h2>☀️ Kerala in Summer</h2>

            <p class="season-intro">
                Escape into Kerala's refreshing hills, forests
                and peaceful natural landscapes.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Munnar.jpg" alt="Munnar">
                    <h3>Munnar</h3>
                    <p>
                        Explore beautiful tea plantations, misty hills
                        and refreshing mountain landscapes.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Wayanad.jpg" alt="Wayanad">
                    <h3>Wayanad</h3>
                    <p>
                        Discover green hills, forests, waterfalls
                        and peaceful natural surroundings.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Thekkady.jpg" alt="Thekkady">
                    <h3>Thekkady</h3>
                    <p>
                        Experience forests, wildlife and the beautiful
                        natural surroundings of Periyar.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "monsoon") {

        content.innerHTML = `
            <h2>🌧️ Kerala in Monsoon</h2>

            <p class="season-intro">
                Experience Kerala's lush greenery, powerful waterfalls
                and peaceful backwaters during the monsoon.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Alappuzha.jpg" alt="Alappuzha">
                    <h3>Alappuzha</h3>
                    <p>
                        Cruise through beautiful backwaters and enjoy
                        peaceful houseboat experiences.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Athirappilly.jpg" alt="Athirappilly">
                    <h3>Athirappilly</h3>
                    <p>
                        Witness magnificent waterfalls surrounded by
                        lush green forests and monsoon beauty.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Kumarakom.jpg" alt="Kumarakom">
                    <h3>Kumarakom</h3>
                    <p>
                        Relax among peaceful backwaters, coconut trees
                        and beautiful rainy-season landscapes.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "winter") {

        content.innerHTML = `
            <h2>❄️ Kerala in Winter</h2>

            <p class="season-intro">
                Enjoy Kerala's pleasant winter weather, beautiful
                beaches, heritage and coastal landscapes.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Kochi.jpg" alt="Kochi">
                    <h3>Kochi</h3>
                    <p>
                        Explore historic Fort Kochi, cultural landmarks
                        and the famous Chinese fishing nets.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Varkala.jpg" alt="Varkala">
                    <h3>Varkala</h3>
                    <p>
                        Enjoy spectacular cliffs, beautiful beaches
                        and stunning views of the Arabian Sea.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Kovalam.jpg" alt="Kovalam">
                    <h3>Kovalam</h3>
                    <p>
                        Relax on beautiful beaches and enjoy the
                        famous Kovalam Lighthouse and coastal scenery.
                    </p>
                </div>

            </div>
        `;
    }
}

// ========================================
// GOA - SEASON SELECTION
// ========================================

function showGoaSeason(season) {

    const content =
        document.getElementById("goa-season-content");

    if (season === "summer") {

        content.innerHTML = `
            <h2>☀️ Goa in Summer</h2>

            <p class="season-intro">
                Enjoy Goa's sunny beaches, beautiful waterfalls
                and vibrant coastal landscapes.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Panaji.jpg" alt="Panaji">
                    <h3>Panaji</h3>
                    <p>
                        Explore colorful Portuguese-style buildings,
                        historic landmarks and the beautiful Mandovi River.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Dudhsagar.jpg" alt="Dudhsagar Falls">
                    <h3>Dudhsagar Falls</h3>
                    <p>
                        Discover the spectacular waterfall surrounded
                        by the lush forests of the Western Ghats.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Palolem.jpg" alt="Palolem Beach">
                    <h3>Palolem Beach</h3>
                    <p>
                        Relax on a beautiful beach surrounded by
                        palm trees, clear water and peaceful coastal scenery.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "monsoon") {

        content.innerHTML = `
            <h2>🌧️ Goa in Monsoon</h2>

            <p class="season-intro">
                Experience Goa's lush greenery, waterfalls,
                misty hills and peaceful natural beauty.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Chorla.jpg" alt="Chorla Ghat">
                    <h3>Chorla Ghat</h3>
                    <p>
                        Explore misty green hills, forests and
                        beautiful monsoon landscapes.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Arvalem.jpg" alt="Arvalem Waterfalls">
                    <h3>Arvalem Waterfalls</h3>
                    <p>
                        Enjoy the beauty of a refreshing waterfall
                        surrounded by lush green scenery.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/SalimAli.jpg" alt="Salim Ali Bird Sanctuary">
                    <h3>Salim Ali Bird Sanctuary</h3>
                    <p>
                        Discover peaceful mangroves, natural surroundings
                        and beautiful birdlife during the monsoon.
                    </p>
                </div>

            </div>
        `;

    } else if (season === "winter") {

        content.innerHTML = `
            <h2>❄️ Goa in Winter</h2>

            <p class="season-intro">
                Enjoy Goa's pleasant winter weather, beautiful beaches,
                historic heritage and peaceful coastal landscapes.
            </p>

            <div class="destination-cards">

                <div class="destination-card">
                    <img src="images/Baga.jpg" alt="Baga Beach">
                    <h3>Baga Beach</h3>
                    <p>
                        Experience Goa's lively beach atmosphere,
                        palm trees and beautiful coastal sunsets.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/OldGoa.jpg" alt="Old Goa">
                    <h3>Old Goa</h3>
                    <p>
                        Explore historic churches, Portuguese heritage
                        and the fascinating history of Old Goa.
                    </p>
                </div>

                <div class="destination-card">
                    <img src="images/Agonda.jpg" alt="Agonda Beach">
                    <h3>Agonda Beach</h3>
                    <p>
                        Relax on a peaceful beach surrounded by
                        palm trees and beautiful coastal scenery.
                    </p>
                </div>

            </div>
        `;
    }
}