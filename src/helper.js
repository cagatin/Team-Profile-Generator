// Helper functions to generate HTML template
function generateTemplate(managerCard, engineerCard, internCard) {
    let htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <!-- Add Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
            integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!-- Google Font -->
        <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&family=Roboto:wght@900&family=Rubik:wght@300&display=swap"
            rel="stylesheet">
        <!-- Reset Stylesheet -->
        <link rel="stylesheet" href="reset.css">
        <!-- Custom CSS File -->
        <link rel="stylesheet" href="styles.css">
    </head>
    
    <body>
        <header>
            <div class="jumbotron jumbotron-fluid">
                <div class="container" id="hero">
                    <h1 class="display-4">Team Information</h1>
                </div>
            </div>
        </header>
        <main class="contianer-fluid">
            <div class="container-fluid d-flex flex-column flex-wrap flex-sm-column flex-md-row flex-lg-row align-items-center justify-content-center justify-content-md-around justify-content-lg-around"
                id="card-container">
                ${managerCard}
                ${engineerCard}
                ${internCard}
            </div>
        </main>
    
        <!-- Boostrap Script -->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `
    return htmlTemplate;
}

module.exports = generateTemplate;