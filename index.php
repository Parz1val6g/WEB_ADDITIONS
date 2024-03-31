<html>

<head>
    <script src="./file.js"></script>
    <style>
        body {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100vh;
            color: red;
        }

        #a {
            height: 75%;
            width: 100%;
            background-color: black;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #b {
            width: 75%;
            height: 100%;
            background-color: #2b2b2b;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
        }

        #b i {
            font-size: 2vw;
        }

        #c {
            background-color: #4f4f4f;
            width: 75%;
            height: 75%;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }

        .project {
            width: 25%;
            height: 75%;
            background-color: #858585;
            border: red solid 1px;
        }
    </style>
</head>

<body>
    <div id="a">
        <div id="b">
            <i class="fa-solid fa-chevron-left" id="left_arrow"></i>
            <div id="c">
            </div>
            <i class="fa-solid fa-chevron-right" id="right_arrow"></i>
        </div>
    </div>


    <script src="https://kit.fontawesome.com/4c3113433e.js" crossorigin="anonymous"></script>
</body>

</html>