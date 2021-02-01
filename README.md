# robin-hood

### How do I use this?

- Download this repository and open it in the IDE or text editor of your choice.
- If you haven't already, install [Node.js](https://nodejs.org/en/download/).
- Use npm to install [csvsync](https://www.npmjs.com/package/csvsync) and [nodemailer](https://www.npmjs.com/package/nodemailer).
  - This script uses Gmail to send emails, so you might have to [allow less secure apps](https://www.google.com/settings/security/lesssecureapps) to allow nodemailer to send emails from your account.
- Fill in your email username and password in `secrets.js`.
- Fill out the information you want to be sent in your email in `robinhood.js`. If you just want to use the default email message, there's already some fields available to be filled out, like `NAME`, `CITY`, and more.
- Run `robinhood.js`! A message will print to the console when each email sends.
  - The script will send emails to the first 400 colleges in `emails.csv`. If you want to send emails to another set of colleges, adjust the iterators in the for loop to match the rows contained in `emails.csv` for your set of colleges.

### Who does this send emails to?

Check out `emails.csv` for the full list of 1717 colleges! Note that Gmail limits you to sending around 500 emails per day, so this script only sends 400 emails at a time.


Enjoy your merchandise and be sure to [donate any other clothing](https://www.valuevillage.com/donate) you receive!
