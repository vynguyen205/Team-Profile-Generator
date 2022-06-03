const createEmployee = require("./createEmployee");
const fs = require("fs");
const path = require("path");


function startHtml (allEmployees) {
    const html =  /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Employee Directory</title>
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="jumbotron">
                        <h1 class="display-4">Employee Directory</h1>
                    </div>
                </div>
            </div>
            <div class="row">
                ${allEmployees.map(employee => /*html*/`
                    <div class="col-3">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${employee.name}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                                <p class="card-text">${employee.id}</p>
                                <a href="#" class="card-text">${employee.email}</a>
                                <p class="card-text">${employee.officeNumber || employee.github || employee.school}</p>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </body>
    </html>`

    fs.writeFileSync(path.join(__dirname, "../dist/index.html"), html, "utf8");
}



module.exports.startHtml =  startHtml ;