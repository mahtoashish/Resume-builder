const dynamicResume =(options,themeOptions)=>{  //here by using the option we are setting the content dyanmically
    return `<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>Resume Builder</title>

    <style>
        .resume{
            width: 6.1in;
            height: 7.86in;
        }

        .box
        {
            background-color: ${themeOptions.wholeBodyColor};
            width: 100%;
            height: 100%;
        }
        .left-side{
            color: ${themeOptions.leftTextColor};
            width: 33%;
            height: 100%;
            background-color: ${themeOptions.leftBackgroundColor};
        }
        .right-side{
            height: 100%;
            width: 65%;
            color: ${themeOptions.rightTextColor};

        }
        .name{
            font-size: 1.2rem;
            
        }
        .profile-image
        {
            width: 90%;
            margin-left: 5%;
            margin-top: 5%;

        }
        
        .profile-image img
        {
            border-radius: 50%;
            
        }
        .heading-text{
            font-size: 0.9rem;

        }
        .para .per-info{
            font-size: 0.7rem !improtant;
        }

        .about .para{
            width: 93%;
        }
        .key-skill li{
            font-size:0.7rem ;
        }
        
        </style>
</head>

<body>
    <div class=" resume shadow d flex align-item-center justify-content-center">
        <div class="box">
            <div class="left-side d-inline-block">
                <div class="profile-image"><img class="img-fluid"
                        src="https://pbs.twimg.com/media/F-vaHLUbkAAlhVC?format=jpg&name=large" alt="">
                </div>
                <div class="contact ml-2 mt-2">
                    <div class="heading-text text-uppercase">Contact</div>
                    <p class="para mb-1">
                        H.no.12,kalka ji ,NewDelhi <br>
                        ${options.phone} <br>
                        ${options.email}
                    </p>
                </div>
                <div class="expert ml-2 mt-2">
                    <div class="heading-text text-uppercase">Expertise Area </div>
                    <p class="para mb-1">
                        ${options.exp_1} <br>
                        ${options.exp_2} <br>
                       ${options.exp_3} <br>
                      
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text text-uppercase">Skill </div>
                    <p class="para mb-1">
                       ${options.skill} 
                    </p>
                </div>

                <div class="skill ml-2 mt-2">
                    <div class="heading-text text-uppercase">Hobbies </div>
                    <p class="para mb-1">
                        Photography <br>
                        Babmintion
                    </p>
                </div>
            </div>


            <!-- ***************RIGHT SIDE*************** -->
            <div class="right-side d-inline-block m-0 p-0 align-top">
                <h2 class="name text-uppercase mt-3 my-2">
                    ${options.name}
                </h2>
                <div class="contact ml-3 mt-3">
                    <div class="heading-text text-uppercase">About me</div>
                    <p class="para mb-1">
                       ${options.about} 
                    </p>
                </div>

                <div class="personal ml-3 mt-3">
                    <div class="heading-text text-uppercase">Personal info</div>
                    <table class="per-info">
                        <tbody>

                            <tr class="border">
                                <td>Fathers name</td>
                                <td>${options.f_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Mother'<small></small> name</td>
                                <td>${options.m_name}</td>
                            </tr>
                            <tr class="border">
                                <td>Daet of Birth</td>
                                <td>${options.dob}</td>
                            </tr>
                            <tr class="border">
                                <td>Parmanent addeess</td>
                                <td>Faridabad Haryana</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="education ml-3 mt-3">
                    <div class="heading-text text-uppercase">Educational info</div>
                    <table class="per-info">
                        <tbody>

                            <tr class="border">
                                <td>2024</td>
                                <td>Bachelor of Technology <br>
                                    Computer Science and Engineering <br>
                                    University of Delhi
                                </td>
                            </tr>
                            <tr class="border">
                                <td>2020</td>
                                <td>Intermediate <br>
                                    school of excelinece
                                </td>
                            </tr>

                            <tr class="border">
                                <td>2018</td>
                                <td>Metric <br>
                                    school of excellinece
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="achievements ml-3 mt-3">
                    <div class="heading-text text-uppercase">Achievements</div>
                    <ul class="">
                        <li>Hackethon</li>
                        <li>Quiz cpmeption</li>
                        <li>vollyball chapion</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>


    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"></script>

    <!-- Option 2: Separate Popper and Bootstrap JS -->
    <!--
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.min.js" integrity="sha384-+sLIOodYLS7CIrQpBjl+C7nPvqq+FbNUBDunl/OZv93DB7Ln/533i8e/mZXLi/P+" crossorigin="anonymous"></script>
    -->
</body>

</html>`;
}

module.exports=dynamicResume;