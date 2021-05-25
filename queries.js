const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});

const insertloan_detail = (request, response) => {
const {id, daysdelinquent, expectedpaymentamountinpennies, interestrate, maturitydate, nextpaymentdate, originalprincipalinpennies, originationdate, outstandingprincipalinpennies, loan_id, paymentamountinpennies, maximumcreditinpennies, combinedloantovalueratios, creditlineusedpercent, referenceid} = request.body
  pool.query( "INSERT INTO cbanc2.loan_detail (id, daysdelinquent, expectedpaymentamountinpennies, interestrate, maturitydate, nextpaymentdate, originalprincipalinpennies, originationdate, outstandingprincipalinpennies, loan_id, paymentamountinpennies, maximumcreditinpennies, combinedloantovalueratios, creditlineusedpercent, referenceid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)",[id, daysdelinquent, expectedpaymentamountinpennies, interestrate, maturitydate, nextpaymentdate, originalprincipalinpennies, originationdate, outstandingprincipalinpennies, loan_id, paymentamountinpennies, maximumcreditinpennies, combinedloantovalueratios, creditlineusedpercent, referenceid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in loan_detail')
  })
}



module.exports = {
insertloan_detail
}
