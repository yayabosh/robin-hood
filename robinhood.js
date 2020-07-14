'use strict';
// Parse emails from mailing list
const csvsync = require('csvsync')
const fs = require('fs')
const csv = fs.readFileSync('emails.csv')
const data = csvsync.parse(csv)

// Send emails
const nodemailer = require('nodemailer')

// Username and password info contained in local file
const { auth } = require('./secrets.js')
const USER = auth.user
const PASS = auth.pass

// User information
const NAME = 'Marisa Robertson'
const CITY = 'Cupertino'
const STATE = 'California'
const ADDRESS = 'P. Sherman 42 Wallaby Way, Sydney, Australia'

const email = async () => {
    let transporter = nodemailer.createTransport({
        pool: true,
        service: 'gmail',
        maxConnections: 1,
        maxMessages: 100,
        auth: {
            user: USER,
            pass: PASS
        }
    })

    let message = (college, email) => ({
        from: USER,
        to: email,
        subject: `Request from a senior hoping to learn more about ${college}`,
        text:
`Hello,

My name is ${NAME} and I'm a rising senior from ${CITY}, ${STATE}.
I plan on applying to ${college} this fall.

As I continue to research the school, I was wondering if there was any
way you could send me some merchandise or gear! I'd really appreciate it. :)

My address is:
${ADDRESS}

I look forward to applying soon!

Thank you,
${NAME}`
    })

    let send = async () => {
        for (let i = 1; i <= 400; i++) {
            transporter.sendMail(message(data[i][0], data[i][1]), (error, info) => {
                console.log(error ? error : `Email #${i} sent to ${data[i][1]}: ${info.response}`)
            })
            await new Promise(r => setTimeout(r, 2000))
        }
    }
    send()
}

email().catch(console.error)