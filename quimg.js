import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message: "Type a url: ",
        name: "URL"
    }
  ])
  .then((answers) => {
    const url = answers.URL;
      let qrmap = qr
        .imageSync(url, { type: "png" });
       fs.writeFileSync('qr_img.png', qrmap);
  });


