<!DOCTYPE html>
<html>

<head>
    <title>Street Food Itineraries</title>
    <style>
        body {
            background-image: url('map1.jpg');
            background-size: 25%; /* Reduce image size to 25% */
            background-repeat: no-repeat;
            background-position: center; /* Center the background image */
            font-family: Arial, sans-serif; /* Adding a fallback font */
        }

        h1 {
            text-align: center;
            color: red; /* Changing text color to red */
        }

        hr {
            border: none;
            border-top: 3px solid #db304d;
        }

        .container {
            display: flex;
            justify-content: center;
            margin-top: 20px;
            color: white; /* Ensuring the text is visible on the background */
        }

        .itinerary {
            border: 2px double #db304d;
            text-align: center;
            width: 40%;
            margin-right: 20px;
            padding: 10px;
            background-color: rgba(0, 0, 0, 0.5); /* Adding a semi-transparent background */
        }

        .itinerary img {
            width: 100%;
            max-width: 200px; /* Limit the maximum width of the image */
            height: auto;
            margin-bottom: 10px;
        }
    </style>
</head>

<body>
    <h1>Hello VietNam</h1>
    <hr>

    <div class="container">
        <div class="itinerary">
            <img src="saigon1.jpg" alt="Saigon Street Food">
            <h2>Saigon Street Food 5/6 - 5/8:</h2>
            <p>  <p>Escargot, Nam Vang White Noodles, Charcoal Grill Calf, Grilled duck Leg Yellow Noodles, Pha Lau, Lu Ky chicken egg noodles, Green Frogs, Pho Be, O Suu Beef Noodles, Caypot pho, 2 hours beef Noofles, 5g restaurant beer & Munchy, Teo Ti Tun buffet/lau & grill, com tam ma, Vu Hung pho, Chicken igoo grill pho, Thieu Ki Noodles, Linh Giang Rice restaurant</p>
        </div>

        <div class="itinerary">
            <img src="nhatrang.jpg" alt="Nha Trang Street Food">
            <h2>Nha Trang Street Food 5/9 - 5/12:</h2>
            <p>Bun Sua, Fish Paste patty Noodles, La E Chicken HotPot, Lobster Diving, Lobster Sashimi, Escagot, Organic Fruits</p>
        </div>
    </div>

    <div class="container">
        <div class="itinerary">
            <img src="hanoi.jpg" alt="Ha Noi Street Food">
            <h2>Ha Noi Street Food 5/13 - 5/14:</h2>
            <p>Charred grill ground pork Noodles, Screaming Noodles</p>
        </div>

        <div class="itinerary">
            <img src="sapa.jpg" alt="Sapa Street Food">
            <h2>Sapa Street Food 5/15-5/16:</h2>
            <p>Forest grill Chicken</p>
        </div>
    </div>

</body>

</html>